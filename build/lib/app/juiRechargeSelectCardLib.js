define(["util","app/juiRechargeSelectFeeLib"],function(util,jRSFL){var panelId="jui-recharge-select-card";return{load:function(){var obj=this;obj.setFooterNavButton(),util.setShimHegith(panelId),util.switchHeader(panelId),$.afui.loadContent("#"+panelId,!1,!1),$("#"+panelId).bind("panelload",function(){obj.setFooterNavButton()})},setFooterNavButton:function(){$("#jui-footer").find(".jui-nav").off(),$("#jui-footer").html("");var btnhtml='<a class="jui-nav" data-elid="#back" ><img src="lib/img/icon_btn_back.png" />\u8fd4\u56de</a><a class="jui-nav active" data-elid="jui-recharge-select-fee"><img src="lib/img/icon_rchge.png" />\u8f6c\u8d26</a>';$("#jui-footer").html(btnhtml).find(".jui-nav").bind("tap",function(){var obj=$(this),elem=obj.data("elid");elem=="#back"&&$.afui.goBack(),elem=="jui-recharge-select-fee"&&jRSFL.load()})}}});