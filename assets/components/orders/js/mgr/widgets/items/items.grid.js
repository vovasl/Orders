orders.grid.Items = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'orders-grid-items';
    }
    Ext.applyIf(config, {
        url: orders.config.connector_url,
        fields: this.getFields(config),
        autosave: true,
        save_action: 'mgr/item/updatefromgrid',
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        sm: new Ext.grid.CheckboxSelectionModel(),
        baseParams: {
            action: 'mgr/item/getlist',
            combo: true,
        },
        listeners: {
            /*
            rowDblClick: function (grid, rowIndex, e) {
                var row = grid.store.getAt(rowIndex);
                this.updateItem(grid, e, row);
            }
            */
        },
        viewConfig: {
            forceFit: true,
            enableRowBody: true,
            autoFill: true,
            showPreview: true,
            scrollOffset: 0,
            focusRow: Ext.emptyFn,
            getRowClass: function (rec) {
                return rec.data.color;
            }
        },


        paging: true,
        remoteSort: true,
        autoHeight: false,
        height: 900,
        width: this.calcWidth(config),
        pageSize: 100,
        proxy : {
            writer: {
                type : 'json',
                nameProperty : 'mapping',
                successProperty : 'success'
            }
        },
    });
    orders.grid.Items.superclass.constructor.call(this, config);

    // Clear selection on grid refresh
    this.store.on('load', function () {
        if (this._getSelectedIds().length) {
            this.getSelectionModel().clearSelections();
        }
    }, this);
};
Ext.extend(orders.grid.Items, MODx.grid.Grid, {
    windows: {},

    getMenu: function (grid, rowIndex) {
        var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
        var menu = orders.utils.getMenu(row.data['actions'], this, ids);

        this.addContextMenuItem(menu);

    },

    createItem: function (btn, e) {
        var w = MODx.load({
            xtype: 'orders-item-window-create',
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

    updateItem: function (btn, e, row) {

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
                action: 'mgr/item/get',
                id: id
            },
            listeners: {
                success: {
                    fn: function (r) {
                        var w = MODx.load({
                            xtype: 'orders-item-window-update',
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

    removeItem: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.msg.confirm({
            title: ids.length > 1
                ? _('orders_items_remove')
                : _('orders_item_remove'),
            text: ids.length > 1
                ? _('orders_items_remove_confirm')
                : _('orders_item_remove_confirm'),
            url: this.config.url,
            params: {
                action: 'mgr/item/remove',
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

    disableItem: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/item/disable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    enableItem: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/item/enable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    zipItem: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/item/zip',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    unzipItem: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/item/unzip',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    importantItem: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/item/important',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    unimportantItem: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/item/unimportant',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },


    getFields: function () {
        var fields = orders.config['orders_item_fields'];
        return fields;
    },

    allFields: function () {
        var fields = {};

        fields = {
            actions: {width: 200, id: 'actions', renderer: orders.utils.renderActions, sortable: false},
            color: {width: 34, editor: {xtype: 'orders-combo-row-color', renderer: true}},
            id: {width: 75, renderer: orders.utils.renderID},
            release: {width: 29, renderer: orders.utils.renderBoolean},
            release_date: {
                width: 70,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'},
            },
            client: {width: 127, editor: {xtype: 'orders-combo-client', renderer: true}},
            goods: {width: 127, editor: {xtype: 'orders-combo-goods', renderer: true}},
            container_number: {width: 120, editor: {xtype: 'textfield'}},
            agent_number: {width: 51, editor: {xtype: 'textfield'}},
            agent_china_number: {width: 51, editor: {xtype: 'textfield'}},
            line: {width: 102, editor: {xtype: 'orders-combo-line', renderer: true}},
            port_departure: {width: 68, editor: {xtype: 'orders-combo-port-departure', renderer: true}},
            port_departure_date: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'},
            },
            port_arrive: {width: 110, editor: {xtype: 'orders-combo-port-arrive', renderer: true}},
            port_arrive_date: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            receiver: {width: 91, editor: {xtype: 'orders-combo-receiver', renderer: true}},
            forwarder: {width: 91, editor: {xtype: 'orders-combo-forwarder', renderer: true}},
            tax_payments: {width: 99, editor: {xtype: 'textfield'}},
            tax_payments_nds: {width: 99, editor: {xtype: 'textfield'}},
            container_type: {width: 52, editor: {xtype: 'orders-combo-container-type', renderer: true}},
            weight: {width: 72, editor: {xtype: 'textfield'}},
            station_train_arrive: {width: 140, editor: {xtype: 'orders-combo-station-train-arrive', renderer: true}},
            train_arrive_date: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            delivery_date: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            address: {width: 170, editor: {xtype: 'orders-combo-address', renderer: true}},
            address_container: {width: 170, editor: {xtype: 'orders-combo-address-container', renderer: true}},
            export_from_station_real: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            manager2: {width: 85, editor: {xtype: 'orders-combo-manager', renderer: true}},
            bl: {width: 160, editor: {xtype: 'textfield'}},
            bill_entry_number: {width: 200, editor: {xtype: 'textfield'}},
            manager: {width: 85, editor: {xtype: 'orders-combo-manager', renderer: true}},
            delivery_term: {width: 34, editor: {xtype: 'orders-combo-delivery-term', renderer: true}},
            city_delivery: {width: 51, editor: {xtype: 'orders-combo-city-delivery', renderer: true}},
            volume: {width: 54, editor: {xtype: 'textfield'}},
            count_boxes: {width: 36, editor: {xtype: 'textfield'}},
            agent_railway: {width: 160, editor: {xtype: 'orders-combo-agent-railway', renderer: true}},
            delivery_term_receiver: {width: 34, editor: {xtype: 'orders-combo-delivery-term-receiver', renderer: true}},
            sale: {width: 260, editor: {xtype: 'orders-combo-sale-note', renderer: true}},
            accounts: {width: 455, editor: {xtype: 'orders-combo-accounts-note', renderer: true}},
            sender: {width: 51, editor: {xtype: 'orders-combo-sender', renderer: true}},
            application_date: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            availability_date: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            booking: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            factory_supply: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            pdt: {width: 76, renderer: Ext.util.Format.dateRenderer('d.m.y'), editor: {xtype: 'orders-combo-xdates'}},
            examination: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            examined: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            vdt: {width: 76, renderer: Ext.util.Format.dateRenderer('d.m.y'), editor: {xtype: 'orders-combo-xdates'}},
            train_departure_date: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            distance_to_station: {width: 34, editor: {xtype: 'textfield'}},
            stations: {width: 34, editor: {xtype: 'textarea'}},
            export_from_station: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            delivery_container_date: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            note: {width: 85, editor: {xtype: 'textarea'}},
            company_warehouse: {width: 85, editor: {xtype: 'orders-combo-company-warehouse', renderer: true}},
            contact_person: {width: 85, editor: {xtype: 'textfield'}},
            contact_person_phone: {width: 85, editor: {xtype: 'textfield'}},
            car_carrier: {width: 156, editor: {xtype: 'orders-combo-car-carrier', renderer: true}},
            car_carrier_rate: {width: 63, editor: {xtype: 'textfield'}},
            car_number: {width: 117, editor: {xtype: 'textfield'}},
            driver: {width: 85, editor: {xtype: 'textfield'}},
            driver_phone: {width: 85, editor: {xtype: 'textfield'}},
            created: {width: 76},
            total: {width: 85, editor: {xtype: 'textfield'}},
            currency: {width: 85, editor: {xtype: 'orders-combo-currency', renderer: true}},
            exchange_rate: {width: 85, editor: {xtype: 'textfield'}},
            d_application: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            d_application_4: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            d_payment: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            d_payment_4: {
                width: 76,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            closed: {width: 85, editor: {xtype: 'orders-combo-yes-no', renderer: true}},
            agent: {width: 85, editor: {xtype: 'orders-combo-agent', renderer: true}},
            note_2: {width: 85, editor: {xtype: 'textarea'}},
            note_3: {width: 130, editor: {xtype: 'textarea'}},
            rate_rur: {width: 63, editor: {xtype: 'textfield'}},
            rate_usd: {width: 63, editor: {xtype: 'textfield'}},
            closed_2: {width: 64, editor: {xtype: 'orders-combo-yes-no', renderer: true}},
            d_closed: {
                width: 72,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            com_zebra: {width: 63, editor: {xtype: 'textfield'}},
            note_4: {width: 195, editor: {xtype: 'textarea'}},
            payment_form: {width: 78, editor: {xtype: 'orders-combo-payment-form', renderer: true}},
            currency_2: {width: 85, editor: {xtype: 'orders-combo-currency', renderer: true}},
            currency_3: {width: 85, editor: {xtype: 'orders-combo-currency', renderer: true}},
            currency_4: {width: 85, editor: {xtype: 'orders-combo-currency', renderer: true}},
            account_number: {width: 117, editor: {xtype: 'textfield'}},
            account_number_2: {width: 117, editor: {xtype: 'textfield'}},
            account_number_3: {width: 117, editor: {xtype: 'textfield'}},
            account_number_4: {width: 117, editor: {xtype: 'textfield'}},
            customs_fee: {width: 90, editor: {xtype: 'textfield'}},
            closed_3: {width: 65, editor: {xtype: 'orders-combo-yes-no', renderer: true}},
            closed_4: {width: 65, editor: {xtype: 'orders-combo-yes-no', renderer: true}},
            closed_5: {width: 65, editor: {xtype: 'orders-combo-yes-no', renderer: true}},
            total_2: {width: 85, editor: {xtype: 'textfield'}},
            total_3: {width: 85, editor: {xtype: 'textfield'}},
            total_4: {width: 85, editor: {xtype: 'textfield'}},
            exw: {width: 63, editor: {xtype: 'textfield'}},
            shipper_2: {width: 160, editor: {xtype: 'textfield'}},
            shipper_3: {width: 160, editor: {xtype: 'textfield'}},
            shipper_4: {width: 160, editor: {xtype: 'textfield'}},
            shipper_5: {width: 160, editor: {xtype: 'textfield'}},
            bl_2: {width: 160, editor: {xtype: 'textfield'}},
            bl_3: {width: 160, editor: {xtype: 'textfield'}},
            bl_4: {width: 160, editor: {xtype: 'textfield'}},
            bl_5: {width: 160, editor: {xtype: 'textfield'}},
            agent_2: {width: 160, editor: {xtype: 'textfield'}},
            agent_3: {width: 160, editor: {xtype: 'textfield'}},
            agent_4: {width: 160, editor: {xtype: 'textfield'}},
            agent_5: {width: 160, editor: {xtype: 'textfield'}},
            invoice_2: {width: 160, editor: {xtype: 'textfield'}},
            invoice_3: {width: 160, editor: {xtype: 'textfield'}},
            invoice_4: {width: 160, editor: {xtype: 'textfield'}},
            invoice_5: {width: 160, editor: {xtype: 'textfield'}},
            ready_date_2: {
                width: 112,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            ready_date_3: {
                width: 112,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            ready_date_4: {
                width: 112,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            ready_date_5: {
                width: 112,
                renderer: Ext.util.Format.dateRenderer('d.m.y'),
                editor: {xtype: 'orders-combo-xdates'}
            },
            goods_2: {width: 120, editor: {xtype: 'textfield'}},
            goods_3: {width: 120, editor: {xtype: 'textfield'}},
            goods_4: {width: 120, editor: {xtype: 'textfield'}},
            goods_5: {width: 120, editor: {xtype: 'textfield'}},
            cbm_2: {width: 74, editor: {xtype: 'textfield'}},
            cbm_3: {width: 74, editor: {xtype: 'textfield'}},
            cbm_4: {width: 74, editor: {xtype: 'textfield'}},
            cbm_5: {width: 74, editor: {xtype: 'textfield'}},
            kgs_2: {width: 72, editor: {xtype: 'textfield'}},
            kgs_3: {width: 72, editor: {xtype: 'textfield'}},
            kgs_4: {width: 72, editor: {xtype: 'textfield'}},
            kgs_5: {width: 72, editor: {xtype: 'textfield'}},
            ctn_2: {width: 76, editor: {xtype: 'textfield'}},
            ctn_3: {width: 76, editor: {xtype: 'textfield'}},
            ctn_4: {width: 76, editor: {xtype: 'textfield'}},
            ctn_5: {width: 76, editor: {xtype: 'textfield'}},
            note_s_2: {width: 125, editor: {xtype: 'textarea'}},
            note_s_3: {width: 125, editor: {xtype: 'textarea'}},
            note_s_4: {width: 125, editor: {xtype: 'textarea'}},
            note_s_5: {width: 125, editor: {xtype: 'textarea'}},

        };

		var allWidth = orders.config['orders_item_fields_width'];
		Ext.iterate(fields, function(key, value){
			if(allWidth[key]) {
				value['width'] = allWidth[key]['width'];
			}
		});

        return fields;
    },


    getColumns: function () {
        var all = this.allFields();
        var fields = this.getFields();
        var columns = [];
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (all[field]) {
                Ext.applyIf(all[field], {
                    header: _('orders_item_' + field),
                    dataIndex: field,
                    sortable: true,
                    fixed: true
                });
                if(orders.config['orders_item_fields_disabled'].includes(field)) {
                    Ext.applyIf(all[field]['editor'], {
                        disabled: true,
                    });
                }
                columns.push(all[field]);
            }
        }

        return columns;
    },

    getTopBar: function () {
        var createItem = {
            text: '<i class="icon icohandler: this.createItem,n-plus"></i>&nbsp;' + _('orders_item_create'),
            handler: this.createItem,
            scope: this
        };
        var template = {
            xtype: 'orders-combo-template',
            listeners: {
                select: {
                    fn: function (field) {
                        this._selectTemplate(field);
                    }, scope: this
                },
                render: function(){
                    this.setValue(orders.config['orders_item_template']);
                }
            }
        };
        var buttonImportant = {
            xtype: 'button',
            scope: this,
            enableToggle: true,
            handler: this._buttonImportant,
            iconCls : 'icon icon-star',
        };
        var search = {
            xtype: 'orders-field-item-search',
            width: 245,
            listeners: {
                keyup: {
                    fn: function (field) {
                        this._doSearch(field);
                    }, scope: this
                },
                search: {
                    fn: function (field) {
                        this._doSearch(field);
                    }, scope: this
                },
                clear: {
                    fn: function (field) {
                        field.setValue('');
                        this._clearSearch();
                    }, scope: this
                },
            }
        };
        var filterReceiver = {
            xtype: 'orders-combo-filter-receiver',
            listeners: {
                select: {
                    fn: function (field) {
                        this._selectFilterReceiver(field);
                    }, scope: this
                }
            }
        };
        var filterPortArrive = {
            width: 185,
            xtype: 'orders-combo-filter-port-arrive',
            listeners: {
                select: {
                    fn: function (field) {
                        this._selectFilterPortArrive(field);
                    }, scope: this
                }
            }
        };
        var filterStationTrainArrive = {
            xtype: 'orders-combo-filter-station-train-arrive',
            listeners: {
                select: {
                    fn: function (field) {
                        this._selectFilterStationTrainArrive(field);
                    }, scope: this
                }
            }
        };
        var filterManager = {
            xtype: 'orders-combo-filter-manager',
            listeners: {
                select: {
                    fn: function (field) {
                        this._selectFilterManager(field);
                    }, scope: this
                }
            }
        };
        var filterColor = {
            xtype: 'orders-combo-filter-color',
            listeners: {
                select: {
                    fn: function (field) {
                        this._selectFilterColor(field);
                    }, scope: this
                }
            }
        };
        var searchCarNumber = {
            xtype: 'orders-field-item-search-car-number',
                width: 175,
                listeners: {
                keyup: {
                    fn: function (field) {
                        this._doSearchCarNumber(field);
                    }, scope: this
                },
                search: {
                    fn: function (field) {
                        this._doSearchCarNumber(field);
                    }, scope: this
                },
                clear: {
                    fn: function (field) {
                        field.setValue('');
                        this._clearSearchCarNumber();
                    }, scope: this
                },
            }
        };
        var searchBillEntryNumber = {
            xtype: 'orders-field-item-search-bill-entry-number',
            width: 270,
            listeners: {
                keyup: {
                    fn: function (field) {
                        this._doSearchBillEntryNumber(field);
                    }, scope: this
                },
                search: {
                    fn: function (field) {
                        this._doSearchBillEntryNumber(field);
                    }, scope: this
                },
                clear: {
                    fn: function (field) {
                        field.setValue('');
                        this._clearSearchBillEntryNumber();
                    }, scope: this
                },
            }
        };
        var buttonArchive = {
            xtype: 'button',
            scope: this,
            enableToggle: true,
            handler: this._buttonArchive,
            iconCls : 'icon icon-archive',
        };
        var buttonHidden = {
            xtype: 'button',
            scope: this,
            enableToggle: true,
            handler: this._buttonHidden,
            iconCls : 'icon icon-power-off action-green',
        };

        var topBar = [];

        if(orders.config['perm.orders_item_create_button']){
            topBar.push(createItem);
        }
        topBar.push(template);
        topBar.push(buttonImportant);
        topBar.push(search);
        topBar.push(filterReceiver);
        topBar.push(filterPortArrive);
        topBar.push(filterStationTrainArrive);
        topBar.push(filterManager);
        topBar.push(filterColor);
        topBar.push(searchCarNumber);
        topBar.push(searchBillEntryNumber);
        topBar.push(buttonArchive);
        topBar.push(buttonHidden);

        return topBar;
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
        var s = this.getStore();
        s.setBaseParam('searchStr',tf.getValue());
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _clearSearch: function () {
        var s = this.getStore();
        s.setBaseParam('searchStr','');
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _doSearchCarNumber: function (tf) {
        var s = this.getStore();
        s.setBaseParam('searchCarNumber',tf.getValue());
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _clearSearchCarNumber: function () {
        var s = this.getStore();
        s.setBaseParam('searchCarNumber','');
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _doSearchBillEntryNumber: function (tf) {
        var s = this.getStore();
        s.setBaseParam('searchBillEntryNumber',tf.getValue());
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _clearSearchBillEntryNumber: function () {
        var s = this.getStore();
        s.setBaseParam('searchBillEntryNumber','');
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _buttonImportant: function(btn,e) {
        var s = this.getStore();
        if (btn.pressed) {
            s.setBaseParam('important',1);
            btn.setIconClass('icon icon-star action-red');
        } else {
            s.setBaseParam('important',0);
            btn.setIconClass('icon icon-star');
        }
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _buttonArchive: function(btn,e) {
        var s = this.getStore();
        if (btn.pressed) {
            s.setBaseParam('archive',1);
            btn.setIconClass('icon icon-archive action-green');
        } else {
            s.setBaseParam('archive',0);
            btn.setIconClass('icon icon-archive');
        }
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _buttonHidden: function(btn,e) {
        var s = this.getStore();
        if (btn.pressed) {
            s.setBaseParam('hidden',1);
            btn.setIconClass('icon icon-power-off');
        } else {
            s.setBaseParam('hidden',0);
            btn.setIconClass('icon icon-power-off action-green');
        }
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },
    _selectFilterColor: function (tf) {
        var s = this.getStore();
        s.setBaseParam('color',tf.getValue());
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _selectFilterReceiver: function (tf) {
        var s = this.getStore();
        s.setBaseParam('receiver',tf.getValue());
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _selectFilterManager: function (tf) {
        var s = this.getStore();
        s.setBaseParam('manager2',tf.getValue());
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _selectFilterStationTrainArrive: function (tf) {
        var s = this.getStore();
        s.setBaseParam('stationTrainArrive',tf.getValue());
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _selectFilterPortArrive: function (tf) {
        var s = this.getStore();
        s.setBaseParam('portArrive',tf.getValue());
        this.getBottomToolbar().changePage(1);
        s.removeAll();
        this.refresh();
    },

    _selectTemplate: function (tf) {
        var s = this.getStore();
        console.log(tf.getValue());
        s.setBaseParam('template',tf.getValue());
        this.getBottomToolbar().changePage(1);
        this.reloadPage();
    },

    reloadPage: function() {
        location.href = location.href;
    },

    calcWidth: function () {
        var width = 0;
        var all = this.allFields();
        var fields = this.getFields();
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (all[field]) {
                width += all[field]['width'];
            }
        }
        return width;
    }

});
Ext.reg('orders-grid-items', orders.grid.Items);