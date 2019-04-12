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

    reloadPage: function() {
        location.href = location.href;
    },

});
Ext.reg('orders-grid-items-templates',orders.grid.TemplatesForm);