<?php
$modx->getService('orders', 'orders', MODX_CORE_PATH . 'components/orders/model/');

$output = '';
$file = '/home/s16632/1c/Balance.xml';

if (file_exists($file)) {
    $xml = simplexml_load_file($file);
    foreach($xml as $key => $val) {
        $client = trim($val['Partner']);
        $type = trim($val['Balance']);
        $sum = trim($val['Sum']);
        if($client != '') {
            $clientDB = $modx->getObject('ordersClient', array('name' => $client));
            if(is_object($clientDB)) {
                $clientID = $clientDB->get('id');
                if($type == 'Ставки'){
                    $field = 'stavki';
                }
                else if($type == 'Валютные переводы'){
                    $field = 'perevodi';
                }
                $items = $modx->getCollection('ordersItem', array('client' => $clientID));
                foreach ($items as $item) {
                    $item->set($field, $sum);
                    $item->set('date_1c', time());
                    $item->save();
                }
                //$output .= $client . ' - ' .$clientID . ' - ' . $field . ' - ' . $sum . '<br>';
            }
            else {
                $output .= '<span style="color:red;">Клиент не найден:' . $client . '</span><br />';
            }
        }
    }
    $output .= 'Данные успешно обновлены';
} else {
    $output = 'Не удалось открыть файл XML';
}

return $output;