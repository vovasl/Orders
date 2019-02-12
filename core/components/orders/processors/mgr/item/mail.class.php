<?php

class itemMail {

    /** @var modX $modx */
    public $modx;
    public $classKey = 'ordersItem';
    public $orderID;
    public $userName;
    public $userEmail;

    function __construct($modx, $id)
    {
        $this->modx = $modx;
        $this->orderID = $id;

        $user = $this->modx->getUser();
        if ($user) {
            $profile = $user->getOne('Profile');
            if ($profile){
                $this->userName = $profile->get('fullname');
                $this->userEmail = $profile->get('email');
            }
        }
    }


    public function orderEmail() {
        $settings = $this->getSettings();

        $body = $this->getBody($settings['orders_setting_item_email_fields']);
        $subject = $this->getSubject();
        $emails = $settings['orders_setting_item_email'];
        $emailsArr = explode(',', $emails);

        $this->sendEmail($emailsArr, $subject, $body);
    }

    public function getData() {
        $query = $this->modx->newQuery($this->classKey);
        $query->leftJoin('ordersClient', 'Client');
        $query->leftJoin('ordersManager', 'Manager2');
        $query->leftJoin('ordersGoods', 'Goods');
        $query->leftJoin('ordersSender', 'Sender');
        $query->leftJoin('ordersReceiver', 'Receiver');
        $query->leftJoin('ordersForwarder', 'Forwarder');
        $query->leftJoin('ordersPortDeparture', 'PortDeparture');
        $query->leftJoin('ordersDeliveryTerm', 'DeliveryTerm');
        $query->leftJoin('ordersCityDelivery', 'CityDelivery');
        $query->leftJoin('ordersPortArrive', 'PortArrive');
        $query->leftJoin('ordersLine', 'Line');
        $query->leftJoin('ordersContainerType', 'ContainerType');
        $query->leftJoin('ordersStationTrainArrive', 'StationTrainArrive');
        $query->leftJoin('ordersCompanyWarehouse', 'CompanyWarehouse');
        $query->leftJoin('ordersCarCarrier', 'CarCarrier');
        $query->leftJoin('ordersAgentRailway', 'AgentRailway');
        $query->leftJoin('ordersAddress', 'Address');
        $query->leftJoin('ordersAddressContainer', 'AddressContainer');
        $query->leftJoin('ordersDeliveryTermReceiver', 'DeliveryTermReceiver');
        $query->leftJoin('ordersSaleNote', 'Sale');
        $query->leftJoin('ordersAccountsNote', 'Accounts');
        $query->select($this->modx->getSelectColumns($this->classKey, $this->classKey));
        $query->select(array(
            'client_name' => 'Client.name',
            'manager2_name' => 'Manager2.name',
            'goods_name' => 'Goods.name',
            'sender_name' => 'Sender.name',
            'receiver_name' => 'Receiver.name',
            'forwarder_name' => 'Forwarder.name',
            'port_departure_name' => 'PortDeparture.name',
            'delivery_term_name' => 'DeliveryTerm.name',
            'city_delivery_name' => 'CityDelivery.name',
            'port_arrive_name' => 'PortArrive.name',
            'line_name' => 'Line.name',
            'container_type_name' => 'ContainerType.name',
            'station_train_arrive_name' => 'StationTrainArrive.name',
            'company_warehouse_name' => 'CompanyWarehouse.name',
            'car_carrier_name' => 'CarCarrier.name',
            'agent_railway_name' => 'AgentRailway.name',
            'address_name' => 'Address.name',
            'address_container_name' => 'AddressContainer.name',
            'delivery_term_receiver_name' => 'DeliveryTermReceiver.name',
            'sale_name' => 'Sale.name',
            'accounts_name' => 'Accounts.name',
        ));
        $query->where(array('id' => $this->orderID));
        $data = $this->modx->getObject($this->classKey, $query);

        return $data;
    }

    public function getSettings(){
        //выбираем все настройки в массив $settings
        $settings = array();
        $settingsDB = $this->modx->getCollection('ordersSettings');
        foreach ($settingsDB as $val) {
            $settings[$val->get('name')] = $val->get('value');
        }

        return $settings;
    }

    public function getFieldsJoin(){
        $fieldsJoinArr = array('client_name', 'manager2_name', 'goods_name', 'sender_name', 'receiver_name', 'forwarder_name',
            'port_departure_name', 'delivery_term_name', 'city_delivery_name', 'port_arrive_name', 'line_name', 'container_type_name',
            'station_train_arrive_name', 'company_warehouse_name', 'car_carrier_name', 'agent_railway_name', 'address_name',
            'address_container_name', 'delivery_term_receiver_name', 'sale_name', 'accounts_name');

        return $fieldsJoinArr;
    }

    public function getOrderId (){
        return '0000' . $this->orderID;
    }

    public function  getSubject(){

        $subject = '';

        $order = $this->getData();

        $subject .= 'RE: ';
        $subject .= 'ID ' . $this->getOrderId();
        $subject .= $order->get('container_type') == '' ? '' : ', ' .$order->get('container_type_name');
        $subject .= $order->get('delivery_term') == '' ? '' : ' ' .$order->get('delivery_term_name');
        $subject .= $order->get('port_departure') == '' ? '' : ' ' .$order->get('port_departure_name');
        $subject .= $order->get('port_arrive') == '' ? '' : '-' .$order->get('port_arrive_name');
        $subject .= $order->get('weight') == '' ? '' : ', ' .$order->get('weight');
        $subject .= $order->get('goods') == '' ? '' : ', ' .$order->get('goods_name');
        $subject .= $order->get('client') == '' ? '' : ', ' .$order->get('client_name');
        $subject .= $order->get('manager2') == '' ? '' : ', ' .$order->get('manager2_name');

        return $subject;
    }

    public function getBody($fields){

        $body = '';

        $order = $this->getData();
        $fieldsJoinArr = $this->getFieldsJoin();
        $fieldsArr = explode(',', $fields);

        foreach ($fieldsArr as $field) {
            $fieldsJoin = $field . '_name';
            $val = in_array($fieldsJoin, $fieldsJoinArr) ? $order->get($fieldsJoin) : $order->get($field);
            $val = ($val == '') ? ' - ' : $val;
            $body .= '<strong>' . $this->modx->lexicon('orders_item_' . $field) . ': </strong>' . $val . '<br />';
        }

        return $body;
    }

    public function sendEmail($emails, $subject, $body = '')
    {
        $this->modx->getParser()->processElementTags('', $body, true, false, '[[', ']]', array(), 10);
        $this->modx->getParser()->processElementTags('', $body, true, true, '[[', ']]', array(), 10);

        /** @var modPHPMailer $mail */
        $mail = $this->modx->getService('mail', 'mail.modPHPMailer');
        $mail->setHTML(true);

        foreach ($emails as $email) {
            $mail->address('to', trim($email));
        }
        $mail->address('to', $this->userEmail);

        $mail->set(modMail::MAIL_SUBJECT, trim($subject));
        $mail->set(modMail::MAIL_BODY, $body);
        $mail->set(modMail::MAIL_FROM, $this->userEmail);
        $mail->set(modMail::MAIL_FROM_NAME, $this->userName);
        if (!$mail->send()) {
            $this->modx->log(modX::LOG_LEVEL_ERROR,
                'An error occurred while trying to send the email: ' . $mail->mailer->ErrorInfo
            );
        }
        $mail->reset();
    }
}
