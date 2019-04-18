UpdateItemAvtovyvoz1 = {
    getTabs: function (config) {
        var tabs = [{
            title: _('orders_item_tab_item'),
            hideMode: 'offsets',
            //bodyStyle: 'padding:5px 0;',
            defaults: {msgTarget: 'under', border: false},
            items: this.getOrderFields(config)
        }, {
            layout: 'form',
            title: _('orders_item_tab_factories'),
            hideMode: 'offsets',
            //bodyStyle: 'padding:5px 0;',
            defaults: {msgTarget: 'under', border: false},
            items: this.getOrderFieldsTab3(config),
        }];

        return tabs;
    },

    getOrderFields: function (config) {
        return [
            {
                xtype: 'hidden',
                name: 'id',
                id: config.id + '-id',
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
                        disabled: true,
                    }, {
                        id: config.id + '-manager2',
                        xtype: 'orders-combo-manager',
                        fieldLabel: _('orders_item_manager2'),
                        name: 'manager2',
                        anchor: '99%',
                        disabled: true,
                        listeners: {
                            render: {
                                fn: function (r) {
                                    orders.utils.renderManager2(config.id);
                                }
                            }
                        },
                    }, {
                        id: config.id + '-client',
                        xtype: 'orders-combo-client',
                        fieldLabel: _('orders_item_client'),
                        name: 'client',
                        anchor: '99%',
                        disabled: true,
                        listeners: {
                            select: {
                                fn: function (r) {
                                    orders.utils.selectClient(config.id);
                                },
                                scope: this
                            }
                        },
                    }, {
                        xtype: 'orders-combo-goods',
                        fieldLabel: _('orders_item_goods'),
                        name: 'goods',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-container-type',
                        fieldLabel: _('orders_item_container_type'),
                        name: 'container_type',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_weight'),
                        name: 'weight',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_volume'),
                        name: 'volume',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_count_boxes'),
                        name: 'count_boxes',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-receiver',
                        fieldLabel: _('orders_item_receiver'),
                        name: 'receiver',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-line',
                        fieldLabel: _('orders_item_line'),
                        name: 'line',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-port-arrive',
                        fieldLabel: _('orders_item_port_arrive'),
                        name: 'port_arrive',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_port_arrive_date'),
                        name: 'port_arrive_date',
                        anchor: '90%',
                        disabled: true,
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
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_vdt'),
                        name: 'vdt',
                        anchor: '90%',
                        disabled: true,
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
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    labelWidth: 140,
                    items: [{
                        xtype: 'button',
                        scope: this,
                        cls: 'x-btn-icon icon-file_upload',
                        tooltip: {text: _('upload_files')},
                        handler: function(btn,e) {
                            orders.utils.uploadFiles(btn,e,Ext.getCmp(config.id + '-id').getValue());
                        }
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
                                    orders.utils.renderAddress(config.id);
                                }
                            }
                        },
                    }, {
                        xtype: 'orders-combo-company-warehouse',
                        fieldLabel: _('orders_item_company_warehouse'),
                        name: 'company_warehouse',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_contact_person'),
                        name: 'contact_person',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_contact_person_phone'),
                        name: 'contact_person_phone',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-address-container',
                        fieldLabel: _('orders_item_address_container'),
                        name: 'address_container',
                        anchor: '99%',
                    }, {
                        xtype: 'textarea',
                        fieldLabel: _('orders_item_note_3'),
                        name: 'note_3',
                        anchor: '99%',
                        height: 239,
                    }]
                }]
            }];
    },

    getOrderFieldsTab3: function (config) {
        return [{
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px;text-align:center;',
            items: [{
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_shipper_2'),
                    name: 'shipper_2',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_bl_2'),
                    name: 'bl_2',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_agent_2'),
                    name: 'agent_2',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_invoice_2'),
                    name: 'invoice_2',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_ready_date_2'),
                    name: 'ready_date_2',
                    anchor: '88%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_goods_2'),
                    name: 'goods_2',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_cbm_2'),
                    name: 'cbm_2',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_kgs_2'),
                    name: 'kgs_2',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_ctn_2'),
                    name: 'ctn_2',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_s_2'),
                    name: 'note_s_2',
                    anchor: '99%',
                    height: 239,
                    disabled: true,
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_shipper_3'),
                    name: 'shipper_3',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_bl_3'),
                    name: 'bl_3',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_agent_3'),
                    name: 'agent_3',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_invoice_3'),
                    name: 'invoice_3',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_ready_date_3'),
                    name: 'ready_date_3',
                    anchor: '88%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_goods_3'),
                    name: 'goods_3',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_cbm_3'),
                    name: 'cbm_3',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_kgs_3'),
                    name: 'kgs_3',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_ctn_3'),
                    name: 'ctn_3',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_s_3'),
                    name: 'note_s_3',
                    anchor: '99%',
                    height: 239,
                    disabled: true,
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_shipper_4'),
                    name: 'shipper_4',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_bl_4'),
                    name: 'bl_4',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_agent_4'),
                    name: 'agent_4',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_invoice_4'),
                    name: 'invoice_4',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_ready_date_4'),
                    name: 'ready_date_4',
                    anchor: '88%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_goods_4'),
                    name: 'goods_4',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_cbm_4'),
                    name: 'cbm_4',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_kgs_4'),
                    name: 'kgs_4',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_ctn_4'),
                    name: 'ctn_4',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_s_4'),
                    name: 'note_s_4',
                    anchor: '99%',
                    height: 239,
                    disabled: true,
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_shipper_5'),
                    name: 'shipper_5',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_bl_5'),
                    name: 'bl_5',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_agent_5'),
                    name: 'agent_5',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_invoice_5'),
                    name: 'invoice_5',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_ready_date_5'),
                    name: 'ready_date_5',
                    anchor: '88%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_goods_5'),
                    name: 'goods_5',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_cbm_5'),
                    name: 'cbm_5',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_kgs_5'),
                    name: 'kgs_5',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_ctn_5'),
                    name: 'ctn_5',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_s_5'),
                    name: 'note_s_5',
                    anchor: '99%',
                    height: 239,
                    disabled: true,
                }]
            }]
        }];
    },
}