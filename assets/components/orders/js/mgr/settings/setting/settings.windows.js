orders.window.CreateSetting = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-setting-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_setting_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/settings/setting/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateSetting.superclass.constructor.call(this, config);
};

Ext.extend(orders.window.CreateSetting, MODx.Window, {
    getFields: function (config) {
        return [{
            fieldLabel: _('orders_setting_name'),
            xtype: 'textfield',
            name: 'name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'orders-combo-setting-area',
            fieldLabel: _('orders_setting_area'),
            name: 'area',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('orders_setting_value'),
            name: 'value',
            anchor: '99%',
            height: 239
        }];
    },


});
Ext.reg('orders-setting-window-create', orders.window.CreateSetting);


orders.window.UpdateSetting = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-setting-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_setting_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/settings/setting/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateSetting.superclass.constructor.call(this, config);
};

Ext.extend(orders.window.UpdateSetting, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
        }, {
            fieldLabel: _('orders_setting_name'),
            xtype: 'textfield',
            name: 'name',
            anchor: '99%',
            disabled: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_setting_area'),
            name: 'area',
            anchor: '99%',
            disabled: true,
        }, {
            xtype: 'textarea',
            fieldLabel: _('orders_setting_value'),
            name: 'value',
            anchor: '99%',
            height: 239
        }];
    },

});

Ext.reg('orders-setting-window-update', orders.window.UpdateSetting);

