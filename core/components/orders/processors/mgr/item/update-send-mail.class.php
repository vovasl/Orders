<?php

require_once (dirname(__FILE__).'/mail.class.php');

class ordersItemUpdateSendMailProcessor extends modObjectProcessor
{
    public $objectType = 'ordersItem';
    public $classKey = 'ordersItem';
    public $languageTopics = ['orders'];

    public $email;
    //public $permission = 'save';


    /**
     * @return array|string
     */
    public function process()
    {

        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $id = $this->getProperty('orderID');

        $this->email = new itemMail($this->modx, $id);
        $this->email->orderEmail();

        return $this->success();

    }

}

return 'ordersItemUpdateSendMailProcessor';
