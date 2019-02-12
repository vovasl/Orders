<?php

class ordersItemGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ordersItem';
    public $classKey = 'ordersItem';
    public $defaultSortField = 'id';
    //public $defaultSortField = 'train_arrive_date';
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

		$searchStr = trim($this->getProperty('searchStr'));
		$searchCarNumber = trim($this->getProperty('searchCarNumber'));
		$searchBillEntryNumber = trim($this->getProperty('searchBillEntryNumber'));
		$important = $this->getProperty('important');
		$archive = $this->getProperty('archive');
		$hidden = $this->getProperty('hidden');
		$color = $this->getProperty('color');
		$receiver = $this->getProperty('receiver');
        $manager2 = $this->getProperty('manager2');
        $stationTrainArrive = $this->getProperty('stationTrainArrive');
        $portArrive = $this->getProperty('portArrive');
        $template = $this->getProperty('template');

        $c->select($this->modx->getSelectColumns($this->classKey, $this->classKey));

        //ID портов прибытия
        $portArriveIDs = array(9,3,18,5,7,14,6,1,20);

        //дополнительные условия в зависимости какой менеджер зашел в систему
        if ($this->modx->user->isMember('OrdersManager')) {
            $fields = $this->modx->user->getOne('Profile')->get('extended');
            $c->where([
                'manager2' => $fields['manager'],
                'OR:manager:=' => $fields['manager'],
            ]);
        }
        else if($this->modx->user->isMember('OrdersAvtovyvoz1')) {
            $c->where([
                "port_arrive IN (" . implode(',', $portArriveIDs) . ")"
            ]);
        }

        //вывод заказов в зависимости от поисковой строки
		if ($searchStr) {
			$c->leftJoin('ordersClient', 'Client', '`Client`.`id` = `'.$this->classKey.'`.`client`');
			$c->where([
				'container_number:LIKE' => "%{$searchStr}%",
				'OR:bl:LIKE' => "%{$searchStr}%",
				'OR:Client.name:LIKE' => "%{$searchStr}%",
				'OR:agent_number:LIKE' => "%{$searchStr}%",
				'OR:agent_china_number:LIKE' => "%{$searchStr}%",
			]);
		}


		if ($searchCarNumber) {
			$c->where([
				'car_number:LIKE' => "%{$searchCarNumber}%",
			]);
		}

		if ($searchBillEntryNumber) {
			$c->where([
				'bill_entry_number:LIKE' => "%{$searchBillEntryNumber}%",
			]);
		}

		if ($important) {
			$c->where([
				'important' => $important,
			]);
		}

		if ($archive) {
			$c->where([
				'archive' => $archive,
			]);
		}
		else {
			$c->where([
				'archive:!=' => 1,
			]);
		}


		if ($hidden) {
			$c->where([
				'hidden' => $hidden,
			]);
		}
		else {
			$c->where([
				'hidden:!=' => 1,
			]);
		}

		if ($color) {
			$c->where([
				'color' => $color,
			]);
		}

		if ($receiver) {
			$c->where([
				'receiver' => $receiver,
			]);
		}

        if ($manager2) {
            $c->where([
                'manager2' => $manager2,
            ]);
        }

        if ($stationTrainArrive) {
            $c->where([
                'station_train_arrive' => $stationTrainArrive,
            ]);
        }

        if ($portArrive) {
            $c->where([
                'port_arrive' => $portArrive,
            ]);
        }

        if($template){
            $resTemplate = $this->modx->getObject('ordersSettings', array('name' => 'orders_setting_item_template'));
            $resTemplate->set('value', $template);
            $resTemplate->save();
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
            'title' => $this->modx->lexicon('orders_item_update'),
            'multiple' => $this->modx->lexicon('orders_items_update'),
            'action' => 'updateItem',
            'button' => true,
            'menu' => true,
        ];

		if ($array['important']) {
			$array['actions'][] = [
				'cls' => '',
				'icon' => 'icon icon-star action-red',
				'title' => $this->modx->lexicon('orders_item_unimportant'),
				'multiple' => $this->modx->lexicon('orders_items_unimportant'),
				'action' => 'unimportantItem',
				'button' => true,
				'menu' => true,
			];
		} else {
			$array['actions'][] = [
				'cls' => '',
				'icon' => 'icon icon-star action-gray',
				'title' => $this->modx->lexicon('orders_item_important'),
				'multiple' => $this->modx->lexicon('orders_items_important'),
				'action' => 'importantItem',
				'button' => true,
				'menu' => true,
			];
		}

		if ($array['archive']) {
			$array['actions'][] = [
				'cls' => '',
				'icon' => 'icon icon-archive action-green',
				'title' => $this->modx->lexicon('orders_item_unzip'),
				'multiple' => $this->modx->lexicon('orders_items_unzip'),
				'action' => 'unzipItem',
				'button' => true,
				'menu' => true,
			];
		} else {
			$array['actions'][] = [
				'cls' => '',
				'icon' => 'icon icon-archive action-gray',
				'title' => $this->modx->lexicon('orders_item_zip'),
				'multiple' => $this->modx->lexicon('orders_items_zip'),
				'action' => 'zipItem',
				'button' => true,
				'menu' => true,
			];
		}

		if (!$array['hidden']) {
			$array['actions'][] = [
				'cls' => '',
				'icon' => 'icon icon-power-off action-green',
				'title' => $this->modx->lexicon('orders_item_disable'),
				'multiple' => $this->modx->lexicon('orders_items_disable'),
				'action' => 'disableItem',
				'button' => true,
				'menu' => true,
			];
		} else {
			$array['actions'][] = [
				'cls' => '',
				'icon' => 'icon icon-power-off action-gray',
				'title' => $this->modx->lexicon('orders_item_enable'),
				'multiple' => $this->modx->lexicon('orders_items_enable'),
				'action' => 'enableItem',
				'button' => true,
				'menu' => true,
			];
		}

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('orders_item_remove'),
            'multiple' => $this->modx->lexicon('orders_items_remove'),
            'action' => 'removeItem',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'ordersItemGetListProcessor';