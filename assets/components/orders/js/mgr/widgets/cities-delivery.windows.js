orders.window.CreateCityDelivery = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-city-delivery-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_city_delivery_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/city-delivery/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateCityDelivery.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateCityDelivery, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_city_delivery_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-city-delivery-window-create', orders.window.CreateCityDelivery);


orders.window.UpdateCityDelivery = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-city-delivery-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_city_delivery_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/city-delivery/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateCityDelivery.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateCityDelivery, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_city_delivery_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-city-delivery-window-update', orders.window.UpdateCityDelivery);