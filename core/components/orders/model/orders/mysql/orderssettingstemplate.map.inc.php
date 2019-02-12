<?php
$xpdo_meta_map['ordersSettingsTemplate']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_settings_template',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'name' => '',
    'value' => NULL,
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
    'value' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
  ),
);
