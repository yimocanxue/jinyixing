/**
 * Created by xuhui on 15/5/26.
 */

define(['util','app/juiRechargeSelectFeeLib'],function(util,jRSFL){

    var panelId = 'jui-recharge-select-card';
    return {
        load:function(){

            var obj = this;
            obj.setFooterNavButton();
            util.setShimHegith(panelId);
            util.switchHeader(panelId);
            $.afui.loadContent("#"+panelId,false,false);


            $("#"+panelId).bind('panelload',function(){
                obj.setFooterNavButton();
            });
        },

        setFooterNavButton:function(){

            //解除绑定事件
            $("#jui-footer").find(".jui-nav").off();
            $("#jui-footer").html('');

            var btnhtml = '<a class="jui-nav" data-elid="#back" ><img src="lib/img/icon_btn_back.png" />返回</a>'+
                          '<a class="jui-nav active" data-elid="jui-recharge-select-fee"><img src="lib/img/icon_rchge.png" />转账</a>';
            $("#jui-footer").html(btnhtml).find(".jui-nav").bind('tap',function(){

                var obj = $(this);
                var elem = obj.data('elid');

                if(elem == '#back') $.afui.goBack();
                if(elem == 'jui-recharge-select-fee')
                    jRSFL.load();


            });
        }


    }
});
