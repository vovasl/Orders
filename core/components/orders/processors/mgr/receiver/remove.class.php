<?php

class ordersReceiverRemoveProcessor extends modObjectProcessor
{
    public $objectType = 'ordersReceiver';
    public $classKey = 'ordersReceiver';
    public $languageTopics = ['orders'];
    //public $permission = 'remove';


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
            return $this->failure($this->modx->lexicon('orders_receiver_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var ordersItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('orders_receiver_err_nf'));
            }

            $object->remove();
        }

        return $this->success();
    }

}

return 'ordersReceiverRemoveProcessor';