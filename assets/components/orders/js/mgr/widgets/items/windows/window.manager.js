CreateItemManager = {
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
        }, {
            layout: 'form',
            title: _('orders_item_tab_calculations'),
            hideMode: 'offsets',
            //bodyStyle: 'padding:5px 0;',
            defaults: {msgTarget: 'under', border: false},
            items: this.getOrderFieldsTab4(config),
        }, {
            layout: 'form',
            title: _('orders_item_tab_temporarily'),
            hideMode: 'offsets',
            //bodyStyle: 'padding:5px 0;',
            defaults: {msgTarget: 'under', border: false},
            items: this.getOrderFieldsTab2(config),
        }];

        return tabs;
    },

    getOrderFields: function (config) {
        var fields = [];

        var mainBlock = {
                layout: 'column',
                defaults: {msgTarget: 'side', border: false},
                style: 'padding:15px 5px;text-align:center;',
                items: [{
                    columnWidth: .33,
                    layout: 'form',
                    labelWidth: 160,
                    items: [{
                        id: config.id + '-manager',
                        xtype: 'orders-combo-manager',
                        fieldLabel: _('orders_item_manager'),
                        name: 'manager',
                        anchor: '99%',
                        listeners: {
                            render: {
                                fn: function (r) {
                                    orders.utils.renderManager(config.id);
                                }
                            }
                        },
                    }, {
                        id: config.id + '-manager2',
                        xtype: 'orders-combo-manager',
                        fieldLabel: _('orders_item_manager2'),
                        name: 'manager2',
                        anchor: '99%',
                        listeners: {
                            render: {
                                fn: function (r) {
                                    orders.utils.renderManager2(config.id);
                                }
                            }
                        },
                    }, {
                        xtype: 'fieldset',
                        layout: 'form',
                        style: 'padding:15px 0;text-align:center;',
                        cls: 'fieldset-border',
                        defaults: {msgTarget: 'under'},
                        items: [{
                            id: config.id + '-client',
                            xtype: 'orders-combo-client',
                            fieldLabel: _('orders_item_client'),
                            name: 'client',
                            anchor: '100%',
                            listeners: {
                                select: {
                                    fn: function (r) {
                                        orders.utils.selectClient(config.id);
                                    },
                                    scope: this
                                }
                            }
                        }]
                    }, {
                        id: config.id + '-goods',
                        xtype: 'orders-combo-goods',
                        fieldLabel: _('orders_item_goods'),
                        name: 'goods',
                        anchor: '99%',
                        listeners: {
                            render: {
                                fn: function (r) {
                                    orders.utils.renderGoods(config.id);
                                }
                            }
                        },
                    }, {
                        id: config.id + '-sender',
                        xtype: 'orders-combo-sender',
                        fieldLabel: _('orders_item_sender'),
                        name: 'sender',
                        anchor: '99%',
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
                    }, {
                        xtype: 'orders-combo-forwarder',
                        fieldLabel: _('orders_item_forwarder'),
                        name: 'forwarder',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-port-departure',
                        fieldLabel: _('orders_item_port_departure'),
                        name: 'port_departure',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-delivery-term',
                        fieldLabel: _('orders_item_delivery_term'),
                        name: 'delivery_term',
                        anchor: '99%',
                    }, {
                        xtype: 'orders-combo-city-delivery',
                        fieldLabel: _('orders_item_city_delivery'),
                        name: 'city_delivery',
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
                        xtype: 'orders-combo-row-color',
                        fieldLabel: _('orders_item_color'),
                        name: 'color',
                        anchor: '99%',
                        disabled: true,
                    }]
                }, {
                    columnWidth: .39,
                    layout: 'form',
                    labelWidth: 90,
                    items: [{
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'text-align:center;',
                        items: [{
                            columnWidth: .46,
                            layout: 'form',
                            labelWidth: 90,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_application_date'),
                                name: 'application_date',
                                anchor: '86%',
                            }]
                        }, {
                            columnWidth: .54,
                            layout: 'form',
                            labelWidth: 111,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_availability_date'),
                                name: 'availability_date',
                                anchor: '85%',
                            }]
                        }]
                    }, {
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'text-align:center;',
                        items: [{
                            columnWidth: .46,
                            layout: 'form',
                            labelWidth: 90,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_port_departure_date'),
                                name: 'port_departure_date',
                                anchor: '86%',
                                disabled: true,
                            }]
                        }, {
                            columnWidth: .54,
                            layout: 'form',
                            labelWidth: 111,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_port_arrive_date'),
                                name: 'port_arrive_date',
                                anchor: '85%',
                                disabled: true,
                            }]
                        }]
                    }, {
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 0;text-align:center;',
                        items: [{
                            columnWidth: .46,
                            layout: 'form',
                            labelWidth: 90,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_release_date'),
                                name: 'release_date',
                                anchor: '86%',
                                disabled: true,
                            }]
                        }, {
                            columnWidth: .54,
                            layout: 'form',
                            labelWidth: 111,
                            items: [{
                                xtype: 'xcheckbox',
                                fieldLabel: _('orders_item_release'),
                                name: 'release',
                                anchor: '58%',
                                boxLabel: _('orders_item_release_label'),
                                checked: false,
                                inputValue: 1,
                                disabled: true,
                            }]
                        }]
                    }, {
                        xtype: 'orders-combo-agent-railway',
                        fieldLabel: _('orders_item_agent_railway'),
                        name: 'agent_railway',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        xtype: 'orders-combo-station-train-arrive',
                        fieldLabel: _('orders_item_station_train_arrive'),
                        name: 'station_train_arrive',
                        anchor: '99%',
                        disabled: true,
                    }, {
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 0 0 0;text-align:center;',
                        items: [{
                            columnWidth: .46,
                            layout: 'form',
                            labelWidth: 90,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_train_arrive_date'),
                                name: 'train_arrive_date',
                                anchor: '86%',
                                disabled: true,
                            }]
                        }, {
                            columnWidth: .54,
                            layout: 'form',
                            labelWidth: 111,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: _('orders_item_distance_to_station'),
                                name: 'distance_to_station',
                                anchor: '99%',
                                disabled: true,
                            }]
                        }]
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
                                    orders.utils.renderAddress(config.id);
                                }
                            }
                        },
                    }, {
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 0;text-align:center;',
                        items: [{
                            columnWidth: .46,
                            layout: 'form',
                            labelWidth: 90,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_export_from_station_real'),
                                name: 'export_from_station_real',
                                anchor: '86%',
                                disabled: true,
                            }]
                        }, {
                            columnWidth: .54,
                            layout: 'form',
                            labelWidth: 111,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_delivery_date'),
                                name: 'delivery_date',
                                anchor: '85%',
                                disabled: true,
                            }]
                        }]
                    }, {
                        xtype: 'textarea',
                        fieldLabel: _('orders_item_note_3'),
                        name: 'note_3',
                        anchor: '99%',
                        height: 50,
                        disabled: true,
                    }, {
                        xtype: 'textarea',
                        fieldLabel: _('orders_item_note'),
                        name: 'note',
                        anchor: '99%',
                        height: 239,
                    }]
                }, {
                    columnWidth: .27,
                    layout: 'form',
                    labelWidth: 75,
                    items: [{
                        xtype: 'textarea',
                        fieldLabel: _('orders_item_note_2'),
                        name: 'note_2',
                        anchor: '99%',
                        height: 125,
                        disabled: true,
                    }, {
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 0;text-align:center;',
                        items: [{
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 75,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: _('orders_item_rate_rur'),
                                name: 'rate_rur',
                                anchor: '99%',
                            }]
                        }, {
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 70,
                            items: []
                        }]
                    }, {
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 0;text-align:center;',
                        items: [{
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 75,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: _('orders_item_rate_usd'),
                                name: 'rate_usd',
                                anchor: '99%',
                            }]
                        }, {
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 70,
                            items: [{
                                xtype: 'orders-combo-yes-no',
                                fieldLabel: _('orders_item_closed_3'),
                                name: 'closed_3',
                                anchor: '99%',
                            }]
                        }]
                    }, {
                        xtype: 'fieldset',
                        layout: 'form',
                        style: 'text-align:center;border: 2px solid #ffffff;',
                        defaults: {msgTarget: 'under'},
                        items: [{
                            layout: 'column',
                            defaults: {msgTarget: 'under', border: false},
                            style: 'padding:15px 0;text-align:center;',
                            items: [{
                                columnWidth: .5,
                                layout: 'form',
                                labelWidth: 75,
                                items: [{
                                    xtype: 'textfield',
                                    fieldLabel: _('orders_item_tax_payments'),
                                    name: 'tax_payments',
                                    anchor: '99%',
                                }]
                            }, {
                                columnWidth: .5,
                                layout: 'form',
                                labelWidth: 70,
                                items: [{
                                    xtype: 'textfield',
                                    fieldLabel: _('orders_item_tax_payments_nds'),
                                    name: 'tax_payments_nds',
                                    anchor: '99%',
                                }]
                            }]
                        }, {
                            layout: 'column',
                            defaults: {msgTarget: 'under', border: false},
                            style: 'padding:15px 0;text-align:center;',
                            items: [{
                                columnWidth: .5,
                                layout: 'form',
                                labelWidth: 75,
                                items: [{
                                    xtype: 'textfield',
                                    fieldLabel: _('orders_item_customs_fee'),
                                    name: 'customs_fee',
                                    anchor: '99%',
                                }]
                            }, {
                                columnWidth: .5,
                                layout: 'form',
                                labelWidth: 70,
                                items: []
                            }]
                        }]
                    }, {
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 0;text-align:center;',
                        items: [{
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 75,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: _('orders_item_contact_person'),
                                name: 'contact_person',
                                anchor: '99%',
                            }]
                        }, {
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 70,
                            items: [{
                                xtype: 'orders-combo-yes-no',
                                fieldLabel: _('orders_item_closed_5'),
                                name: 'closed_5',
                                anchor: '99%',
                            }]
                        }]
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
                        xtype: 'orders-combo-xdates',
                        fieldLabel: _('orders_item_date_1c'),
                        name: 'date_1c',
                        anchor: '88%',
                        disabled: true,
                    }, {
                        xtype: 'fieldset',
                        layout: 'form',
                        style: 'padding:15px 5px;text-align:center;border: 2px solid #ffffff;',
                        defaults: {msgTarget: 'under'},
                        items: [{
                            xtype: 'orders-combo-xdates',
                            fieldLabel: _('orders_item_date_1c'),
                            name: 'date_1c',
                            anchor: '92%',
                            disabled: true,
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('orders_item_stavki'),
                            name: 'stavki',
                            anchor: '99%',
                            disabled: true,
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('orders_item_perevodi'),
                            name: 'perevodi',
                            anchor: '99%',
                            disabled: true,
                        }]
                    }]
                }]
            };
        fields.push(this.getOrderFieldsTopBlock(config));
        fields.push(mainBlock);
        return fields;
    },

    getOrderFieldsTopBlock: function (config) {
        var topFields = [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
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
                disabled: true,
            }]
        }, {
            columnWidth: .165,
            layout: 'form',
            labelWidth: 90,
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
                disabled: true,
            }]
        }, {
            columnWidth: .17,
            layout: 'form',
            labelWidth: 80,
            items: [{
                xtype: 'textfield',
                fieldLabel: _('orders_item_bill_entry_number'),
                name: 'bill_entry_number',
                anchor: '99%',
                disabled: true,
            }]
        }, {
            columnWidth: .04,
            layout: 'form',
            items: [{
                xtype: 'button',
                scope: this,
                enableToggle: true,
                iconCls : 'icon icon-xls',
                handler: function() {
                    orders.utils.renderXLS(config.id);
                },
                tooltip: _('orders_item_xls_title_text'),
                tooltipType: 'title'
            }]
        }, {
            columnWidth: .04,
            layout: 'form',
            items: [{
                xtype: 'button',
                scope: this,
                enableToggle: false,
                iconCls : 'icon icon-mail-forward',
                handler: function() {
                    orders.utils.sendEmail(config.id);
                },
                tooltip: _('orders_item_email_title_text'),
                tooltipType: 'title'
            }]
        }];

        var sendFileIcon = {
            columnWidth: .04,
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
        };

        var directoryIcon = {
            columnWidth: .04,
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
        };

        if(config.xtype == 'orders-item-window-update') {
            topFields.push(directoryIcon);
            topFields.push(sendFileIcon);
        }

        var topBlock = {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px;text-align:center;',
            items: topFields
        };

        return topBlock;
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
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_d_application_4'),
                    name: 'd_application_4',
                    anchor: '88%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-payment-form',
                    fieldLabel: _('orders_item_payment_form'),
                    name: 'payment_form',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_total'),
                    name: 'total',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_total_2'),
                    name: 'total_2',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_total_3'),
                    name: 'total_3',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_total_4'),
                    name: 'total_4',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_account_number_3'),
                    name: 'account_number_3',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_d_payment'),
                    name: 'd_payment',
                    anchor: '88%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_d_payment_4'),
                    name: 'd_payment_4',
                    anchor: '88%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_d_closed'),
                    name: 'd_closed',
                    anchor: '88%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_exw'),
                    name: 'exw',
                    anchor: '99%',
                    disabled: true,
                }, {
                    id: config.id + '-platej',
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_platej'),
                    name: 'platej',
                    anchor: '99%',
                    disabled: true,
                }, {
                    id: config.id + '-itogo',
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_itogo'),
                    name: 'itogo',
                    anchor: '99%',
                    readOnly: true,
                    fieldClass: 'x-item-disabled'
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_exchange_rate'),
                    name: 'exchange_rate',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_booking'),
                    name: 'booking',
                    anchor: '90%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_factory_supply'),
                    name: 'factory_supply',
                    anchor: '90%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_pdt'),
                    name: 'pdt',
                    anchor: '90%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_examination'),
                    name: 'examination',
                    anchor: '90%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_examined'),
                    name: 'examined',
                    anchor: '90%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_vdt'),
                    name: 'vdt',
                    anchor: '90%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_train_departure_date'),
                    name: 'train_departure_date',
                    anchor: '90%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_stations'),
                    name: 'stations',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_export_from_station'),
                    name: 'export_from_station',
                    anchor: '90%',
                    disabled: true,
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_4'),
                    name: 'note_4',
                    anchor: '99%',
                    height: 125,
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_com_zebra'),
                    name: 'com_zebra',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-company-warehouse',
                    fieldLabel: _('orders_item_company_warehouse'),
                    name: 'company_warehouse',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_contact_person_phone'),
                    name: 'contact_person_phone',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_delivery_container_date'),
                    name: 'delivery_container_date',
                    anchor: '90%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-address-container',
                    fieldLabel: _('orders_item_address_container'),
                    name: 'address_container',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'orders-combo-car-carrier',
                    fieldLabel: _('orders_item_car_carrier'),
                    name: 'car_carrier',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_car_carrier_rate'),
                    name: 'car_carrier_rate',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_car_number'),
                    name: 'car_number',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_driver'),
                    name: 'driver',
                    anchor: '99%',
                    disabled: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_driver_phone'),
                    name: 'driver_phone',
                    anchor: '99%',
                    disabled: true,
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
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_bl_2'),
                    name: 'bl_2',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_agent_2'),
                    name: 'agent_2',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_invoice_2'),
                    name: 'invoice_2',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_ready_date_2'),
                    name: 'ready_date_2',
                    anchor: '88%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_goods_2'),
                    name: 'goods_2',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_cbm_2'),
                    name: 'cbm_2',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_kgs_2'),
                    name: 'kgs_2',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_ctn_2'),
                    name: 'ctn_2',
                    anchor: '99%',
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_s_2'),
                    name: 'note_s_2',
                    anchor: '99%',
                    height: 239,
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_shipper_3'),
                    name: 'shipper_3',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_bl_3'),
                    name: 'bl_3',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_agent_3'),
                    name: 'agent_3',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_invoice_3'),
                    name: 'invoice_3',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_ready_date_3'),
                    name: 'ready_date_3',
                    anchor: '88%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_goods_3'),
                    name: 'goods_3',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_cbm_3'),
                    name: 'cbm_3',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_kgs_3'),
                    name: 'kgs_3',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_ctn_3'),
                    name: 'ctn_3',
                    anchor: '99%',
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_s_3'),
                    name: 'note_s_3',
                    anchor: '99%',
                    height: 239,
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_shipper_4'),
                    name: 'shipper_4',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_bl_4'),
                    name: 'bl_4',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_agent_4'),
                    name: 'agent_4',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_invoice_4'),
                    name: 'invoice_4',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_ready_date_4'),
                    name: 'ready_date_4',
                    anchor: '88%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_goods_4'),
                    name: 'goods_4',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_cbm_4'),
                    name: 'cbm_4',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_kgs_4'),
                    name: 'kgs_4',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_ctn_4'),
                    name: 'ctn_4',
                    anchor: '99%',
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_s_4'),
                    name: 'note_s_4',
                    anchor: '99%',
                    height: 239,
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_shipper_5'),
                    name: 'shipper_5',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_bl_5'),
                    name: 'bl_5',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_agent_5'),
                    name: 'agent_5',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_invoice_5'),
                    name: 'invoice_5',
                    anchor: '99%',
                }, {
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_ready_date_5'),
                    name: 'ready_date_5',
                    anchor: '88%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_goods_5'),
                    name: 'goods_5',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_cbm_5'),
                    name: 'cbm_5',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_kgs_5'),
                    name: 'kgs_5',
                    anchor: '99%',
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_ctn_5'),
                    name: 'ctn_5',
                    anchor: '99%',
                }, {
                    xtype: 'textarea',
                    fieldLabel: _('orders_item_note_s_5'),
                    name: 'note_s_5',
                    anchor: '99%',
                    height: 239,
                }]
            }]
        }];
    },

    getOrderFieldsTab4: function (config) {
        return [{
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px 30px 40px;text-align:center;',
            items: [{
                columnWidth: .55,
                layout: 'form',
                labelWidth: 75,
                items: [{
                    title: ' ',
                }]
            }, {
                columnWidth: .15,
                layout: 'form',
                labelWidth: 75,
                items: [{
                    id: config.id + '-kursgtd',
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_kursgtd'),
                    name: 'kursgtd',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .15,
                layout: 'form',
                labelWidth: 75,
                items: [{
                    id: config.id + '-euro_rate',
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_euro_rate'),
                    anchor: '99%',
                    name: 'euro_rate',
                    listeners: {
                        change: {
                            fn: function (r) {
                                orders.utils.valDIVIDEkursgtd(config.id, 'euro_rate', 'cros_rate');
                            },
                            scope: this
                        }
                    }
                }]
            }, {
                columnWidth: .15,
                layout: 'form',
                labelWidth: 70,
                items: [{
                    id: config.id + '-cros_rate',
                    xtype: 'textfield',
                    fieldLabel: _('orders_item_cros_rate'),
                    anchor: '99%',
                    name: 'cros_rate',
                    readOnly: true,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0;text-align:center;color:FireBrick;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_title1'),
                    region: 'center',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_title2'),
                    region: 'center',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_title3'),
                    region: 'center',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_title4'),
                    region: 'center',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_title5'),
                    region: 'center',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_title6'),
                    region: 'center',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_title7'),
                    region: 'center',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_title8'),
                    region: 'center',
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_label1'),
                    region: 'center',
                    style: 'padding-top: 7px',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_1',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    //fieldLabel: _('orders_item_closed_2'),
                    name: 'closed_2',
                    anchor: '99%',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    //fieldLabel: _('orders_item_currency_4'),
                    name: 'currency_4',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    id: config.id + '-stavrubsum',
                    xtype: 'textfield',
                    name: 'stavrubsum',
                    anchor: '99%',
                    listeners: {
                        change: {
                            fn: function (r) {
                                orders.utils.valDIVIDEkursgtd(config.id, 'stavrubsum', 'stavrub');
                            },
                            scope: this
                        }
                    }
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    id: config.id + '-stavrub',
                    xtype: 'textfield',
                    name: 'stavrub',
                    anchor: '99%',
                    readOnly: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'stavrubnsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'stavrubpr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_label2'),
                    region: 'center',
                    style: 'padding-top: 7px',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_2',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    //fieldLabel: _('orders_item_closed_4'),
                    name: 'closed_4',
                    anchor: '99%',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    name: 'tpusdval',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'tpusdsum',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'tpusd',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'tpusdnsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'tpusdpr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_label3'),
                    region: 'center',
                    style: 'padding-top: 7px',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_3',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'pstat',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    name: 'pstatval',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pstatsum',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pstatusd',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pstatnsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'pstatpr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_label4'),
                    region: 'center',
                    style: 'padding-top: 7px',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_4',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'exwstat',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    //fieldLabel: _('orders_item_currency_3'),
                    name: 'currency_3',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'exwstatsum',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'exwstatusd',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'account_number_4',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'exwstatpr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_label5'),
                    region: 'center',
                    style: 'padding-top: 7px',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_5',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'frstat',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    //fieldLabel: _('orders_item_currency'),
                    name: 'currency',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    id: config.id + '-frusdsum',
                    xtype: 'textfield',
                    name: 'frusdsum',
                    anchor: '99%',
                    listeners: {
                        change: {
                            fn: function (r) {

                            },
                            scope: this
                        }
                    }
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    id: config.id + '-frusd',
                    xtype: 'textfield',
                    name: 'frusd',
                    anchor: '99%',
                    readOnly: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'account_number',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'frusdpr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                items: [{
                    title: _('orders_item_tab4_label6'),
                    region: 'center',
                    style: 'padding-top: 7px',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_6',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    //fieldLabel: _('orders_item_closed'),
                    name: 'closed',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    //fieldLabel: _('orders_item_currency_2'),
                    name: 'currency_2',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    id: config.id + '-tautosum',
                    xtype: 'textfield',
                    name: 'tautosum',
                    anchor: '99%',
                    listeners: {
                        change: {
                            fn: function (r) {
                                orders.utils.valDIVIDEkursgtd(config.id, 'tautosum', 'stauto');
                            },
                            scope: this
                        }
                    }
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    id: config.id + '-stauto',
                    xtype: 'textfield',
                    name: 'stauto',
                    anchor: '99%',
                    readOnly: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'account_number_2',
                    anchor: '99%',
                    disabled: true,
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'stautopr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-cost',
                    name: 'prochee_1',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_7',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'prochstat_1',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    name: 'prval1',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'prsum1',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr1',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr1nsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'pr1pr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-cost',
                    name: 'prochee_2',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_8',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'prochstat_2',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    name: 'prval2',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'prsum2',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr2',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr2nsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'pr2pr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-cost',
                    name: 'prochee_3',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_9',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'prochstat_3',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    name: 'prval3',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'prsum3',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr3',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr3nsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'pr3pr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-cost',
                    name: 'prochee_4',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_10',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'prochstat_4',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    name: 'prval4',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'prsum4',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr4',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr4nsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'pr4pr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-cost',
                    name: 'prochee_5',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_11',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'prochstat_5',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    name: 'prval5',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'prsum5',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr5',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr5nsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'pr5pr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-cost',
                    name: 'prochee_6',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_12',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'prochstat_6',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    name: 'prval6',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'prsum6',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr6',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr6nsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'pr6pr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:0 0 10px 0;text-align:center;',
            items: [{
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-cost',
                    name: 'prochee_7',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-agent2',
                    name: 'r_agent_13',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-yes-no',
                    name: 'prochstat_7',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'orders-combo-currency',
                    name: 'prval7',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'prsum7',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr7',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textfield',
                    name: 'pr7nsh',
                    anchor: '99%'
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    xtype: 'textarea',
                    name: 'pr7pr',
                    anchor: '99%',
                    height: 50,
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px 0 40px;text-align:center;',
            items: [{
                columnWidth: .62,
                layout: 'form',
                labelWidth: 75,
                items: [{
                    title: ' ',
                }]
            }, {
                columnWidth: .125,
                layout: 'form',
                labelWidth: 45,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Итого',
                    anchor: '99%',
                    name: '',
                }]
            }, {
                columnWidth: .255,
                layout: 'form',
                labelWidth: 1,
                items: [{
                    title: ' ',
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px 30px 40px;text-align:center;',
            items: [{
                columnWidth: .82,
                layout: 'form',
                labelWidth: 75,
                items: [{
                    title: ' ',
                }]
            }, {
                columnWidth: .18,
                layout: 'form',
                labelWidth: 75,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Прибыль',
                    anchor: '99%',
                    name: '',
                }]
            }]
        }]
    }
}