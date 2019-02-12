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

    loadDropZones: function () {
    }

});
Ext.reg('orders-client-window-create', orders.window.CreateClient);


orders.window.UpdateClient = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-client-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_client_update'),
        width: 550,
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
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_client_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-client-window-update', orders.window.UpdateClient);