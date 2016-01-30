/**
 * Created by Administrator on 2015/12/30.
 */
/**
 * Created by Administrator on 2015/12/15.
 */
window.onload=function(){
    allPage();
    /*侧边导航动态交互*/
    var pastNav=document.getElementById("pastNav").getElementsByTagName("li");
    for(i=0;i<10;i++){
        !function(x){
            pastNav[x].onmouseover=function(){
                document.getElementById("navGoods-"+x).style.display="block";
            };
            pastNav[x].onmouseout=function(){
                document.getElementById("navGoods-"+x).style.display="none";
            };
            document.getElementById("navGoods-"+x).onmouseover=function(){
                this.style.display="block";
                pastNav[x].style.backgroundColor="darkorange";
            };
            document.getElementById("navGoods-"+x).onmouseout=function(){
                this.style.display="none";
                pastNav[x].style.backgroundColor="";
            };
        }(i);
    }


    /*巨幕的切换*/
    var bigScreen=document.getElementById("bigScreen").getElementsByTagName("img");
    var li=document.getElementById("bigScreen").getElementsByTagName("li");
    var front=document.getElementById("front");
    var back=document.getElementById("back");
    var count=0;

    front.onclick= function () {
        if(count==4){
            count=0
        }else{count++}
        changeLi(li,count);
        for(var i=0;i<5;i++){
            bigScreen[i].style.opacity="0";
        }
        bigScreen[count].style.opacity="1";
    };
    back.onclick= function () {
        if(count==0){
            count=4
        }else{count--}
        changeLi(li,count);
        for(var i=0;i<5;i++){
            bigScreen[i].style.opacity="0";
        }
        bigScreen[count].style.opacity="1";
    };
    for(var j=0;j<5;j++){
        !function(x){
            li[x].onclick=function(){
                count=x;
                changeLi(li,count);
                for(var i=0;i<5;i++){
                    bigScreen[i].style.opacity="0";
                }
                bigScreen[x].style.opacity="1";
            }
        }(j);
    }
    changeLi(li,0);
    function changeLi(li,index){
        for(var i=0;i<5;i++){
            li[i].style.backgroundColor="rgba(0,0,0,0.4)";
            li[i].style.borderColor="rgba(255,255,255,0.4)";
        }
        li[index].style.backgroundColor="rgba(255,255,255,0.4)";
        li[index].style.borderColor="rgba(0,0,0,0.4)";
    }
    var a=setInterval(function(){
        if(count==4){
            count=0
        }else{count++}
        changeLi(li,count);
        for(var i=0;i<5;i++){
            bigScreen[i].style.opacity="0";
        }
        bigScreen[count].style.opacity="1";
    },6000);


    /*明星产品交互*/
    var button=document.getElementById("button").getElementsByTagName("a");
    button[0].onclick=function(){
        document.getElementById("stars").style.marginLeft="-1240px";
        this.style.color="#EEE";
        button[1].style.color="#000"
    };
    button[1].onclick=function(){
        document.getElementById("stars").style.marginLeft="0";
        this.style.color="#EEE";
        button[0].style.color="#000"
        {
            if(me){
                you1.innerHTML+=ni.innerHTML+'<span style="float: right">'+kuo.value+'</span>'+'<br>'
                me=false;
            }else{
                you1.innerHTML+=ni.innerHTML+kuo.value+'<br>'
                me=true;
            }


        }
    }
};