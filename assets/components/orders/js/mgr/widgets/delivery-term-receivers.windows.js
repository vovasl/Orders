orders.window.CreateDeliveryTermReceiver = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-delivery-term-receiver-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_delivery_term_receiver_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/delivery-term-receiver/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateDeliveryTermReceiver.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateDeliveryTermReceiver, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_delivery_term_receiver_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-delivery-term-receiver-window-create', orders.window.CreateDeliveryTermReceiver);


orders.window.UpdateDeliveryTermReceiver = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-delivery-term-receiver-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_delivery_term_receiver_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/delivery-term-receiver/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateDeliveryTermReceiver.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateDeliveryTermReceiver, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_delivery_term_receiver_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-delivery-term-receiver-window-update', orders.window.UpdateDeliveryTermReceiver);