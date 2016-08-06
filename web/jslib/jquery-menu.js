/**
 * Created by Administrator on 2016/8/3.
 */
//注册当页面装载完成时需要执行的方法
$(document).ready(function(){
    var as=$("ul > a");
    as.click(function(){
        $(this).nextAll("li").toggle("fast");
    });

    $("li > a").click(function(){
        var nodeaa=$(this);
        var attra=nodeaa.attr("id");
        $("#content").load($(this).attr("id"));
    });
});