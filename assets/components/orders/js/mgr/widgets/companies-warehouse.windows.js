orders.window.CreateCompanyWarehouse = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-company-warehouse-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_company_warehouse_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/company-warehouse/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateCompanyWarehouse.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateCompanyWarehouse, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_company_warehouse_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-company-warehouse-window-create', orders.window.CreateCompanyWarehouse);


orders.window.UpdateCompanyWarehouse = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-company-warehouse-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_company_warehouse_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/company-warehouse/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateCompanyWarehouse.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateCompanyWarehouse, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_company_warehouse_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-company-warehouse-window-update', orders.window.UpdateCompanyWarehouse);