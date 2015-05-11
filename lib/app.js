// JavaScript Document
requirejs.config({

    baseUrl:'lib',
    paths:{
        app:'../app',
        jquery:'vender/jquery.min'
    },

    shim:{
        'vender/fastclick':{
            exports:'fastclick'
        },
        'af.shim':{
            deps:['jquery'],
            exports:'af.shim'
        },
        'af.ui':{
            deps:['jquery'],
            exports:'af.ui'
        },
        'plugin/af.actionsheet':{
            deps:['jquery'],
            exports:'af.actionsheet'
        },
        'plugin/af.animation':{
            deps:['jquery'],
            exports:'af.animation'
        },
        'plugin/af.touchEvents':{
            deps:['jquery'],
            exports:'af.touchEvents'
        },
        'plugin/af.popup':{
            deps:['jquery'],
            exports:'af.popup'
        },
        'plugin/af.drawer':{
            deps:['jquery'],
            exports:'af.drawer'
        },
        'plugin/af.toast':{
            deps:['jquery'],
            exports:'af.toast'
        },

        'plugin/af.animateheader':{
            deps:['jquery'],
            exports:'af.animateheader'
        },

        'plugin/af.splashscreen':{
            deps:['jquery'],
            exports:'af.splashscreen'
        },
        'plugin/af.swipereveal':{
            deps:['jquery'],
            exports:'af.swipereveal'
        },
        'plugin/af.lockscreen':{
            deps:['jquery'],
            exports:'af.lockscreen'
        }

    }

});

var modules = [
                'jquery',
                'vender/fastclick',
                'af.shim',
                'af.ui',
                'plugin/af.actionsheet',
                'plugin/af.animation',
                'plugin/af.touchEvents',
                'plugin/af.popup',
                'plugin/af.drawer',
                'plugin/af.toast',
                'plugin/af.animateheader',
                'plugin/af.splashscreen',
                'plugin/af.swipereveal',
                'plugin/af.lockscreen'
            ];

requirejs(modules,function($,fastclick,afshim,afui,actionsheet,animation,touchEvents,popup,drawer,toast,animateheader,splashscreen,swipereveal,lockscreen){

    $.afui.useOSThemes=false;		//是否使用系统内置主题 如果要使用自定义主题必须设置为false且在$(document).ready()之前设置
    $.afui.loadDefaultHash=true;	//APP启动时从hash纪录中打开页面
    $.afui.autoLaunch=false;


    $(document).ready(function(){
        $.afui.launch();
    });
    //if($.os.ios)
    $.afui.animateHeader(true);
    $(document.body).get(0).className = 'ios';

});