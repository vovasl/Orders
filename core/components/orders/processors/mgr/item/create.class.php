<?php

class ordersItemCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersItem';
    public $classKey = 'ordersItem';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
		//$this->setProperty('created', date());
        return parent::beforeSet();
    }
	public function beforeSave()
	{
		$this->object->set('created', time());
		if($this->object->get('application_date') == '') {
            $this->object->set('application_date', time());
        }

		return parent::beforeSave();
	}

}

return 'ordersItemCreateProcessor';