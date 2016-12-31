window.onload = function () {
    var s = Snap("#svg");
    //Canvasの大きさを設定
    s.attr({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
    })
    Snap.load("assets/svg/harekaze-logo-anime.svg", function (f) {
        s.append(f);
        //読み込んだsvgのキャンバスの大きさを設定
        //ロゴの場所を設定
        var logoBBox = s.select("g#logo").getBBox();
        var logoScale = 1;//document.body.clientHeight / logoBBox.height * 0.8;
        var logoX = document.body.clientWidth * 0.5 - logoBBox.width * 0.5 / logoScale;
        var logoY = 0;
        s.select("g#logo").attr({
            opacity: 0,
            transform: "matrix(" + logoScale + ",0,0," + logoScale + "," + logoX + "," + logoY + ")" 
        })
        //最初に出てくる円の設定
        var smallCircleBBox = s.select("g#smallCircle").getBBox();
        var smallCircleScale = 1;//document.body.clientHeight / smallCircleBBox.height * 0.8;
        var smallCircleX = document.body.clientWidth * 0.5 - smallCircleBBox.width * 0.75 / smallCircleScale;
        var smallCircleY = 100;
        s.select("g#smallCircle").attr({
            opacity: 1,
            transform: "matrix(" + smallCircleScale + ",0,0," + smallCircleScale + "," + smallCircleX + "," + smallCircleY + ")" 
        })
        //錠前の設定
        var lockLineBBox = s.select("path#lock").getBBox();
        var lockLineScale = 1;//document.body.clientHeight / lockLineBBox.height * 0.8;
        var lockLineX = document.body.clientWidth * 0.5 - lockLineBBox.width * 0.5 / lockLineScale;
        var lockLineY = 200;
        var lockLineLength = s.select("path#lock").getTotalLength() + 100;
        s.select("path#lock").attr({
            opacity: 1,
            "fill-opacity": 0,
            stroke: "#3651a2",
            "stroke-width": "1px",
            "stroke-dasharray": String(lockLineLength) + " " + String(lockLineLength),
            "stroke-dashoffset": lockLineLength,
            transform: "matrix(" + lockLineScale + ",0,0," + lockLineScale + "," + lockLineX + "," + lockLineY + ")" 
        });
        s.select("path#lock").animate({
            "stroke-dashoffset": 0
        },1000);
        //青い鍵の設定
        var blueKey = s.select("g#smallCircle>path#whiteKey").clone();
        var blueKeyBBox = blueKey.getBBox();
        var blueKeyLength = blueKey.getTotalLength() + 100;
        blueKey.attr({
            opacity: 1,
            fill: "#3651a2",
            "fill-opacity": 1,
            stroke: "#ffffff",
            "stroke-width": "1px",
            "stroke-dasharray": String(blueKeyLength) + " " + String(blueKeyLength),
            "stroke-dashoffset": blueKeyLength,
        });
        blueKey.animate({
            "stroke-dashoffset": 0
        },1000, function(){
            s.append(blueKey);
            var blueKeyX = smallCircleX + smallCircleBBox.width * 0.5;
            var blueKeyY = smallCircleY;
            blueKey.attr({
                "stroke-width": "0px",
                transform: "matrix(1,0,0,1," + blueKeyX + "," + blueKeyY + ")" 
            });
            smallCircleBBox = s.select("g#smallCircle").getBBox();
            smallCircleScale = 0.2;//document.body.clientHeight / smallCircleBBox.height * 0.8;
            smallCircleX = document.body.clientWidth * 0.5 - smallCircleBBox.width * 0.5;
            smallCircleY = 0;
            s.select("g#smallCircle").animate({
                opacity: 1,
                transform: "matrix(" + smallCircleScale + ",0,0," + smallCircleScale + "," + smallCircleX + "," + smallCircleY + ")" 
            },1000, function(){
                var blueKeyScale = 0.8;
                var blueKeyX = lockLineX + lockLineBBox.width * 0.5;
                var blueKeyY = lockLineY;
                blueKey.animate({
                    "stroke-width": "0px",
                    transform: "matrix(" + blueKeyScale + ",0,0," + blueKeyScale + "," + blueKeyX + "," + blueKeyY + ")" 
                },1000, function(){
                    s.select("path#lock").animate({
                        opacity: 0
                    },1000);
                    s.select("g#smallCircle").animate({
                        opacity: 0
                    },1000);
                    blueKey.animate({
                        opacity: 0
                    },1000,function(){
                        s.select("g#logo").animate({
                            opacity:1
                        },1000);
                    })
                });
            });
        });
    });
};