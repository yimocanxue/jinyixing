/**
 * Created by xuhui on 15/5/26.
 */

define(['util'],function(util){

    var panelId = 'jui-login';
    return {
        load:function(){

            util.setShimHegith(panelId);
            $.afui.loadContent("#"+panelId,false,false);

        },


    }
});