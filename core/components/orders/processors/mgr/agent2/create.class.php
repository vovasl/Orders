<?php

class ordersAgent2CreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersAgent2';
    public $classKey = 'ordersAgent2';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_agent_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_agent_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersAgent2CreateProcessor';