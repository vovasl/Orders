orders.window.CreateSenderClient = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-sender-window-client-create';
    }
    Ext.applyIf(config, {
        title: _('orders_sender_client_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/sender/client/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateSenderClient.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateSenderClient, MODx.Window, {

    getFields: function (config) {
        return [{
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px;text-align:left;',
            items: [{
                columnWidth: .99,
                layout: 'form',
                labelWidth: 100,
                items: [{
                    xtype: 'orders-combo-client',
                    fieldLabel: _('orders_client_name'),
                    name: 'name',
                    anchor: '99%',
                    allowBlank: false,
                }]
            }]
        }];
    },


});
Ext.reg('orders-sender-window-client-create', orders.window.CreateSenderClient);
