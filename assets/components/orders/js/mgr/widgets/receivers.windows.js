orders.window.CreateReceiver = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-receiver-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_receiver_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/receiver/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateReceiver.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateReceiver, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_receiver_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-receiver-window-create', orders.window.CreateReceiver);


orders.window.UpdateReceiver = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-receiver-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_receiver_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/receiver/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateReceiver.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateReceiver, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_receiver_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-receiver-window-update', orders.window.UpdateReceiver);