<?php

class ordersSettingsFieldsWidthCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ordersSettingsFieldsWidth';
    public $classKey = 'ordersSettingsFieldsWidth';
    public $languageTopics = ['orders'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_settings_fields_width_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('orders_settings_fields_width_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ordersSettingsFieldsWidthCreateProcessor';