/**
 * Created by xuhui on 15/5/27.
 */

//公共工具模块

define(function(){

    return {

        /**
         * 计算指定容器内部元素的高度
         * @param elem
         * @returns {number}
         */
        getChildrenElemHei: function (elem) {
            var obj = $("#" + elem);
            var sumHeight = 0;
            obj.children().each(function () {
                var minhei = $(this).css('minHeight');
                if (minhei.indexOf('px') != -1 && parseInt(minhei) > 0) {
                    sumHeight += parseInt(minhei);
                } else {
                    sumHeight += $(this).outerHeight();
                }
            });
            return sumHeight;
        },

        /**
         * 设置指定页的shim高度
         * shim是一个div，是用来设置一个高度是页面滚动，修复整个应用在滚动时跟随滚动的bug
         * @param elem
         */
        setShimHegith: function (elem) {

            var panelHeight = $("#" + elem).height();
            var childrenHeight = this.getChildrenElemHei(elem);
            childrenHeight = childrenHeight < 100 ? parseInt(panelHeight * childrenHeight / 100) : childrenHeight;

            if (panelHeight > childrenHeight) {
                $("#" + elem).find(".jui-shim").css('height', (panelHeight - childrenHeight + 20) + 'px');
            }
        },

        /**
         * 根据页面id获取对应的模块名称
         * @param elem
         * @returns {string}
         */
        getModuleNameByElem: function (elem) {
            var strArray = elem.split('-');
            var libName = strArray[0];
            for (var i = 1; i < strArray.length; i++) {
                libName += this.upperFirstChar(strArray[i]);
            }
            return libName + 'Lib';
        },

        /**
         * 单词首字母大写
         * @param str
         * @returns {string}
         */
        upperFirstChar: function (str) {
            str = str.toLowerCase();
            var reg = /\b(\w)|\s(\w)/g;
            return str.replace(reg, function (m) {
                return m.toUpperCase()
            })
        },

        /**
         * 切换首页header区域的logo图片和内页返回按钮的图片
         * @param elem
         */
        switchHeader: function (elem) {
            if (elem != 'jui-main') {
                $("#jui-header-back").find("img").hide();
                $("#jui-header-back").css({'backgroundPosition': '12px center'}).show();
            } else {
                $("#jui-header-back").find("img").show();
                $("#jui-header-back").css({'backgroundPosition': '-12px center'}).show();
            }

        },


        /**
         * 设置cache
         * @param key
         * @param data
         */
        setCache: function (key, data) {
            localStorage.setItem(key, data);
        },
        /**
         * 获得getCache
         * @param key
         * @returns
         */
        getCache: function (key) {
            return localStorage.getItem(key);
        },
        /**
         * 删除缓存数据
         */
        clearCache: function () {
            localStorage.clear();
        },
        /**
         * 合并cache
         * @param key
         * @param jsonData
         */
        putCache: function (key, jsonData) {
            //localStorage.clear();
            var localdatas = localStorage.getItem(key);
            if (localdatas == null || typeof localdatas === "undefined") {
                localStorage.setItem(key, jsonData);
            } else {
                var jsonList = JSON.parse(localdatas);
                var preLength = jsonList.length;
                var newJsonList = JSON.parse(jsonData);
                var newLength = newJsonList.length;

                //根据时间数据是否匹配来检查是否已经缓存
                var isExist = false;
                loop_1:for (var i = 0; i < preLength; i++) {
                    for (var j = 0; j < newLength; j++) {
                        if (newJsonList[j] == null || jsonList[i] == null) {
                            continue;
                        }
                        if (jsonList[i].time != null && newJsonList[j].time != null && jsonList[i].time == newJsonList[j].time) {
                            isExist = true;
                            break loop_1;
                        }
                    }
                }

                if (isExist == false) {
                    //拼接json对象
                    for (var i = 0; i < newLength; i++) {
                        if (newJsonList[i] != null) {
                            jsonList[preLength + i] = newJsonList[i];
                        }


                    }
                }

                //存入缓存
                localStorage.setItem(key, JSON.stringify(jsonList));
            }

        },


        /**
         * 把要缓存的数据放在存储对象头部
         * @param key
         * @param jsonData
         */
        putCacheToFirst: function (key, jsonData) {

            var localdatas = localStorage.getItem(key);
            if (localdatas == null || typeof localdatas === "undefined") {
                localStorage.setItem(key, jsonData);
            } else {
                var jsonList = JSON.parse(localdatas);
                var preLength = jsonList.length;
                var newJsonList = JSON.parse(jsonData);
                var newLength = newJsonList.length;

                //根据时间数据是否匹配来检查是否已经缓存
                var isExist = false;
                loop_1:for (var i = 0; i < preLength; i++) {
                    for (var j = 0; j < newLength; j++) {
                        if (newJsonList[j] == null || jsonList[i] == null) {
                            continue;
                        }
                        if (jsonList[i].time != null && newJsonList[j].time != null && jsonList[i].time == newJsonList[j].time) {
                            isExist = true;
                            break loop_1;
                        }
                    }
                }

                if (isExist == false) {
                    //拼接json对象

                    for (var i = 0; i < preLength; i++) {
                        if (jsonList[i] != null) {
                            newJsonList[newLength + 1] = jsonList[i];
                        }

                    }

                }

                //存入缓存
                localStorage.setItem(key, JSON.stringify(newJsonList));
            }

        },




    }


});