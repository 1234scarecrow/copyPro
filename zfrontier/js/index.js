// 动作: 左侧的列表鼠标划过显示
// 1. 查找触发事件的元素  div
var eledivs=document.querySelectorAll("div.leftList>div");
// 2. 绑定事件处理函数
for(var elediv of eledivs){
    // 查找要修改的元素  span
    // var spans=document.querySelectorAll("div.leftList span");
    elediv.onmouseover=function(){
        console.log("1");
        this.className="open";
        // var openUl=document.querySelector("div.open>ul");
        this.children[1].className="iconfont icon-down"
        
        // span.className="";
    }
    elediv.onmouseout=function(){
        this.className="";
        // span.className="iconfont icon-next";
        this.children[1].className="iconfont icon-next";

    }
}