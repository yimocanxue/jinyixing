/**
 * Created by xuhui on 15/5/28.
 */

define(['util'],function(util){

    var panelId = 'jui-card-bind-info';
    return {

        load:function(){
            util.setShimHegith(panelId);
            util.switchHeader(panelId);
            $.afui.loadContent("#"+panelId,false,false);
        }

    }


});