define(["util"],function(util){var panelId="jui-card-manage";return{load:function(){util.setShimHegith(panelId),util.switchHeader(panelId),$.afui.loadContent("#"+panelId,!1,!1)}}});