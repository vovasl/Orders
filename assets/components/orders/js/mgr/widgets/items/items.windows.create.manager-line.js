CreateItemLineManager = {
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
                        xtype: 'textarea',
                        fieldLabel: _('orders_item_note'),
                        name: 'note',
                        anchor: '99%',
                        height: 239,
                    }, {
                        xtype: 'orders-combo-row-color',
                        fieldLabel: _('orders_item_color'),
                        name: 'color',
                        anchor: '99%',
                    }]
                }, {
                    columnWidth: .24,
                    layout: 'form',
                    labelWidth: 160,
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
                        xtype: 'xcheckbox',
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
                        anchor: '90%',
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
                    }]
                }, {
                    columnWidth: .43,
                    layout: 'form',
                    labelWidth: 160,
                    items: [{
                        xtype: 'textarea',
                        fieldLabel: _('orders_item_note_2'),
                        name: 'note_2',
                        anchor: '100%',
                        height: 50,
                    }, {
                        xtype: 'orders-combo-accounts-note',
                        fieldLabel: _('orders_item_accounts'),
                        name: 'accounts',
                        anchor: '100%',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: _('orders_item_rate_rur'),
                        name: 'rate_rur',
                        anchor: '100%',
                    }, {
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 0;text-align:center;',
                        items: [{
                            columnWidth: .33,
                            layout: 'form',
                            labelWidth: 85,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: _('orders_item_exw'),
                                name: 'exw',
                                anchor: '100%',
                            }]
                        }, {
                            columnWidth: .33,
                            layout: 'form',
                            labelWidth: 55,
                            items: [{
                                xtype: 'orders-combo-currency',
                                fieldLabel: _('orders_item_currency_3'),
                                name: 'currency_3',
                                anchor: '100%',
                            }]
                        }, {
                            columnWidth: .34,
                            layout: 'form',
                            labelWidth: 55,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: _('orders_item_account_number_4'),
                                name: 'account_number_4',
                                anchor: '100%',
                            }]
                        }]
                    }, /*{
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 5px;text-align:center;',
                        items: [{
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 75,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_d_application_4'),
                                name: 'd_application_4',
                                anchor: '88%',
                                disabled: true,
                            }]
                        }, {
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 75,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_d_payment_4'),
                                name: 'd_payment_4',
                                anchor: '88%',
                                disabled: true,
                            }]
                        }]
                    }, */{
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 0;text-align:center;',
                        items: [{
                            columnWidth: .33,
                            layout: 'form',
                            labelWidth: 85,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: _('orders_item_total'),
                                name: 'total',
                                anchor: '100%',
                            }]
                        }, {
                            columnWidth: .33,
                            layout: 'form',
                            labelWidth: 55,
                            items: [{
                                xtype: 'orders-combo-currency',
                                fieldLabel: _('orders_item_currency'),
                                name: 'currency',
                                anchor: '100%',
                            }]
                        }, {
                            columnWidth: .34,
                            layout: 'form',
                            labelWidth: 55,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: _('orders_item_account_number'),
                                name: 'account_number',
                                anchor: '100%',
                            }]
                        }]
                    }, /*{
                        layout: 'column',
                        defaults: {msgTarget: 'under', border: false},
                        style: 'padding:15px 5px;text-align:center;',
                        items: [{
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 75,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_d_application'),
                                name: 'd_application',
                                anchor: '88%',
                                disabled: true,
                            }]
                        }, {
                            columnWidth: .5,
                            layout: 'form',
                            labelWidth: 75,
                            items: [{
                                xtype: 'orders-combo-xdates',
                                fieldLabel: _('orders_item_d_payment'),
                                name: 'd_payment',
                                anchor: '88%',
                                disabled: true,
                            }]
                        }]
                    }, */{
                        xtype: 'fieldset',
                        layout: 'form',
                        style: 'padding:15px 5px;text-align:center;border: 2px solid #ffffff;',
                        defaults: {msgTarget: 'under'},
                        items: [{
                            xtype: 'orders-combo-company-warehouse',
                            fieldLabel: _('orders_item_company_warehouse'),
                            name: 'company_warehouse',
                            anchor: '100%',
                        }, {
                            id: config.id + '-address',
                            xtype: 'orders-combo-address',
                            fieldLabel: _('orders_item_address'),
                            name: 'address',
                            anchor: '100%',
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
                                columnWidth: .5,
                                layout: 'form',
                                labelWidth: 75,
                                items: [{
                                    xtype: 'orders-combo-xdates',
                                    fieldLabel: _('orders_item_export_from_station_real'),
                                    name: 'export_from_station_real',
                                    anchor: '84%',
                                }]
                            }, {
                                columnWidth: .5,
                                layout: 'form',
                                labelWidth: 80,
                                items: [{
                                    xtype: 'orders-combo-xdates',
                                    fieldLabel: _('orders_item_delivery_date'),
                                    name: 'delivery_date',
                                    anchor: '85%',
                                }]
                            }]
                        }, {
                            xtype: 'orders-combo-xdates',
                            fieldLabel: _('orders_item_delivery_container_date'),
                            name: 'delivery_container_date',
                            anchor: '93%',
                        }, {
                            xtype: 'orders-combo-address-container',
                            fieldLabel: _('orders_item_address_container'),
                            name: 'address_container',
                            anchor: '100%',
                        }, {
                            xtype: 'orders-combo-car-carrier',
                            fieldLabel: _('orders_item_car_carrier'),
                            name: 'car_carrier',
                            anchor: '100%',
                        }, {
                            layout: 'column',
                            defaults: {msgTarget: 'under', border: false},
                            style: 'padding:15px 0;text-align:center;',
                            items: [{
                                columnWidth: .33,
                                layout: 'form',
                                labelWidth: 85,
                                items: [{
                                    xtype: 'textfield',
                                    fieldLabel: _('orders_item_car_carrier_rate'),
                                    name: 'car_carrier_rate',
                                    anchor: '100%',
                                }]
                            }, {
                                columnWidth: .33,
                                layout: 'form',
                                labelWidth: 55,
                                items: [{
                                    xtype: 'orders-combo-currency',
                                    fieldLabel: _('orders_item_currency_2'),
                                    name: 'currency_2',
                                    anchor: '100%',
                                }]
                            }, {
                                columnWidth: .34,
                                layout: 'form',
                                labelWidth: 55,
                                items: [{
                                    xtype: 'textfield',
                                    fieldLabel: _('orders_item_account_number_2'),
                                    name: 'account_number_2',
                                    anchor: '100%',
                                }]
                            }]
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('orders_item_car_number'),
                            name: 'car_number',
                            anchor: '100%',
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('orders_item_driver'),
                            name: 'driver',
                            anchor: '100%',
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('orders_item_driver_phone'),
                            name: 'driver_phone',
                            anchor: '100%',
                        }, {
                            xtype: 'textarea',
                            fieldLabel: _('orders_item_note_3'),
                            name: 'note_3',
                            anchor: '100%',
                            height: 50,
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
            columnWidth: .18,
            layout: 'form',
            labelWidth: 80,
            items: [{
                xtype: 'textfield',
                fieldLabel: _('orders_item_bill_entry_number'),
                name: 'bill_entry_number',
                anchor: '99%',
            }]
        }, {
            columnWidth: .05,
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
            columnWidth: .05,
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
            columnWidth: .05,
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

        if(config.xtype == 'orders-item-window-update') {
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
                    xtype: 'orders-combo-payment-form',
                    fieldLabel: _('orders_item_payment_form'),
                    name: 'payment_form',
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
                    fieldLabel: _('orders_item_account_number_3'),
                    name: 'account_number_3',
                    anchor: '99%',
                }]
            }, {
                columnWidth: .25,
                layout: 'form',
                items: [{
                    xtype: 'orders-combo-xdates',
                    fieldLabel: _('orders_item_d_closed'),
                    name: 'd_closed',
                    anchor: '88%',
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
                    fieldLabel: _('orders_item_closed_5'),
                    name: 'closed_5',
                    anchor: '99%',
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
}