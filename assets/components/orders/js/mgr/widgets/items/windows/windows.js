orders.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('orders_item_create'),
        width: '95%',
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/item/create',
        fields: this.getFields(config),
        labelAlign: 'left',
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }],
    });
    orders.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(orders.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return {
            xtype: 'modx-tabs',
            activeTab: config.activeTab || 0,
            bodyStyle: {background: 'Gainsboro'},
            deferredRender: false,
            autoHeight: true,
            stateful: true,
            stateId: 'orders-item-window-create',
            stateEvents: ['tabchange'],
            getState: function () {
                return {activeTab: this.items.indexOf(this.getActiveTab())};
            },
            items: this.getTabs(config)
        };
    },

    getTabs: function (config) {
        var tabs;
        if(orders.config['orders_member_group'] == 'OrdersAvtovyvoz1' || orders.config['orders_member_group'] == 'OrdersAvtovyvoz2') {

        }
        else if(orders.config['orders_member_group'] == 'OrdersManager') {
            tabs = CreateItemManager.getTabs(config);
        }
        else if(orders.config['orders_member_group'] == 'OrdersLineManager') {
            tabs = CreateItemLineManager.getTabs(config);
        }
        else {
            tabs = CreateItemAdmin.getTabs(config);
        }
        return tabs;
    },


});
Ext.reg('orders-item-window-create', orders.window.CreateItem);


orders.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('orders_item_update'),
        width: '95%',
        autoHeight: true,
        url: orders.config.connector_url,
        action: 'mgr/item/update',
        fields: this.getFields(config),
        labelAlign: 'left',
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }],
        buttons: [{
            text: _('orders_items_window_cancel'),
            scope: this,
            handler: function() { this.hide(); }
        },{
            text: _('orders_items_window_save'),
            scope: this,
            handler: function() { this.submit(false); }
        },{
            text: _('orders_items_window_save_and_close'),
            cls: 'primary-button',
            scope: this,
            handler: this.submit
        }]
    });
    orders.window.UpdateItem.superclass.constructor.call(this, config);

};
Ext.extend(orders.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        var fields = {};
        return {
            xtype: 'modx-tabs',
            activeTab: config.activeTab || 0,
            bodyStyle: {background: 'Gainsboro'},
            deferredRender: false,
            autoHeight: true,
            stateful: true,
            stateId: 'orders-item-window-update',
            stateEvents: ['tabchange'],
            getState: function () {
                return {activeTab: this.items.indexOf(this.getActiveTab())};
            },
            items: this.getTabs(config),
        };
    },

    getTabs: function (config) {

        var tabs;
        if(orders.config['orders_member_group'] == 'OrdersAvtovyvoz1') {
            tabs = UpdateItemAvtovyvoz1.getTabs(config);
        }
        else if (orders.config['orders_member_group'] == 'OrdersAvtovyvoz2'){
            tabs = UpdateItemAvtovyvoz2.getTabs(config);
        }
        else if(orders.config['orders_member_group'] == 'OrdersTamozhnya') {
            tabs = UpdateItemTamozhnya.getTabs(config);
        }
        else if(orders.config['orders_member_group'] == 'OrdersManager') {
            tabs = CreateItemManager.getTabs(config);
        }
        else if(orders.config['orders_member_group'] == 'OrdersLineManager') {
            tabs = CreateItemLineManager.getTabs(config);
        }
        else {
            tabs = CreateItemAdmin.getTabs(config);
        }

        return tabs;

    },

});
Ext.reg('orders-item-window-update', orders.window.UpdateItem);