orders.window.CreateAddress = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-address-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_address_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/address/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateAddress.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateAddress, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'orders-combo-client',
            fieldLabel: _('orders_item_client'),
            name: 'client',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_address_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-address-window-create', orders.window.CreateAddress);


orders.window.UpdateAddress = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-address-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_address_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/address/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateAddress.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateAddress, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'orders-combo-client',
            fieldLabel: _('orders_item_client'),
            name: 'client',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_address_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-address-window-update', orders.window.UpdateAddress);