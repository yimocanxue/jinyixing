/**
 * Created by xuhui on 15/5/13.
 */


//本模块无依赖
define(function(){

    var imgPath = 'lib/img/';
    var aimDelay = 30;
    var logoWrap = 'jui-header-logo';        //首页头部logo区class

    return {

        initSet:function(){

            //if($.os.ios)

            $.afui.animateHeader(true);     //转场时启动header动画效果
            $(document.body).get(0).className = 'ios';

            this.bindSubMenu();
            this.bindMainNavgation();

            //首页back按钮的位置换成logo 去掉头部标题
            $("#jui-main").bind('panelload',function(){
                $("div."+logoWrap).css({'left':'4%','paddingLeft':'0'});
                $("div."+logoWrap).find("img").css('height','35px').attr('src',imgPath+'logo_name.png');
                $("#jui-header-title").html('');
            });

            //自定义back按钮
            $("div.jui-header-logo").bind('click',function(){
                if($(this).find('img').attr('src').indexOf('_back') != -1)
                    $.afui.goBack();
            });

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
                var et = navObj.data('event') || 'tap';
                navObj.bind(et,function(){
                    var targetElementID = navObj.data('elid') || '';         //要跳转的pannel节点id

                    var clr = navObj.data('clr') || '';
                    var bg = navObj.data('bg') || '';
                    if(clr != ''){
                        navObj.css({'background':'#'+clr});
                        setTimeout(function(){
                            navObj.css({'background':'none'});
                            if(targetElementID != '')
                                $.afui.loadContent("#"+targetElementID,false,false);
                        },aimDelay);
                    }else if(bg != ''){
                        navObj.css({'background':'url('+imgPath+bg+') no-repeat'});
                        setTimeout(function(){
                            navObj.css({'background':'url('+imgPath+bg.replace('_hover','')+') no-repeat'});
                            if(targetElementID != '')
                                $.afui.loadContent("#"+targetElementID,false,false);
                        },aimDelay);
                    }else{
                        if(targetElementID != '')
                            $.afui.loadContent("#"+targetElementID,false,false);
                    }

                    obj.showCommonPageBackbtn(targetElementID);

                });

            });
        },
        showCommonPageBackbtn:function(elem){
            if(elem != 'jui-main'){
                $("div."+logoWrap).css({'left':'0','paddingLeft':'4%'});
                $("div."+logoWrap).find("img").css('height','44px').attr('src',imgPath+'icon_back.png');
            }
        }

    };

});