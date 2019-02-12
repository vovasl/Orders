orders.window.CreateManager = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-manager-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_manager_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/manager/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateManager.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateManager, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_manager_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_manager_phone'),
            name: 'phone',
            id: config.id + '-phone',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-manager-window-create', orders.window.CreateManager);


orders.window.UpdateManager = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-manager-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_manager_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/manager/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateManager.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateManager, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_manager_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_manager_phone'),
            name: 'phone',
            id: config.id + '-phone',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-manager-window-update', orders.window.UpdateManager);