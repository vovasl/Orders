orders.window.CreatePortArrive = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-port-arrive-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_port_arrive_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/port-arrive/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreatePortArrive.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreatePortArrive, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_port_arrive_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-port-arrive-window-create', orders.window.CreatePortArrive);


orders.window.UpdatePortArrive = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-port-arrive-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_port_arrive_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/port-arrive/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdatePortArrive.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdatePortArrive, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_port_arrive_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-port-arrive-window-update', orders.window.UpdatePortArrive);