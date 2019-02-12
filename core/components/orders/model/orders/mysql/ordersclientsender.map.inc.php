<?php
$xpdo_meta_map['ordersClientSender']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_client_sender',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'client' => '',
    'sender' => '',
    'default' => 0,
  ),
  'fieldMeta' => 
  array (
    'client' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'sender' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'default' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'boolean',
      'attributes' => 'unsigned',
      'null' => false,
      'default' => 0,
    ),
  ),
  'aggregates' => 
  array (
    'Client' => 
    array (
      'class' => 'ordersClient',
      'local' => 'client',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Sender' => 
    array (
      'class' => 'ordersSender',
      'local' => 'sender',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
