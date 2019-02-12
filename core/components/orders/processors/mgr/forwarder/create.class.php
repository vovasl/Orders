<?php

class ordersForwarderCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersForwarder';
    public $classKey = 'ordersForwarder';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_forwarder_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_forwarder_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersForwarderCreateProcessor';