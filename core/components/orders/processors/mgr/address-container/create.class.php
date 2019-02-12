<?php

class ordersAddressContainerCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersAddressContainer';
    public $classKey = 'ordersAddressContainer';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_address_container_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_address_container_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersAddressContainerCreateProcessor';