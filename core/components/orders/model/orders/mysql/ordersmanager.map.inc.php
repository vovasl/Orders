<?php
$xpdo_meta_map['ordersManager']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_manager',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'name' => '',
    'phone' => '',
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
    'phone' => 
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
    'phone' => 
    array (
      'alias' => 'phone',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'phone' => 
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
    'ManagerItem' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'manager',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Manager2Item' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'manager2',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'ManagerClient' => 
    array (
      'class' => 'ordersClientManager',
      'local' => 'id',
      'foreign' => 'manager',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Manager2Client' => 
    array (
      'class' => 'ordersClientManager2',
      'local' => 'id',
      'foreign' => 'manager',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
