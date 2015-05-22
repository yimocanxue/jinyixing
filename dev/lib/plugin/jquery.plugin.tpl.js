
(function($){

    /**
     * 定义一个插件
     */
    var Plugin;
    var privateMethod;      //插件的私有方法，也可以看做是插件的工具方法集

    /**
     * 这里是插件的主题部分
     * 这里是一个自运行的单例模式
     * 这里之所以用一个Plugin的单例模式 包含一个Plugin的类，主要是为了封装性
     * 更好的划分代码块
     *
     * 同时也方便区分公私有方法及公共方法
     *
     * PS：但有时为了方便也将私有方法卸载Plugin类里，这时建议加上“_”前缀
     */
    Plugin = (function(){

        /**
         * 插件实例化部分，初始化时调用的代码可以放在这里
         * @param element 传入jq对象的选择器 如$("#j_plugin").plugin(),其中$("#j_plugin")即是element
         * @param options 插件参数
         * @constructor
         */
        function Plugin(element,options){
            //将dom jq对象赋值给插件，方便后续调用
            this.$element = $(element);

            //将插件的默认参数及用户定义的参数合并到一个对象
            this.settings = $.extend({}, $.fn.plugins.defaults,options);
            //如果将参数设置在dom自定义属性里，也可以这样写
            this.settings = $.extend({}, $.fn.plugin.defaults,this.$element.data(),options);

            //初始化调用
            this.init();
        }

    });

    /**
     * 写法一
     * 插件的公共方法，相当于接口函数，用于给外部调用
     */
    Plugin.prototype.doSomething = function(){
        /**
         * 方法内容
         */
    }

    /**
     *  写法二
     *  将插件所有函数放在prototype的大对象里
     */
    Plugin.prototype = {
        init:function(){
            console.log('init');
        },
        doSomething2:function(){
            console.log('soSomething2');
        }
        //...
    }

    /**
     * 插件的私有方法
     */
    privateMethod = function(){

    };

    /**
     * 这里是将Plugin对象转为jq插件的形式进行调用
     * 定义一个插件plugin
     */
    $.fn.plugin = function(options){
        return this.each(function(){

            var $me = $(this);
            instance = $me.data('plugin');
            if(!instance){
                //将实例化后的插件缓存到dom结构里（内存里）
                $me.data('plugin',new Plugin(this,options));
            }

            /**
             * 优雅处：如果插件的参数是一个字符串，则调用插件的字符串方法。
             * 如$('#id').plugin('doSomething'),则实际调用$('#id').plugin.doSomething();
             *
             * doSomething是刚才定义的接口
             * 这种方法在jquery ui的插件里很常见
             */
            if($.type(options) === 'string') instance[options]();
        });
    }

    /**
     * 插件的默认值
     */
    $.fn.plugin.defautls = {
        property1:'value',
        property2:'value'
    };

    /**
     * 优雅处：通过data-xxx的方式实例化插件
     * 这样的话，在页面上就不需要再显示调用了。
     * 可以查看bootstrap里的JS插件写法
     */
    $(function(){
        return new Plugin($('[data-plugin]'));
    });

})(jQuery)