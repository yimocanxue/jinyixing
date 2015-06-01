/**
 * Created by xuhui on 15/5/26.
 */

define(['require','util'],function(require,util){

    var panelId = 'jui-card-bind';
    return {
        load:function(){

            var module = this;
            util.setShimHegith(panelId);
            $.afui.loadContent("#"+panelId,false,false);

            //绑定选择事件
            $("#jui-card-bind-main").find('img').bind('tap',function(){
                var obj = $(this);
                if(!obj.next().is(':checked')){
                    var checkedItem = $("input[name='jui-card-bind-device-type']:checked")
                    if(checkedItem.length > 0){
                        var checkedImg = checkedItem.prev();
                        checkedImg.attr('src',checkedImg.attr('src').replace('_selected.png','.png'));
                    }
                    obj.next().trigger('click');
                    obj.attr('src',obj.attr('src').replace('.png','_selected.png'));
                }
            });

            //绑定下一步按钮事件
            $("#jui-card-bind-nextbtn").bind('tap',function(){
                var type = $("input[name='jui-card-bind-device-type']:checked").val();

            });

        }

    }
});
