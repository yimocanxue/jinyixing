/**
 * Created by xuhui on 15/5/27.
 */

//公共工具模块

define(function(){

    return {
        //计算元素直接子元素的尺寸
        getChildrenElemHei:function(elem){
            var obj = $("#"+elem);
            var sumHeight = 0;
            obj.children().each(function(){
                var minhei = $(this).css('minHeight');
                if(minhei.indexOf('px') != -1 && parseInt(minhei) > 0){
                    sumHeight += parseInt(minhei);
                }else{
                    sumHeight += $(this).outerHeight();
                }
            });
            return sumHeight;
        },
        setShimHegith:function(elem){

            var panelHeight = $("#"+elem).height();
            var childrenHeight = this.getChildrenElemHei(elem);
            childrenHeight = childrenHeight < 100 ? parseInt(panelHeight * childrenHeight / 100) : childrenHeight;
            if( panelHeight > childrenHeight){
                $("#"+elem).find(".jui-shim").css('height',(panelHeight - childrenHeight + 20)+'px');
            }
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

    }

});