<?php
$xpdo_meta_map['ordersSettings']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_settings',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'name' => '',
    'description' => NULL,
    'value' => NULL,
    'area' => '',
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'description' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'value' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'area' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
  ),
);
