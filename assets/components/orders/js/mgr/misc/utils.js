orders.utils.renderBoolean = function (value) {
    return value
        ? String.format('<span class="green">{0}</span>', _('yes'))
        : String.format('<span class="red">{0}</span>', _('no'));
};

orders.utils.renderID = function (value) {
    return '0000' + value;
}

orders.utils.getMenu = function (actions, grid, selected) {
    var menu = [];
    var cls, icon, title, action;

    var has_delete = false;
    for (var i in actions) {
        if (!actions.hasOwnProperty(i)) {
            continue;
        }

        var a = actions[i];
        if (!a['menu']) {
            if (a == '-') {
                menu.push('-');
            }
            continue;
        }
        else if (menu.length > 0 && !has_delete && (/^remove/i.test(a['action']) || /^delete/i.test(a['action']))) {
            menu.push('-');
            has_delete = true;
        }

        if (selected.length > 1) {
            if (!a['multiple']) {
                continue;
            }
            else if (typeof(a['multiple']) == 'string') {
                a['title'] = a['multiple'];
            }
        }

        icon = a['icon'] ? a['icon'] : '';
        if (typeof(a['cls']) == 'object') {
            if (typeof(a['cls']['menu']) != 'undefined') {
                icon += ' ' + a['cls']['menu'];
            }
        }
        else {
            cls = a['cls'] ? a['cls'] : '';
        }
        title = a['title'] ? a['title'] : a['title'];
        action = a['action'] ? grid[a['action']] : '';

        menu.push({
            handler: action,
            text: String.format(
                '<span class="{0}"><i class="x-menu-item-icon {1}"></i>{2}</span>',
                cls, icon, title
            ),
            scope: grid
        });
    }

    return menu;
};

orders.utils.renderActions = function (value, props, row) {
    var res = [];

    var cls, icon, title, action, item;
    for (var i in row.data.actions) {
        if (!row.data.actions.hasOwnProperty(i)) {
            continue;
        }
        var a = row.data.actions[i];
        if (!a['button']) {
            continue;
        }

        icon = a['icon'] ? a['icon'] : '';
        if (typeof(a['cls']) == 'object') {
            if (typeof(a['cls']['button']) != 'undefined') {
                icon += ' ' + a['cls']['button'];
            }
        }
        else {
            cls = a['cls'] ? a['cls'] : '';
        }
        action = a['action'] ? a['action'] : '';
        title = a['title'] ? a['title'] : '';

        item = String.format(
            '<li class="{0}"><button class="orders-btn orders-btn-default {1}" action="{2}" title="{3}"></button></li>',
            cls, icon, action, title
        );

        res.push(item);
    }


    return String.format(
        '<ul class="orders-row-actions">{0}</ul>',
        res.join('')
    );
};


orders.utils.renderXLS = function(c_id) {
    var orderID = Ext.getCmp(c_id + '-id');

    var _params = {
        action: 'mgr/item/xls',
        orderID: orderID.getValue(),
        HTTP_MODAUTH: MODx.siteId
    };
    link = orders.config.connector_url + '?' + Ext.urlEncode(_params);
    var win = window.open(link, '_blank');
    win.focus();

};

orders.utils.sendEmail = function(c_id) {
    var orderID = Ext.getCmp(c_id + '-id');

    alert(_('orders_item_email_succ_text'));

    MODx.Ajax.request({
        url: orders.config.connector_url,
        params: {
            action: 'mgr/item/update-send-mail',
            orderID: orderID.getValue(),
        },
        listeners: {
            success: {
                fn: function () {
                    //alert(_('orders_item_email_succ_text'));
                }, scope: this
            }
        }
    })
};

