<?php

class ordersItemXlsGetListProcessor extends modObjectGetListProcessor
{

    public $objectType = 'ordersItem';
    public $classKey = 'ordersItem';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
    public $limit = '0';
    public $languageTopics = ['orders:default'];

    public function initialize() {
        $this->setDefaultProperties(array(
            'start' => 0,
            'limit' => this.$this->limit,
            'sort' => $this->defaultSortField,
            'dir' => $this->defaultSortDirection,
            'combo' => false,
            'query' => '',
        ));

        return parent::initialize();
    }


    public function prepareQueryBeforeCount(xPDOQuery $c) {

        $c->select($this->modx->getSelectColumns($this->classKey, $this->classKey));

        $portArriveDateStart = $this->getProperty('portArriveDateStart');
        $portArriveDateFinish = $this->getProperty('portArriveDateFinish');
        $trainArriveDateStart = $this->getProperty('trainArriveDateStart');
        $trainArriveDateFinish = $this->getProperty('trainArriveDateFinish');
        $exportFromStationRealEmpty = $this->getProperty('exportFromStationRealEmpty');

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

        if($exportFromStationRealEmpty == 'true'){
            $c->where([
                'export_from_station_real' => '',
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
        $c->leftJoin('ordersCarCarrier', 'CarCarrier');
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
            'stationTrainArriveName' => 'StationTrainArrive.name',
            'carCarrierName' => 'CarCarrier.name',
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
        $cellEnd = 'AG'; //последняя ячейка
        $dataCell = 2; //первая строка для записи данных в файл

        //массив последовательности выгрузки загрузки полей в Excel файл
        $fields = array(
            'A' => 'id',
            'B' => 'client',
            'C' => 'container_number',
            'D' => 'container_type',
            'E' => 'weight',
            'F' => 'port_arrive',
            'G' => 'port_arrive_date',
            'H' => 'release',
            'I' => 'pdt',
            'J' => 'vdt',
            'K' => 'station_train_arrive',
            'L' => 'train_arrive_date',
            'M' => 'export_from_station_real',
            'N' => 'city_delivery',
            'O' => 'goods',
            'P' => 'line',
            'Q' => 'receiver',
            'R' => 'manager2',
            'S' => 'customs_fee',
            'T' => 'closed_4',
            'U' => 'bill_entry_number',
            'V' => 'rate_usd',
            'W' => 'closed_3',
            'X' => 'platej',
            'Y' => 'kursgtd',
            'Z' => 'contact_person',
            'AA' => 'closed_5',
            'AB' => 'exw',
            'AC' => 'car_carrier_rate',
            'AD' => 'car_carrier',
            'AE' => 'currency_2',
            'AF' => 'total',
            'AG' => 'currency',
        );

        //массив названий для полей с базой данных и их размещение в Excel файле
        $fieldsDB = array(
            'B' => 'clientName',
            'D' => 'containerTypeName',
            'F' => 'portArriveName',
            'K' => 'stationTrainArriveName',
            'N' => 'cityDeliveryName',
            'O' => 'goodsName',
            'P' => 'lineName',
            'Q' => 'receiverName',
            'R' => 'manager2Name',
            'AD' => 'carCarrierName',
        );

        $fieldsDate = array('port_arrive_date', 'pdt', 'vdt', 'train_arrive_date', 'export_from_station_real');//названия полей с типом дата
        $fieldsCheckbox = array('release', 'closed_4', 'closed_3', 'closed_5');

        //установка заголовков и основных стилей для Excel файла
        foreach($this->excelColumnRange($cellStart, $cellEnd) as $columnID) {
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
            foreach($this->excelColumnRange($cellStart, $cellEnd) as $columnID) {
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

    public function excelColumnRange($lower, $upper) {
        ++$upper;
        for ($i = $lower; $i !== $upper; ++$i) {
            yield $i;
        }
    }


}
return 'ordersItemXlsGetListProcessor';