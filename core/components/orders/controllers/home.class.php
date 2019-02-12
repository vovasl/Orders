<?php

/**
 * The home manager controller for orders.
 *
 */
class ordersHomeManagerController extends modExtraManagerController
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
        return $this->modx->lexicon('orders');
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
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/items/items.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/items/items.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/items/items.windows.create.js');;
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/items/items.windows.create.manager.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/items/items.windows.create.manager-line.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/items/items.windows.update.avtovyvoz1.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/items/items.windows.update.avtovyvoz2.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/items/items.windows.update.tamozhnya.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/managers.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/managers.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/goods.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/goods.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/addresses.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/addresses.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/lines.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/lines.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/container-types.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/container-types.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/delivery-terms.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/delivery-terms.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/sale-notes.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/sale-notes.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/accounts-notes.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/accounts-notes.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/ports-arrive.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/ports-arrive.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/ports-departure.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/ports-departure.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/cities-delivery.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/cities-delivery.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/stations-train-arrive.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/stations-train-arrive.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/delivery-term-receivers.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/delivery-term-receivers.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/addresses-container.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/addresses-container.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/agents-railway.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/agents-railway.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/carriers.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/carriers.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/companies-warehouse.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/companies-warehouse.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/clients.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/clients.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/senders/senders.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/senders/sender.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/managers/managers.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/managers/manager.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/managers/managers2.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/managers/manager2.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/goods/goods.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/clients/goods/goods.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/receivers.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/receivers.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/senders/senders.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/senders/senders.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/forwarders.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/forwarders.windows.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/widgets/reports/form.grid.js');
        $this->addJavascript($this->orders->config['jsUrl'] . 'mgr/sections/home.js');


        $config = $this->orders->config;


        //выбираем все настройки в массив $settings
        $settings = array();
        $settingsDB = $this->modx->getCollection('ordersSettings');
        foreach ($settingsDB as $val) {
            $settings[$val->get('name')] = $val->get('value');
        }

        //определение группы пользователя
        $userGroups = $this->modx->user->getUserGroupNames();
        $config['orders_member_group'] = $userGroups[0];


        //поля недоступные для редактирования в зависимости от группы пользователя
        $fieldsDisabled = '';
        if ($config['orders_member_group'] == 'OrdersAvtovyvoz1') {
            if (!empty($settings['orders_setting_item_avtovyvoz1_fields_disabled'])) {
                $fieldsDisabled = $settings['orders_setting_item_avtovyvoz1_fields_disabled'];
            }
        }
        else if ($config['orders_member_group'] == 'OrdersAvtovyvoz2') {
            if (!empty($settings['orders_setting_item_avtovyvoz2_fields_disabled'])) {
                $fieldsDisabled = $settings['orders_setting_item_avtovyvoz2_fields_disabled'];
            }
        }
        else if ($config['orders_member_group'] == 'OrdersManager') {
            if (!empty($settings['orders_setting_item_manager_fields_disabled'])) {
                $fieldsDisabled = $settings['orders_setting_item_manager_fields_disabled'];
            }
        }
        else if ($config['orders_member_group'] == 'OrdersLineManager') {
            if (!empty($settings['orders_setting_item_manager_line_fields_disabled'])) {
                $fieldsDisabled = $settings['orders_setting_item_manager_line_fields_disabled'];
            }
        }
        else if ($config['orders_member_group'] == 'OrdersTamozhnya') {
            if (!empty($settings['orders_setting_item_tamozhnya_fields_disabled'])) {
                $fieldsDisabled = $settings['orders_setting_item_tamozhnya_fields_disabled'];
            }
        }
        $config['orders_item_fields_disabled'] = array_map('trim', explode(',', $fieldsDisabled));


        //поля во вкладке Заказы по умолчанию
        $fieldsTemplate = 'actions, color, id, release, release_date, client, goods, container_number, agent_number, agent_china_number, line,
                port_departure, port_departure_date, port_arrive, port_arrive_date, receiver, forwarder, tax_payments, tax_payments_nds,
                container_type, weight, station_train_arrive, train_arrive_date, delivery_date, address, address_container,
                export_from_station_real, manager2, bl, bill_entry_number, manager, delivery_term, city_delivery, volume, count_boxes,
                agent_railway, delivery_term_receiver, sale, accounts, sender, application_date, availability_date, booking, factory_supply,
                pdt, examination, examined, vdt, train_departure_date, distance_to_station, stations, export_from_station, 
                delivery_container_date, note, company_warehouse, contact_person, contact_person_phone, car_carrier, car_carrier_rate,
                car_number, driver, driver_phone, created';
        //в зависимости от шаблона заданного в настройках выводятся поля во вкладке Заказы
        if (!empty($settings['orders_setting_item_template'])) {
            $template = $this->modx->getObject('ordersTemplate', array('id' => $settings['orders_setting_item_template']));
            if (is_object($template)) {
                $fieldsTemplate = $template->value;
            }
        }
        $gridFieldsTemplate = array_map('trim', explode(',', $fieldsTemplate));

        //удаление полей из таблицы в зависимости от группы пользователя
        $fieldsDelete = array();
        if ($config['orders_member_group'] == 'OrdersAvtovyvoz1') {
            if (!empty($settings['orders_setting_item_avtovyvoz1_fields_delete'])) {
                $fieldsDelete = explode(",",$settings['orders_setting_item_avtovyvoz1_fields_delete']);
            }
        }
        else if ($config['orders_member_group'] == 'OrdersAvtovyvoz2') {
            if (!empty($settings['orders_setting_item_avtovyvoz2_fields_delete'])) {
                $fieldsDelete = explode(",",$settings['orders_setting_item_avtovyvoz2_fields_delete']);
            }
        }
        else if ($config['orders_member_group'] == 'OrdersManager') {
            if (!empty($settings['orders_setting_item_manager_fields_delete'])) {
                $fieldsDelete = explode(",",$settings['orders_setting_item_manager_fields_delete']);
            }
        }
        else if ($config['orders_member_group'] == 'OrdersLineManager') {
            if (!empty($settings['orders_setting_item_manager_line_fields_delete'])) {
                $fieldsDelete = explode(",",$settings['orders_setting_item_manager_line_fields_delete']);
            }
        }
        else if ($config['orders_member_group'] == 'OrdersTamozhnya') {
            if (!empty($settings['orders_setting_item_tamozhnya_fields_delete'])) {
                $fieldsDelete = explode(",",$settings['orders_setting_item_tamozhnya_fields_delete']);
            }
        }
        if(count($fieldsDelete)) {
            $gridFieldsTemplate = array_values(array_diff($gridFieldsTemplate, $fieldsDelete));
        }

        $config['orders_item_fields'] = array_values(array_unique(array_merge($gridFieldsTemplate, array(
            'actions', 'color', 'id', 'created'
        ))));
        $config['orders_item_template'] = $settings['orders_setting_item_template'];


        $fieldsWidthDB = $this->modx->getCollection('ordersSettingsFieldsWidth');
        $width = array();
        foreach ($fieldsWidthDB as $val) {
            $width[$val->get('name')]['width'] = (int)$val->get('value');
        }
        $config['orders_item_fields_width'] = $width;

        //ID менеджера
        $fields = $this->modx->user->getOne('Profile')->get('extended');
        $config['manager'] = $fields['manager'];

        //настройки прав доступа
        $config['perm.orders_item_create_button'] = $this->modx->hasPermission('orders.create_order') ? 1 : 0;
        $config['perm.orders_item_show_tab'] = $this->modx->hasPermission('orders.show_tabs') ? 1 : 0;

		$this->addHtml('
                <script type="text/javascript">
                    orders.config = ' . json_encode($config) . ';
                    orders.config.connector_url = "' . $this->orders->config['connectorUrl'] . '";
                    Ext.onReady(function() {
                        MODx.add({ xtype: "orders-page-home"});
                    });
                </script>');

    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="orders-panel-home-div"></div>';

        return '';
    }
}