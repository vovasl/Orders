<?php
switch($modx->event->name) {
    case 'OnUserFormPrerender':
        $modx->regClientStartupScript('/assets/components/orders/js/mgr/user_form/tab.js');
        break;
    case 'OnUserFormRender':
        if($mode != 'new'){
            $fieldExt = $user->getOne('Profile')->get('extended');
            $modx->regClientStartupHTMLBlock('
				<script type="text/javascript">
    				Ext.onReady(function() {
        				Ext.getCmp(\'modx-user-manager\').setValue(' . $fieldExt['manager'] . ');
						Ext.getCmp(\'modx-user-client\').setValue(' . $fieldExt['client'] . ');
					})	
				</script>
			');
        }
        break;
    case 'OnUserFormSave':
        $profile = $user->getOne('Profile');
        $fields = $profile->get('extended');
        $fields['manager'] = $_POST['modx-user-manager'];
        $fields['client'] = $_POST['modx-user-client'];
        $profile->set('extended', $fields);
        $profile->save();
        break;
}