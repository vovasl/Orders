<?php

class ordersSettingUpdateItemsProcessor extends modObjectProcessor
{
    public $objectType = 'ordersItem';
    public $classKey = 'ordersItem';
    public $languageTopics = ['orders'];

    public function fileExtension($file){
        if($file != ''){
            $path_info = pathinfo($file);
            return $path_info['extension'];
        }
    }


    public function process()
    {
        $sheet = 0; //лист файла
        $rowStart = 3; //строка с которой начинается считывание данных с файла
        $cellStart = 'A'; //столбец с которого начинается считывание данных с файла
        $cellEnd = 'AJ'; //столбец где заканчивается считывание данных с файла
        $file = $_FILES['file'];
        $xls = false;

        require_once  MODX_ASSETS_PATH . 'components/orders/libs/phpexcel/PHPExcel/IOFactory.php';
        $fileExt = $this->fileExtension($file['name']); //расширение загружаемого файла

        //массив последовательности загрузки полей с Excel файла
        $fields = array('id', 'availability_date', 'factory_supply', 'agent_number', 'agent_china_number',
            'container_number', 'bl', 'container_type', 'weight', 'volume', 'count_boxes', 'release', 'release_date',
            'delivery_term', 'line', 'port_departure', 'port_arrive', 'port_departure_date', 'port_arrive_date',
            'train_departure_date', 'distance_to_station', 'train_arrive_date', 'export_from_station',
            'station_train_arrive', 'export_from_station_real', 'delivery_date', 'delivery_container_date', 'exw',
            'currency_3', 'account_number_4', 'total', 'currency', 'account_number', 'car_carrier_rate', 'currency_2',
            'account_number_2');

        //массив классов для полей с базой данных и их размещение в Excel файле
        $fieldsClassKey = array(
            'H' => 'ordersContainerType',
            'N' => 'ordersDeliveryTerm',
            'O' => 'ordersLine',
            'P' => 'ordersPortDeparture',
            'Q' => 'ordersPortArrive',
            'X' => 'ordersStationTrainArrive',
        );

        $fieldsCheckbox = array('L');
        $fieldsUpper = array('AC', 'AF', 'AI');

        if (!empty($file['tmp_name']) && file_exists($file['tmp_name'])) {
            if (mb_strtolower($fileExt) == 'xls' || mb_strtolower($fileExt) == 'xlsx') { //проверка расширения файла
                // Открываем файл
                $xls = PHPExcel_IOFactory::load($file['tmp_name']);
                foreach ($xls->setActiveSheetIndex($sheet)->getRowIterator($rowStart) as $row){
                    // Получили ячейки текущей строки и обойдем их в цикле
                    $order = array();
                    foreach ($row->getCellIterator($cellStart, $cellEnd) as $cell) {
                        $column = $cell->getColumn(); //буква названия столбца
                        if(array_key_exists($column, $fieldsClassKey)){ //условие для поля с базой данных
                            $value = $cell->getValue();
                            //получаем значение в базе данных
                            $query = $this->modx->newQuery($fieldsClassKey[$column]);
                            $query->where(array('name' => $value));
                            $obj = $this->modx->getObject($fieldsClassKey[$column], $query);
                            if(is_object($obj)) {
                                $order[] = $obj->get('id');
                            }
                            else{
                                $order[] = '';
                            }
                        }
                        else if(in_array($column, $fieldsCheckbox)){ //условие для поля с типом ввода checkbox
                            $order[] = mb_strtolower($cell->getValue()) == 'да' ? '1' : '0';
                            //return $this->failure(mb_strtolower($cell->getValue()));
                        }
                        else if(in_array($column, $fieldsUpper)){ //условие для полей которые нужно привести в верхний регистр
                            $order[] = mb_strtoupper($cell->getValue());
                        }
                        else if (PHPExcel_Shared_Date::isDateTime($cell)) { //условие для дат
                            $order[] = $cell->getFormattedValue();
                        }
                        else {
                            $order[] = $cell->getValue();
                        }
                    }
                    $orders[] = $order;
                }
            }
        }

        if (!$xls) {
            return $this->failure($this->modx->lexicon('orders_setting_import_items_xls_not_loaded'));
        }

        //return $this->failure($orders);
        //обработка данных и запись в базу
        foreach ($orders as $arr){
            $order = $this->modx->getObject('ordersItem', substr($arr[0], 4));
            if(is_object($order)) {
                for($i = 1; $i < count($fields); $i++){
                    if($arr[$i] != '') {
                        $order->set($fields[$i], $arr[$i]);
                    }
                }
                $order->save();
            }
        }


        return $this->success();
    }
}

return 'ordersSettingUpdateItemsProcessor';