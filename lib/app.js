// JavaScript Document
requirejs.config({

    baseUrl:'lib',
    paths:{
        public:'app/public',
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
            deps:['jquery','af.ui'],
            exports:'af.actionsheet'
        },
        'plugin/af.animation':{
            deps:['jquery','af.ui'],
            exports:'af.animation'
        },
        'plugin/af.touchEvents':{
            deps:['jquery','af.ui'],
            exports:'af.touchEvents'
        },
        'plugin/af.popup':{
            deps:['jquery','af.ui'],
            exports:'af.popup'
        },
        'plugin/af.drawer':{
            deps:['jquery','af.ui'],
            exports:'af.drawer'
        },
        'plugin/af.toast':{
            deps:['jquery','af.ui'],
            exports:'af.toast'
        },

        'plugin/af.animateheader':{
            deps:['jquery','af.ui'],
            exports:'af.animateheader'
        },

        'plugin/af.splashscreen':{
            deps:['jquery','af.ui'],
            exports:'af.splashscreen'
        },
        'plugin/af.swipereveal':{
            deps:['jquery','af.ui'],
            exports:'af.swipereveal'
        },
        'plugin/af.lockscreen':{
            deps:['jquery','af.ui'],
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
                'plugin/af.touchEvents',
                'plugin/af.popup',
                'plugin/af.drawer',
                'plugin/af.toast',
                'plugin/af.animateheader',
                'plugin/af.splashscreen',
                'plugin/af.swipereveal',
                'app/public'
            ];

requirejs(modules,function($,fastclick,afshim,afui,actionsheet,touchEvents,popup,drawer,toast,animateheader,splashscreen,swipereveal,pubObj){

    $.afui.useOSThemes=false;		//是否使用系统内置主题 如果要使用自定义主题必须设置为false且在$(document).ready()之前设置
    $.afui.loadDefaultHash=true;	//APP启动时从hash纪录中打开页面
    $.afui.autoLaunch=false;        //采用手动初始化ui，使得加载动画可以执行


	$(function(){
        $.afui.launch();
        pubObj.initSet();
	});

});