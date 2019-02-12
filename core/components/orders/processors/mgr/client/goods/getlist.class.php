<?php

class ordersClientGoodsGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersClientGoods';
    public $classKey = 'ordersClientGoods';
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
            'goods:!=' => ''
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
            'title' => $this->modx->lexicon('orders_goods_update'),
            //'multiple' => $this->modx->lexicon('orders_items_update'),
            'action' => 'updateGoods',
            'button' => true,
            'menu' => true,
        ];

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('orders_goods_remove'),
            'multiple' => $this->modx->lexicon('orders_goods_remove'),
            'action' => 'removeGoods',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersClientGoodsGetListProcessor';