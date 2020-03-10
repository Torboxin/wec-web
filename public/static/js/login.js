var form = layui.form;
var codeKey = null;
layui.use('form', function() {
    form.render("checkbox");
});

form.on('submit(save)', function(data) {
    var ds = data.field;
    ds.codeKey = codeKey;
    $.ajax({
        datatype:'html',
        url:"http://localhost:8080/wechat-model-controller/login/userLogin",
        type:'post',
        data: ds,
        statusCode: {
            404: function(){
                layer.msg("未找到指定资源！");
            },
            500: function(){
                layer.msg("账号或密码错误！");
            }
        },
        async: false,
        success:function(ret){
            layer.msg(ret.message);
            if (ret.code == 1) {
                localStorage.setItem("wechatToken",ret.json.token);
                window.location = "/main";
            }else{
                changevcode();
            }
        }
    });
    return false;
});

$(function(){
    if(localStorage.getItem("wechatToken")){
        window.location = "/main";
        return;
    }
    changevcode();
})

function changevcode(){
    //console.log("刷新验证码");
    var randomnum = Math.random();
    var img = document.getElementById("imgid");
    $.ajax({
        datatype:'json',
        url:"http://localhost:8080/wechat-model-controller/login/findCodeKey",
        type:'post',
        async: false,
        success:function(ret){
            console.log(ret);
            codeKey = ret.codeKey;
        }
    });
    img.src = "http://localhost:8080/wechat-model-controller/login/verifycode?d="+randomnum+"&codeKey="+codeKey;
}