orders.utils.selectClient = function (c_id) {
    var client = Ext.getCmp(c_id + '-client');
    var address = Ext.getCmp(c_id + '-address');
    var sender = Ext.getCmp(c_id + '-sender');
    var manager = Ext.getCmp(c_id + '-manager');
    var manager2 = Ext.getCmp(c_id + '-manager2');
    var goods = Ext.getCmp(c_id + '-goods');

    if(address) {
        //получение значений для поля address
        address.baseParams['client'] = client.getValue();

        // показываем пагинацию если нужно на комбике
        if (!!address.pageTb) {
            address.pageTb.show();
        }

        address.store.load();
    }


    if(sender) {
        //получение значений для поля sender
        sender.baseParams['client'] = client.getValue();

        // показываем пагинацию если нужно на комбике
        if (!!sender.pageTb) {
            sender.pageTb.show();
        }

        sender.store.load();
    }

    if(manager) {
        //получение значений для поля manager
        manager.baseParams['client'] = client.getValue();
        manager.baseParams['type'] = 'manager';

        // показываем пагинацию если нужно на комбике
        if (!!manager.pageTb) {
            manager.pageTb.show();
        }

        manager.store.load();
    }

    if(manager2) {
        //получение значений для поля manager2
        manager2.baseParams['client'] = client.getValue();
        manager2.baseParams['type'] = 'manager2';

        // показываем пагинацию если нужно на комбике
        if (!!manager2.pageTb) {
            manager2.pageTb.show();
        }

        manager2.store.load();
    }

    if(goods) {
        //получение значений для поля goods
        goods.baseParams['client'] = client.getValue();

        // показываем пагинацию если нужно на комбике
        if (!!goods.pageTb) {
            goods.pageTb.show();
        }

        goods.store.load();
    }
};

orders.utils.renderSender = function (c_id) {
    var client = Ext.getCmp(c_id + '-client');
    var sender = Ext.getCmp(c_id + '-sender');

    if(client) {
        sender.baseParams['client'] = client.getValue();

        // показываем пагинацию если нужно на комбике
        if (!!sender.pageTb) {
            sender.pageTb.show();
        }
    }
};

orders.utils.renderAddress = function (c_id) {
    var client = Ext.getCmp(c_id + '-client');
    var address = Ext.getCmp(c_id + '-address');

    if (client) {
        address.baseParams['client'] = client.getValue();

        // показываем пагинацию если нужно на комбике
        if (!!address.pageTb) {
            address.pageTb.show();
        }
    }
}

orders.utils.renderManager = function (c_id) {
    var client = Ext.getCmp(c_id + '-client');
    var manager = Ext.getCmp(c_id + '-manager');

    if (client) {
        manager.baseParams['client'] = client.getValue();
        manager.baseParams['type'] = 'manager';

        // показываем пагинацию если нужно на комбике
        if (!!manager.pageTb) {
            manager.pageTb.show();
        }
    }
}

orders.utils.renderManager2 = function (c_id) {
    var client = Ext.getCmp(c_id + '-client');
    var manager2 = Ext.getCmp(c_id + '-manager2');

    if (client) {
        manager2.baseParams['client'] = client.getValue();
        manager2.baseParams['type'] = 'manager2';

        // показываем пагинацию если нужно на комбике
        if (!!manager2.pageTb) {
            manager2.pageTb.show();
        }
    }
}

orders.utils.renderGoods = function (c_id) {
    var client = Ext.getCmp(c_id + '-client');
    var goods = Ext.getCmp(c_id + '-goods');

    if (client) {
        goods.baseParams['client'] = client.getValue();

        // показываем пагинацию если нужно на комбике
        if (!!goods.pageTb) {
            goods.pageTb.show();
        }
    }
}

//upload files

orders.utils.getSource = function() {
    return orders.config['source']
}

orders.utils.uploadFiles = function(btn,e,order_id) {
    var path = order_id + '/';

    if (!this.uploader) {
        this.uploader = new MODx.util.MultiUploadDialog.Dialog({
            url: MODx.config.connector_url
            ,base_params: {
                action: 'browser/file/upload'
                ,wctx: MODx.ctx || ''
                ,source: orders.utils.getSource()
            }
            ,cls: 'ext-ux-uploaddialog-dialog modx-upload-window'
        });
        this.uploader.on('show',function(){
            orders.utils.beforeUpload(path);
        },this);
        this.uploader.on('uploadsuccess',orders.utils.uploadSuccess,this);
        this.uploader.on('uploaderror',orders.utils.uploadError,this);
        this.uploader.on('uploadfailed',orders.utils.uploadFailed,this);
    }
    this.uploader.base_params.source = orders.utils.getSource();
    this.uploader.show(btn);
}

orders.utils.uploadError = function(dlg,file,data,rec) {},
orders.utils.uploadFailed = function(dlg,file,rec) {}
orders.utils.uploadSuccess = function() {},

orders.utils.beforeUpload = function(path) {

    this.uploader.setBaseParams({
        action: 'browser/file/upload'
        ,path: path
        ,wctx: MODx.ctx || ''
        ,source: orders.utils.getSource()
    });
}