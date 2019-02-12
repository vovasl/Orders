orders.window.CreateCarCarrier = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-car-carrier-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_car_carrier_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/car-carrier/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateCarCarrier.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateCarCarrier, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_car_carrier_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-car-carrier-window-create', orders.window.CreateCarCarrier);


orders.window.UpdateCarCarrier = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-car-carrier-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_car_carrier_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/car-carrier/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateCarCarrier.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateCarCarrier, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_car_carrier_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-car-carrier-window-update', orders.window.UpdateCarCarrier);