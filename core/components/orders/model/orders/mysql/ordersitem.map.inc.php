<?php
$xpdo_meta_map['ordersItem']= array (
  'package' => 'orders',
  'version' => '1.1',
  'table' => 'orders_items',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'created' => 0,
    'container_number' => '',
    'bl' => '',
    'agent_number' => '',
    'agent_china_number' => '',
    'bill_entry_number' => '',
    'manager' => NULL,
    'manager2' => NULL,
    'client' => NULL,
    'goods' => NULL,
    'delivery_term' => NULL,
    'port_departure' => NULL,
    'city_delivery' => NULL,
    'container_type' => NULL,
    'volume' => '',
    'weight' => '',
    'count_boxes' => '',
    'port_arrive' => NULL,
    'line' => NULL,
    'agent_railway' => NULL,
    'station_train_arrive' => NULL,
    'receiver' => NULL,
    'delivery_term_receiver' => NULL,
    'sale' => NULL,
    'accounts' => NULL,
    'tax_payments' => '',
    'tax_payments_nds' => '',
    'sender' => NULL,
    'forwarder' => NULL,
    'application_date' => 0,
    'availability_date' => 0,
    'booking' => 0,
    'factory_supply' => 0,
    'port_departure_date' => 0,
    'port_arrive_date' => 0,
    'release' => 0,
    'pdt' => 0,
    'examination' => 0,
    'examined' => 0,
    'vdt' => 0,
    'train_departure_date' => 0,
    'train_arrive_date' => 0,
    'distance_to_station' => '',
    'stations' => NULL,
    'export_from_station' => 0,
    'export_from_station_real' => 0,
    'delivery_date' => 0,
    'delivery_container_date' => 0,
    'note' => NULL,
    'company_warehouse' => NULL,
    'address' => NULL,
    'contact_person' => '',
    'contact_person_phone' => '',
    'address_container' => NULL,
    'car_carrier' => NULL,
    'car_carrier_rate' => '',
    'car_number' => '',
    'driver' => '',
    'driver_phone' => '',
    'important' => 0,
    'archive' => 0,
    'hidden' => 0,
    'color' => '',
    'release_date' => 0,
    'total' => '',
    'currency' => '',
    'exchange_rate' => '',
    'd_application' => 0,
    'd_application_4' => 0,
    'd_payment' => 0,
    'd_payment_4' => 0,
    'closed' => '',
    'agent' => '',
    'note_2' => NULL,
    'note_3' => NULL,
    'rate_rur' => '',
    'rate_usd' => '',
    'closed_2' => '',
    'd_closed' => 0,
    'com_zebra' => '',
    'note_4' => NULL,
    'payment_form' => '',
    'booking_mark' => 0,
    'currency_2' => '',
    'currency_3' => '',
    'currency_4' => '',
    'account_number' => '',
    'account_number_2' => '',
    'account_number_3' => '',
    'account_number_4' => '',
    'customs_fee' => '',
    'closed_3' => '',
    'closed_4' => '',
    'closed_5' => '',
    'total_2' => '',
    'total_3' => '',
    'total_4' => '',
    'exw' => '',
    'shipper_2' => '',
    'shipper_3' => '',
    'shipper_4' => '',
    'shipper_5' => '',
    'bl_2' => '',
    'bl_3' => '',
    'bl_4' => '',
    'bl_5' => '',
    'agent_2' => '',
    'agent_3' => '',
    'agent_4' => '',
    'agent_5' => '',
    'invoice_2' => '',
    'invoice_3' => '',
    'invoice_4' => '',
    'invoice_5' => '',
    'ready_date_2' => 0,
    'ready_date_3' => 0,
    'ready_date_4' => 0,
    'ready_date_5' => 0,
    'goods_2' => '',
    'goods_3' => '',
    'goods_4' => '',
    'goods_5' => '',
    'cbm_2' => '',
    'cbm_3' => '',
    'cbm_4' => '',
    'cbm_5' => '',
    'kgs_2' => '',
    'kgs_3' => '',
    'kgs_4' => '',
    'kgs_5' => '',
    'ctn_2' => '',
    'ctn_3' => '',
    'ctn_4' => '',
    'ctn_5' => '',
    'note_s_2' => NULL,
    'note_s_3' => NULL,
    'note_s_4' => NULL,
    'note_s_5' => NULL,
    'file_1' => '',
  ),
  'fieldMeta' => 
  array (
    'created' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'container_number' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'bl' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'agent_number' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'agent_china_number' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'bill_entry_number' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'manager' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'manager2' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'client' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'goods' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'delivery_term' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'port_departure' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'city_delivery' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'container_type' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'volume' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'weight' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'count_boxes' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'port_arrive' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'line' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'agent_railway' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'station_train_arrive' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'receiver' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'delivery_term_receiver' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'sale' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'accounts' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'tax_payments' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '10',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'tax_payments_nds' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '10',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'sender' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'forwarder' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'application_date' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'availability_date' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'booking' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'factory_supply' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'port_departure_date' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'port_arrive_date' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'release' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'boolean',
      'attributes' => 'unsigned',
      'null' => false,
      'default' => 0,
    ),
    'pdt' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'examination' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'examined' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'vdt' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'train_departure_date' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'train_arrive_date' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'distance_to_station' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '20',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'stations' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'export_from_station' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'export_from_station_real' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'delivery_date' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'delivery_container_date' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'note' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'company_warehouse' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'address' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'contact_person' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'contact_person_phone' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'address_container' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'car_carrier' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'attributes' => 'unsigned',
    ),
    'car_carrier_rate' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'car_number' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'driver' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'driver_phone' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'important' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'boolean',
      'attributes' => 'unsigned',
      'null' => false,
      'default' => 0,
    ),
    'archive' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'boolean',
      'attributes' => 'unsigned',
      'null' => false,
      'default' => 0,
    ),
    'hidden' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'boolean',
      'attributes' => 'unsigned',
      'null' => false,
      'default' => 0,
    ),
    'color' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'release_date' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'total' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'currency' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'exchange_rate' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'd_application' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'd_application_4' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'd_payment' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'd_payment_4' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'closed' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'agent' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'note_2' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'note_3' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'rate_rur' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'rate_usd' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'closed_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'd_closed' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'com_zebra' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'note_4' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'payment_form' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'booking_mark' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'boolean',
      'attributes' => 'unsigned',
      'null' => false,
      'default' => 0,
    ),
    'currency_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'currency_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'currency_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'account_number' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'account_number_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'account_number_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'account_number_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'customs_fee' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'closed_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'closed_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'closed_5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'total_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'total_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'total_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'exw' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '100',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'shipper_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'shipper_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'shipper_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'shipper_5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'bl_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'bl_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'bl_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'bl_5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'agent_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'agent_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'agent_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'agent_5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'invoice_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'invoice_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'invoice_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'invoice_5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'ready_date_2' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'ready_date_3' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'ready_date_4' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'ready_date_5' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'goods_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'goods_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'goods_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'goods_5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'cbm_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'cbm_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'cbm_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'cbm_5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'kgs_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'kgs_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'kgs_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'kgs_5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'ctn_2' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'ctn_3' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'ctn_4' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'ctn_5' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'note_s_2' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'note_s_3' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'note_s_4' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'note_s_5' => 
    array (
      'dbtype' => 'mediumtext',
      'phptype' => 'string',
    ),
    'file_1' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
  ),
  'indexes' => 
  array (
    'container_number' => 
    array (
      'alias' => 'container_number',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'container_number' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'bl' => 
    array (
      'alias' => 'bl',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'bl' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'agent_number' => 
    array (
      'alias' => 'agent_number',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'agent_number' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'bill_entry_number' => 
    array (
      'alias' => 'bill_entry_number',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'bill_entry_number' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'manager' => 
    array (
      'alias' => 'manager',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'manager' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'manager2' => 
    array (
      'alias' => 'manager2',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'manager2' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'client' => 
    array (
      'alias' => 'client',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'client' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'goods' => 
    array (
      'alias' => 'goods',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'goods' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'delivery_term' => 
    array (
      'alias' => 'delivery_term',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'delivery_term' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'port_departure' => 
    array (
      'alias' => 'port_departure',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'port_departure' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'city_delivery' => 
    array (
      'alias' => 'city_delivery',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'city_delivery' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'container_type' => 
    array (
      'alias' => 'container_type',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'container_type' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'port_arrive' => 
    array (
      'alias' => 'port_arrive',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'port_arrive' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'line' => 
    array (
      'alias' => 'line',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'line' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'company_warehouse' => 
    array (
      'alias' => 'company_warehouse',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'company_warehouse' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'car_carrier' => 
    array (
      'alias' => 'car_carrier',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'car_carrier' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
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
    'Goods' => 
    array (
      'class' => 'ordersGoods',
      'local' => 'goods',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Manager' => 
    array (
      'class' => 'ordersManager',
      'local' => 'manager',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Manager2' => 
    array (
      'class' => 'ordersManager',
      'local' => 'manager2',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'ContainerType' => 
    array (
      'class' => 'ordersContainerType',
      'local' => 'container_type',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Line' => 
    array (
      'class' => 'ordersLine',
      'local' => 'line',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'DeliveryTerm' => 
    array (
      'class' => 'ordersDeliveryTerm',
      'local' => 'delivery_term',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'DeliveryTermReceiver' => 
    array (
      'class' => 'ordersDeliveryTermReceiver',
      'local' => 'delivery_term_receiver',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'PortDeparture' => 
    array (
      'class' => 'ordersPortDeparture',
      'local' => 'port_departure',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'CityDelivery' => 
    array (
      'class' => 'ordersCityDelivery',
      'local' => 'city_delivery',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'PortArrive' => 
    array (
      'class' => 'ordersPortArrive',
      'local' => 'port_arrive',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'StationTrainArrive' => 
    array (
      'class' => 'ordersStationTrainArrive',
      'local' => 'station_train_arrive',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Address' => 
    array (
      'class' => 'ordersAddress',
      'local' => 'address',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'AddressContainer' => 
    array (
      'class' => 'ordersAddressContainer',
      'local' => 'address_container',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'AgentRailway' => 
    array (
      'class' => 'ordersAgentRailway',
      'local' => 'agent_railway',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Receiver' => 
    array (
      'class' => 'ordersReceiver',
      'local' => 'receiver',
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
    'Forwarder' => 
    array (
      'class' => 'ordersForwarder',
      'local' => 'forwarder',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'CompanyWarehouse' => 
    array (
      'class' => 'ordersCompanyWarehouse',
      'local' => 'company_warehouse',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'CarCarrier' => 
    array (
      'class' => 'ordersCarCarrier',
      'local' => 'car_carrier',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Sale' => 
    array (
      'class' => 'ordersSaleNote',
      'local' => 'sale',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Accounts' => 
    array (
      'class' => 'ordersAccountsNote',
      'local' => 'accounts',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
