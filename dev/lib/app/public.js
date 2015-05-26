/**
 * Created by xuhui on 15/5/13.
 */

//定义应用公共行为
var publicDependenceModules = [
        'app/juiRechargeSelectCardLib'
    ]

define(publicDependenceModules,function(juiRechargeSelectCardLib){

    var imgPath = 'lib/img/';
    var aimDelay = 30;
    var logoWrap = 'jui-header-logo';        //首页头部logo区class

    return {

        setBackButtonHandle:function(){
            //自定义back按钮
            $("div."+logoWrap).bind('click',function(){
                if($(this).find('img').attr('src').indexOf('_back') != -1)
                    $.afui.goBack();
            });
        },
        //绑定主页的pannel载入事件，把头部返回按钮换成logo
        resetLogoArea:function(){
            thisObj = this;
            //首页back按钮的位置换成logo 去掉头部标题
            $("#jui-main").bind('panelload',function(){
                //隐藏footer
                thisObj.setFooterHidden(true);
                $("div."+logoWrap).css({'left':'4%','paddingLeft':'0'});
                $("div."+logoWrap).find("img").css('height','35px').attr('src',imgPath+'logo_name.png');
                $("#jui-header-title").html('');

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

                    var clr = navObj.data('clr') || '';
                    var bg = navObj.data('bg') || '';

                    clr != '' && navObj.css({'background':'#'+clr});
                    bg != '' && navObj.css({'background':'url('+imgPath+bg+') no-repeat'});

                    if(clr != '' || bg != ''){
                        setTimeout(function(){
                            clr != '' && navObj.css({'background':'none'});
                            bg != '' && navObj.css({'background':'url('+imgPath+bg.replace('_hover','')+') no-repeat'});
                            if(targetElementID == '#back' )
                                $.afui.goBack();
                            if(targetElementID != '' && targetElementID != '#back'){
                                fun != '' && eval(fun);

                                //按pannel ID加载页面
                                obj.loadJuiPage(targetElementID);
                            }

                        },aimDelay);

                    }else{

                        if(targetElementID == '#back' )
                            $.afui.goBack();
                        if(targetElementID != '' && targetElementID != '#back'){
                            fun != '' && eval(fun);
                            //按pannel ID加载页面
                            obj.loadJuiPage(targetElementID);
                        }

                    }


                    //决定是否显示底部导航
                    obj.setFooterHidden(isfooter == 'yes' ? false : true);
                    //设置返回导航位置显示按钮还是logo
                    obj.showCommonPageBackbtn(targetElementID);

                });

            });
        },
        showCommonPageBackbtn:function(elem){
            if(elem != 'jui-main'){
                $("div."+logoWrap).css({'left':'0','paddingLeft':'4%'});
                $("div."+logoWrap).find("img").css('height','44px').attr('src',imgPath+'icon_back.png');
            }
        },
        loadJuiPage:function(elem){
            var moduleName = this.getModuleNameByElem(elem);
            eval(moduleName+".load()");
        },
        //根据pannel ID获取要加载的js模块
        getModuleNameByElem:function(elem){
            var strArray = elem.split('-');
            var libName = strArray[0];
            for(var i=1;i<strArray.length;i++){
                libName += this.upperFirstChar(strArray[i]);
            }
            return libName+'Lib';
        },
        upperFirstChar:function(str){
            str = str.toLowerCase();
            var reg = /\b(\w)|\s(\w)/g;
            return str.replace(reg,function(m){return m.toUpperCase()})
        }



    };

});