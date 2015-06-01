/**
 * Created by xuhui on 15/5/26.
 */

define(['util'],function(util){

    var panelId = 'jui-recharge-select-card';
    return {
        load:function(){

            this.setFooterNavButton();
            util.setShimHegith(panelId);
            $.afui.loadContent("#"+panelId,false,false);
        },

        setFooterNavButton:function(){
            var btnhtml = '<a class="jui-nav" data-elid="#back" ><img src="lib/img/icon_btn_back.png" />返回</a>'+
                          '<a class="jui-nav active"><img src="lib/img/icon_rchge.png" />圈存</a>';
            $("#jui-footer").html(btnhtml);
        }


    }
});
