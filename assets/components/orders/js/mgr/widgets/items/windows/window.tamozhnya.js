UpdateItemTamozhnya = {getTabs: function (config) {
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
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_bl'),
                        name: 'bl',
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
                        listeners: {
                            select: {
                                fn: function (r) {
                                    orders.utils.selectClient(config.id);
                                },
                                scope: this
                            }
                        },
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-goods',
                        fieldLabel: _('orders_item_goods'),
                        name: 'goods',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-line',
                        fieldLabel: _('orders_item_line'),
                        name: 'line',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-port-departure',
                        fieldLabel: _('orders_item_port_departure'),
                        name: 'port_departure',
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
                    }, {
                        id: config.id + '-sender',
                        xtype: 'orders-combo-sender',
                        fieldLabel: _('orders_item_sender'),
                        name: 'sender',
                        anchor: '99%',
                        disabled: true,
                        listeners: {
                            render: {
                                fn: function (r) {
                                    orders.utils.renderSender(config.id);
                                }
                            }
                        },
                    }, {
                        xtype: 'orders-combo-receiver',
                        fieldLabel: _('orders_item_receiver'),
                        name: 'receiver',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-delivery-term-receiver',
                        fieldLabel: _('orders_item_delivery_term_receiver'),
                        name: 'delivery_term_receiver',
                        anchor: '99%',
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
                    }, {
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
                        xtype: 'textarea',
                        fieldLabel: _('orders_item_note_2'),
                        name: 'note_2',
                        anchor: '99%',
                        height: 330,
                    }]
                }, {
                    columnWidth: .33,
                    layout: 'form',
                    labelWidth: 100,
                    items: [{
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'text-align:center;',
                        items: [{
                            columnWidth: .1,
                            layout: 'form',
                            items: [{
                                xtype: 'button',
                                scope: this,
                                cls: 'x-btn-icon icon-folder directoryIcon',
                                tooltip: {text: _('orders_item_directory_files')},
                                handler: function(btn,e) {
                                    MODx.perm.directory_create = false;
                                    MODx.perm.file_create = false;
                                    var browser = MODx.load({
                                        xtype: 'modx-browser',
                                        id: Ext.id(),
                                        multiple: true,
                                        source: orders.config['source'],
                                        openTo: config.record.object.id + '/',
                                        rootId: config.record.object.id + '/',
                                        rootVisible: false,
                                        hideSourceCombo: true,
                                    });
                                    browser.show();
                                }
                            }]
                        }, {
                            columnWidth: .1,
                            layout: 'form',
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
                        id: config.id + '-kursgtd',
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_kursgtd'),
                        name: 'kursgtd',
                        anchor: '99%',
                        listeners: {
                            change: {
                                fn: function (r) {
                                    orders.utils.valDIVIDEkursgtd(config.id, 'platej', 'itogo');
                                },
                                scope: this
                            }
                        }
                    }, {
                        id: config.id + '-platej',
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_platej'),
                        name: 'platej',
                        anchor: '99%',
                        listeners: {
                            change: {
                                fn: function (r) {
                                    orders.utils.valDIVIDEkursgtd(config.id, 'platej', 'itogo');
                                },
                                scope: this
                            }
                        }
                    }, {
                        id: config.id + '-itogo',
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_itogo'),
                        name: 'itogo',
                        anchor: '99%',
                        readOnly: true,
                        fieldClass: 'x-item-disabled'
                    }, {
                        xtype: 'orders-combo-yes-no',
                        fieldLabel: _('orders_item_closed_6'),
                        name: 'closed_6',
                        anchor: '99%',
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