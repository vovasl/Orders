<?php

class ordersContainerTypeCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersContainerType';
    public $classKey = 'ordersContainerType';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_container_type_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_container_type_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersContainerTypeCreateProcessor';