<?php
$xpdo_meta_map['ordersClient']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_client',
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
    'ClientItem' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'client',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'ClientAddress' => 
    array (
      'class' => 'ordersAddress',
      'local' => 'id',
      'foreign' => 'client',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'ClientSender' => 
    array (
      'class' => 'ordersClientSender',
      'local' => 'id',
      'foreign' => 'client',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'ClientManager' => 
    array (
      'class' => 'ordersClientManager',
      'local' => 'id',
      'foreign' => 'client',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'ClientManager2' => 
    array (
      'class' => 'ordersClientManager2',
      'local' => 'id',
      'foreign' => 'client',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'ClientGoods' => 
    array (
      'class' => 'ordersClientGoods',
      'local' => 'id',
      'foreign' => 'client',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
