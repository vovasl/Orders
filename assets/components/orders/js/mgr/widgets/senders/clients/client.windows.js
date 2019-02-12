orders.window.CreateSenderClient = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-sender-client-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_sender_client_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/sender/client/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateSenderClient.superclass.constructor.call(this, config);
};


Ext.extend(orders.window.CreateSenderClient, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'sender',
        }, {
            xtype: 'orders-combo-client',
            fieldLabel: _('orders_item_client'),
            name: 'client',
            anchor: '99%',
            allowBlank: false,
        }];
    },


});
Ext.reg('orders-sender-client-window-create', orders.window.CreateSenderClient);

orders.window.UpdateSenderClient = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-sender-client-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_client_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/sender/client/update',
        fields: this.getFields(config),
        modal: true,
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateSenderClient.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateSenderClient, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
        }, {
            xtype: 'hidden',
            name: 'sender',
        }, {
            xtype: 'orders-combo-client',
            fieldLabel: _('orders_item_client'),
            name: 'client',
            anchor: '99%',
            allowBlank: false,
        }];
    },

});
Ext.reg('orders-sender-client-window-update', orders.window.UpdateSenderClient);
