<?php

class ordersSenderClientProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersSenderClient';
    public $classKey = 'ordersSenderClient';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */

    public function beforeSet()
    {
        return parent::beforeSet();
    }

    public function beforeSave()
    {
        //$this->object->set('sender', $this->getProperty('sender_id'));

        return parent::beforeSave();
    }


}

return 'ordersSenderClientProcessor';