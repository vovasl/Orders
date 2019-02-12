orders.window.CreateContainerType = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-container-type-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_container_type_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/container-type/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateContainerType.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateContainerType, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_container_type_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-container-type-window-create', orders.window.CreateContainerType);


orders.window.UpdateContainerType = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-container-type-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_container_type_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/container-type/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateContainerType.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateContainerType, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_container_type_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-container-type-window-update', orders.window.UpdateContainerType);