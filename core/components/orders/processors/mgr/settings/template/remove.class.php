<?php

class ordersTemplateRemoveProcessor extends modObjectProcessor
{
    public $objectType = 'ordersTemplate';
    public $classKey = 'ordersTemplate';
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
            return $this->failure($this->modx->lexicon('orders_template_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var ordersItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('orders_template_err_nf'));
            }

            $object->remove();
        }

        return $this->success();
    }

}

return 'ordersTemplateRemoveProcessor';