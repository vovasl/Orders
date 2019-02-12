<?php

class ordersStationTrainArriveCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersStationTrainArrive';
    public $classKey = 'ordersStationTrainArrive';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_station_train_arrive_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_station_train_arrive_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersStationTrainArriveCreateProcessor';