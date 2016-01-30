window.onload= function () {
    allPage();/*
    var worker = new Worker('c.js');
    worker.onmessage = function () {
        setInterval(function () {
            if(note3.scrollTop < 1500&&changeNote3.can11.y>-300) {
                changeNote3.cnt1.clearRect(0, 0, note3.can1.width, note3.can1.height);
                note3.drawBox1(changeNote3.cnt1, changeNote3.can11);
                note3.drawBox1(changeNote3.cnt1, changeNote3.can12);
                note3.drawBox1(changeNote3.cnt1, changeNote3.can13);
                note3.drawBox1(changeNote3.cnt1, changeNote3.can14);
            }
        },30)
    };
*/



    var note3=(function() {
        return{
            can1 : document.getElementById("can1"),
            can2 : document.getElementById("can2"),
            can3 : document.getElementById("can3"),
            can4 : document.getElementById("can4"),
            can5 : document.getElementById("can5"),
            can6 : document.getElementById("can6"),
            can7 : document.getElementById("can7"),
            scrollTop:0,
            Top:[]
        };
    })();
    var changeNote3=(function () {
        note3.can1.width = document.getElementById("fly-box1").offsetWidth;
        note3.can1.height = document.getElementById("fly-box1").offsetHeight;
        note3.can2.width = document.getElementById("fly-box2").offsetWidth;
        note3.can2.height = document.getElementById("fly-box2").offsetHeight;
        note3.can3.width = document.getElementById("fly-box3").offsetWidth;
        note3.can3.height = document.getElementById("fly-box3").offsetHeight + 40;
        note3.can4.width = document.getElementById("fly-box4").offsetWidth;
        note3.can4.height = document.getElementById("fly-box4").offsetHeight;
        note3.can5.width = document.getElementById("fly-box5").offsetWidth;
        note3.can5.height = document.getElementById("fly-box5").offsetHeight;
        note3.can6.width = document.getElementById("fly-box6").offsetWidth;
        note3.can6.height = document.getElementById("fly-box6").offsetHeight;
        note3.can7.width = document.getElementById("fly-box7").offsetWidth;
        note3.can7.height = document.getElementById("fly-box7").offsetHeight;
        return{
            cnt1:note3.can1.getContext("2d"),
            cnt2:note3.can2.getContext("2d"),
            cnt3:note3.can3.getContext("2d"),
            cnt4:note3.can4.getContext("2d"),
            cnt5:note3.can5.getContext("2d"),
            cnt6:note3.can6.getContext("2d"),
            cnt7:note3.can7.getContext("2d"),
            can11 : {
                x: note3.can1.width * 0.5 - 900,
                y: 50,
                vx: -1.6,
                vy: -1.4,
                width: 1600,
                height: 1200,
                Vw: 4,
                Vh: 2.6,
                img: new Image()
            },
            can12 : {
                x: note3.can1.width * 0.5 - 1600,
                y: -600,
                vx: -0.2,
                vy: 0.1,
                width: 3000,
                height: 2400,
                Vw: 0.6,
                Vh: 0.2,
                img: new Image()
            },
            can13 : {
                x: note3.can1.width * 0.5 - 450,
                y: 400,
                vx: -0.3,
                vy: -0.1,
                width: 700,
                height: 800,
                Vw: 0.6,
                Vh: 0.2,
                img: new Image()
            },
            can14 : {
                x: note3.can1.width * 0.5 - 1000,
                y: 0,
                vx: 0.8,
                vy: -0.8,
                width: 2200,
                height: 1800,
                Vw: 0,
                Vh: 0,
                img: new Image()
            },
            can2Left : {
                x: note3.can2.width / 2 - 500,
                wantY: 501,
                y: 501,
                v: 1,
                Min: 1500,
                bili: 20,
                min: 501,
                img: new Image()
            },
            can2Right : {
                x: note3.can2.width / 2 - 150,
                wantY: 352,
                y: 352,
                v: 2,
                Min: 1500,
                bili: 10,
                min: 350,
                img: new Image()
            },
            can3Top : {
                x: note3.can3.width * 0.5 - 500,
                wantY: 0,
                y: 0,
                v: 0.5,
                Min: 2800,
                bili: 20,
                min: 0,
                img: new Image()
            },
            can3bottom : {
                x: note3.can3.width * 0.5 - 100,
                wantY: 650,
                y: 650,
                v: 0.5,
                Min: 2800,
                bili: -20,
                min: 650,
                img: new Image()
            },
            can4img : {
                x: note3.can3.width * 0.5 - 150,
                y: -200 + 500,
                width: 301,
                height: 598,
                img: new Image()
            },
            can51 : {
                x: note3.can5.width * 0.5 - 300,
                wantY: 0,
                y: 0,
                v: 2,
                Min: 5220,
                bili: 10,
                min: 0,
                img: new Image()
            },
            can52 : {
                x: note3.can5.width * 0.5 - 800,
                wantY: 400,
                y: 400,
                v: 1.3,
                Min: 5620,
                bili: 15,
                min: 400,
                img: new Image()
            },
            can53 : {
                x: note3.can5.width * 0.5 - 400,
                wantY: 850,
                y: 850,
                v: 1,
                Min: 2800,
                bili: 20,
                min: 700,
                img: new Image()
            },
            can54 : {
                x: note3.can5.width * 0.5 - 100,
                wantY: 1550,
                y: 1550,
                v: 0.5,
                Min: 2800,
                bili: 30,
                min: 1450,
                img: new Image()
            },
            can55 : {
                x: note3.can5.width * 0.5 - 600,
                wantY: 2050,
                y: 2050,
                v: 2,
                Min: 2800,
                bili: 10,
                min: 1650,
                img: new Image()
            },
            can61 : {
                x: note3.can6.width * 0.5 - 500,
                wantY: 0,
                y: 0,
                v: 1.3,
                Min: 8600,
                bili: 10,
                min: 0,
                img: new Image()
            },
            can62 : {
                x: note3.can6.width * 0.5,
                wantY: 400,
                y: 400,
                v: 0.6,
                Min: 8600,
                bili: 20,
                min: 400,
                img: new Image()
            },
            can71 :{
                x: note3.can7.width * 0.5 - 900,
                wantY: 0,
                y: 0,
                v: 1.3,
                Min: 9900,
                bili: 10,
                min: 0,
                img: new Image()
            },
            can72 : {
                x: note3.can7.width * 0.5,
                wantY: 300,
                y: 300,
                v: 0.6,
                Min: 9900,
                bili: 20,
                min: 300,
                img: new Image()
            }

        }
    })();
    (function(){
        changeNote3.can11.img.src = "img/note3/box1-1.jpg";
        changeNote3.can12.img.src = "img/note3/box1-2.png";
        changeNote3.can13.img.src = "img/note3/box1-3.png";
        changeNote3.can14.img.src = "img/note3/box1-4.png";
        changeNote3.can2Left.img.src = "img/note3/sm-53.jpg";
        changeNote3.can2Right.img.src = "img/note3/sm-54-1.png";
        changeNote3.can3Top.img.src = "img/note3/box3Top.png";
        changeNote3.can3bottom.img.src = "img/note3/box3Bottom.jpg";
        changeNote3.can4img.img.src = "img/note3/box4.jpg";
        changeNote3.can51.img.src = "img/note3/box5-1.png";
        changeNote3.can52.img.src = "img/note3/box5-2.png";
        changeNote3.can53.img.src = "img/note3/box5-3.png";
        changeNote3.can54.img.src = "img/note3/box5-4.png";
        changeNote3.can55.img.src = "img/note3/box5-5.jpg";
        changeNote3.can61.img.src = "img/note3/box6-1.png";
        changeNote3.can62.img.src = "img/note3/box6-2.jpg";
        changeNote3.can71.img.src = "img/note3/box7-1.png";
        changeNote3.can72.img.src = "img/note3/box7-2.png";
        changeNote3.cnt4.drawImage(changeNote3.can4img.img, changeNote3.can4img.x, changeNote3.can4img.y, 301, 598);

    })();
    setInterval(function () {
/*        test();*/
        if (note3.scrollTop > 1500 && note3.scrollTop < 3500) {
            changeNote3.cnt2.clearRect(0, 0, note3.can2.width, note3.can2.height);
            note3.draw(changeNote3.cnt2, changeNote3.can2Left);
            note3.draw(changeNote3.cnt2, changeNote3.can2Right);
        }
        if (note3.scrollTop > 2800 && note3.scrollTop < 4500) {
            changeNote3.cnt3.clearRect(0, 0, note3.can3.width, note3.can3.height);
            note3.draw(changeNote3.cnt3, changeNote3.can3bottom);
            note3.draw(changeNote3.cnt3, changeNote3.can3Top);
        }
        if (note3.Top[0] == 1) {
            changeNote3.cnt4.clearRect(0, 0, note3.can4.width, note3.can4.height);
            note3.drawBig(changeNote3.cnt4, changeNote3.can4img);
        }
        if (note3.scrollTop > 5220 && note3.scrollTop < 9100) {
            changeNote3.cnt5.clearRect(0, 0, note3.can5.width, note3.can5.height);
            note3.draw(changeNote3.cnt5, changeNote3.can55);
            note3.draw(changeNote3.cnt5, changeNote3.can54);
            note3.draw(changeNote3.cnt5, changeNote3.can53);
            note3.draw(changeNote3.cnt5, changeNote3.can52);
            note3.draw(changeNote3.cnt5, changeNote3.can51);
        }
        if (note3.scrollTop > 8600 && note3.scrollTop < 10000) {
            changeNote3.cnt6.clearRect(0, 0, note3.can6.width, note3.can6.height);
            note3.draw(changeNote3.cnt6, changeNote3.can62);
            note3.draw(changeNote3.cnt6, changeNote3.can61);
        }
        if (note3.scrollTop > 9900 && note3.scrollTop < 11600){
            changeNote3.cnt7.clearRect(0, 0, note3.can7.width, note3.can7.height);
            note3.draw(changeNote3.cnt7, changeNote3.can72);
            note3.draw(changeNote3.cnt7, changeNote3.can71);
        }
    }, 30);
    note3.draw=function (cnt, obj) {
        obj.wantY = (note3.scrollTop - obj.Min) / obj.bili + obj.min;
        if (obj.wantY > obj.y)
            obj.y += obj.v;
        if (obj.wantY < obj.y)
            obj.y -= obj.v;
        cnt.drawImage(obj.img, obj.x, obj.y)
    }
    note3.drawBig=function (cnt, obj) {
        if (obj.y > -400 && obj.width < 320) {
            obj.width += 2;
            obj.height += 4;
            obj.y -= 50;
        }
        else if (obj.width < 905) {
            obj.width += 20;
            obj.height += 40;
            obj.x -= 10;
            obj.y += 1;
        }
        cnt.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    }
    note3.drawBox1=function (cnt, obj) {
        obj.width+=obj.Vw;
        obj.height+=obj.Vh;
        obj.x+=obj.vx;
        obj.y+=obj.vy;
        cnt.drawImage(obj.img, obj.x, obj.y,obj.width,obj.height)
    };
    window.onscroll = function () {
        note3.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (note3.scrollTop > 4800&&note3.scrollTop < 5500) {
            note3.Top[0] = 1;
        }






        /*
        if(scrollTop>1200&&scrollTop<1900){
            Top[1]=1
        }

        if(scrollTop>3400&&scrollTop<3700){
            Top[2]=1
        }
        if(scrollTop>4800&&scrollTop<5100){
            Top[3]=1
        }*/
    };
/*    function test(){
        if(Top[1]==1){
            document.getElementById("box1-content").getElementsByTagName("div")[0].style.margin="40px auto"
            document.getElementById("box1-content").getElementsByTagName("h2")[0].style.marginTop="100px"
            document.getElementById("box1-content").style.opacity="1"
        }
        if(Top[2]==1){
            document.getElementById("box3-content").getElementsByTagName("div")[0].style.margin="40px 0"
            document.getElementById("box3-content").getElementsByTagName("h2")[0].style.marginTop="100px"
            document.getElementById("box3-content").style.opacity="1"
        }
        if(Top[3]==1){
            document.getElementById("box4-content").getElementsByTagName("div")[0].style.margin="40px auto"
            document.getElementById("box4-content").getElementsByTagName("h2")[0].style.marginTop="100px"
            document.getElementById("box4-content").style.opacity="1"
        }
    }*/
}
