/**
 * Created by xuhui on 15/5/26.
 */

define(['require','util'],function(require,util){

    var panelId = 'jui-card-unbind';
    return {
        load:function(){

            var module = this;
            util.setShimHegith(panelId);
            $.afui.loadContent("#"+panelId,false,false);


        }

    }
});
