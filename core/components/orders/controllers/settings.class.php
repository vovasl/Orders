<?php

/**
 * The home manager controller for orders.
 *
 */
class ordersSettingsManagerController extends modExtraManagerController
{
    /** @var orders $orders */
    public $orders;


    /**
     *
     */
    public function initialize()
    {
        $this->orders = $this->modx->getService('orders', 'orders', MODX_CORE_PATH . 'components/orders/model/');
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['orders:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('settings');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->orders->config['cssUrl'] . 'mgr/main.css');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/orders.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/misc/combo.js');

        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/panel.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/setting/settings.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/setting/settings.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/setting/permissions.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/setting/update-items.window.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/template/templates.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/template/templates.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/fields-width/fields-width.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/fields-width/fields-width.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/settings/report/form.grid.js');

        $config = $this->orders->config;


        $this->addHtml('
                <script type="text/javascript">
                    orders.config = ' . json_encode($config) . ';
                    orders.config.connector_url = "' . $this->orders->config['connectorUrl'] . '";
                    Ext.onReady(function() {
                        MODx.add({ xtype: "orders-panel-settings"});
                    });
                </script>');

    }

}