<?php

class ordersSaleNoteRemoveProcessor extends modObjectProcessor
{
    public $objectType = 'ordersSaleNote';
    public $classKey = 'ordersSaleNote';
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
            return $this->failure($this->modx->lexicon('orders_sale_note_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var ordersItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('orders_sale_note_err_nf'));
            }

            $object->remove();
        }

        return $this->success();
    }

}

return 'ordersSaleNoteRemoveProcessor';