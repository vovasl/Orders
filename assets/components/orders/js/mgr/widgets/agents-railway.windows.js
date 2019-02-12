orders.window.CreateAgentRailway = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-agent-railway-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_agent_railway_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/agent-railway/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateAgentRailway.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateAgentRailway, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_agent_railway_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-agent-railway-window-create', orders.window.CreateAgentRailway);


orders.window.UpdateAgentRailway = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-agent-railway-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_agent_railway_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/agent-railway/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateAgentRailway.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateAgentRailway, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_agent_railway_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-agent-railway-window-update', orders.window.UpdateAgentRailway);