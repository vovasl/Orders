<?php
$xpdo_meta_map['ordersAddress']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_address',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'name' => NULL,
    'client' => NULL,
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'client' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
  ),
  'composites' => 
  array (
    'AddressItem' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'address',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
  'aggregates' => 
  array (
    'AddressClient' => 
    array (
      'class' => 'ordersClient',
      'local' => 'client',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
