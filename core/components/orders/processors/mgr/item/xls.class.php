<?php

class ordersItemXlsGetListProcessor extends modObjectGetListProcessor
{

    public $objectType = 'ordersItem';
    public $classKey = 'ordersItem';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'ASC';
    public $languageTopics = ['orders:default'];

    public function prepareQueryBeforeCount(xPDOQuery $c) {
        $c->select($this->modx->getSelectColumns($this->classKey, $this->classKey));

        $orderID = $this->getProperty('orderID');
        if($orderID){
            $c->where([
                'id' => $orderID,
            ]);
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
        foreach ($data['results'] as $object) {
            if ($this->checkListPermission && $object instanceof modAccessibleObject && !$object->checkPolicy('list')) {
                continue;
            }
            $orderArr = $this->prepareRow($object);
            break;
        }

        $orderArr['id'] = '0000' . $orderArr['id'];
        $orderArr['application_date'] = $orderArr['application_date'] == 0 ? '' : date('d.m.y',  strtotime($orderArr['application_date']));
        $orderArr['availability_date'] = $orderArr['availability_date'] == 0 ? '' : date('d.m.y',  strtotime($orderArr['availability_date']));

        require_once  MODX_ASSETS_PATH . 'components/orders/libs/phpexcel/PHPExcel.php';
        $objPHPExcel = new PHPExcel();

        $objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(25);
        $objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(35);
        $objPHPExcel->getActiveSheet()->getStyle('B')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);

        $objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A1', $this->modx->lexicon('orders_item_id'))
            ->setCellValue('A2', $this->modx->lexicon('orders_item_application_date'))
            ->setCellValue('A3', $this->modx->lexicon('orders_item_availability_date'))
            ->setCellValue('A4', $this->modx->lexicon('orders_item_manager2'))
            ->setCellValue('A5', $this->modx->lexicon('orders_item_client'))
            ->setCellValue('A6', $this->modx->lexicon('orders_item_goods'))
            ->setCellValue('A7', $this->modx->lexicon('orders_item_sender'))
            ->setCellValue('A8', $this->modx->lexicon('orders_item_receiver'))
            ->setCellValue('A9', $this->modx->lexicon('orders_item_forwarder'))
            ->setCellValue('A10', $this->modx->lexicon('orders_item_port_departure'))
            ->setCellValue('A11', $this->modx->lexicon('orders_item_delivery_term'))
            ->setCellValue('A12', $this->modx->lexicon('orders_item_city_delivery'))
            ->setCellValue('A13', $this->modx->lexicon('orders_item_port_arrive'))
            ->setCellValue('A14', $this->modx->lexicon('orders_item_line'))
            ->setCellValue('A15', $this->modx->lexicon('orders_item_container_type'))
            ->setCellValue('A16', $this->modx->lexicon('orders_item_volume'))
            ->setCellValue('A17', $this->modx->lexicon('orders_item_weight'))
            ->setCellValue('A18', $this->modx->lexicon('orders_item_count_boxes'))
            ->setCellValue('A19', $this->modx->lexicon('orders_item_note'))
            ->setCellValue('B1', $orderArr['id'])
            ->setCellValue('B2', $orderArr['application_date'])
            ->setCellValue('B3', $orderArr['availability_date'])
            ->setCellValue('B4', $orderArr['manager2Name'])
            ->setCellValue('B5', $orderArr['clientName'])
            ->setCellValue('B6', $orderArr['goodsName'])
            ->setCellValue('B7', $orderArr['senderName'])
            ->setCellValue('B8', $orderArr['receiverName'])
            ->setCellValue('B9', $orderArr['forwarderName'])
            ->setCellValue('B10', $orderArr['portDepartureName'])
            ->setCellValue('B11', $orderArr['deliveryTermName'])
            ->setCellValue('B12', $orderArr['cityDeliveryName'])
            ->setCellValue('B13', $orderArr['portArriveName'])
            ->setCellValue('B14', $orderArr['lineName'])
            ->setCellValue('B15', $orderArr['containerTypeName'])
            ->setCellValue('B16', $orderArr['volume'])
            ->setCellValue('B17', $orderArr['weight'])
            ->setCellValue('B18', $orderArr['count_boxes'])
            ->setCellValue('B19', $orderArr['note']);

        $objPHPExcel->getActiveSheet()->setTitle('Лист 1');

        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="' . $orderArr['id'] . '.xls"');

        $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
        $objWriter->save('php://output');
        exit;

        return '';

    }

}
return 'ordersItemXlsGetListProcessor';