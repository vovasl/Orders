<?php

class ordersSettingGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersSettings';
    public $classKey = 'ordersSettings';
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
        $area = $this->getProperty('area');

        $c->where([
            'area' => $area,
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
            'title' => $this->modx->lexicon('orders_setting_update'),
            //'multiple' => $this->modx->lexicon('orders_items_update'),
            'action' => 'updateSetting',
            'button' => true,
            'menu' => true,
        ];

        $array['name_trans'] = $this->modx->lexicon($array['name']);

        return $array;
    }

}

return 'ordersSettingGetListProcessor';