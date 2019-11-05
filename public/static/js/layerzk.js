var layerzk = {
    num: 0,
    init: function(obj, position){
        var objChildren = $('<div class="layerzk-'+position+'-window layerzk-num-'+this.num+'"></div>');
        objChildren.num = this.num;
        objChildren.position = position;
        $(obj).append(objChildren);
        this.num++;
        return objChildren;
    },
    open: function(obj, customMsgWindow, closeTimeOut) {
        if(closeTimeOut || closeTimeOut <= 0){
            closeTimeOut = 4000;
        }
        var direction;
        if(obj.position.indexOf('r') != -1){
            direction = "fadeInRight";
        }else{
            direction = "fadeInLeft";
        }
        var bakcgroundColor = "";
        var msg = "";
        var icoCode = "";
        if(customMsgWindow){
            bakcgroundColor = customMsgWindow.bakcgroundColor ? "style=background-color:"+customMsgWindow.bakcgroundColor+";" : "";
            msg = customMsgWindow.msg ? customMsgWindow.msg : "";
            icoCode = customMsgWindow.icoCode ? customMsgWindow.icoCode : "";
        }
        var layerzkHtml = "<div class=\"layerzk-info animated "+direction+"\">" +
            "                <div class=\"layerzk-info-content\" "+bakcgroundColor+">" +
            "                    <i class=\"iconfont layerzk-info-content-icon\">"+ icoCode +"</i>" +
            "                    <p class=\"layerzk-info-content-msg\">"+ msg +"</p>" +
            "                </div>" +
            "            </div>";
        var o = $('<div></div>');
        o.html(layerzkHtml);
        o.bind("click",function(){
            layerzk.delLayerzk(this);
        });
        obj.append(o);
        setTimeout(function(){
            layerzk.delLayerzk(o);
        },closeTimeOut);
    },
    delLayerzk:function(obj){
        if(obj){
            var oldMsgWindow = $(obj)[0];
            if(obj.position === 'rt' || 'rb'){
                oldMsgWindow.firstChild.classList.remove("fadeInRight");
            }else{
                oldMsgWindow.firstChild.classList.remove("fadeInLeft");
            }
            oldMsgWindow.firstChild.classList.add("fadeOut");
            setTimeout(function () {
                try {
                    oldMsgWindow.offsetParent.removeChild(oldMsgWindow);
                }catch (e) {
                    console.warn('要关闭的弹出层已被关闭！');
                }
            },1000);
        }else{
            console.warn("param is null.");
        }
    }
}