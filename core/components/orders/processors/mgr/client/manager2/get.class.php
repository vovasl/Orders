<?php

class ordersClientManager2GetProcessor extends modObjectGetProcessor
{
    public $objectType = 'ordersClientManager2';
    public $classKey = 'ordersClientManager2';
    public $languageTopics = ['orders:default'];
    //public $permission = 'view';


    /**
     * We doing special check of permission
     * because of our objects is not an instances of modAccessibleObject
     *
     * @return mixed
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        return parent::process();
    }

}

return 'ordersClientManager2GetProcessor';