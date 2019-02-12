<?php

class ordersAddressGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersAddress';
    public $classKey = 'ordersAddress';
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

		if ($client = (int)$this->getProperty('client')) {
			$c->where(array(
				'client' => "{$client}%",
			));
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
            'title' => $this->modx->lexicon('orders_address_update'),
            //'multiple' => $this->modx->lexicon('orders_items_update'),
            'action' => 'updateAddress',
            'button' => true,
            'menu' => true,
        ];

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('orders_address_remove'),
            'multiple' => $this->modx->lexicon('orders_addresses_remove'),
            'action' => 'removeAddress',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersAddressGetListProcessor';