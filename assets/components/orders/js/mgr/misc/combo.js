var colors = new Ext.data.ArrayStore({
    fields: ['id','name'],
    data: [
        ['', 'По умолчанию'],
        ['orders-row-red','Проблема - Красный'],
        ['orders-row-brown','Заказан ТП - Голубой'],
        ['orders-row-yellow','Идет по ЖД - Желтый'],
        ['orders-row-green','Вывозится АМ - Зеленый'],
        ['orders-row-violet','Доставлен - Фиолетовый']
    ]
});

var colorsFilter = new Ext.data.ArrayStore({
    fields: ['id','name'],
    data: [
        ['', 'Все цвета'],
        ['orders-row-red','Проблема - Красный'],
        ['orders-row-brown','Заказан ТП - Голубой'],
        ['orders-row-yellow','Идет по ЖД - Желтый'],
        ['orders-row-green','Вывозится АМ - Зеленый'],
        ['orders-row-violet','Доставлен - Фиолетовый']
    ]
});

var currencies = new Ext.data.ArrayStore({
    fields: ['name'],
    data: [
        ['USD'],
        ['RUR'],
        ['EUR']
    ]
});

var YesNo = new Ext.data.ArrayStore({
    fields: ['id', 'name'],
    data: [
        ['1', 'Да'],
        ['0', 'Нет'],
    ]
});

var agent = new Ext.data.ArrayStore({
    fields: ['name'],
    data: [
        ['Зебра Кипр'],
        ['Опулент'],
        ['Зебра росс'],
        ['Спаркл'],
    ]
});

var payment_form = new Ext.data.ArrayStore({
    fields: ['name'],
    data: [
        ['Нал'],
        ['Безнал'],
    ]
});

var settings_area = new Ext.data.ArrayStore({
    fields: ['name'],
    data: [
        ['system'],
        ['permission'],
        ['hidden'],
    ]
});

var reportSort = new Ext.data.ArrayStore({
    fields: ['id','name'],
    data: [
        ['port_arrive_date', _('orders_item_port_arrive_date')],
        ['train_arrive_date', _('orders_item_train_arrive_date')]
    ]
});


orders.combo.ItemSearch = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        xtype: 'twintrigger',
        ctCls: 'x-field-search',
        allowBlank: true,
        msgTarget: 'under',
        emptyText: _('orders_item_search'),
        name: 'query',
        triggerAction: 'all',
        clearBtnCls: 'x-field-search-clear',
        searchBtnCls: 'x-field-search-go',
        onTrigger1Click: this._triggerItemSearch,
        onTrigger2Click: this._triggerClear,
        enableKeyEvents: true,
    });
    orders.combo.ItemSearch.superclass.constructor.call(this, config);
    this.on('render', function () {
        this.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
            this._triggerItemSearch();
        }, this);
    });
    this.addEvents('clear', 'search');
};
Ext.extend(orders.combo.ItemSearch, Ext.form.TwinTriggerField, {

    initComponent: function () {
        Ext.form.TwinTriggerField.superclass.initComponent.call(this);
        this.triggerConfig = {
            tag: 'span',
            cls: 'x-field-search-btns',
            cn: [
                {tag: 'div', cls: 'x-form-trigger ' + this.searchBtnCls},
                {tag: 'div', cls: 'x-form-trigger ' + this.clearBtnCls}
            ]
        };
    },

    _triggerItemSearch: function () {
        this.fireEvent('search', this);
    },

    _triggerClear: function () {
        this.fireEvent('clear', this);
    },

});
Ext.reg('orders-field-item-search', orders.combo.ItemSearch);

