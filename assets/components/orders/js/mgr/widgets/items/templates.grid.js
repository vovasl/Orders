orders.grid.TemplatesForm = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'orders-grid-items-templates'
        ,autoHeight: true
        ,url: orders.config.connector_url
        ,tbar: this.getTopBar(config)
        ,listeners: this.getListeners(config)

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
            afterrender: function () {
                this.activeButton();
            }
        }
    },

    getTopBar: function() {
        var template1 = {
            id: 'but-template-7',
            xtype: 'button',
            text: '01_ОСНОВНОЙ',
            scope: this,
            value: 7,
            handler: this.changeTemplate,
        };
        var template2 = {
            id: 'but-template-6',
            xtype: 'button',
            text: '02_ЗАКАЗ ТП+СТАВКИ',
            scope: this,
            value: 6,
            handler: this.changeTemplate,
        };
        var template3 = {
            id: 'but-template-10',
            xtype: 'button',
            text: '03_ФРАХТ+ЯНА',
            scope: this,
            value: 10,
            handler: this.changeTemplate,
        };

        var templates = [];
        templates.push(template1);
        templates.push(template2);
        templates.push(template3);
        return templates;
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

    activeButton: function () {
        var btnID = 'but-template-' + orders.config['orders_item_template'];
        var btn = Ext.getCmp(btnID);
        if(btn) {
            btn.addClass('primary-button');
        }
    }

});
Ext.reg('orders-grid-items-templates',orders.grid.TemplatesForm);