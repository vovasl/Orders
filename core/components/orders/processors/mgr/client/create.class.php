<?php

class ordersClientCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersClient';
    public $classKey = 'ordersClient';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_client_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_client_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersClientCreateProcessor';