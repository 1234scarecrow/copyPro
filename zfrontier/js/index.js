// 动作: 左侧的列表鼠标划过显示
// 1. 查找触发事件的元素  div里的第一个a
var eledivs=document.querySelectorAll("div.leftList>div");
// 2. 绑定事件处理函数
for(var elediv of eledivs){
    elediv.onmouseover=function(){
        console.log("1");
        this.className="open";
        // var openUl=document.querySelector("div.open>ul");
    }
    elediv.onmouseout=function(){
        this.className="";
    }
}