/**
 * Created by xuhui on 15/5/13.
 */


//本模块无依赖
define(function(){

    return {
        aimDelay:300,
        initSet:function(){

            //if($.os.ios)
            $.afui.animateHeader(true);     //转场时启动header动画效果
            $(document.body).get(0).className = 'ios';

            this.bindSubMenu();
            this.bindMainNavgation();
        },
        //头部侧边菜单单机事件
        bindSubMenu:function(){

            $("div.jui-header-menubtn").bind("tap",function(){
                var obj = $(this);
                obj.css({'background':'#e0e0e0'});
                $.afui.drawer.show('#subnav','right','push');
                setTimeout(function(){
                    obj.css({'background':'none'});

                },250);
            });
        },
        //绑定主导航
        bindMainNavgation:function(){
            $(".jui-nav").each(function(){
                var navObj = $(this);
                var et = navObj.data('event') || 'tap';
                navObj.bind(et,function(){
                    var targetElementID = navObj.data('elid') || '';         //要跳转的pannel节点id
                    if(targetElementID != '')
                    {
                        var clr = navObj.data('clr') || '';
                        if(clr != ''){
                            navObj.css({'background':'#'+clr});
                            setTimeout(function(){
                                navObj.css({'background':'none'});
                                //$.afui.loadContent("#"+targetElementID,false,false);
                            },this.aimDelay);
                        }else{
                            //$.afui.loadContent("#"+targetElementID,false,false);
                        }
                    }else{
                        return false;
                    }
                });

            });
        }
    };

});