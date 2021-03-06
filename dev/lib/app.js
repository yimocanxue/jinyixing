// JavaScript Document
requirejs.config({

    baseUrl:'lib',
    paths:{
        'public':'app/public',
        'util':'app/util',
        'jquery':'vender/jquery.min',
        'fastclick':'vender/fastclick',
        'highcharts':'vender/highcharts',
        'af.actionsheet':'plugin/af.actionsheet',
        'af.animation':'plugin/af.animation',
        'af.touchEvents':'plugin/af.touchEvents',
        'af.popup':'plugin/af.popup',
        'af.drawer':'plugin/af.drawer',
        'af.toast':'plugin/af.toast',
        'af.animateheader':'plugin/af.animateheader',
        'af.splashscreen':'plugin/af.splashscreen',
        'af.swipereveal':'plugin/af.swipereveal',
        'af.lockscreen':'plugin/af.lockscreen'

    },

    shim:{
        'fastclick':{
            exports:'fastclick'
        },
        'highcharts':{
            deps:['jquery'],
            exports:'highcharts'
        },
        'af.shim':{
            deps:['jquery'],
            exports:'af.shim'
        },
        'af.ui':{
            deps:['jquery'],
            exports:'af.ui'
        },
        'af.actionsheet':{
            deps:['jquery','af.ui'],
            exports:'af.actionsheet'
        },
        'af.animation':{
            deps:['jquery','af.ui'],
            exports:'af.animation'
        },
        'af.touchEvents':{
            deps:['jquery','af.ui'],
            exports:'af.touchEvents'
        },
        'af.popup':{
            deps:['jquery','af.ui'],
            exports:'af.popup'
        },
        'af.drawer':{
            deps:['jquery','af.ui'],
            exports:'af.drawer'
        },
        'af.toast':{
            deps:['jquery','af.ui'],
            exports:'af.toast'
        },

        'af.animateheader':{
            deps:['jquery','af.ui'],
            exports:'af.animateheader'
        },

        'af.splashscreen':{
            deps:['jquery','af.ui'],
            exports:'af.splashscreen'
        },
        'af.swipereveal':{
            deps:['jquery','af.ui'],
            exports:'af.swipereveal'
        },
        'af.lockscreen':{
            deps:['jquery','af.ui'],
            exports:'af.lockscreen'
        }

    }

});

var modules = [
                'jquery',
                'fastclick',
                'af.shim',
                'af.ui',
                'af.actionsheet',
                'af.touchEvents',
                'af.animation',
                'af.popup',
                'af.drawer',
                'af.toast',
                'af.animateheader',
                'af.splashscreen',
                'af.swipereveal',
                'highcharts',
                'public',
                'util'
            ];

requirejs(modules,function($,fastclick,afshim,afui,actionsheet,touchEvents,animation,popup,drawer,toast,animateheader,splashscreen,swipereveal,highcharts,pubObj,util){

    $.afui.useOSThemes=false;		//是否使用系统内置主题 如果要使用自定义主题必须设置为false且在$(document).ready()之前设置
    $.afui.loadDefaultHash=false;	//APP启动时从hash纪录中打开页面
    $.afui.autoLaunch=false;        //采用手动初始化ui，使得加载动画可以执行

	$(function(){

        //手动初始化afui
        $.afui.launch();

        //转场时启动header动画效果
        $.afui.animateHeader(false);

        //设置样式主题
        $(document.body).get(0).className = 'ios';

        //绑定侧边菜单按钮
        pubObj.bindSubMenu();
        //绑定主页导航事件
        pubObj.bindMainNavgation();

        //主页隐藏footer导航
        pubObj.setFooterHidden(true);

        //绑定主页的pannel载入事件，把头部返回按钮换成logo
        pubObj.resetLogoArea();

        //绑定返回按钮事件
        pubObj.setBackButtonHandle();

	});

});