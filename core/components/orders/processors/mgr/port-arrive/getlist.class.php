<?php

class ordersPortArriveGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersPortArrive';
    public $classKey = 'ordersPortArrive';
    public $defaultSortField = 'name';
    public $defaultSortDirection = 'ASC';
    //public $permission = 'list';


    public function beforeIteration($list)
    {

        $list[] = array('id' => '', 'name' => '');
        $list[] = array('id' => 'railway-disabled', 'name' => $this->modx->lexicon('orders_item_filter_port_arrive_railway_disabled'));
        $list[] = array('id' => 'ports', 'name' => $this->modx->lexicon('orders_item_filter_port_arrive_ports'));
        $list[] = array('id' => 'spb', 'name' => $this->modx->lexicon('orders_item_filter_port_arrive_spb'));
        $list[] = array('id' => 'riga', 'name' => $this->modx->lexicon('orders_item_filter_port_arrive_riga'));

        return $list;
    }


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
        $query = trim($this->getProperty('query'));
        if ($query) {
            $c->where([
                'name:LIKE' => "%{$query}%",
                'OR:description:LIKE' => "%{$query}%",
            ]);
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
            'title' => $this->modx->lexicon('orders_port_arrive_update'),
            //'multiple' => $this->modx->lexicon('orders_items_update'),
            'action' => 'updatePortArrive',
            'button' => true,
            'menu' => true,
        ];

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('orders_port_arrive_remove'),
            'multiple' => $this->modx->lexicon('orders_ports_arrive_remove'),
            'action' => 'removePortArrive',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersPortArriveGetListProcessor';