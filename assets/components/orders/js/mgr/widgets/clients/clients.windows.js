orders.window.CreateClient = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-client-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_client_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/client/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateClient.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateClient, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_client_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },
});
Ext.reg('orders-client-window-create', orders.window.CreateClient);


orders.window.UpdateClient = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-client-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_client_update'),
        width: 750,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/client/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateClient.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateClient, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'modx-tabs',
            activeTab: config.activeTab || 0,
            bodyStyle: {background: 'transparent'},
            deferredRender: false,
            autoHeight: true,
            stateful: true,
            stateId: 'orders-client-window-update',
            stateEvents: ['tabchange'],
            getState: function () {
                return {activeTab: this.items.indexOf(this.getActiveTab())};
            },
            items: this.getTabs(config)
        }];
    },

    getTabs: function (config) {
        return [{
            title: _('orders_client_tab_update'),
            hideMode: 'offsets',
            //bodyStyle: 'padding:5px 0;',
            defaults: {msgTarget: 'under', border: false},
            items: this.get = this.getUpdateFields(config)
        }, {
            title: _('orders_sender_title'),
            layout: 'anchor',
            items: [{
                xtype: 'orders-grid-client-senders',
                client: config.record.object.id,
            }]
        }, {
            title: _('orders_manager_title'),
            layout: 'anchor',
            items: [{
                xtype: 'orders-grid-client-managers',
                client: config.record.object.id,
            }]
        }, {
            title: _('orders_managers2_name'),
            layout: 'anchor',
            items: [{
                xtype: 'orders-grid-client-managers2',
                client: config.record.object.id,
            }]
        }, {
            title: _('orders_goods_title'),
            layout: 'anchor',
            items: [{
                xtype: 'orders-grid-client-goods',
                client: config.record.object.id,
            }]
        }];
    },

    getUpdateFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            //style: 'padding:15px 5px;text-align:left;',
            items: [{
                columnWidth: .99,
                layout: 'form',
                labelWidth: 100,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('orders_client_name'),
                    name: 'name',
                    anchor: '99%',
                    allowBlank: false,
                }]
            }]
        }];
    }

});
Ext.reg('orders-client-window-update', orders.window.UpdateClient);