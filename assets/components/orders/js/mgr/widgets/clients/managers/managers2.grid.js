orders.grid.ClientManagers2 = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-grid-client-managers2';
    }
    Ext.applyIf(config, {
        url: orders.config.connector_url,
        fields: this.getFields(config),
        autosave: true,
        save_action: 'mgr/client/manager2/updatefromgrid',
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        baseParams: {
            action: 'mgr/client/manager2/getlist',
            client: config.client,
            sort: 'id',
            dir: 'asc',
            combo: true,
        },
    });
    orders.grid.ClientManagers2.superclass.constructor.call(this, config);

    // Clear selection on grid refresh
    this.store.on('load', function () {
        if (this._getSelectedIds().length) {
            this.getSelectionModel().clearSelections();
        }
    }, this);
};
Ext.extend(orders.grid.ClientManagers2, MODx.grid.Grid, {
    windows: {},

    getMenu: function (grid, rowIndex) {
        var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
        var menu = orders.utils.getMenu(row.data['actions'], this, ids);

    },

    createManager2: function (btn, e) {
        var w = MODx.load({
            xtype: 'orders-client-manager2-window-create',
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
        w.setValues({active: true, client: this.config.client});
        w.show(e.target);
    },

    updateManager2: function (btn, e, row) {
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
                action: 'mgr/client/manager2/get',
                id: id
            },
            listeners: {
                success: {
                    fn: function (r) {
                        r.object.client = this.config.client;
                        var w = MODx.load({
                            xtype: 'orders-client-manager2-window-update',
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
                        //console.log(r.object);
                        w.setValues(r.object);
                        w.show(e.target);
                    }, scope: this
                }
            }
        });
    },

    removeManager2: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.msg.confirm({
            title: ids.length > 1
                ? _('orders_managers_remove')
                : _('orders_manager_remove'),
            text: ids.length > 1
                ? _('orders_managers_remove_confirm')
                : _('orders_manager_remove_confirm'),
            url: this.config.url,
            params: {
                action: 'mgr/client/manager2/remove',
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
        return ['id', 'client', 'manager', 'default', 'actions'];
    },

    getColumns: function () {
        return [{
                header: _('orders_managers_name'),
                dataIndex: 'manager',
                sortable: true,
                width: 250,
                editor: {xtype: 'orders-combo-manager', renderer: true}
            }, {
                header: _('orders_field_default'),
                dataIndex: 'default',
                sortable: true,
                width: 65,
                renderer: orders.utils.renderBoolean,
            }, {
                header: _('orders_grid_actions'),
                dataIndex: 'actions',
                renderer: orders.utils.renderActions,
                sortable: false,
                width: 45,
                id: 'actions'
            }];
    },

    getTopBar: function () {
        return [{
            text: '<i class="icon icon-plus"></i>&nbsp;' + _('orders_client_manager_create'),
            handler: this.createManager2,
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

    _doSearch: function (tf) {
        this.getStore().baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
    },

    _clearSearch: function () {
        this.getStore().baseParams.query = '';
        this.getBottomToolbar().changePage(1);
    },
});
Ext.reg('orders-grid-client-managers2', orders.grid.ClientManagers2);
