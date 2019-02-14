orders.grid.ReportsForm = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'orders-grid-items-reports'
        ,labelAlign: 'left'
        ,autoHeight: true
        ,title: _('search_criteria')
        ,labelWidth: 200
        ,url: orders.config.connector_url
        ,items: [{
            layout: 'form'
            ,cls: 'main-wrapper'
            ,border: false
            ,items: this.getFields(config)
        },{
            html: '<hr />'
            ,border: false
        }]
        ,buttonAlign: 'left'
        ,buttons: [{
                text: _('orders_report_button_export')
                ,handler: function() {
                    this.export();
                }, scope: this
            }]
    });
    orders.grid.ReportsForm.superclass.constructor.call(this,config);
};

Ext.extend(orders.grid.ReportsForm, MODx.FormPanel,{
    filters: {}

    ,getFields: function() {
        return [{
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px;text-align:center;',
            items: [{
                layout: 'form',
                labelWidth: 90,
                items: [{
                    id: 'port_arrive_date_start',
                    name: 'port_arrive_date_start',
                    xtype: 'datefield',
                    width: 120,
                    fieldLabel: _('orders_report_field_port_arrive_date_start'),
                    format:'d.m.Y'
                }]
            }, {
                layout: 'form',
                labelWidth: 30,
                items: [{
                    id: 'port_arrive_date_finish',
                    name: 'port_arrive_date_finish',
                    xtype: 'datefield',
                    width: 120,
                    fieldLabel: _('orders_report_field_port_arrive_date_finish'),
                    format:'d.m.Y'
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px;text-align:center;',
            items: [{
                layout: 'form',
                labelWidth: 90,
                items: [{
                    id: 'train_arrive_date_start',
                    name: 'train_arrive_date_start',
                    xtype: 'datefield',
                    width: 120,
                    fieldLabel: _('orders_report_field_train_arrive_date_start'),
                    format:'d.m.Y'
                }]
            }, {
                layout: 'form',
                labelWidth: 30,
                items: [{
                    id: 'train_arrive_date_finish',
                    name: 'train_arrive_date_finish',
                    xtype: 'datefield',
                    width: 120,
                    fieldLabel: _('orders_report_field_train_arrive_date_finish'),
                    format:'d.m.Y'
                }]
            }]
        }, {
            layout: 'column',
            defaults: {msgTarget: 'under', border: false},
            style: 'padding:15px 5px;text-align:center;',
            items: [{
                layout: 'form',
                labelWidth: 90,
                items: [{
                    id: 'report-sort',
                    name: 'report-sort',
                    width: 120,
                    xtype: 'orders-combo-report-sort',
                    fieldLabel: _('orders_report_field_sort'),
                }]
            }]
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