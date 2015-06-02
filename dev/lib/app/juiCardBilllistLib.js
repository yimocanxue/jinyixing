/**
 * Created by xuhui on 15/5/26.
 */

define(['util'],function(util){

    var panelId = 'jui-card-billlist';
    return {
        load:function(){

            var module = this;
            var cardno = 'xxxxxxx';     //卡号
            //显示固定表头
            $("#"+panelId+"-patch-tab").show();
            $("#"+panelId+"-patch-card").show();

            //默认显示第一个选项卡（tab）的内容[卡片明细]
            module.setTabActive(0);
            module.getDataList(cardno,0);

            util.setShimHegith(panelId);
            util.switchHeader(panelId);
            $.afui.loadContent("#"+panelId,false,false);

            //页面卸载时隐藏固定表头
            $("#"+panelId).bind('panelunload',function(){
                $("#"+panelId+"-patch-tab").hide();
                $("#"+panelId+"-patch-card").hide();
            });

            //绑定tab切换
            $("#"+panelId+"-patch-tab").find("td").bind('tap',function(){
                var index = $(this).index();
                module.setTabActive(index);
                module.getDataList(cardno,index);
            });


        },
        setTabActive:function(index){
            //jui-card-billlist-patch-tab
            var obj =  $("#"+panelId+"-patch-tab").find("td").eq(index);
            if(!obj.hasClass('active')){
                $("#"+panelId+"-patch-tab").find("td").removeClass('active');
                obj.addClass('active');
                var pageTitle = index == 0 ? '卡片明细' :(index == 1 ? '通行记录' :'充值记录');
                $.afui.setTitle(pageTitle);
            }
        },
        //根据不同的tab来获取不同的列表数据
        getDataList:function(cardno,index){

            var module = this;

            /*从服务器获取数据，这里本地模拟获取
            $.get(url,{'q':index,'cardno':cardno},function(data){
                //解析html DOM
                module.parseData2Html(data);
            },'json');
            */
            var json = module.generateData(cardno,index);

            module.parseData2Html(json);
        },

        parseData2Html:function(json){

            var htmls = '';
            var tpl1 = '<tr class="jui-card-itemtr">'+
                       '     <td>{@date}'+
                       '        <div class="jui-card-cycle"></div>'+
                       '     </td>'+
                       '     <td>'+
                       '        <div class="jui-card-item">'+
                       '        <div class="jui-card-arrow1"></div>'+
                       '        <div class="jui-card-arrow2"></div>'+
                       '        <div class="jui-card-item-main">'+
                       '        <div class="jui-card-itemfee">'+
                       '        <span>-{@cost}</span><span>.00</span><span> 通行费</span>'+
                       '        <span>{@cutoff}</span><span>本次优惠</span>'+
                       '        </div>'+
                       '        <div class="jui-card-eninfo">入口：{@intime} {@inport}</div>'+
                       '        <div class="jui-card-exitinfo">出口：{@outtime} {@outport}</div>'+
                       '        </div>'+
                       '        </div>'+
                       '     </td>'+
                       ' </tr>';
            var tpl2 = '<tr class="jui-card-itemtr item-orange ">'+
                       '     <td>{@date}'+
                       '        <div class="jui-card-cycle"></div>'+
                       '     </td>'+
                       '     <td>'+
                       '        <div class="jui-card-item">'+
                       '        <div class="jui-card-arrow1"></div>'+
                       '        <div class="jui-card-arrow2"></div>'+
                       '        <div class="jui-card-item-main">'+
                       '        <div class="jui-card-itemfee">'+
                       '            <span>+{@fee}</span><span>.00</span><span> {@method}</span>'+
                       '        </div>'+
                       '        <div class="jui-card-rchinfo">{@time} {@status}</div>'+
                       '        </div>'+
                       '        </div>'+
                       '    </td>'+
                       ' </tr>';
            var tpl,item,status;
            for(var i=0;i < json.length;i++){
                item = json[i];
                tpl = item.type == 1 ? tpl1 : tpl2;

                tpl = tpl.replace('{@date}',item.date);
                if(item.type == 1){
                    htmls += tpl.replace('{@cost}',item.cost).replace('{@cutoff}',item.cutoff)
                          .replace('{@intime}',item.in.time).replace('{@inport}',item.in.port)
                          .replace('{@outtime}',item.out.time).replace('{@outport}',item.out.port);
                }
                if(item.type == 2){
                    status = item.status == 0 ? '充值失败' : '充值成功';
                    htmls += tpl.replace('{@fee}',item.fee).replace('{@method}',item.method).replace('{@status}',status).replace('{@time}',item.time);
                }
            }
            $("#jui-card-itemlist").html(htmls);
        },
        //该方法模拟服务器端API根据卡号和类别获取卡片明细数据列表
        generateData:function(cardno,index){
            //通行记录
            var tempArray1 = [
                {'type':1,'card':cardno,'date':'2015/5/7','cutoff':'2.00','cost':'18','in':{'time':'2015/5/7 09:20','port':'黄埔大道'},'out':{'time':'2015/5/7 15:15','port':'宝安大道'}},
                {'type':1,'card':cardno,'date':'2015/5/9','cutoff':'6.00','cost':'54','in':{'time':'2015/5/9 14:20','port':'清湖入口'},'out':{'time':'2015/5/9 11:15','port':'机场出口'}},
                {'type':1,'card':cardno,'date':'2015/5/11','cutoff':'10.00','cost':'200','in':{'time':'2015/5/11 13:20','port':'机荷入口'},'out':{'time':'2015/5/11 15:23','port':'黄鹤出口'}},
            ];
            //充值记录
            var tempArray2 = [
                {'type':2,'card':cardno,'date':'2015/5/7','time':'2015/5/15 17：10','fee':'100','status':0,'method':'空中充值'},
                {'type':2,'card':cardno,'date':'2015/5/18','time':'2015/5/18 18：20','fee':'300','status':1,'method':'网点充值'}
            ]
            return index == 0 ? tempArray1.concat(tempArray2) : (index == 1 ? tempArray1 : tempArray2);
        }


    }
});
