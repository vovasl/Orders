orders.window.CreateStationTrainArrive = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-station-train-arrive-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_station_train_arrive_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/station-train-arrive/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateStationTrainArrive.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateStationTrainArrive, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_station_train_arrive_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-station-train-arrive-window-create', orders.window.CreateStationTrainArrive);


orders.window.UpdateStationTrainArrive = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-station-train-arrive-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_station_train_arrive_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/station-train-arrive/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateStationTrainArrive.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateStationTrainArrive, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_station_train_arrive_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-station-train-arrive-window-update', orders.window.UpdateStationTrainArrive);