
module.exports = function(grunt){

    //自动监控任务配置
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        //自动检测文件变化 刷新浏览器
        watch:{
            client:{
                files:['*.html','lib/*.js','lib/**/*.js','lib/**/*.css','lib/**/*.png','lib/**/*.gif','lib/**/*.jpg','partials/*'],
                options:{
                    livereload:true
                }
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
                    'built/index.html':'index.html',
                    'built/partials/subnav.html':'partials/subnav.html'
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
        }


    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //自定义任务
    grunt.registerTask('live',['watch']);
    grunt.registerTask('default',['htmlmin','copy']);


}