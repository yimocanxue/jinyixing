/**
 * Created by xuhui on 15/5/26.
 */

define(['util','app/juiRechargeSelectFeeLib'],function(util,jRSFL){

    var panelId = 'jui-quancun-connect';
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

            //连接出错报告
            var message = "<span class='jui-popup-main'><img src='lib/img/icon_wifi.png'/ width='150'><br/><br/>完事具备，只欠网络<br/>请检查您的网络设置。</span>";
            obj.showPoup(message);
        },
        setFooterNavButton:function(){
            var btnhtml = '<a class="jui-nav" data-elid="#back" ><img src="lib/img/icon_btn_cancel2.png" />取消</a>'+
                '<a class="jui-nav" data-elid="jui-connect-retry"><img src="lib/img/icon_btn_retry.png" />重试</a>';
            $("#jui-footer").html(btnhtml).find(".jui-nav").bind('tap',function(){
                var obj = $(this);
                var elem = obj.data('elid');

                if(elem == '#back') $.afui.goBack();
                if(elem == 'jui-connect-retry'){
                    //圈存连接设备
                    alert('重新发起连接');
                }
            });
        },

        showPoup:function(message){
            $.afui.popup({
                title: '连接出错！',
                message: "<span class='jui-popup-main'><img src='lib/img/icon_wifi.png'/ width='150'><br/><br/>完事具备，只欠网络<br/>请检查您的网络设置。</span>",
                cancelText: "取消",
                cancelCallback: function () {
                    alert('取消')
                },
                doneText: "再试一次",
                doneCallback: function () {
                    alert("再试一次")
                },
                cancelOnly: false
            });
        }




}
});
