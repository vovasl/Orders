<?php
$xpdo_meta_map['ordersAccountsNote']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_accounts_note',
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
    'AccountsItem' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'accounts',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
