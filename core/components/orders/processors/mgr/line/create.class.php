<?php

class ordersLineCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersLine';
    public $classKey = 'ordersLine';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_line_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_line_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersLineCreateProcessor';