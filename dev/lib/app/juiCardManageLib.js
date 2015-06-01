/**
 * Created by xuhui on 15/5/28.
 */

define(['util'],function(util){

    var panelId = 'jui-card-manage';
    return {

        load:function(){
            util.setShimHegith(panelId);
            $.afui.loadContent("#"+panelId,false,false);
        }

    }


});