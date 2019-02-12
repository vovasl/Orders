orders.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'orders-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            html: '<h2>' + _('settings') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('orders_setting_title'),
                layout: 'anchor',
                items: [{
                    html: _('orders_setting_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'orders-grid-settings',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('orders_setting_permissions_title'),
                layout: 'anchor',
                items: [{
                    html: _('orders_setting_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'orders-grid-settings-permissions',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('orders_template_title'),
                layout: 'anchor',
                items: [{
                    html: _('orders_template_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'orders-grid-templates',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('orders_settings_fields_width_title'),
                layout: 'anchor',
                items: [{
                    html: _('orders_settings_fields_width_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'orders-grid-settings-fields-widths',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    orders.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(orders.panel.Home, MODx.Panel);
Ext.reg('orders-panel-settings', orders.panel.Home);
