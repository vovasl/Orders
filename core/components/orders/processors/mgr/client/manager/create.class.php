<?php

class ordersClientManagerProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersClientManager';
    public $classKey = 'ordersClientManager';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */

    public function beforeSet()
    {
        $field = 'manager';
        $value = trim($this->getProperty($field));
        $client = trim($this->getProperty('client'));
        if (empty($value)) {
            $this->modx->error->addField($field, $this->modx->lexicon('orders_manager_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['client' => $client, $field => $value])) {
            $this->modx->error->addField($field, $this->modx->lexicon('orders_manager_client_err_ae'));
        }

        return parent::beforeSet();
    }

    public function beforeSave()
    {

        return parent::beforeSave();
    }


}

return 'ordersClientManagerProcessor';