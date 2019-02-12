orders.window.CreateClientManager2 = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-client-manager2-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_client_manager_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/client/manager2/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateClientManager2.superclass.constructor.call(this, config);
};


Ext.extend(orders.window.CreateClientManager2, MODx.Window, {

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
Ext.reg('orders-client-manager2-window-create', orders.window.CreateClientManager2);

orders.window.UpdateClientManager2 = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        title: _('orders_manager_update'),
        action: 'mgr/client/manager2/update',
    });
    orders.window.UpdateClientManager2.superclass.constructor.call(this, config);
};

Ext.extend(orders.window.UpdateClientManager2, orders.window.CreateClientManager2);
Ext.reg('orders-client-manager2-window-update', orders.window.UpdateClientManager2);
