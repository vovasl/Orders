orders.window.CreateAgent2 = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-agent2-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_agent_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/agent2/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateAgent2.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateAgent2, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_agent_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-agent2-window-create', orders.window.CreateAgent2);


orders.window.UpdateAgent2 = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-agent2-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_agent_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/agent2/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateAgent2.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateAgent2, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_agent_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-agent2-window-update', orders.window.UpdateAgent2);