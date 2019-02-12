UpdateItemAdmin = {
    getTabs: function (config) {
        var tab1 = {
            title: _('orders_item_tab_item'),
            hideMode: 'offsets',
            //bodyStyle: 'padding:5px 0;',
            defaults: {msgTarget: 'under', border: false},
            items: this.getOrderFields(config)
        };
        var tab2 = {
            layout: 'form',
            title: _('orders_item_tab_calculations'),
            hideMode: 'offsets',
            bodyStyle: 'padding:5px 0;',
            defaults: {msgTarget: 'under', border: false},
            items: this.getOrderFieldsTab2(config),
        };
        var tabs = [];

        tabs.push(tab1);
        tabs.push(tab2);
        return tabs;
    },

    getOrderFields: function (config) {
        return [
            {
                xtype: 'hidden',
                name: 'id'
            }, {
                layout: 'column',
                defaults: {msgTarget: 'under', border: false},
                style: 'padding:15px 5px;text-align:center;',
                items: [{
                    columnWidth: .165,
                    layout: 'form',
                    labelWidth: 100,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_container_number'),
                        name: 'container_number',
                        anchor: '99%',
                    }]
                }, {
                    columnWidth: .165,
                    layout: 'form',
                    labelWidth: 30,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_bl'),
                        name: 'bl',
                        anchor: '99%',
                    }]
                }, {
                    columnWidth: .165,
                    layout: 'form',
                    labelWidth: 80,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_agent_number'),
                        name: 'agent_number',
                        anchor: '99%',
                    }]
                }, {
                    columnWidth: .165,
                    layout: 'form',
                    labelWidth: 80,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_agent_china_number'),
                        name: 'agent_china_number',
                        anchor: '99%',
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    labelWidth: 80,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_bill_entry_number'),
                        name: 'bill_entry_number',
                        anchor: '99%',
                    }]
                }]
            }, {
                layout: 'column',
                defaults: {msgTarget: 'side', border: false},
                style: 'padding:15px 5px;text-align:center;',
                items: [{
                    columnWidth: .33,
                    layout: 'form',
                    labelWidth: 160,
                    items: [{
                        xtype: 'orders-combo-manager',
                        fieldLabel: _('orders_item_manager'),
                        name: 'manager',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-manager',
                        fieldLabel: _('orders_item_manager2'),
                        name: 'manager2',
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
                        xtype: 'orders-combo-delivery-term',
                        fieldLabel: _('orders_item_delivery_term'),
                        name: 'delivery_term',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-port-departure',
                        fieldLabel: _('orders_item_port_departure'),
                        name: 'port_departure',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-city-delivery',
                        fieldLabel: _('orders_item_city_delivery'),
                        name: 'city_delivery',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-container-type',
                        fieldLabel: _('orders_item_container_type'),
                        name: 'container_type',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_volume'),
                        name: 'volume',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_weight'),
                        name: 'weight',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_count_boxes'),
                        name: 'count_boxes',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-port-arrive',
                        fieldLabel: _('orders_item_port_arrive'),
                        name: 'port_arrive',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-line',
                        fieldLabel: _('orders_item_line'),
                        name: 'line',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-agent-railway',
                        fieldLabel: _('orders_item_agent_railway'),
                        name: 'agent_railway',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-station-train-arrive',
                        fieldLabel: _('orders_item_station_train_arrive'),
                        name: 'station_train_arrive',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-receiver',
                        fieldLabel: _('orders_item_receiver'),
                        name: 'receiver',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-delivery-term-receiver',
                        fieldLabel: _('orders_item_delivery_term_receiver'),
                        name: 'delivery_term_receiver',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-sale-note',
                        fieldLabel: _('orders_item_sale'),
                        name: 'sale',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-accounts-note',
                        fieldLabel: _('orders_item_accounts'),
                        name: 'accounts',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_tax_payments'),
                        name: 'tax_payments',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_tax_payments_nds'),
                        name: 'tax_payments_nds',
                        anchor: '99%',
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    labelWidth: 190,
                    items: [{
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_application_date'),
                        name: 'application_date',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_availability_date'),
                        name: 'availability_date',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_booking'),
                        name: 'booking',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_factory_supply'),
                        name: 'factory_supply',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_port_departure_date'),
                        name: 'port_departure_date',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_port_arrive_date'),
                        name: 'port_arrive_date',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_release_date'),
                        name: 'release_date',
                        anchor: '90%',
                    }, {
                        xtype: 'checkbox',
                        fieldLabel: _('orders_item_release'),
                        name: 'release',
                        anchor: '99%',
                        boxLabel: _('orders_item_release_label'),
                        checked: false,
                        inputValue: 1,
                    },{
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_pdt'),
                        name: 'pdt',
                        anchor: '90%'
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_examination'),
                        name: 'examination',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_examined'),
                        name: 'examined',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_vdt'),
                        name: 'vdt',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_train_departure_date'),
                        name: 'train_departure_date',
                        anchor: '90%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_train_arrive_date'),
                        name: 'train_arrive_date',
                        anchor: '90%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_distance_to_station'),
                        name: 'distance_to_station',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_stations'),
                        name: 'stations',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_export_from_station'),
                        name: 'export_from_station',
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
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    labelWidth: 160,
                    items: [{
                        xtype: 'textarea',
                        fieldLabel: _('orders_item_note'),
                        name: 'note',
                        anchor: '99%',
                        height: 239,
                    }, {
                        xtype: 'orders-combo-company-warehouse',
                        fieldLabel: _('orders_item_company_warehouse'),
                        name: 'company_warehouse',
                        anchor: '99%',
                    }, {
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
                        xtype: 'orders-combo-car-carrier',
                        fieldLabel: _('orders_item_car_carrier'),
                        name: 'car_carrier',
                        anchor: '99%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_car_carrier_rate'),
                        name: 'car_carrier_rate',
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
                    }]
                }]
            }, {
                layout: 'column',
                defaults: {msgTarget: 'under', border: false},
                style: 'padding:15px 5px;text-align:center;',
                labelWidth: 160,
                items: [{
                    columnWidth: .33,
                    layout: 'form',
                    items: [{
                        xtype: 'orders-combo-sender',
                        fieldLabel: _('orders_item_sender'),
                        name: 'sender',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-forwarder',
                        fieldLabel: _('orders_item_forwarder'),
                        name: 'forwarder',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-row-color',
                        fieldLabel: _('orders_item_color'),
                        name: 'color',
                        anchor: '99%',
                    }]
                }]
            }];
    },

    getOrderFieldsTab2: function (config) {
        return [{
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px;text-align:center;',
            items: [{
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_d_application'),
                    name: 'd_application',
                    anchor: '88%',
                }, {
                    xtype: 'orders-combo-agent',
                    fieldLabel: _('orders_item_agent'),
                    name: 'agent',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-payment-form',
                    fieldLabel: _('orders_item_payment_form'),
                    name: 'payment_form',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_customs_fee'),
                    name: 'customs_fee',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_total'),
                    name: 'total',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_total_2'),
                    name: 'total_2',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_total_3'),
                    name: 'total_3',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_total_4'),
                    name: 'total_4',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_account_number'),
                    name: 'account_number',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_account_number_2'),
                    name: 'account_number_2',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_account_number_3'),
                    name: 'account_number_3',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_account_number_4'),
                    name: 'account_number_4',
                    anchor: '99%',
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_d_payment'),
                    name: 'd_payment',
                    anchor: '88%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_rate_rur'),
                    name: 'rate_rur',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_d_closed'),
                    name: 'd_closed',
                    anchor: '88%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_exw'),
                    name: 'exw',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-currency',
                    fieldLabel: _('orders_item_currency'),
                    name: 'currency',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-currency',
                    fieldLabel: _('orders_item_currency_2'),
                    name: 'currency_2',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-currency',
                    fieldLabel: _('orders_item_currency_3'),
                    name: 'currency_3',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-currency',
                    fieldLabel: _('orders_item_currency_4'),
                    name: 'currency_4',
                    anchor: '99%',
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_exchange_rate'),
                    name: 'exchange_rate',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_rate_usd'),
                    name: 'rate_usd',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_com_zebra'),
                    name: 'com_zebra',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-yes-no',
                    fieldLabel: _('orders_item_closed'),
                    name: 'closed',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-yes-no',
                    fieldLabel: _('orders_item_closed_2'),
                    name: 'closed_2',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-yes-no',
                    fieldLabel: _('orders_item_closed_3'),
                    name: 'closed_3',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-yes-no',
                    fieldLabel: _('orders_item_closed_4'),
                    name: 'closed_4',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-yes-no',
                    fieldLabel: _('orders_item_closed_5'),
                    name: 'closed_5',
                    anchor: '99%',
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_2'),
                    name: 'note_2',
                    anchor: '99%',
                    height: 125,
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_3'),
                    name: 'note_3',
                    anchor: '99%',
                    height: 125,
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_4'),
                    name: 'note_4',
                    anchor: '99%',
                    height: 125,
                }]
            }]
        }];
    },
}