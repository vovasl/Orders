UpdateItemTamozhnya = {getTabs: function (config) {
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
                }]
            }];
    },
}