<?php

class ordersTemplateGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersTemplate';
    public $classKey = 'ordersTemplate';
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
        $templateTamozhnya = '18';
        $templateAvtovyvoz = '5';
        $templateLineManager = '7,10,16';
        if($this->modx->user->isMember('OrdersTamozhnya')) {
            $c->where([
                "id IN (" . $templateTamozhnya . ")"
            ]);
        }
        else if($this->modx->user->isMember('OrdersAvtovyvoz1') || $this->modx->user->isMember('OrdersAvtovyvoz2')) {
            $c->where([
                "id IN (" . $templateAvtovyvoz . ")"
            ]);
        }
        else if($this->modx->user->isMember('OrdersLineManager')) {
            $c->where([
                "id IN (" . $templateLineManager . ")"
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
            'title' => $this->modx->lexicon('orders_template_update'),
            //'multiple' => $this->modx->lexicon('orders_items_update'),
            'action' => 'updateTemplate',
            'button' => true,
            'menu' => true,
        ];

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('orders_template_remove'),
            'multiple' => $this->modx->lexicon('orders_templates_remove'),
            'action' => 'removeTemplate',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersTemplateGetListProcessor';