orders.window.CreateClientSender = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-client-sender-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_client_sender_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/client/sender/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateClientSender.superclass.constructor.call(this, config);
};


Ext.extend(orders.window.CreateClientSender, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
        }, {
            xtype: 'hidden',
            name: 'client',
        }, {
            xtype: 'orders-combo-sender',
            fieldLabel: _('orders_item_sender'),
            name: 'sender',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'xcheckbox',
            fieldLabel: _('orders_field_default'),
            name: 'default',
            //anchor: '99%',
            boxLabel: _('orders_field_checkbox_label'),
            checked: false,
        }];
    },


});
Ext.reg('orders-client-sender-window-create', orders.window.CreateClientSender);

orders.window.UpdateClientSender = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        title: _('orders_sender_update'),
        action: 'mgr/client/sender/update',
    });
    orders.window.UpdateClientSender.superclass.constructor.call(this, config);
};

Ext.extend(orders.window.UpdateClientSender, orders.window.CreateClientSender);
Ext.reg('orders-client-sender-window-update', orders.window.UpdateClientSender);
