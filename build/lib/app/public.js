var publicDependenceModules=["util","app/juiRechargeSelectCardLib","app/juiRechargeSelectFeeLib","app/juiCardBilllistLib","app/juiLoginLib","app/juiRegistLib","app/juiRegistInfoLib","app/juiAccountMileageLib","app/juiAccountCostLib","app/juiCardManageLib","app/juiCardBindLib","app/juiCardBindConnectLib","app/juiCardBindInfoLib","app/juiCardUnbindLib","app/juiAccountMonthLib","app/juiMsgBoxLib","app/juiTopspeedRateLib"];define(publicDependenceModules,function(util,juiRechargeSelectCardLib,juiRechargeSelectFeeLib,juiCardBilllistLib,juiLoginLib,juiRegistLib,juiRegistInfoLib,juiAccountMileageLib,juiAccountCostLib,juiCardManageLib,juiCardBindLib,juiCardBindConnectLib,juiCardBindInfoLib,juiCardUnbindLib,juiAccountMonthLib,juiMsgBoxLib,juiTopspeedRateLib){var imgPath="lib/img/",aimDelay=30,mainPanel="jui-main";return{setBackButtonHandle:function(){$("#jui-header-back").bind("tap",function(){$.afui.goBack()})},resetLogoArea:function(){thisObj=this,$("#"+mainPanel).bind("panelload",function(){thisObj
.setFooterHidden(!0),util.switchHeader(mainPanel),$("#jui-header-title").html("")})},setFooterHidden:function(flag){flag==1?$(".ios .view footer").css("height","0"):$(".ios .view footer").css("height","70px")},bindSubMenu:function(){$("div.jui-header-menubtn").bind("tap",function(){var obj=$(this);obj.css({background:"#e0e0e0"}),$.afui.drawer.show("#subnav","right","push"),setTimeout(function(){obj.css({background:"none"})},aimDelay)})},bindMainNavgation:function(){var obj=this;$(".jui-nav").each(function(){var navObj=$(this),et=navObj.data("event")||"tap";navObj.bind(et,function(){var fun=navObj.data("fun")||"",targetElementID=navObj.data("elid")||"",isfooter=navObj.data("footer")||"no";if(targetElementID=="")return!1;targetElementID=="#back"&&$.afui.goBack(),targetElementID!=""&&targetElementID!="#back"&&(fun!=""&&eval(fun),obj.loadJuiPage(targetElementID)),obj.setFooterHidden(isfooter=="yes"?!1:!0)})})},loadJuiPage:function(elem){var moduleName=util.getModuleNameByElem(elem);eval(moduleName+".load()"
)}}});