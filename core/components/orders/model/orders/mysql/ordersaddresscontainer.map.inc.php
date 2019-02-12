<?php
$xpdo_meta_map['ordersAddressContainer']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_address_container',
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
    'AddressContainerItem' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'address_container',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
