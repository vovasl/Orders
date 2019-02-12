<?php

class ordersCompanyWarehouseCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersCompanyWarehouse';
    public $classKey = 'ordersCompanyWarehouse';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_company_warehouse_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_company_warehouse_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersCompanyWarehouseCreateProcessor';