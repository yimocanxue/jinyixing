define(["util","app/juiRechargeResultLib"],function(util,jRRL){var panelId="jui-recharge-select-fee";return{load:function(){this.setFooterNavButton(),util.setShimHegith(panelId),util.switchHeader(panelId),$.afui.loadContent("#"+panelId,!1,!1)},setFooterNavButton:function(){var btnhtml='<a class="jui-nav" data-elid="#back" ><img src="lib/img/icon_btn_back.png" />\u8fd4\u56de</a><a class="jui-nav active" data-elid="jui-recharge-result"><img src="lib/img/icon_btn_next.png" />\u4e0b\u4e00\u6b65</a>';$("#jui-footer").html(btnhtml).find(".jui-nav").bind("tap",function(){var obj=$(this),elem=obj.data("elid");elem=="#back"&&$.afui.goBack(),elem=="jui-recharge-result"&&jRRL.load()})}}});