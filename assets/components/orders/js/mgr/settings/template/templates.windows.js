orders.window.CreateTemplate = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-template-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_template_create'),
        width: 950,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/settings/template/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateTemplate.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateTemplate, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_template_name'),
            name: 'name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('orders_templates_value'),
            name: 'value',
            anchor: '99%',
            allowBlank: false,
            height: 239,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-template-window-create', orders.window.CreateTemplate);


orders.window.UpdateTemplate = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-template-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_template_update'),
        width: 950,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/settings/template/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateTemplate.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateTemplate, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_template_name'),
            name: 'name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('orders_templates_value'),
            name: 'value',
            anchor: '99%',
            allowBlank: false,
            height: 239,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-template-window-update', orders.window.UpdateTemplate);