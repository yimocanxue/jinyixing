/**
 * Created by xuhui on 15/5/26.
 */

define(['util'],function(util){

    var panelId = 'jui-regist-info';
    return {
        load:function(){

            util.setShimHegith(panelId);
            $.afui.loadContent("#"+panelId,false,false);

            $(".jui-regist-info-headimg").bind('tap',function(){

                $.afui.actionsheet(
                    [{
                        text: '选择相册',
                        cssClasses: 'red',
                        handler: function () {
                            $.afui.goBack();
                        }
                    }, {
                        text: '相机拍照',
                        cssClasses: 'blue',
                        handler: function () {
                            alert("选择了相机拍照");
                        }
                    }]);

            });
        }


    }
});
