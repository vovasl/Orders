<?php
$xpdo_meta_map['ordersAgent2']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_agent2',
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
    'Agent1' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_1',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent2' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_2',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent3' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_3',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent4' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_4',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent5' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_5',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent6' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_6',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent7' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_7',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent8' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_8',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent9' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_9',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent10' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_10',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent11' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_11',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent12' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_12',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agent13' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'r_agent_13',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Agusdst' => 
    array (
      'class' => 'ordersItem',
      'local' => 'id',
      'foreign' => 'agusdst',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
