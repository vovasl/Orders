orders.window.CreatePortDeparture = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-port-departure-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_port_departure_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/port-departure/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreatePortDeparture.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreatePortDeparture, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_port_departure_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-port-departure-window-create', orders.window.CreatePortDeparture);


orders.window.UpdatePortDeparture = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-port-departure-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_port_departure_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/port-departure/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdatePortDeparture.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdatePortDeparture, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_port_departure_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-port-departure-window-update', orders.window.UpdatePortDeparture);