orders.combo.ItemSearchCarNumber = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        xtype: 'twintrigger',
        ctCls: 'x-field-search',
        allowBlank: true,
        msgTarget: 'under',
        emptyText: _('orders_item_search_car_number'),
        name: 'query',
        triggerAction: 'all',
        clearBtnCls: 'x-field-search-clear',
        searchBtnCls: 'x-field-search-go',
        onTrigger1Click: this._triggerItemSearchCarNumber,
        onTrigger2Click: this._triggerClear,
        enableKeyEvents: true,
    });
    orders.combo.ItemSearchCarNumber.superclass.constructor.call(this, config);
    this.on('render', function () {
        this.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
            this._triggerItemSearchCarNumber();
        }, this);
    });
    this.addEvents('clear', 'search');
};
Ext.extend(orders.combo.ItemSearchCarNumber, Ext.form.TwinTriggerField, {

    initComponent: function () {
        Ext.form.TwinTriggerField.superclass.initComponent.call(this);
        this.triggerConfig = {
            tag: 'span',
            cls: 'x-field-search-btns',
            cn: [
                {tag: 'div', cls: 'x-form-trigger ' + this.searchBtnCls},
                {tag: 'div', cls: 'x-form-trigger ' + this.clearBtnCls}
            ]
        };
    },

    _triggerItemSearchCarNumber: function () {
        this.fireEvent('search', this);
    },

    _triggerClear: function () {
        this.fireEvent('clear', this);
    },

});
Ext.reg('orders-field-item-search-car-number', orders.combo.ItemSearchCarNumber);

orders.combo.ItemSearchBillEntryNumber = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        xtype: 'twintrigger',
        ctCls: 'x-field-search',
        allowBlank: true,
        msgTarget: 'under',
        emptyText: _('orders_item_search_bill_entry_number'),
        name: 'query',
        triggerAction: 'all',
        clearBtnCls: 'x-field-search-clear',
        searchBtnCls: 'x-field-search-go',
        onTrigger1Click: this._triggerItemSearchBillEntryNumber,
        onTrigger2Click: this._triggerClear,
        enableKeyEvents: true,
    });
    orders.combo.ItemSearchBillEntryNumber.superclass.constructor.call(this, config);
    this.on('render', function () {
        this.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
            this._triggerItemSearchBillEntryNumber();
        }, this);
    });
    this.addEvents('clear', 'search');
};
Ext.extend(orders.combo.ItemSearchBillEntryNumber, Ext.form.TwinTriggerField, {

    initComponent: function () {
        Ext.form.TwinTriggerField.superclass.initComponent.call(this);
        this.triggerConfig = {
            tag: 'span',
            cls: 'x-field-search-btns',
            cn: [
                {tag: 'div', cls: 'x-form-trigger ' + this.searchBtnCls},
                {tag: 'div', cls: 'x-form-trigger ' + this.clearBtnCls}
            ]
        };
    },

    _triggerItemSearchBillEntryNumber: function () {
        this.fireEvent('search', this);
    },

    _triggerClear: function () {
        this.fireEvent('clear', this);
    },

});
Ext.reg('orders-field-item-search-bill-entry-number', orders.combo.ItemSearchBillEntryNumber);

orders.combo.FilterColor = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: colorsFilter,
        name: 'filter_color',
        hiddenName: config.name || '_filter_color',
        displayField: 'name',
        valueField: 'id',
        pageSize: 9999,
        hideMode: 'offsets',
        width: 125,
        mode: 'local',
        emptyText: _('orders_item_filter_color_empty_text'),

    });
    orders.combo.FilterColor.superclass.constructor.call(this,config);
};
Ext.extend(orders.combo.FilterColor,MODx.combo.ComboBox);
Ext.reg('orders-combo-filter-color',orders.combo.FilterColor);

orders.combo.FilterReceiver = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'filter_receiver',
        hiddenName: config.name || 'filter_receiver',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        width: 150,
        emptyText: _('orders_item_filter_receiver_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/receiver/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
    }
    });
    orders.combo.FilterReceiver.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.FilterReceiver, MODx.combo.ComboBox);
Ext.reg('orders-combo-filter-receiver', orders.combo.FilterReceiver);

orders.combo.FilterPortArrive = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'filter_port_arrive',
        hiddenName: config.name || 'filter_port_arrive',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_filter_port_arrive_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/port-arrive/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.FilterPortArrive.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.FilterPortArrive, MODx.combo.ComboBox);
Ext.reg('orders-combo-filter-port-arrive', orders.combo.FilterPortArrive);

