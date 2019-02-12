<?php

class ordersClientSenderUpdateProcessor extends modObjectUpdateProcessor
{
    public $objectType = 'ordersClientSender';
    public $classKey = 'ordersClientSender';
    public $languageTopics = ['orders'];
    //public $permission = 'save';


    /**
     * We doing special check of permission
     * because of our objects is not an instances of modAccessibleObject
     *
     * @return bool|string
     */
    public function beforeSave()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $id = (int)$this->getProperty('id');
        $client = (int)$this->getProperty('client');
        if (empty($id)) {
            return $this->modx->lexicon('orders_sender_err_ns');
        }
        else if (empty($client)) {
            return $this->modx->lexicon('orders_client_err_ns');
        }

        $field = 'sender';
        $value = trim($this->getProperty($field));

        if (empty($value)) {
            $this->modx->error->addField($field, $this->modx->lexicon('orders_sender_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['client' => $client, $field => $value, 'id:!=' => $id])) {
            $this->modx->error->addField($field, $this->modx->lexicon('orders_sender_client_err_ae'));
        }

        return parent::beforeSet();
    }
}

return 'ordersClientSenderUpdateProcessor';
