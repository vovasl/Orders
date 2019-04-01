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

    public function afterSave() {

        //create folder for upload files
        $sourceID = 4;
        $source = $this->modx->getObject('modMediaSource', $sourceID);
        $properties = $source->get('properties');
        $sourcePath = $properties['basePath']['value'];

        $path = $_SERVER['DOCUMENT_ROOT'] . '/' . $sourcePath . $this->object->get('id');

        if (!is_dir($path)) {
            mkdir($path, 0777, true);
        }

        return true;
    }

}

return 'ordersItemCreateProcessor';