orders.combo.FilterManager = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'filter_manager',
        hiddenName: config.name || 'filter_manager',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        width: 200,
        emptyText: _('orders_item_filter_manager_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/manager/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.FilterManager.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.FilterManager, MODx.combo.ComboBox);
Ext.reg('orders-combo-filter-manager', orders.combo.FilterManager);

orders.combo.FilterStationTrainArrive = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'filter_station_train_arrive',
        hiddenName: config.name || 'filter_station_train_arrive',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        width: 210,
        emptyText: _('orders_item_filter_station_train_arrive_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/station-train-arrive/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
            filter: 1
        },

    });
    orders.combo.FilterStationTrainArrive.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.FilterStationTrainArrive, MODx.combo.ComboBox);
Ext.reg('orders-combo-filter-station-train-arrive', orders.combo.FilterStationTrainArrive);

orders.combo.FilterCarCarrier = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'filter_car_carrier',
        hiddenName: config.name || 'filter_car_carrier',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        width: 150,
        emptyText: _('orders_item_filter_car_carrier_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/car-carrier/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.FilterCarCarrier.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.FilterCarCarrier, MODx.combo.ComboBox);
Ext.reg('orders-combo-filter-car-carrier', orders.combo.FilterCarCarrier);

orders.combo.FilterClient = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'filter_client',
        hiddenName: config.name || 'filter_client',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        width: 200,
        emptyText: _('orders_item_filter_client_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/client/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.FilterClient.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.FilterClient, MODx.combo.ComboBox);
Ext.reg('orders-combo-filter-client', orders.combo.FilterClient);


orders.combo.Goods = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'goods',
        hiddenName: config.name || 'goods',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        typeAhead: false,
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        autoLoad: true,
        mode: 'remote',
        triggerAction: 'all',
        baseParams: {
            action: 'mgr/goods/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Goods.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.Goods, MODx.combo.ComboBox);
Ext.reg('orders-combo-goods', orders.combo.Goods);



orders.combo.Manager = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'manager',
        hiddenName: config.name || 'manager',
        //id: 'orders-manager',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/manager/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Manager.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.Manager, MODx.combo.ComboBox);
Ext.reg('orders-combo-manager', orders.combo.Manager);

orders.combo.ContainerType = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'container_type',
        hiddenName: config.name || 'container_type',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/container-type/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.ContainerType.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.ContainerType, MODx.combo.ComboBox);
Ext.reg('orders-combo-container-type', orders.combo.ContainerType);

orders.combo.Line = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'line',
        hiddenName: config.name || 'line',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/line/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Line.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.Line, MODx.combo.ComboBox);
Ext.reg('orders-combo-line', orders.combo.Line);

orders.combo.DeliveryTerm = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'delivery_term',
        hiddenName: config.name || 'delivery_term',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/delivery-term/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.DeliveryTerm.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.DeliveryTerm, MODx.combo.ComboBox);
Ext.reg('orders-combo-delivery-term', orders.combo.DeliveryTerm);


orders.combo.Address = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'address',
        hiddenName: config.name || 'address',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/address/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Address.superclass.constructor.call(this, config);


};
Ext.extend(orders.combo.Address, MODx.combo.ComboBox);
Ext.reg('orders-combo-address', orders.combo.Address);

orders.combo.SaleNote = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'sale_note',
        hiddenName: config.name || 'sale_note',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/sale-note/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.SaleNote.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.SaleNote, MODx.combo.ComboBox);
Ext.reg('orders-combo-sale-note', orders.combo.SaleNote);

orders.combo.AccountsNote = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'accounts_note',
        hiddenName: config.name || 'accounts_note',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/accounts-note/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.AccountsNote.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.AccountsNote, MODx.combo.ComboBox);
Ext.reg('orders-combo-accounts-note', orders.combo.AccountsNote);



orders.combo.Dates = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        dateFormat: 'd.m.Y'
        ,timeFormat: 'H:i'
        ,timeWidth: 0

    });
    orders.combo.Dates.superclass.constructor.call(this,config);
};
//Ext.extend(orders.combo.Dates, Ext.form.DateField);
Ext.extend(orders.combo.Dates, Ext.ux.form.DateTime);
Ext.reg('orders-combo-xdates',orders.combo.Dates);


