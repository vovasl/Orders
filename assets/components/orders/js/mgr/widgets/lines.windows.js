orders.window.CreateLine = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-line-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_line_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/line/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateLine.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateLine, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_line_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-line-window-create', orders.window.CreateLine);


orders.window.UpdateLine = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-line-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_line_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/line/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateLine.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateLine, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_line_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-line-window-update', orders.window.UpdateLine);