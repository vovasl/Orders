<?php
require_once (dirname(__FILE__).'/update.class.php');
/**
 * Update a provider from a grid
 *
 * @package modx
 * @subpackage processors.workspace.providers
 */
class ordersClientFromGridProcessor extends ordersClientUpdateProcessor {
	public function initialize() {
		$data = $this->getProperty('data');
		if (empty($data)) return $this->modx->lexicon('orders_invalid_data');
		$data = $this->modx->fromJSON($data);
		if (empty($data)) return $this->modx->lexicon('orders_invalid_data');
		$this->setProperties($data);
		$this->unsetProperty('data');

		return parent::initialize();
	}
}
return 'ordersClientFromGridProcessor';