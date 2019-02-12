orders.window.UpdateItems = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-grid-settings-import-items';
    }
    Ext.applyIf(config, {
        url: orders.config.connector_url,
        autoHeight: true,
        fileUpload: true,
        width: 450,
        title: _('orders_setting_import_items'),
        action: 'mgr/settings/setting/update-items',
        fields: this.getFields(config),
        buttons: [{
            text: _('cancel'),
            scope: this,
            handler: function() { this.hide(); }
        },'-',{
            text: _('orders_setting_import_items_submit'),
            scope: this,
            handler: this.submit,
            cls: 'primary-button'
        }],
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateItems.superclass.constructor.call(this, config);
};

Ext.extend(orders.window.UpdateItems, MODx.Window, {
    getFields: function (config) {
        return [{
            xtype: 'panel',
            cls: 'panel-desc',
            html: '<p>' + _('orders_setting_import_items_desc') + '</p>',
            border: false
        },{
            xtype: 'textfield',
            fieldLabel: _('orders_setting_import_items_file'),
            name: 'file',
            inputType: 'file'
        }];
    },


});
Ext.reg('orders-grid-settings-import-items', orders.window.UpdateItems);

