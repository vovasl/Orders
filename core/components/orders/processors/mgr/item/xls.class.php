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
            ->setCellValue('A20', $this->modx->lexicon('orders_item_shipper_2'))
            ->setCellValue('A21', $this->modx->lexicon('orders_item_bl_2'))
            ->setCellValue('A22', $this->modx->lexicon('orders_item_agent_2'))
            ->setCellValue('A23', $this->modx->lexicon('orders_item_invoice_2'))
            ->setCellValue('A24', $this->modx->lexicon('orders_item_ready_date_2'))
            ->setCellValue('A25', $this->modx->lexicon('orders_item_goods_2'))
            ->setCellValue('A26', $this->modx->lexicon('orders_item_cbm_2'))
            ->setCellValue('A27', $this->modx->lexicon('orders_item_kgs_2'))
            ->setCellValue('A28', $this->modx->lexicon('orders_item_ctn_2'))
            ->setCellValue('A29', $this->modx->lexicon('orders_item_note_s_2'))
            ->setCellValue('A30', $this->modx->lexicon('orders_item_shipper_3'))
            ->setCellValue('A31', $this->modx->lexicon('orders_item_bl_3'))
            ->setCellValue('A32', $this->modx->lexicon('orders_item_agent_3'))
            ->setCellValue('A33', $this->modx->lexicon('orders_item_invoice_3'))
            ->setCellValue('A34', $this->modx->lexicon('orders_item_ready_date_3'))
            ->setCellValue('A35', $this->modx->lexicon('orders_item_goods_3'))
            ->setCellValue('A36', $this->modx->lexicon('orders_item_cbm_3'))
            ->setCellValue('A37', $this->modx->lexicon('orders_item_kgs_3'))
            ->setCellValue('A38', $this->modx->lexicon('orders_item_ctn_3'))
            ->setCellValue('A39', $this->modx->lexicon('orders_item_note_s_3'))
            ->setCellValue('A40', $this->modx->lexicon('orders_item_shipper_4'))
            ->setCellValue('A41', $this->modx->lexicon('orders_item_bl_4'))
            ->setCellValue('A42', $this->modx->lexicon('orders_item_agent_4'))
            ->setCellValue('A43', $this->modx->lexicon('orders_item_invoice_4'))
            ->setCellValue('A44', $this->modx->lexicon('orders_item_ready_date_4'))
            ->setCellValue('A45', $this->modx->lexicon('orders_item_goods_4'))
            ->setCellValue('A46', $this->modx->lexicon('orders_item_cbm_4'))
            ->setCellValue('A47', $this->modx->lexicon('orders_item_kgs_4'))
            ->setCellValue('A48', $this->modx->lexicon('orders_item_ctn_4'))
            ->setCellValue('A49', $this->modx->lexicon('orders_item_note_s_4'))
            ->setCellValue('A50', $this->modx->lexicon('orders_item_shipper_5'))
            ->setCellValue('A51', $this->modx->lexicon('orders_item_bl_5'))
            ->setCellValue('A52', $this->modx->lexicon('orders_item_agent_5'))
            ->setCellValue('A53', $this->modx->lexicon('orders_item_invoice_5'))
            ->setCellValue('A54', $this->modx->lexicon('orders_item_ready_date_5'))
            ->setCellValue('A55', $this->modx->lexicon('orders_item_goods_5'))
            ->setCellValue('A56', $this->modx->lexicon('orders_item_cbm_5'))
            ->setCellValue('A57', $this->modx->lexicon('orders_item_kgs_5'))
            ->setCellValue('A58', $this->modx->lexicon('orders_item_ctn_5'))
            ->setCellValue('A59', $this->modx->lexicon('orders_item_note_s_5'))
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
            ->setCellValue('B19', $orderArr['note'])
            ->setCellValue('B20', $orderArr['shipper_2'])
            ->setCellValue('B21', $orderArr['bl_2'])
            ->setCellValue('B22', $orderArr['agent_2'])
            ->setCellValue('B23', $orderArr['invoice_2'])
            ->setCellValue('B24', $orderArr['ready_date_2'])
            ->setCellValue('B25', $orderArr['goods_2'])
            ->setCellValue('B26', $orderArr['cbm_2'])
            ->setCellValue('B27', $orderArr['kgs_2'])
            ->setCellValue('B28', $orderArr['ctn_2'])
            ->setCellValue('B29', $orderArr['note_s_2'])
            ->setCellValue('B30', $orderArr['shipper_3'])
            ->setCellValue('B31', $orderArr['bl_3'])
            ->setCellValue('B32', $orderArr['agent_3'])
            ->setCellValue('B33', $orderArr['invoice_3'])
            ->setCellValue('B34', $orderArr['ready_date_3'])
            ->setCellValue('B35', $orderArr['goods_3'])
            ->setCellValue('B36', $orderArr['cbm_3'])
            ->setCellValue('B37', $orderArr['kgs_3'])
            ->setCellValue('B38', $orderArr['ctn_3'])
            ->setCellValue('B39', $orderArr['note_s_3'])
            ->setCellValue('B40', $orderArr['shipper_4'])
            ->setCellValue('B41', $orderArr['bl_4'])
            ->setCellValue('B42', $orderArr['agent_4'])
            ->setCellValue('B43', $orderArr['invoice_4'])
            ->setCellValue('B44', $orderArr['ready_date_4'])
            ->setCellValue('B45', $orderArr['goods_4'])
            ->setCellValue('B46', $orderArr['cbm_4'])
            ->setCellValue('B47', $orderArr['kgs_4'])
            ->setCellValue('B48', $orderArr['ctn_4'])
            ->setCellValue('B49', $orderArr['note_s_4'])
            ->setCellValue('B50', $orderArr['shipper_5'])
            ->setCellValue('B51', $orderArr['bl_5'])
            ->setCellValue('B52', $orderArr['agent_5'])
            ->setCellValue('B53', $orderArr['invoice_5'])
            ->setCellValue('B54', $orderArr['ready_date_5'])
            ->setCellValue('B55', $orderArr['goods_5'])
            ->setCellValue('B56', $orderArr['cbm_5'])
            ->setCellValue('B57', $orderArr['kgs_5'])
            ->setCellValue('B58', $orderArr['ctn_5'])
            ->setCellValue('B59', $orderArr['note_s_5'])
        ;


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