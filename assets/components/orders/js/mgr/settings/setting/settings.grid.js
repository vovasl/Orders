orders.grid.Settings = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-grid-settings';
    }
    Ext.applyIf(config, {
        url: orders.config.connector_url,
        fields: this.getFields(config),
        autosave: true,
        save_action: 'mgr/settings/setting/updatefromgrid',
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        sm: new Ext.grid.CheckboxSelectionModel(),
        baseParams: {
            action: 'mgr/settings/setting/getlist',
            area: 'system'
        },
        listeners: {
        },
        viewConfig: {
            forceFit: true,
            enableRowBody: true,
            autoFill: true,
            showPreview: true,
            scrollOffset: 0,
        },
        paging: true,
        remoteSort: true,
        autoHeight: true,
    });
    orders.grid.Settings.superclass.constructor.call(this, config);

    // Clear selection on grid refresh
    this.store.on('load', function () {
        if (this._getSelectedIds().length) {
            this.getSelectionModel().clearSelections();
        }
    }, this);
};
Ext.extend(orders.grid.Settings, MODx.grid.Grid, {
    windows: {},

    getMenu: function (grid, rowIndex) {
        var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
        var menu = orders.utils.getMenu(row.data['actions'], this, ids);

    },

    createSetting: function (btn, e) {
        var w = MODx.load({
            xtype: 'orders-setting-window-create',
            id: Ext.id(),
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        w.reset();
        w.setValues({active: true});
        w.show(e.target);
    },

    importItems: function(btn, e) {
        var w = MODx.load({
            xtype: 'orders-grid-settings-import-items',
            id: Ext.id(),
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        w.reset();
        w.show(e.target);
    },

    updateSetting: function (btn, e, row) {
        if (typeof(row) != 'undefined') {
            this.menu.record = row.data;
        }
        else if (!this.menu.record) {
            return false;
        }
        var id = this.menu.record.id;

        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/settings/setting/get',
                id: id
            },
            listeners: {
                success: {
                    fn: function (r) {
                        var w = MODx.load({
                            xtype: 'orders-setting-window-update',
                            id: Ext.id(),
                            record: r,
                            listeners: {
                                success: {
                                    fn: function () {
                                        this.refresh();
                                    }, scope: this
                                }
                            }
                        });
                        w.reset();
                        w.setValues(r.object);
                        w.show(e.target);
                    }, scope: this
                }
            }
        });
    },

    removeSetting: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.msg.confirm({
            title: ids.length > 1
                ? _('orders_settings_remove')
                : _('orders_setting_remove'),
            text: ids.length > 1
                ? _('orders_settings_remove_confirm')
                : _('orders_setting_remove_confirm'),
            url: this.config.url,
            params: {
                action: 'mgr/settings/setting/remove',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        return true;
    },

    getFields: function () {
        return ['id', 'name_trans', 'name', 'value', 'actions'];
    },

    getColumns: function () {
        var all = {
            name_trans: {width: 250},
            value: {width: 470, editor: {xtype: 'textarea'}},
            actions: {width: 45, id: 'actions', renderer: orders.utils.renderActions, sortable: false,}
        };
        var fields = this.getFields();
        var columns = [];
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (all[field]) {
                Ext.applyIf(all[field], {
                    header: _('orders_setting_' + field),
                    dataIndex: field,
                    sortable: true,
                });
                columns.push(all[field]);
            }
        }


        return columns;
    },

    getTopBar: function () {
        return [{
            text: '<i class="icon icon-plus"></i>&nbsp;' + _('orders_setting_create'),
            handler: this.createSetting,
            scope: this
        }, '-', {
            text: _('orders_setting_import_items'),
            handler: this.importItems,
            scope: this
        }];
    },

    onClick: function (e) {
        var elem = e.getTarget();
        if (elem.nodeName == 'BUTTON') {
            var row = this.getSelectionModel().getSelected();
            if (typeof(row) != 'undefined') {
                var action = elem.getAttribute('action');
                if (action == 'showMenu') {
                    var ri = this.getStore().find('id', row.id);
                    return this._showMenu(this, ri, e);
                }
                else if (typeof this[action] === 'function') {
                    this.menu.record = row.data;
                    return this[action](this, e);
                }
            }
        }
        return this.processEvent('click', e);
    },

    _getSelectedIds: function () {
        var ids = [];
        var selected = this.getSelectionModel().getSelections();

        for (var i in selected) {
            if (!selected.hasOwnProperty(i)) {
                continue;
            }
            ids.push(selected[i]['id']);
        }

        return ids;
    },

});
Ext.reg('orders-grid-settings', orders.grid.Settings);
