orders.window.CreateSender = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-sender-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_sender_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/sender/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateSender.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateSender, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_sender_name'),
            name: 'name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

});
Ext.reg('orders-sender-window-create', orders.window.CreateSender);


orders.window.UpdateSender = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-sender-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_sender_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/sender/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateSender.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateSender, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_sender_name'),
            name: 'name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

});
Ext.reg('orders-sender-window-update', orders.window.UpdateSender);