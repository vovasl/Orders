var orders = function (config) {
    config = config || {};
    orders.superclass.constructor.call(this, config);
};
Ext.extend(orders, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('orders', orders);

orders = new orders();