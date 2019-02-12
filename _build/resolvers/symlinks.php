<?php
/** @var xPDOTransport $transport */
/** @var array $options */
/** @var modX $modx */
if ($transport->xpdo) {
    $modx =& $transport->xpdo;

    $dev = MODX_BASE_PATH . 'Extras/orders/';
    /** @var xPDOCacheManager $cache */
    $cache = $modx->getCacheManager();
    if (file_exists($dev) && $cache) {
        if (!is_link($dev . 'assets/components/orders')) {
            $cache->deleteTree(
                $dev . 'assets/components/orders/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_ASSETS_PATH . 'components/orders/', $dev . 'assets/components/orders');
        }
        if (!is_link($dev . 'core/components/orders')) {
            $cache->deleteTree(
                $dev . 'core/components/orders/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_CORE_PATH . 'components/orders/', $dev . 'core/components/orders');
        }
    }
}

return true;