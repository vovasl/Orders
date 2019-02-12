orders.window.CreateAddressContainer = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-address-container-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_address_container_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/address-container/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateAddressContainer.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateAddressContainer, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_address_container_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-address-container-window-create', orders.window.CreateAddressContainer);


orders.window.UpdateAddressContainer = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-address-container-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_address_container_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/address-container/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateAddressContainer.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateAddressContainer, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_address_container_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-address-container-window-update', orders.window.UpdateAddressContainer);