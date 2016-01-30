function allPage() {
    /*购物车的动态交互*/
    var shopCar=document.getElementById("shopCar");
    var alertCar=document.getElementById("alertCar");
    shopCar.onmouseover=function(){
        alertCar.style.height="147px";
    };
    alertCar.onmouseover=function(){
        alertCar.style.height="147px";
    };
    alertCar.onmouseout=function(){
        alertCar.style.height="0";
    };
    /*顶部导航动态交互*/
    var topNav=document.getElementById("nav").getElementsByTagName("li");
    var alertNavBoxBG=document.getElementById("alertNavBG");
    var alertNav=document.getElementsByClassName("alertNav");
    for(var i=0;i<6;i++){
        !function(idx){
            topNav[idx].onmouseover=function(e){
                alertNavBG.className="alertNavBG-CSS";
                alertNavBG.style.height="230px";
                for(var i=0;i<6;i++){
                    alertNav[i].style.display="none";
                }
                alertNav[idx].style.display="block";
            };
            topNav[idx].onmouseout=function(){
                alertNavBG.className="";
                alertNavBG.style.height="0px";
            };
        }(i);
    }
    alertNavBoxBG.onmouseover=function(){
        alertNavBG.className="alertNavBG-CSS";
        alertNavBG.style.height="230px";
    };
    alertNavBoxBG.onmouseout=function(){
        alertNavBG.className="";
        alertNavBG.style.height="0px";
    };
    /*搜索栏动态交互*/
    var serach=document.getElementById("searchInput");
    var searchIcon=document.getElementById("searchIcon");
    serach.onfocus=function(){

        document.getElementById("searchAD1").style.opacity="0";
        document.getElementById("searchAD2").style.opacity="0";
        searchIcon.style.border="1px solid darkorange"
    };
    serach.onblur= function () {
        document.getElementById("searchAD1").style.opacity="1";
        document.getElementById("searchAD2").style.opacity="1";
        searchIcon.style.border="1px solid #cccccc"
    };
    searchIcon.onmouseover=function(){
        this.src="img/search_hover.jpg";
    };
    searchIcon.onmouseout=function(){
        this.src="img/search.jpg";

    };
}