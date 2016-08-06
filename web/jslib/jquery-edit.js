/**
 * Created by Administrator on 2016/8/3.
 */
//注册当页面装载完成时需要执行的方法
$(document).ready(function(){
    var tds=$("td");

    //给所有td节点添加点击事件
    tds.click(function(){
        //取出当前td中的文本内容，保存起来；
        var td=$(this);
        var text=td.text();
        //清空td里面的内容
        td.html("");
        //建立一个文本框，使用JQuery api
        var input=$("<input>");
        //设置文本框的值为文本内容
        input.attr("value",text);
        input.keyup(function(){
            
        });
        //将文本框设置到td中
        td.append(input);
        td.unbind("click");
    });
});