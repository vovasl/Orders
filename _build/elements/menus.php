<?php

return [
    'orders' => [
        'parent' => 'topnav',
        'description' => 'orders_menu_desc',
        'action' => 'home',
        //'icon' => '<i class="icon icon-large icon-modx"></i>',
        'menuindex' => 3,
    ],
    'settings' => [
        'parent' => 'orders',
        'description' => 'orders_menu_settings_desc',
        'action' => 'settings',
        'namespace' => 'orders',
        //'icon' => '<i class="icon icon-large icon-modx"></i>',
        'permissions' => 'orders_settings',
    ]
];