orders.combo.PortArrive = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'port_arrive',
        hiddenName: config.name || 'port_arrive',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/port-arrive/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.PortArrive.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.PortArrive, MODx.combo.ComboBox);
Ext.reg('orders-combo-port-arrive', orders.combo.PortArrive);


orders.combo.PortDeparture = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'port_departure',
        hiddenName: config.name || 'port_departure',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/port-departure/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.PortDeparture.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.PortDeparture, MODx.combo.ComboBox);
Ext.reg('orders-combo-port-departure', orders.combo.PortDeparture);

orders.combo.CityDelivery = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'city_delivery',
        hiddenName: config.name || 'city_delivery',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/city-delivery/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.CityDelivery.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.CityDelivery, MODx.combo.ComboBox);
Ext.reg('orders-combo-city-delivery', orders.combo.CityDelivery);

orders.combo.StationTrainArrive = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'station_train_arrive',
        hiddenName: config.name || 'station_train_arrive',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/station-train-arrive/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.StationTrainArrive.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.StationTrainArrive, MODx.combo.ComboBox);
Ext.reg('orders-combo-station-train-arrive', orders.combo.StationTrainArrive);

orders.combo.DeliveryTermReceiver = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'delivery_term_receiver',
        hiddenName: config.name || 'delivery_term_receiver',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/delivery-term-receiver/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.DeliveryTermReceiver.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.DeliveryTermReceiver, MODx.combo.ComboBox);
Ext.reg('orders-combo-delivery-term-receiver', orders.combo.DeliveryTermReceiver);

orders.combo.AddressContainer = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'address_container',
        hiddenName: config.name || 'address_container',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/address-container/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.AddressContainer.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.AddressContainer, MODx.combo.ComboBox);
Ext.reg('orders-combo-address-container', orders.combo.AddressContainer);

orders.combo.AgentRailway = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'agent_railway',
        hiddenName: config.name || 'agent_railway',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/agent-railway/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.AgentRailway.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.AgentRailway, MODx.combo.ComboBox);
Ext.reg('orders-combo-agent-railway', orders.combo.AgentRailway);

orders.combo.CarCarrier = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'car_carrier',
        hiddenName: config.name || 'car_carrier',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/car-carrier/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.CarCarrier.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.CarCarrier, MODx.combo.ComboBox);
Ext.reg('orders-combo-car-carrier', orders.combo.CarCarrier);

orders.combo.CompanyWarehouse = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'company_warehouse',
        hiddenName: config.name || 'company_warehouse',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/company-warehouse/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.CompanyWarehouse.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.CompanyWarehouse, MODx.combo.ComboBox);
Ext.reg('orders-combo-company-warehouse', orders.combo.CompanyWarehouse);

orders.combo.Client = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'client',
        hiddenName: config.name || 'client',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/client/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Client.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.Client, MODx.combo.ComboBox);
Ext.reg('orders-combo-client', orders.combo.Client);

orders.combo.Receiver = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'receiver',
        hiddenName: config.name || 'receiver',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/receiver/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Receiver.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.Receiver, MODx.combo.ComboBox);
Ext.reg('orders-combo-receiver', orders.combo.Receiver);

orders.combo.Sender = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'sender',
        hiddenName: config.name || 'sender',
        //id: 'orders-' + config.name,
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        anchor: '99%',
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/sender/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Sender.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.Sender, MODx.combo.ComboBox);
Ext.reg('orders-combo-sender', orders.combo.Sender);

orders.combo.Forwarder = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'forwarder',
        hiddenName: config.name || 'forwarder',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/forwarder/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Forwarder.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.Forwarder, MODx.combo.ComboBox);
Ext.reg('orders-combo-forwarder', orders.combo.Forwarder);

orders.combo.RowColor = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: colors,
        name: 'color',
        hiddenName: config.name || 'color',
        displayField: 'name',
        valueField: 'id',
        pageSize: 9999,
        hideMode: 'offsets',
        mode: 'local'

    });
    orders.combo.RowColor.superclass.constructor.call(this,config);
};
Ext.extend(orders.combo.RowColor,MODx.combo.ComboBox);
Ext.reg('orders-combo-row-color',orders.combo.RowColor);

