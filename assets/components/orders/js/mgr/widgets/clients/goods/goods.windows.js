orders.window.CreateClientGoods = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-client-goods-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_client_goods_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/client/goods/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateClientGoods.superclass.constructor.call(this, config);
};


Ext.extend(orders.window.CreateClientGoods, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
        }, {
            xtype: 'hidden',
            name: 'client',
        }, {
            xtype: 'orders-combo-goods',
            fieldLabel: _('orders_goods_name'),
            name: 'goods',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'xcheckbox',
            fieldLabel: _('orders_field_default'),
            name: 'default',
            //anchor: '99%',
            boxLabel: _('orders_field_checkbox_label'),
            checked: false,
        }];
    },


});
Ext.reg('orders-client-goods-window-create', orders.window.CreateClientGoods);

orders.window.UpdateClientGoods = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        title: _('orders_goods_update'),
        action: 'mgr/client/goods/update',
    });
    orders.window.UpdateClientGoods.superclass.constructor.call(this, config);
};

Ext.extend(orders.window.UpdateClientGoods, orders.window.CreateClientGoods);
Ext.reg('orders-client-goods-window-update', orders.window.UpdateClientGoods);
