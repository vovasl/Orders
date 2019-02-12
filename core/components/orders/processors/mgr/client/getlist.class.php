<?php

class ordersClientGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersClient';
    public $classKey = 'ordersClient';
    public $defaultSortField = 'name';
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

        $c->leftJoin('ordersClientSender', 'ClientSender');
        $c->leftJoin('ordersSender', 'SenderClient', '`ClientSender`.`sender` = `SenderClient`.`id`');
        $c->leftJoin('ordersClientManager', 'ClientManager');
        $c->leftJoin('ordersManager', 'ManagerClient', '`ClientManager`.`manager` = `ManagerClient`.`id`');
        $c->leftJoin('ordersClientManager2', 'ClientManager2');
        $c->leftJoin('ordersManager', 'Manager2Client', '`ClientManager2`.`manager` = `Manager2Client`.`id`');
        $c->leftJoin('ordersClientGoods', 'ClientGoods');
        $c->leftJoin('ordersGoods', 'GoodsClient', '`ClientGoods`.`goods` = `GoodsClient`.`id`');
        $c->select($this->modx->getSelectColumns($this->classKey, $this->classKey));

        $c->select(array(
            'senders' => 'GROUP_CONCAT(DISTINCT SenderClient.name SEPARATOR "<br />")',
            'manager' => 'GROUP_CONCAT(DISTINCT ManagerClient.name SEPARATOR "<br />")',
            'manager2' => 'GROUP_CONCAT(DISTINCT Manager2Client.name SEPARATOR "<br />")',
            'goods' => 'GROUP_CONCAT(DISTINCT GoodsClient.name SEPARATOR "<br />")',
        ));

        $c->groupby($this->classKey.'.name');

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
            'title' => $this->modx->lexicon('orders_client_update'),
            //'multiple' => $this->modx->lexicon('orders_items_update'),
            'action' => 'updateClient',
            'button' => true,
            'menu' => true,
        ];

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('orders_client_remove'),
            'multiple' => $this->modx->lexicon('orders_clients_remove'),
            'action' => 'removeClient',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersClientGetListProcessor';