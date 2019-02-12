<?php

class ordersManagerGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersManager';
    public $classKey = 'ordersManager';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
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
        if ($client = (int)$this->getProperty('client')) {
            $type = $this->getProperty('type');

            if($type == 'manager') {
                $class = 'ordersClientManager';
                $class2 = 'ManagerClient';
            }
            else if($type == 'manager2') {
                $class = 'ordersClientManager2';
                $class2 = 'Manager2Client';
            }

            $c->leftJoin($class, $class2, '`' . $class2 . '`.`manager` = `' . $this->classKey . '`.`id`');
            $c->where(array(
                $class2 . '.client' => $client,
            ));
            $c->sortby($class2 . '.default', 'DESC');

        }

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
            'action' => 'updateManager',
            'button' => true,
            'menu' => true,
        ];

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('orders_manager_remove'),
            'multiple' => $this->modx->lexicon('orders_managers_remove'),
            'action' => 'removeManager',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersManagerGetListProcessor';