/**
 * Created by xuhui on 15/5/26.
 */

define(function(){

    var pannelId = 'jui-recharge-select-card';
    return {
        load:function(){
            $.afui.loadContent("#"+pannelId,false,false);
        }
    }
});
