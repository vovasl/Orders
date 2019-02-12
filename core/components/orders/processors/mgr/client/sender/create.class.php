<?php

class ordersClientSenderProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersClientSender';
    public $classKey = 'ordersClientSender';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */

    public function beforeSet()
    {
        $field = 'sender';
        $value = trim($this->getProperty($field));
        $client = trim($this->getProperty('client'));
        if (empty($value)) {
            $this->modx->error->addField($field, $this->modx->lexicon('orders_manager_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['client' => $client, $field => $value])) {
            $this->modx->error->addField($field, $this->modx->lexicon('orders_sender_client_err_ae'));
        }

        return parent::beforeSet();
    }

    public function beforeSave()
    {
        //$this->object->set('sender', $this->getProperty('sender_id'));

        return parent::beforeSave();
    }


}

return 'ordersClientSenderProcessor';