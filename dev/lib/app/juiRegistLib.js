/**
 * Created by xuhui on 15/5/26.
 */

define(['util'],function(util){

    var panelId = 'jui-regist';
    return {
        load:function(){

            util.setShimHegith(panelId);
            util.switchHeader(panelId);
            $.afui.loadContent("#"+panelId,false,false);

        },


    }
});
