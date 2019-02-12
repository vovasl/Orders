orders.grid.ReportsForm = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'orders-grid-settings-reports-form'
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
                text: _('orders_settings_report_button_export')
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
                    name: 'port_arrive_date_start',
                    xtype: 'orders-combo-xdates',
                    width: 120,
                    fieldLabel: _('orders_settings_report_field_port_arrive_date_start')
                }]
            }, {
                layout: 'form',
                labelWidth: 30,
                items: [{
                    name: 'port_arrive_date_finish',
                    xtype: 'orders-combo-xdates',
                    width: 120,
                    fieldLabel: _('orders_settings_report_field_port_arrive_date_finish')
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
                    name: 'train_arrive_date_start',
                    xtype: 'orders-combo-xdates',
                    width: 120,
                    fieldLabel: _('orders_settings_report_field_train_arrive_date_start')
                }]
            }, {
                layout: 'form',
                labelWidth: 30,
                items: [{
                    name: 'train_arrive_date_finish',
                    xtype: 'orders-combo-xdates',
                    width: 120,
                    fieldLabel: _('orders_settings_report_field_train_arrive_date_finish')
                }]
            }]
        }];
    }
    ,export: function() {
        MODx.Ajax.request({
            url: orders.config.connector_url
            ,params: {
                action: 'mgr/settings/report/export'
            }
            ,listeners: {
                success: {fn:function(r) {

                    },scope: this}
                ,failure: {fn:function(r) {

                    }, scope:this}
            }
        })
    }

});
Ext.reg('orders-grid-settings-reports-form',orders.grid.ReportsForm);