<?php

class ordersItemXlsGetListProcessor extends modObjectGetListProcessor
{

    public $objectType = 'ordersItem';
    public $classKey = 'ordersItem';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
    public $languageTopics = ['orders:default'];

    public function prepareQueryBeforeCount(xPDOQuery $c) {
        $c->select($this->modx->getSelectColumns($this->classKey, $this->classKey));

        $portArriveDateStart = $this->getProperty('portArriveDateStart');
        $portArriveDateFinish = $this->getProperty('portArriveDateFinish');
        $trainArriveDateStart = $this->getProperty('trainArriveDateStart');
        $trainArriveDateFinish = $this->getProperty('trainArriveDateFinish');

        if($portArriveDateStart) {
            $date = new DateTime($portArriveDateStart);
            $portArriveDateStartStr = $date->format('U');
            $c->where([
                'port_arrive_date:>=' => $portArriveDateStartStr,
            ]);
        }

        if($portArriveDateFinish){
            $date = new DateTime($portArriveDateFinish);
            $portArriveDateFinishStr = $date->format('U');
            $c->where([
                'port_arrive_date:<=' => $portArriveDateFinishStr,
            ]);
        }

        if($trainArriveDateStart) {
            $date = new DateTime($trainArriveDateStart);
            $trainArriveDateStartStr = $date->format('U');
            $c->where([
                'train_arrive_date:>=' => $trainArriveDateStartStr,
            ]);
        }

        if($trainArriveDateFinish) {
            $date = new DateTime($trainArriveDateFinish);
            $trainArriveDateFinishStr = $date->format('U');
            $c->where([
                'train_arrive_date:<=' => $trainArriveDateFinishStr,
            ]);
        }

        $sortField = $this->getProperty('reportSort');
        if($sortField){
            $c->sortby($sortField , $this->defaultSortDirection);
        }

        return $c;
    }

    public function prepareQueryAfterCount(xPDOQuery $c) {
        $c->leftJoin('ordersClient', 'Client');
        $c->leftJoin('ordersManager', 'Manager2');
        $c->leftJoin('ordersGoods', 'Goods');
        $c->leftJoin('ordersSender', 'Sender');
        $c->leftJoin('ordersReceiver', 'Receiver');
        $c->leftJoin('ordersForwarder', 'Forwarder');
        $c->leftJoin('ordersPortDeparture', 'PortDeparture');
        $c->leftJoin('ordersDeliveryTerm', 'DeliveryTerm');
        $c->leftJoin('ordersCityDelivery', 'CityDelivery');
        $c->leftJoin('ordersPortArrive', 'PortArrive');
        $c->leftJoin('ordersLine', 'Line');
        $c->leftJoin('ordersContainerType', 'ContainerType');
        $c->leftJoin('ordersStationTrainArrive', 'StationTrainArrive');
        $c->select(array(
            'clientName' => 'Client.name',
            'manager2Name' => 'Manager2.name',
            'goodsName' => 'Goods.name',
            'senderName' => 'Sender.name',
            'receiverName' => 'Receiver.name',
            'forwarderName' => 'Forwarder.name',
            'portDepartureName' => 'PortDeparture.name',
            'deliveryTermName' => 'DeliveryTerm.name',
            'cityDeliveryName' => 'CityDelivery.name',
            'portArriveName' => 'PortArrive.name',
            'lineName' => 'Line.name',
            'containerTypeName' => 'ContainerType.name',
            'stationTrainArriveName' => 'StationTrainArrive.name'
        ));
        return $c;
    }


    public function process() {

        $beforeQuery = $this->beforeQuery();
        if ($beforeQuery !== true) {
            return $this->failure($beforeQuery);
        }

        $data = $this->getData();

        $this->createExcel($data);

        return '';
    }

    public function createExcel(array $data) {

        require_once  MODX_ASSETS_PATH . 'components/orders/libs/phpexcel/PHPExcel.php';
        $objPHPExcel = new PHPExcel();

        $cellStart = 'A';
        $cellEnd = 'Q'; //последняя ячейка
        $dataCell = 2; //первая строка для записи данных в файл

        //массив последовательности выгрузки загрузки полей в Excel файл
        $fields = array(
            'A' => 'id',
            'B' => 'client',
            'C' => 'container_number',
            'D' => 'container_type',
            'E' => 'weight',
            'E' => 'port_arrive',
            'F' => 'port_arrive_date',
            'G' => 'release',
            'H' => 'pdt',
            'I' => 'vdt',
            'J' => 'station_train_arrive',
            'K' => 'train_arrive_date',
            'L' => 'export_from_station_real',
            'M' => 'city_delivery',
            'N' => 'goods',
            'O' => 'line',
            'P' => 'receiver',
            'Q' => 'manager2',
        );

        //массив названий для полей с базой данных и их размещение в Excel файле
        $fieldsDB = array(
            'B' => 'clientName',
            'D' => 'containerTypeName',
            'E' => 'portArriveName',
            'J' => 'stationTrainArriveName',
            'M' => 'cityDeliveryName',
            'N' => 'goodsName',
            'O' => 'lineName',
            'P' => 'receiverName',
            'Q' => 'manager2Name'
        );

        $fieldsDate = array('port_arrive_date', 'pdt', 'vdt', 'train_arrive_date', 'export_from_station_real');//названия полей с типом дата
        $fieldsCheckbox = array('release');

        //установка заголовков и основных стилей для Excel файла
        foreach(range($cellStart, $cellEnd) as $columnID) {
            $objPHPExcel->getActiveSheet()->getColumnDimension($columnID)
                ->setAutoSize(true);
            $objPHPExcel->getActiveSheet()->getStyle($columnID)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
            $objPHPExcel->setActiveSheetIndex(0)
                ->setCellValue($columnID . '1', $this->modx->lexicon('orders_item_' . $fields[$columnID]));
        }


        foreach ($data['results'] as $object) {
            if ($this->checkListPermission && $object instanceof modAccessibleObject && !$object->checkPolicy('list')) {
                continue;
            }
            $orderArr = $this->prepareRow($object); //массив данных

            $orderArr['id'] = '0000' . $orderArr['id'];

            //запись данных в файл по ячейке
            foreach(range($cellStart, $cellEnd) as $columnID) {
                //получение значения в зависимости поле в базе или нет
                $val = array_key_exists($columnID, $fieldsDB) ? $orderArr[$fieldsDB[$columnID]] : $orderArr[$fields[$columnID]];

                if(in_array($fields[$columnID], $fieldsDate)){ //формат для дат
                    $val = $val ? date('d.m.y',  strtotime($val)) : '';
                }
                else if(in_array($fields[$columnID], $fieldsCheckbox)){ //форма для checkbox
                    $val = $val ? 'Да' : 'Нет';

                }
                $objPHPExcel->setActiveSheetIndex(0)
                    ->setCellValue($columnID . $dataCell, $val);
            }

            $dataCell++;
        }

        $objPHPExcel->getActiveSheet()->setTitle('Лист 1');

        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="zebra_export_' . date('d_m_y_H_i') . '.xls"');

        $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
        $objWriter->save('php://output');
        exit;

        return '';

    }

}
return 'ordersItemXlsGetListProcessor';