/**
 * Created by xuhui on 15/5/28.
 */

define(['util'],function(util){

    var panelId = 'jui-account-mileage';
    return {

        load:function(){
            util.setShimHegith(panelId);
            this.loadCharts();
            $.afui.loadContent("#"+panelId,false,false);
        },
        loadCharts:function(){


            $('.jui-account-mileage-chart').highcharts({
                title: {
                    text: '高速公路里程统计/月',
                    x: 10 //center
                },

                xAxis: {
                    categories: ['1月', '2月', '3月', '4月', '5月', '6月']
                },
                yAxis: {
                    title: {
                        text: '公里数/km'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                legend: {
                    enabled: false
                },
                credits:{
                    enabled:false
                },
                tooltip: {
                    valueSuffix: 'km'
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                series: [{
                    color:'#00a0e9',
                    data: [300, 100, 80, 350, 600, 240]
                }]
            });

        }

    }


});