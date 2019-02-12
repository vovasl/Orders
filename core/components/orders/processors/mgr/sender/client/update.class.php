<?php

class ordersSenderClientUpdateProcessor extends modObjectUpdateProcessor
{
    public $objectType = 'ordersSenderClient';
    public $classKey = 'ordersSenderClient';
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
        $sender = (int)$this->getProperty('sender');
        if (empty($id)) {
            return $this->modx->lexicon('orders_client_err_ns');
        }
        else if (empty($sender)) {
            return $this->modx->lexicon('orders_sender_err_ns');
        }


        return parent::beforeSet();
    }
}

return 'ordersSenderClientUpdateProcessor';
