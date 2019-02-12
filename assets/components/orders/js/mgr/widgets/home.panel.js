orders.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'orders-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            html: '<h2>' + _('orders') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: this.getTabs(config),
        }]
    });
    orders.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(orders.panel.Home, MODx.Panel, {
    getTabs: function() {
        var ordersTab = {
            title: _('orders_item_title'),
            layout: 'anchor',
            items: [{
                xtype: 'orders-grid-items',
                cls: 'main-wrapper',
            }]
        };
        var managerTab = {
            title: _('orders_manager_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_manager_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-managers',
                cls: 'main-wrapper',
            }]
        };
        var goodsTab = {
            title: _('orders_goods_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_goods_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-goods',
                cls: 'main-wrapper',
            }]
        };
        var portDepartureTab = {
            title: _('orders_port_departure_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_port_departure_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-ports-departure',
                cls: 'main-wrapper',
            }]
        };
        var portArriveTab = {
            title: _('orders_port_arrive_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_port_arrive_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-ports-arrive',
                cls: 'main-wrapper',
            }]
        };
        var cityDeliveryTab = {
            title: _('orders_city_delivery_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_city_delivery_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-cities-delivery',
                cls: 'main-wrapper',
            }]
        };
        var stationTrainArriveTab = {
            title: _('orders_station_train_arrive_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_station_train_arrive_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-stations-train-arrive',
                cls: 'main-wrapper',
            }]
        };
        var clientTab = {
            title: _('orders_client_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_client_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-clients',
                cls: 'main-wrapper',
            }]
        };
        var companyWarehouseTab = {
            title: _('orders_company_warehouse_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_company_warehouse_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-companies-warehouse',
                cls: 'main-wrapper',
            }]
        };
        var senderTab = {
            title: _('orders_sender_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_sender_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-senders',
                cls: 'main-wrapper',
            }]
        };
        var receiverTab = {
            title: _('orders_receiver_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_receiver_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-receivers',
                cls: 'main-wrapper',
            }]
        };
        var carCarrierTab = {
            title: _('orders_car_carrier_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_car_carrier_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-carriers',
                cls: 'main-wrapper',
            }]
        };
        var forwarderTab = {
            title: _('orders_forwarder_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_forwarder_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-forwarders',
                cls: 'main-wrapper',
            }]
        };
        var agentRailwayTab = {
            title: _('orders_agent_railway_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_agent_railway_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-agents-railway',
                cls: 'main-wrapper',
            }]
        };
        var addressTab = {
            title: _('orders_address_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_address_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-addresses',
                cls: 'main-wrapper',
            }]
        };
        var addressContainerTab = {
            title: _('orders_address_container_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_address_container_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-addresses-container',
                cls: 'main-wrapper',
            }]
        };
        var lineTab = {
            title: _('orders_line_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_line_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-lines',
                cls: 'main-wrapper',
            }]
        };
        var containerTypeTab = {
            title: _('orders_container_type_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_container_type_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-container-types',
                cls: 'main-wrapper',
            }]
        };
        var deliveryTermTab = {
            title: _('orders_delivery_term_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_delivery_term_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-delivery-terms',
                cls: 'main-wrapper',
            }]
        };
        var deliveryTermReceiverTab = {
            title: _('orders_delivery_term_receiver_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_delivery_term_receiver_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-delivery-term-receivers',
                cls: 'main-wrapper',
            }]
        };
        var saleNoteTab = {
            title: _('orders_sale_note_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_sale_note_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-sale-notes',
                cls: 'main-wrapper',
            }]
        };
        var accountsNoteTab = {
            title: _('orders_accounts_note_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_accounts_note_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-accounts-notes',
                cls: 'main-wrapper',
            }]
        };

        var reports = {
            title: _('orders_report_title'),
            layout: 'anchor',
            items: [{
                html: _('orders_reports_intro_msg'),
                cls: 'panel-desc',
            }, {
                xtype: 'orders-grid-reports-form',
                cls: 'main-wrapper',
            }]
        }

        var tabs = [];
        tabs.push(ordersTab);
        tabs.push(reports);
        if (orders.config['perm.orders_item_show_tab']) {
            tabs.push(managerTab);
            tabs.push(goodsTab);
            tabs.push(portDepartureTab);
            tabs.push(portArriveTab);
            tabs.push(cityDeliveryTab);
            tabs.push(stationTrainArriveTab);
            tabs.push(clientTab);
            tabs.push(companyWarehouseTab);
            tabs.push(senderTab);
            tabs.push(receiverTab);
            tabs.push(carCarrierTab);
            tabs.push(forwarderTab);
            tabs.push(agentRailwayTab);
            tabs.push(addressTab);
            tabs.push(addressContainerTab);
            tabs.push(lineTab);
            tabs.push(containerTypeTab);
            tabs.push(deliveryTermTab);
            tabs.push(deliveryTermReceiverTab);
            tabs.push(saleNoteTab);
            tabs.push(accountsNoteTab);
        }
        return tabs;
    }
});
Ext.reg('orders-panel-home', orders.panel.Home);
