orders.window.CreateCompany = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-company-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_company_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/company/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateCompany.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateCompany, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_company_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-company-window-create', orders.window.CreateCompany);


orders.window.UpdateCompany = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-company-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_company_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/company/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateCompany.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateCompany, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_company_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-company-window-update', orders.window.UpdateCompany);