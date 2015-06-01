/**
 * Created by xuhui on 15/5/13.
 */

//定义应用公共行为
var publicDependenceModules = [
        'util',
        'app/juiRechargeSelectCardLib',
        'app/juiCardBilllistLib',
        'app/juiLoginLib',
        'app/juiRegistLib',
        'app/juiRegistInfoLib',
        'app/juiAccountMileageLib',
        'app/juiAccountCostLib',
        'app/juiCardManageLib',
        'app/juiCardBindLib',
        'app/juiCardBindConnectLib',
        'app/juiCardBindInfoLib',
        'app/juiCardUnbindLib',
        'app/juiAccountMonthLib',
        'app/juiMsgBoxLib',
        'app/juiTopspeedRateLib'

    ]

define(publicDependenceModules,function(
                            util,
                            juiRechargeSelectCardLib,
                            juiCardBilllistLib,
                            juiLoginLib,
                            juiRegistLib,
                            juiRegistInfoLib,
                            juiAccountMileageLib,
                            juiAccountCostLib,
                            juiCardManageLib,
                            juiCardBindLib,
                            juiCardBindConnectLib,
                            juiCardBindInfoLib,
                            juiCardUnbindLib,
                            juiAccountMonthLib,
                            juiMsgBoxLib,
                            juiTopspeedRateLib


    ){

    var imgPath = 'lib/img/';
    var aimDelay = 30;
    var mainPanel = 'jui-main';

    return {

        setBackButtonHandle:function(){
            //自定义back按钮
            $("#jui-header-back").bind('tap',function(){
                $.afui.goBack();
            });
        },
        //绑定主页的pannel载入事件，把头部返回按钮换成logo
        resetLogoArea:function(){
            thisObj = this;
            //首页back按钮的位置换成logo 去掉头部标题
            $("#"+mainPanel).bind('panelload',function(){
                //隐藏footer
                thisObj.setFooterHidden(true);
                thisObj.switchHeader(mainPanel);
            });
        },
        //显示或隐藏footer
        setFooterHidden:function(flag){
            flag == true ? $(".ios .view footer").css('height','0') : $(".ios .view footer").css('height','70px')
        },
        //头部侧边菜单单机事件
        bindSubMenu:function(){

            $("div.jui-header-menubtn").bind("tap",function(){
                var obj = $(this);
                obj.css({'background':'#e0e0e0'});
                $.afui.drawer.show('#subnav','right','push');
                setTimeout(function(){
                    obj.css({'background':'none'});

                },aimDelay);
            });
        },
        //绑定主导航
        bindMainNavgation:function(){

            var obj = this;
            $(".jui-nav").each(function(){
                var navObj = $(this);
                var et = navObj.data('event') || 'tap';             //绑定事件类型

                navObj.bind(et,function(){

                    var fun = navObj.data('fun') || '';                  //加载后执行的函数
                    var targetElementID = navObj.data('elid') || '';    //要跳转的pannel节点id
                    var isfooter = navObj.data('footer') || 'no';       //是否设置footer

                    if(targetElementID == '') return false;

                    if(targetElementID == '#back' )
                        $.afui.goBack();
                    if(targetElementID != '' && targetElementID != '#back'){
                        fun != '' && eval(fun);
                        //按pannel ID加载页面
                        obj.loadJuiPage(targetElementID);
                    }

                    //决定是否显示底部导航
                    obj.setFooterHidden(isfooter == 'yes' ? false : true);
                    //设置返回导航位置显示按钮还是logo
                    obj.switchHeader(targetElementID);

                });

            });
        },
        switchHeader:function(elem){
            if(elem != 'jui-main'){
                $("#header-main").hide();
                $("#header-common").css({'height':'64px','borderBottomWidth':0}).show();
            }else{
                $("#header-common").hide();
                $("#header-main").show();
            }

        },
        loadJuiPage:function(elem){
            var moduleName = util.getModuleNameByElem(elem);
            eval(moduleName+".load()");
        }

    };

});