orders.combo.Template = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'template',
        hiddenName: config.name || 'template',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/settings/template/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Template.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.Template, MODx.combo.ComboBox);
Ext.reg('orders-combo-template', orders.combo.Template);


orders.combo.Currency = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: currencies,
        name: 'currency',
        hiddenName: config.name || 'currency',
        displayField: 'name',
        valueField: 'name',
        pageSize: 9999,
        hideMode: 'offsets',
        mode: 'local',
        emptyText: _('orders_item_combo_empty_text'),

    });
    orders.combo.Currency.superclass.constructor.call(this,config);
};
Ext.extend(orders.combo.Currency,MODx.combo.ComboBox);
Ext.reg('orders-combo-currency',orders.combo.Currency);


orders.combo.YesNo = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: YesNo,
        name: 'yes-no',
        hiddenName: config.name || 'yes-no',
        displayField: 'name',
        valueField: 'id',
        pageSize: 9999,
        hideMode: 'offsets',
        mode: 'local',
        emptyText: _('orders_item_combo_empty_text'),

    });
    orders.combo.YesNo.superclass.constructor.call(this,config);
};
Ext.extend(orders.combo.YesNo,MODx.combo.ComboBox);
Ext.reg('orders-combo-yes-no',orders.combo.YesNo);

orders.combo.Agent = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: agent,
        name: 'agent',
        hiddenName: config.name || 'agent',
        displayField: 'name',
        valueField: 'name',
        pageSize: 9999,
        hideMode: 'offsets',
        mode: 'local',
        emptyText: _('orders_item_combo_empty_text'),

    });
    orders.combo.Agent.superclass.constructor.call(this,config);
};
Ext.extend(orders.combo.Agent,MODx.combo.ComboBox);
Ext.reg('orders-combo-agent',orders.combo.Agent);

orders.combo.PaymentForm = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: payment_form,
        name: 'payment_form',
        hiddenName: config.name || 'payment_form',
        displayField: 'name',
        valueField: 'name',
        pageSize: 9999,
        hideMode: 'offsets',
        mode: 'local',
        emptyText: _('orders_item_combo_empty_text'),

    });
    orders.combo.PaymentForm.superclass.constructor.call(this,config);
};
Ext.extend(orders.combo.PaymentForm,MODx.combo.ComboBox);
Ext.reg('orders-combo-payment-form',orders.combo.PaymentForm);

orders.combo.SettingArea = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: settings_area,
        name: 'area',
        hiddenName: config.name || 'setting_area',
        displayField: 'name',
        valueField: 'name',
        pageSize: 9999,
        hideMode: 'offsets',
        mode: 'local',
        emptyText: _('orders_item_combo_empty_text'),

    });
    orders.combo.SettingArea.superclass.constructor.call(this,config);
};
Ext.extend(orders.combo.SettingArea,MODx.combo.ComboBox);
Ext.reg('orders-combo-setting-area',orders.combo.SettingArea);


orders.combo.ReportSort = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: reportSort,
        name: 'sort',
        hiddenName: config.name || 'report_sort',
        displayField: 'name',
        valueField: 'id',
        pageSize: 9999,
        hideMode: 'offsets',
        mode: 'local',
        emptyText: _('orders_item_reports_field_sort'),

    });
    orders.combo.ReportSort.superclass.constructor.call(this,config);
};
Ext.extend(orders.combo.ReportSort,MODx.combo.ComboBox);
Ext.reg('orders-combo-report-sort',orders.combo.ReportSort);

orders.combo.Cost = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'cost',
        hiddenName: config.name || 'cost',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 9999,
        hideMode: 'offsets',
        emptyText: _('orders_item_combo_empty_text'),
        url: orders.config['connector_url'],
        baseParams: {
            action: 'mgr/cost/getlist',
            sort: 'name',
            dir: 'asc',
            combo: true,
            limit: 9999,
        }
    });
    orders.combo.Cost.superclass.constructor.call(this, config);
};
Ext.extend(orders.combo.Cost, MODx.combo.ComboBox);
Ext.reg('orders-combo-cost', orders.combo.Cost);