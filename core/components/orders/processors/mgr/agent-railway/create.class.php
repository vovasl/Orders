<?php

class ordersAgentRailwayCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersAgentRailway';
    public $classKey = 'ordersAgentRailway';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_agent_railway_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_agent_railway_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersAgentRailwayCreateProcessor';