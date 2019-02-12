<?php

class ordersGoodsGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersGoods';
    public $classKey = 'ordersGoods';
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
        if ($client = (int)$this->getProperty('client')) {
            $c->leftJoin('ordersClientGoods', 'GoodsClient', '`GoodsClient`.`goods` = `'.$this->classKey.'`.`id`');
            $c->where(array(
                'GoodsClient.client' => $client ,
            ));
            $c->sortby('GoodsClient.default','DESC');
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
            'multiple' => $this->modx->lexicon('orders_goodss_remove'),
            'action' => 'removeGoods',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersGoodsGetListProcessor';