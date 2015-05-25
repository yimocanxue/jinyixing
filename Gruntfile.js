
module.exports = function(grunt){

    //自动监控任务配置
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        //自动检测文件变化 刷新浏览器
        watch:{
            client:{
                files:['dev/*.html','dev/lib/*.js','dev/lib/**/*.js','dev/lib/**/*.css','dev/lib/**/*.png','dev/lib/**/*.gif','dev/lib/**/*.jpg','dev/partials/*'],
                options:{
                    livereload:true
                }
            }
        },

        requirejs:{
            build:{
                options:{

                    // app顶级目录，非必选项。如果指定值，baseUrl则会以此为相对路径
                    appDir:'dev/',

                    // 模块根目录。默认情况下所有模块资源都相对此目录。
                    // 若该值未指定，模块则相对build文件所在目录。
                    // 若appDir值已指定，模块根目录baseUrl则相对appDir。
                    baseUrl:'lib',

                    // 指定输出目录，若值未指定，则相对 build 文件所在目录
                    dir:'build/',

                    mainConfigFile: 'dev/lib/app.js',


                    modules: [
                        {
                            name: 'app',
                            include:[
                                'jquery','fastclick', 'af.shim', 'af.ui', 'af.actionsheet', 'af.touchEvents',
                                'af.animation', 'af.popup', 'af.drawer', 'af.toast', 'af.animateheader',
                                'af.splashscreen', 'af.swipereveal', 'highcharts', 'public'
                            ]
                        },
                        {
                            name: 'app/public'
                        }
                    ],



                    // 在 RequireJS 2.0.2 中，输出目录的所有资源会在 build 前被删除
                    // 值为 true 时 rebuild 更快，但某些特殊情景下可能会出现无法预料的异常
                    keepBuildDir: true,

                    // JS 文件优化方式，目前支持以下几种：
                    //   uglify: （默认） 使用 UglifyJS 来压缩代码
                    //   closure: 使用 Google's Closure Compiler 的简单优化模式
                    //   closure.keepLines: 使用 closure，但保持换行
                    //   none: 不压缩代码
                   
                    optimize:'uglify',

                    // 使用 UglifyJS 时的可配置参数
                    // See https://github.com/mishoo/UglifyJS for the possible values.
                    uglify:{
                        toplevel:true,
                        ascii_only:true,
                        beautify:false,
                        max_line_length:1000,
                        no_mangle:true,
                        preserveComments:false,
                        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */'

                    },
                    
                    // CSS 优化方式，目前支持以下几种：
                    // none: 不压缩，仅合并
                    // standard: 标准压缩，移除注释、换行，以及可能导致 IE 解析出错的代码
                    // standard.keepLines: 除标准压缩外，保留换行
                    // standard.keepComments: 除标准压缩外，保留注释 (r.js 1.0.8+)
                    // standard.keepComments.keepLines: 除标准压缩外，保留注释和换行 (r.js 1.0.8+)
                    optimizeCss:'standard',

                    // 是否忽略 CSS 资源文件中的 @import 指令
                    cssImportIgnore:null,

                    // 处理所有的文本资源依赖项，从而避免为加载资源而产生的大量单独xhr请求
                    inlineText:true,

                    // 是否开启严格模式
                    // 由于很多浏览器不支持 ES5 的严格模式，故此配置默认值为 false
                    useStrict: false,

                    // 不优化某些文件
                    fileExclusionRegExp: /^(r|build)\.js$/,

                    // 默认保留模块的 license 注释
                    preserveLicenseComments: false,


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

                }
            }
        },
        //css压缩
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dev/lib/css',
                    src: ['af.ui.css','icons.min.css','app.css'],
                    dest: 'build/lib/css',
                    ext: '.min.css'
                }]
            }
        },

        //压缩html文件
        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    'build/index.html':'dev/index.html',
                    'build/partials/subnav.html':'dev/partials/subnav.html'
                }
            }

        },

        //发布html
        copy:{
            main:{
                files:[
                    {expand:true,src:'lib/*',dest:'built/'},
                ]
            }
        },

        imagemin: {
            options:{
                optimizationLevel:5,
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'dev/lib/img',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'build/lib/img/'
                }]
            }
        },

        //替换html中资源的引用路径
        htmlbuild: {
            dist: {
                src: 'build/index.html',
                dest: 'build/',
                options: {
                    beautify: false,
                    //prefix: '',
                    relative: true,
                    styles: {
                        bundle: [
                            'lib/css/icons.min.css',
                            'lib/css/af.ui.css',
                            'lib/css/app.css'
                        ],
                        test: 'lib/css/jinyixing.css'
                    }
                }
            }
        },

        //清理合并后多余的文件
        clean: {
            js: ["build/lib/plugin" , "build/lib/vender","build/lib/af.ui.js", "build/lib/af.shim.js"],
            css:["build/lib/css/*.css","!build/lib/css/jinyixing.css"],
            other:["build/build.txt","build/lib/img"]
        }



    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-html-build');

    //自定义任务
    grunt.registerTask('live',['watch']);
    grunt.registerTask('default',['htmlmin','requirejs','clean','imagemin']);


}
