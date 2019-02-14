orders.grid.ReportsForm = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'orders-grid-items-reports'
        ,autoHeight: true
        ,url: orders.config.connector_url
        ,tbar: this.getTopBar(config)

    });
    orders.grid.ReportsForm.superclass.constructor.call(this,config);
};

Ext.extend(orders.grid.ReportsForm, MODx.FormPanel,{
    filters: {}

    ,getTopBar: function() {
        return [{
            id: 'port_arrive_date_start',
            name: 'port_arrive_date_start',
            xtype: 'datefield',
            width: 140,
            format:'d.m.Y',
            emptyText: _('orders_item_reports_field_port_arrive_date_start')
        }, {
            id: 'port_arrive_date_finish',
            name: 'port_arrive_date_finish',
            xtype: 'datefield',
            width: 140,
            format:'d.m.Y',
            emptyText: _('orders_item_reports_field_port_arrive_date_finish')
        }, {
            id: 'train_arrive_date_start',
            name: 'train_arrive_date_start',
            xtype: 'datefield',
            width: 140,
            format:'d.m.Y',
            emptyText: _('orders_item_reports_field_train_arrive_date_start')
        }, {
            id: 'train_arrive_date_finish',
            name: 'train_arrive_date_finish',
            xtype: 'datefield',
            width: 140,
            format:'d.m.Y',
            emptyText: _('orders_item_reports_field_train_arrive_date_finish')
        }, {
            id: 'report-sort',
            name: 'report-sort',
            width: 150,
            xtype: 'orders-combo-report-sort',
        }, {
            xtype: 'button'
            ,text: _('orders_item_reports_button_export')
            ,cls: 'primary-button'
            ,handler: function() {
                this.export();
            }, scope: this
        }];
    }
    ,export: function() {

        var portArriveDateStart = Ext.getCmp('port_arrive_date_start').getValue();
        var portArriveDateFinish = Ext.getCmp('port_arrive_date_finish').getValue();
        var trainArriveDateStart = Ext.getCmp('train_arrive_date_start').getValue();
        var trainArriveDateFinish = Ext.getCmp('train_arrive_date_finish').getValue();
        var reportSort = Ext.getCmp('report-sort').getValue();

        var _params = {
            action: 'mgr/item/report',
            portArriveDateStart: portArriveDateStart,
            portArriveDateFinish: portArriveDateFinish,
            trainArriveDateStart: trainArriveDateStart,
            trainArriveDateFinish: trainArriveDateFinish,
            reportSort: reportSort,
            HTTP_MODAUTH: MODx.siteId
        };
        var link = orders.config.connector_url + '?' + Ext.urlEncode(_params);

        var win = window.open(link, '_blank');
        win.focus();
    }

});
Ext.reg('orders-grid-items-reports',orders.grid.ReportsForm);