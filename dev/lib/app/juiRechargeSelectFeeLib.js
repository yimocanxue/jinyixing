/**
 * Created by xuhui on 15/5/26.
 */

define(['util','app/juiRechargeResultLib'],function(util,jRRL){

    var panelId = 'jui-recharge-select-fee';
    return {
        load:function(){

            this.setFooterNavButton();
            util.setShimHegith(panelId);
            util.switchHeader(panelId);
            $.afui.loadContent("#"+panelId,false,false);
        },

        setFooterNavButton:function(){
            var btnhtml = '<a class="jui-nav" data-elid="#back" ><img src="lib/img/icon_btn_back.png" />返回</a>'+
                          '<a class="jui-nav active" data-elid="jui-recharge-result"><img src="lib/img/icon_btn_next.png" />下一步</a>';
            $("#jui-footer").html(btnhtml).find(".jui-nav").bind('tap',function(){
                var obj = $(this);
                var elem = obj.data('elid');

                if(elem == '#back') $.afui.goBack();
                if(elem == 'jui-recharge-result'){
                    //实际转账时这里接支付支付
                    jRRL.load();
                }
            });
        }


    }
});
