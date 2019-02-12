<?php

require_once (dirname(__FILE__).'/mail.class.php');

class ordersItemDisableProcessor extends modObjectProcessor
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

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('orders_item_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var ordersItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('orders_item_err_nf'));
            }

            $object->set('important', true);
            $object->save();

            $this->email = new itemMail($this->modx, $id);
            $this->email->orderEmail();
        }
        return $this->success();

    }

}

return 'ordersItemDisableProcessor';
