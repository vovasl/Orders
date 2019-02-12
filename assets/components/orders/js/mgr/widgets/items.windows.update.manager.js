UpdateItemManager = {getTabs: function (config) {
        var tab1 = {
            title: _('orders_item_tab_item'),
            hideMode: 'offsets',
            //bodyStyle: 'padding:5px 0;',
            defaults: {msgTarget: 'under', border: false},
            items: this.getOrderFields(config)
        };
        var tabs = [];

        tabs.push(tab1);
        return tabs;
    },

    getOrderFields: function (config) {
        return [
            {
                xtype: 'hidden',
                name: 'id'
            }, {
                layout: 'column',
                defaults: {msgTarget: 'side', border: false},
                style: 'padding:15px 5px;text-align:center;',
                items: [{
                    columnWidth: .33,
                    layout: 'form',
                    labelWidth: 100,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_container_number'),
                        name: 'container_number',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-manager',
                        fieldLabel: _('orders_item_manager'),
                        name: 'manager',
                        anchor: '99%',
                    }, {
                        id: config.id + '-client',
                        xtype: 'orders-combo-client',
                        fieldLabel: _('orders_item_client'),
                        name: 'client',
                        anchor: '99%',
                        listeners: {
                            select: {
                                fn: function (r) {
                                    var f = this.fp.getForm();
                                    // получаем поля по имени
                                    var _field1 = f.findField('client');
                                    var _field2 = f.findField('address');
                                    _field2.baseParams['client'] = _field1.getValue();

                                    // показываем пагинацию если нужно на комбике
                                    if (!!_field2.pageTb) {
                                        _field2.pageTb.show();
                                    }
                                    _field2.store.load();
                                },
                                scope: this
                            }
                        },
                    }, {
                        xtype: 'orders-combo-goods',
                        fieldLabel: _('orders_item_goods'),
                        name: 'goods',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-container-type',
                        fieldLabel: _('orders_item_container_type'),
                        name: 'container_type',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_weight'),
                        name: 'weight',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_volume'),
                        name: 'volume',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_count_boxes'),
                        name: 'count_boxes',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-receiver',
                        fieldLabel: _('orders_item_receiver'),
                        name: 'receiver',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-line',
                        fieldLabel: _('orders_item_line'),
                        name: 'line',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-port-arrive',
                        fieldLabel: _('orders_item_port_arrive'),
                        name: 'port_arrive',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_port_arrive_date'),
                        name: 'port_arrive_date',
                        anchor: '90%',
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    labelWidth: 140,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_bill_entry_number'),
                        name: 'bill_entry_number',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_vdt'),
                        name: 'vdt',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_export_from_station_real'),
                        name: 'export_from_station_real',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_delivery_date'),
                        name: 'delivery_date',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_delivery_container_date'),
                        name: 'delivery_container_date',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-car-carrier',
                        fieldLabel: _('orders_item_car_carrier'),
                        name: 'car_carrier',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_car_number'),
                        name: 'car_number',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_driver'),
                        name: 'driver',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_driver_phone'),
                        name: 'driver_phone',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_car_carrier_rate'),
                        name: 'car_carrier_rate',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-currency',
                        fieldLabel: _('orders_item_currency_2'),
                        name: 'currency_2',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_account_number_2'),
                        name: 'account_number_2',
                        anchor: '99%',
                    }]
                }]
            }, {
                layout: 'column',
                defaults: {msgTarget: 'under', border: false},
                style: 'padding:15px 5px;text-align:center;',
                labelWidth: 225,
                items: [{
                    columnWidth: .66,
                    layout: 'form',
                    items: [{
                        id: config.id + '-address',
                        xtype: 'orders-combo-address',
                        fieldLabel: _('orders_item_address'),
                        name: 'address',
                        anchor: '99%',
                        autoLoad: true,
                        listeners: {
                            render: {
                                fn: function (r) {
                                    var _field1 = Ext.getCmp(config.id + '-client');
                                    var _field2 = Ext.getCmp(config.id + '-address');
                                    _field2.baseParams['client'] = _field1.getValue();

                                    // показываем пагинацию если нужно на комбике
                                    if (!!_field2.pageTb) {
                                        _field2.pageTb.show();
                                    }
                                }
                            }
                        },
                    }, {
                        xtype: 'orders-combo-company-warehouse',
                        fieldLabel: _('orders_item_company_warehouse'),
                        name: 'company_warehouse',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_contact_person'),
                        name: 'contact_person',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_contact_person_phone'),
                        name: 'contact_person_phone',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-address-container',
                        fieldLabel: _('orders_item_address_container'),
                        name: 'address_container',
                        anchor: '99%',
                    }, {
                        xtype: 'textarea',
                        fieldLabel: _('orders_item_note'),
                        name: 'note',
                        anchor: '99%',
                        height: 239,
                    }]
                }]
            }];
    },
}