<?php
$xpdo_meta_map['ordersSenderClient']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_sender_client',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'sender' => '',
    'client' => '',
  ),
  'fieldMeta' => 
  array (
    'sender' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'client' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
  ),
  'aggregates' => 
  array (
    'SenderClientClient' => 
    array (
      'class' => 'ordersClient',
      'local' => 'client',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'SenderClientSender' => 
    array (
      'class' => 'ordersSender',
      'local' => 'sender',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
