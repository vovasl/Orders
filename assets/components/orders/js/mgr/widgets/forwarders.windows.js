orders.window.CreateForwarder = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-forwarder-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_forwarder_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/forwarder/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateForwarder.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateForwarder, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_forwarder_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-forwarder-window-create', orders.window.CreateForwarder);


orders.window.UpdateForwarder = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-forwarder-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_forwarder_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/forwarder/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateForwarder.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateForwarder, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_forwarder_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-forwarder-window-update', orders.window.UpdateForwarder);