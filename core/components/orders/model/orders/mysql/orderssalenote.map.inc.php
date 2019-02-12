<?php
$xpdo_meta_map['ordersSaleNote']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_sale_note',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'name' => NULL,
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
  ),
  'composites' => 
  array (
    'SaleItem' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'sale',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
