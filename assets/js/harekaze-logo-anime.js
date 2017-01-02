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
        var logo = s.select("g#logo");
        var logoBBox = logo.getBBox();
        var logoScale;
        if (document.body.clientHeight < document.body.clientWidth) {
            logoScale = document.body.clientHeight / logoBBox.height;
        }
        else {
            logoScale = document.body.clientWidth / logoBBox.width;
        }
        logo.attr({
            opacity: 0,
            transform: "scale(" + logoScale + ")" 
        });
        var logoBBox = logo.getBBox();
        logodx = -logoBBox.x + document.body.clientWidth * 0.5 - logoBBox.width * 0.5;
        logody = -logoBBox.y + document.body.clientHeight * 0.5 - logoBBox.height * 0.5;
        logo.attr({
            transform: "translate(" + logodx + " " + logody + ") " + "scale(" + logoScale + ")"
        });
        //錠前の設定
        var lockLine = s.select("g#logo>path#lock").clone();
        var lockLineScale = logoScale;
        lockLine.attr({
            transform: "scale(" + lockLineScale + ")" 
        });
        var lockLineBBox = lockLine.getBBox();
        lockLinedx = -lockLineBBox.x + document.body.clientWidth * 0.5 - lockLineBBox.width * 0.5;
        lockLinedy = -lockLineBBox.y + document.body.clientHeight * 0.5 - lockLineBBox.height * 0.5;
        var lockLineLength = lockLine.getTotalLength() + 100;
        var lockLineStrokeThick = 1;
        lockLine.attr({
            opacity: 1,
            stroke: "#3651a2",
            "fill-opacity": 0,
            "stroke-width": (1.0 / lockLineScale) * lockLineStrokeThick + "px",
            "stroke-dasharray": String(lockLineLength) + " " + String(lockLineLength),
            "stroke-dashoffset": lockLineLength,
            transform: "translate(" + lockLinedx + " " + lockLinedy + ") " + "scale(" + lockLineScale + ")"
        });
        //照準の外側の円の設定
        var sightingCircle = s.select("g#logo>g#sightingCircle").clone();
        var sightingCircleBBox = sightingCircle.getBBox();
        var sightingCircleScale;
        if (document.body.clientHeight < document.body.clientWidth) {
            sightingCircleScale = document.body.clientHeight / sightingCircleBBox.height;
        }
        else {
            sightingCircleScale = document.body.clientWidth / sightingCircleBBox.width;
        }
        sightingCircle.attr({
            transform: "scale(" + sightingCircleScale + ")" 
        });
        sightingCircleBBox = sightingCircle.getBBox();
        sightingCircledx = -sightingCircleBBox.x + document.body.clientWidth * 0.5 - sightingCircleBBox.width * 0.75;
        sightingCircledy = -sightingCircleBBox.y + document.body.clientHeight * 0.5 - sightingCircleBBox.height * 0.5;
        sightingCircle.attr({
            opacity: 1,
            "stroke-width": "0px",
            transform: "translate(" + sightingCircledx + " " + sightingCircledy + ") " + "scale(" + sightingCircleScale + ")"
        });
        //照準の設定
        var sighting = s.select("g#logo>g#sighting").clone();
        var sightingScale = sightingCircleScale;
        sightingdx = sightingCircledx;
        sightingdy = sightingCircledy;
        sighting.attr({
            opacity: 1,
            "stroke-width": "0px",
            transform: "translate(" + sightingdx + " " + sightingdy + ") " + "scale(" + sightingScale + ")"
        });
        //白い鍵の設定
        var whiteKey = s.select("g#logo>path#key").clone();
        var whiteKeyScale = sightingScale;
        whiteKeydx = sightingdx;
        whiteKeydy = sightingdy;
        whiteKey.attr({
            opacity: 0,
            "stroke-width": "0px",
            transform: "translate(" + whiteKeydx + " " + whiteKeydy + ") " + "scale(" + whiteKeyScale + ")"
        });
        
        //青い鍵の設定
        var blueKey = s.select("g#logo>path#key").clone();
        var blueKeyScale = sightingScale ;
        blueKeydx = sightingdx;
        blueKeydy = sightingdy;
        var blueKeyLength = blueKey.getTotalLength() + 100;
        var blueKeyStrokeThick = 1;
        blueKey.attr({
            opacity: 1,
            fill: "#3651a2",
            "fill-opacity": 1,
            stroke: "#ffffff",
            "stroke-width": (1.0 / blueKeyScale) * blueKeyStrokeThick + "px",
            "stroke-dasharray": String(blueKeyLength) + " " + String(blueKeyLength),
            "stroke-dashoffset": blueKeyLength,
            transform: "translate(" + blueKeydx + " " + blueKeydy + ") " + "scale(" + blueKeyScale + ")"
        });
        
        s.append(logo);
        s.append(lockLine);
        s.append(sightingCircle);
        s.append(whiteKey);
        s.append(blueKey);
        s.append(sighting);
        var tempSightingCircle = sightingCircle.clone();
        blueKey.animate({
            "stroke-dashoffset": 0
        },2500,function() {
            //照準の外側の円の設定
            tempSightingCircle.attr({
                opacity: 0,
                transform: "scale(1)"
            })
            var tempSightingCircleScale = logoScale;
            tempSightingCircle.attr({
                transform: "scale(" + tempSightingCircleScale + ")" 
            });
            var logoBBox = logo.getBBox();
            var tempSightingCircleBBox = tempSightingCircle.getBBox();
            console.log(tempSightingCircleBBox);
            tempSightingCircledx = -tempSightingCircleBBox.x + document.body.clientWidth * 0.5 - tempSightingCircleBBox.width * 0.5;
            tempSightingCircledy = -tempSightingCircleBBox.y + document.body.clientHeight * 0.5 - logoBBox.height * 0.5;
            
            //照準の設定
            var tempSightingScale = tempSightingCircleScale;
            tempSightingdx = tempSightingCircledx;
            tempSightingdy = tempSightingCircledy;
            
            //白い鍵の設定
            whiteKey.attr({
                opacity: 1
            });
            var tempWhiteKeyScale = tempSightingScale;
            tempWhiteKeydx = tempSightingdx;
            tempWhiteKeydy = tempSightingdy;
            blueKey.attr({
                "stroke-width": "0px"
            });
            s.append(blueKey);
            sightingCircle.animate({
                transform: "translate(" + tempSightingCircledx + " " + tempSightingCircledy + ") " + "scale(" + tempSightingCircleScale + ")"
            },1000);
            sighting.animate({
                transform: "translate(" + tempSightingdx + " " + tempSightingdy + ") " + "scale(" + tempSightingScale + ")"
            },1000);
            whiteKey.animate({
                transform: "translate(" + tempWhiteKeydx + " " + tempWhiteKeydy + ") " + "scale(" + tempWhiteKeyScale + ")"
            },1000,function(){
                //青い鍵の設定
                var tempBlueKey = blueKey.clone();
                tempBlueKey.attr({
                    opacity: 0,
                    transform: "scale(1)"
                })
                var tempBlueKeyScale = logoScale * 3 ;
                var tempBlueKeyRotation = -20;
                tempBlueKey.attr({
                    transform: "scale(" + tempBlueKeyScale + ") "  + "rotate(" + tempBlueKeyRotation + ")"
                })
                var lockLineBBox = lockLine.getBBox();
                var tempBlueKeyBBox = tempBlueKey.getBBox();
                tempBlueKeydx = -tempBlueKeyBBox.x + lockLineBBox.x + lockLineBBox.width * 0.5 - tempBlueKeyBBox.width * 0.6;
                tempBlueKeydy = -tempBlueKeyBBox.y + lockLineBBox.y + lockLineBBox.height * 0.5 - tempBlueKeyBBox.height * 0.8;
                blueKey.animate({
                    "stroke-width": 0,
                    transform: "translate(" + tempBlueKeydx + " " + tempBlueKeydy + ") " + "scale(" + tempBlueKeyScale + ") " + "rotate(" + tempBlueKeyRotation + ")"
                },1000);
                lockLine.animate({
                    "stroke-dashoffset": 0
                },1000, function() {
                    blueKey.animate({
                        opacity:0
                    },1000);
                    sightingCircle.animate({
                        opacity:0    
                    },1000);
                    sighting.animate({
                        opacity:0    
                    },1000);
                    whiteKey.animate({
                        opacity: 0
                    },1000);
                    lockLine.animate({
                        opacity: 0
                    },1000, function(){
                        logo.animate({
                            opacity:0
                        },1000, function() {
                            logo.animate({
                                opacity:1
                            },1000)
                        });
                    });
                });
            });
        });
    });
}