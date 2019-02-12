orders.window.CreateSettingsFieldsWidth = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-settings-fields-width-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_settings_fields_width_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/settings/fields-width/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateSettingsFieldsWidth.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateSettingsFieldsWidth, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_settings_fields_width_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_settings_fields_width_value'),
            name: 'value',
            id: config.id + '-value',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-settings-fields-width-window-create', orders.window.CreateSettingsFieldsWidth);


orders.window.UpdateSettingsFieldsWidth = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-settings-fields-width-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_settings_fields_width_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/settings/fields-width/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateSettingsFieldsWidth.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateSettingsFieldsWidth, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_settings_fields_width_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_settings_fields_width_value'),
            name: 'value',
            id: config.id + '-value',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-settings-fields-width-window-update', orders.window.UpdateSettingsFieldsWidth);