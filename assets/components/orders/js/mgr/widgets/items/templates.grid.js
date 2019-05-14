orders.grid.TemplatesForm = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'orders-grid-items-templates',
        autoHeight: true,
        url: orders.config.connector_url,
        tbar: new Ext.Toolbar(),
        listeners: this.getListeners(config),
    });
    orders.grid.TemplatesForm.superclass.constructor.call(this,config);

};

Ext.extend(orders.grid.TemplatesForm, MODx.FormPanel,{

    grid: null,

    getListeners: function () {
        return {
            beforerender: function () {
                this.grid = Ext.getCmp('orders-grid-items');
            },
            render: function () {
                MODx.Ajax.request({
                    url: orders.config.connector_url,
                    params: {
                        action: 'mgr/settings/template/getlist',
                        sort: 'name',
                        dir: 'asc',
                        limit: 9999,
                    },
                    listeners: {
                        success: {
                            fn: function (data) {
                                var templates = [];
                                var res = data.results;
                                for (var i = 0; i < res.length; i++) {
                                    var button = {
                                        id: 'but-template-' + res[i]['id'],
                                        xtype: 'button',
                                        text: res[i]['name'],
                                        scope: this,
                                        value: res[i]['id'],
                                        handler: this.changeTemplate,
                                    };
                                    if(res[i]['id'] == orders.config['orders_item_template']){
                                        Ext.applyIf(button, {
                                            cls: 'primary-button',
                                        });
                                    }
                                    templates.push(button);
                                }

                                var filterPortArriveButt1 = {
                                    id: 'filter-port-arrive-butt-1',
                                    xtype: 'button',
                                    text: _('orders_item_filter_port_arrive_railway_disabled'),
                                    scope: this,
                                    enableToggle: true,
                                    value: 'railway-disabled',
                                    handler: this.filterPortArriveButt,
                                };
                                var filterPortArriveButt2 = {
                                    id: 'filter-port-arrive-butt-2',
                                    xtype: 'button',
                                    text: _('orders_item_filter_port_arrive_ports'),
                                    scope: this,
                                    enableToggle: true,
                                    value: 'ports',
                                    handler: this.filterPortArriveButt,
                                };

                                var filterPortArriveButt3 = {
                                    id: 'filter-port-arrive-butt-3',
                                    xtype: 'button',
                                    text: _('orders_item_filter_port_arrive_spb'),
                                    scope: this,
                                    enableToggle: true,
                                    value: 'spb',
                                    handler: this.filterPortArriveButt,
                                };

                                var filterPortArriveButt4 = {
                                    id: 'filter-port-arrive-butt-4',
                                    xtype: 'button',
                                    text: _('orders_item_filter_port_arrive_riga'),
                                    scope: this,
                                    enableToggle: true,
                                    value: 'riga',
                                    handler: this.filterPortArriveButt,
                                };

                                templates.push(filterPortArriveButt1);
                                templates.push(filterPortArriveButt2);
                                templates.push(filterPortArriveButt3);
                                templates.push(filterPortArriveButt4);


                                this.getTopToolbar().add(new Ext.Toolbar({
                                    renderTo: this.tbar,
                                    items: templates,
                                }));
                            }, scope: this
                        }
                    }
                });
            },
        }
    },

    changeTemplate: function (btn) {
        var value = btn.value;
        var s = this.grid.getStore();

        s.setBaseParam('template', value);
        this.grid.getBottomToolbar().changePage(1);
        this.reloadPage();
    },

    filterPortArriveButt: function(btn,e) {
        var s = this.grid.getStore();
        var value = btn.value;
        if (btn.pressed) {
            s.setBaseParam('portArrive', value);
            Ext.getCmp('filter-port-arrive-butt-1').removeClass('primary-button');
            Ext.getCmp('filter-port-arrive-butt-2').removeClass('primary-button');
            Ext.getCmp('filter-port-arrive-butt-3').removeClass('primary-button');
            Ext.getCmp('filter-port-arrive-butt-4').removeClass('primary-button');
            Ext.getCmp('filter-port-arrive-butt-1').toggle(false);
            Ext.getCmp('filter-port-arrive-butt-2').toggle(false);
            Ext.getCmp('filter-port-arrive-butt-3').toggle(false);
            Ext.getCmp('filter-port-arrive-butt-4').toggle(false);
            btn.addClass('primary-button');
            btn.toggle(true);
        }
        else {
            s.setBaseParam('portArrive', '');
            btn.removeClass('primary-button');
        }
        this.grid.getBottomToolbar().changePage(1);
        s.removeAll();
        this.grid.refresh();
    },

    reloadPage: function() {
        location.href = location.href;
    },

});
Ext.reg('orders-grid-items-templates',orders.grid.TemplatesForm);