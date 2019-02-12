Ext.onReady(function() {
    var tabTitle = 'Модуль Заказы';
    var fieldLabelManager = 'Менеджер';
    var fieldLabelClient = 'Клиент';

    var usertabs = Ext.getCmp('modx-user-tabs');
    usertabs.add({
        title: tabTitle,
        layout: 'form',
        autoScroll: true,
        autoHeight: true,
        labelAlign: 'top',
        cls: 'main-wrapper',
        items: [{
            id: 'modx-user-manager',
            xtype: 'modx-orders-manager',
            name: 'modx-user-manager',
            fieldLabel: fieldLabelManager,
            width: 176,
        }, {
            id: 'modx-user-client',
            xtype: 'modx-orders-client',
            name: 'modx-user-client',
            fieldLabel: fieldLabelClient,
            width: 176,
        }]
    });
});

MODx.combo.Manager = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'manager',
        hiddenName: config.name || 'manager',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: ' - ',
        url: MODx.config.assets_url + 'components/orders/connector.php',
        baseParams: {
            action: 'mgr/manager/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    MODx.combo.Manager.superclass.constructor.call(this, config);
};
Ext.extend(MODx.combo.Manager, MODx.combo.ComboBox);
Ext.reg('modx-orders-manager', MODx.combo.Manager);

MODx.combo.Client = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'client',
        hiddenName: config.name || 'client',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: ' - ',
        url: MODx.config.assets_url + 'components/orders/connector.php',
        baseParams: {
            action: 'mgr/client/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    MODx.combo.Client.superclass.constructor.call(this, config);
};
Ext.extend(MODx.combo.Client, MODx.combo.ComboBox);
Ext.reg('modx-orders-client', MODx.combo.Client);