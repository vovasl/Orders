<?php

class ordersDeliveryTermReceiverCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersDeliveryTermReceiver';
    public $classKey = 'ordersDeliveryTermReceiver';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_delivery_term_receiver_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_delivery_term_receiver_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersDeliveryTermReceiverCreateProcessor';