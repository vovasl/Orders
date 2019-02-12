<?php

class ordersClientManager2GetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersClientManager2';
    public $classKey = 'ordersClientManager2';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'ASC';
    //public $permission = 'list';


    /**
     * We do a special check of permissions
     * because our objects is not an instances of modAccessibleObject
     *
     * @return boolean|string
     */
    public function beforeQuery()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @param xPDOQuery $c
     *
     * @return xPDOQuery
     */
    public function prepareQueryBeforeCount(xPDOQuery $c)
    {
        $client = trim($this->getProperty('client'));

        $c->where([
            'client' => $client,
            'manager:!=' => ''
        ]);

        return $c;
    }


    /**
     * @param xPDOObject $object
     *
     * @return array
     */
    public function prepareRow(xPDOObject $object)
    {
        $array = $object->toArray();
        $array['actions'] = [];

        // Edit
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-edit',
            'title' => $this->modx->lexicon('orders_manager_update'),
            //'multiple' => $this->modx->lexicon('orders_items_update'),
            'action' => 'updateManager2',
            'button' => true,
            'menu' => true,
        ];

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('orders_manager_remove'),
            'multiple' => $this->modx->lexicon('orders_managers_remove'),
            'action' => 'removeManager2',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersClientManager2GetListProcessor';