/**
 * Created by xuhui on 15/5/13.
 */


//本模块无依赖
define(function(){

    return {
        initSet:function(){

            //if($.os.ios)
            $.afui.animateHeader(true);     //转场时启动header动画效果
            $(document.body).get(0).className = 'ios';

            this.bindSubMenu();
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
        }
    };

});