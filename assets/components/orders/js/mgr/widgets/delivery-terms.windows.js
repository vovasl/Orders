orders.window.CreateDeliveryTerm = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-delivery-term-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_delivery_term_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/delivery-term/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateDeliveryTerm.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateDeliveryTerm, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_delivery_term_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-delivery-term-window-create', orders.window.CreateDeliveryTerm);


orders.window.UpdateDeliveryTerm = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-delivery-term-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_delivery_term_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/delivery-term/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateDeliveryTerm.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateDeliveryTerm, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_delivery_term_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-delivery-term-window-update', orders.window.UpdateDeliveryTerm);