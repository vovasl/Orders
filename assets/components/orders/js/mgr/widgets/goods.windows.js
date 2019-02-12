orders.window.CreateGoods = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-goods-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_goods_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/goods/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateGoods.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateGoods, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_goods_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-goods-window-create', orders.window.CreateGoods);


orders.window.UpdateGoods = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-goods-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_goods_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/goods/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateGoods.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateGoods, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_goods_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-goods-window-update', orders.window.UpdateGoods);