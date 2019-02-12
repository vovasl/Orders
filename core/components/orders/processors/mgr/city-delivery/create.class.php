<?php

class ordersCityDeliveryCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersCityDelivery';
    public $classKey = 'ordersCityDelivery';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_city_delivery_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_city_delivery_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersCityDeliveryCreateProcessor';