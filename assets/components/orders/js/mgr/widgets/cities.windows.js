orders.window.CreateCity = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-city-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_city_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/city/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateCity.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateCity, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_city_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-city-window-create', orders.window.CreateCity);


orders.window.UpdateCity = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-city-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_city_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/city/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateCity.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateCity, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_city_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-city-window-update', orders.window.UpdateCity);