orders.window.CreateAccountsNote = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-accounts-note-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_accounts_note_create'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/accounts-note/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.CreateAccountsNote.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateAccountsNote, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('orders_accounts_note_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-accounts-note-window-create', orders.window.CreateAccountsNote);


orders.window.UpdateAccountsNote = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-accounts-note-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_accounts_note_update'),
        width: 550,
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/accounts-note/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    orders.window.UpdateAccountsNote.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.UpdateAccountsNote, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('orders_accounts_note_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('orders-accounts-note-window-update', orders.window.UpdateAccountsNote);