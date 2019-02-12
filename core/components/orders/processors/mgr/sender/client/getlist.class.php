<?php

class ordersSenderClientGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersSenderClient';
    public $classKey = 'ordersSenderClient';
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
        $sender = trim($this->getProperty('sender'));

        if ($sender) {
            $c->where([
                'sender' => $sender
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

return 'ordersSenderClientGetListProcessor';