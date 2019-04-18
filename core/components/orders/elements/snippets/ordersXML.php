<?php
$output = '';
$file = $_SERVER['DOCUMENT_ROOT'] . '/balance.xml';

if (file_exists($file)) {
    $xml = simplexml_load_file($file);
    foreach($xml as $key => $val) {
        echo $val['Партнер'] . ' - ' . $val['Баланс'] . ' - ' . $val['Сумма'] . '<br>';
    }
} else {
    $output = 'Не удалось открыть файл XML';
}

return $output;