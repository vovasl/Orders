<?php
$xpdo_meta_map['ordersGoods']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_goods',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'name' => '',
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '200',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
  ),
  'indexes' => 
  array (
    'name' => 
    array (
      'alias' => 'name',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'name' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
  'composites' => 
  array (
    'GoodsItem' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'goods',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'GoodsClient' => 
    array (
      'class' => 'ordersClientGoods',
      'local' => 'id',
      'foreign' => 'goods',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
