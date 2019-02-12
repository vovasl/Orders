orders.window.CreateClientManager = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-client-manager-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_client_manager_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/client/manager/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateClientManager.superclass.constructor.call(this, config);
};


Ext.extend(orders.window.CreateClientManager, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
        }, {
            xtype: 'hidden',
            name: 'client',
        }, {
            xtype: 'orders-combo-manager',
            fieldLabel: _('orders_item_manager'),
            name: 'manager',
            anchor: '99%',
            allowBlank: false,
        }];
    },


});
Ext.reg('orders-client-manager-window-create', orders.window.CreateClientManager);

orders.window.UpdateClientManager = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        title: _('orders_manager_update'),
        action: 'mgr/client/manager/update',
    });
    orders.window.UpdateClientManager.superclass.constructor.call(this, config);
};

Ext.extend(orders.window.UpdateClientManager, orders.window.CreateClientManager);
Ext.reg('orders-client-manager-window-update', orders.window.UpdateClientManager);
