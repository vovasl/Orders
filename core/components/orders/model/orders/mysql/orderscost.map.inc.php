<?php
$xpdo_meta_map['ordersCost']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_cost',
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
    'CostProchee1' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'prochee_1',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'CostProchee2' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'prochee_2',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'CostProchee3' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'prochee_3',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'CostProchee4' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'prochee_4',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'CostProchee5' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'prochee_5',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'CostProchee6' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'prochee_6',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'CostProchee7' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'prochee_7',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
