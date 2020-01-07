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

// 动作: 鼠标悬停于顶部右侧部分(tdiv)时，小程序二维码显示
var tdiv=document.getElementsByClassName("topRight")[0];
var qrCode=document.getElementsByClassName("qrCode")[0];
tdiv.onmouseover=function(){
    qrCode.className="play";
}
tdiv.onmouseout=function(){
    qrCode.className="hidden";
}

// 动作: 主页轮播图 JS简易版
// 获取轮播图的ul
var carousel=document.getElementById("indexCarousel");
var i=0;
function moveTo(to){
    if(to==undefined){
        to=i+1;
    }
    i=to;
    if(i>2){            // 此处的3是轮播图的长度, 可用查询出来的li数组长度代替
        i=0;
    }
    carousel.style.marginLeft=-i*460+"px";
}
// 设置定时器，自动轮播
var timer=setInterval(function(){
    moveTo();
},2500)

// 动作：两个小项目鼠标经过与离开
// 1
var items1=document.getElementsByClassName("items1")[0];
var div1s=items1.children;
items1.onmouseover=function(){
    items1.style.marginTop="-3px";
    div1s[1].className="none";
    div1s[2].className="block";
}
items1.onmouseout=function(){
    items1.style.marginTop="0px";
    div1s[1].className="block";
    div1s[2].className="none";
}
// 2
var items2=document.getElementsByClassName("items2")[0];
var div2s=items2.children;
items2.onmouseover=function(){
    items2.style.marginBottom="3px";
    div2s[1].className="none";
    div2s[2].className="block";
}
items2.onmouseout=function(){
    items2.style.marginBottom="0px";
    div2s[1].className="block";
    div2s[2].className="none";
}

// 关注方式部分元素动作
// 微信二维码消失显示动作
var wxCode=document.querySelector("div.attention>div>div:nth-child(3) div")
console.log(wxCode);
var wxtarget=wxCode.previousElementSibling.parentElement.parentElement;
// console.log(wxtarget);
wxtarget.onmouseover=function(){
    console.log("in")
    wxCode.className="high play"
}
wxtarget.onmouseout=function(){
    console.log("out")
    wxCode.className="low hidden"
}
