<?php

class ordersStationTrainArriveGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersStationTrainArrive';
    public $classKey = 'ordersStationTrainArrive';
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
            'title' => $this->modx->lexicon('orders_station_train_arrive_update'),
            //'multiple' => $this->modx->lexicon('orders_items_update'),
            'action' => 'updateStationTrainArrive',
            'button' => true,
            'menu' => true,
        ];

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('orders_station_train_arrive_remove'),
            'multiple' => $this->modx->lexicon('orders_stations_train_arrive_remove'),
            'action' => 'removeStationTrainArrive',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersStationTrainArriveGetListProcessor';