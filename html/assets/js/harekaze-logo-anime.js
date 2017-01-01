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
        var logoOrigin0BBox = logo.getBBox();
        var logodx = -logoOrigin0BBox.x;
        var logody = -logoOrigin0BBox.y;
        logo.attr({
            transform: "translate(" + logodx + " " + logody + ")"
        });
        var logoOrigin1BBox = logo.getBBox();
        var logoScale;
        if (document.body.clientHeight < document.body.clientWidth) {
            logoScale = document.body.clientHeight / logoOrigin1BBox.height;
        }
        else {
            logoScale = document.body.clientWidth / logoOrigin1BBox.width;
        }
        logo.attr({
            opacity: 0,
            transform: "scale(" + logoScale + ")" 
        });
        var logoBBox = logo.getBBox();
        logodx = logoOrigin1BBox.x - logoBBox.x + document.body.clientWidth * 0.5 - logoBBox.width * 0.5;
        logody = logoOrigin1BBox.y - logoBBox.y + document.body.clientHeight * 0.5 - logoBBox.height * 0.5;
        logo.attr({
            transform: "translate(" + logodx + " " + logody + ") " + "scale(" + logoScale + ")"
        });
        //錠前の設定
        var lockLine = s.select("g#logo>path#lock").clone();
        var lockLineOrigin0BBox = lockLine.getBBox();
        var lockLinedx = -lockLineOrigin0BBox.x;
        var lockLinedy = -lockLineOrigin0BBox.y;
        lockLine.attr({
            transform: "translate(" + lockLinedx + " " + lockLinedy + ")"
        });
        var lockLineOrigin1BBox = lockLine.getBBox();
        var lockLineScale = logoScale;
        lockLine.attr({
            transform: "scale(" + lockLineScale + ")" 
        });
        var lockLineBBox = lockLine.getBBox();
        lockLinedx = lockLineOrigin1BBox.x - lockLineBBox.x + document.body.clientWidth * 0.5 - lockLineBBox.width * 0.5;
        lockLinedy = lockLineOrigin1BBox.y - lockLineBBox.y + document.body.clientHeight * 0.5 - lockLineBBox.height * 0.5;
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
        var sightingCircleOrigin0BBox = sightingCircle.getBBox();
        var sightingCircledx = -sightingCircleOrigin0BBox.x;
        var sightingCircledy = -sightingCircleOrigin0BBox.y;
        sightingCircle.attr({
            transform: "translate(" + sightingCircledx + " " + sightingCircledy + ")"
        });
        var sightingCircleOrigin1BBox = sightingCircle.getBBox();
        var sightingCircleScale;
        if (document.body.clientHeight < document.body.clientWidth) {
            sightingCircleScale = document.body.clientHeight / sightingCircleOrigin1BBox.height;
        }
        else {
            sightingCircleScale = document.body.clientWidth / sightingCircleOrigin1BBox.width;
        }
        sightingCircle.attr({
            transform: "scale(" + sightingCircleScale + ")" 
        });
        var sightingCircleBBox = sightingCircle.getBBox();
        sightingCircledx = sightingCircleOrigin1BBox.x - sightingCircleBBox.x + document.body.clientWidth * 0.5 - sightingCircleBBox.width * 0.75;
        sightingCircledy = sightingCircleOrigin1BBox.y - sightingCircleBBox.y + document.body.clientHeight * 0.5 - sightingCircleBBox.height * 0.5;
        sightingCircle.attr({
            opacity: 1,
            "stroke-width": "0px",
            transform: "translate(" + sightingCircledx + " " + sightingCircledy + ") " + "scale(" + sightingCircleScale + ")"
        });
        //照準の設定
        var sighting = s.select("g#logo>g#sighting").clone();
        var sightingOrigin0BBox = sighting.getBBox();
        var sightingdx = -sightingOrigin0BBox.x;
        var sightingdy = -sightingOrigin0BBox.y;
        sighting.attr({
            transform: "translate(" + sightingdx + " " + sightingdy + ")"
        });
        var sightingOrigin1BBox = sighting.getBBox();
        var sightingScale = sightingCircleScale;
        sighting.attr({
            transform: "scale(" + sightingScale + ")" 
        });
        var sightingBBox = sighting.getBBox();
        sightingdx = sightingCircledx;
        sightingdy = sightingCircledy;
        sighting.attr({
            opacity: 1,
            "stroke-width": "0px",
            transform: "translate(" + sightingdx + " " + sightingdy + ") " + "scale(" + sightingScale + ")"
        });
        //白い鍵の設定
        var whiteKey = s.select("g#logo>path#key").clone();
        var whiteKeyOrigin0BBox = whiteKey.getBBox();
        var whiteKeydx = -whiteKeyOrigin0BBox.x;
        var whiteKeydy = -whiteKeyOrigin0BBox.y;
        whiteKey.attr({
            transform: "translate(" + whiteKeydx + " " + whiteKeydy + ")"
        });
        var whiteKeyOrigin1BBox = whiteKey.getBBox();
        var whiteKeyScale = sightingScale;
        whiteKey.attr({
            transform: "scale(" + whiteKeyScale + ")" 
        });
        var whiteKeyBBox = whiteKey.getBBox();
        whiteKeydx = sightingdx;
        whiteKeydy = sightingdy;
        whiteKey.attr({
            opacity: 0,
            "stroke-width": "0px",
            transform: "translate(" + whiteKeydx + " " + whiteKeydy + ") " + "scale(" + whiteKeyScale + ")"
        });
        
        //青い鍵の設定
        var blueKey = s.select("g#logo>path#key").clone();
        var blueKeyOrigin0BBox = blueKey.getBBox();
        var blueKeydx = -blueKeyOrigin0BBox.x;
        var blueKeydy = -blueKeyOrigin0BBox.y;
        blueKey.attr({
            transform: "translate(" + blueKeydx + " " + blueKeydy + ")"
        });
        var blueKeyOrigin1BBox = blueKey.getBBox();
        var blueKeyScale = sightingScale ;
        blueKey.attr({
            transform: "scale(" + blueKeyScale + ")" 
        });
        var blueKeyBBox = blueKey.getBBox();
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
        blueKey.animate({
            "stroke-dashoffset": 0
        },2500,function() {
            //照準の外側の円の設定
            var tempSightingCircle = sightingCircle.clone();
            tempSightingCircle.attr({
                opacity: 0,
                transform: "scale(1)"
            })
            var tempSightingCircleOrigin0BBox = tempSightingCircle.getBBox();
            var tempSightingCircledx = -tempSightingCircleOrigin0BBox.x;
            var tempSightingCircledy = -tempSightingCircleOrigin0BBox.y;
            tempSightingCircle.attr({
                transform: "translate(" + tempSightingCircledx + " " + tempSightingCircledy + ")"
            });
            var tempSightingCircleOrigin1BBox = tempSightingCircle.getBBox();
            var tempSightingCircleScale = logoScale;
            tempSightingCircle.attr({
                transform: "scale(" + tempSightingCircleScale + ")" 
            });
            var tempSightingCircleBBox = tempSightingCircle.getBBox();
            tempSightingCircledx = tempSightingCircleOrigin1BBox.x - tempSightingCircleBBox.x + document.body.clientWidth * 0.5 - tempSightingCircleBBox.width * 0.5;
            tempSightingCircledy = tempSightingCircleOrigin1BBox.y;
            
            //照準の設定
            var tempSighting = sighting.clone();
            tempSighting.attr({
                opacity: 0,
                transform: "scale(1)"
            })
            var tempSightingOrigin0BBox = tempSighting.getBBox();
            var tempSightingdx = -tempSightingOrigin0BBox.x;
            var tempSightingdy = -tempSightingOrigin0BBox.y;
            tempSighting.attr({
                transform: "translate(" + tempSightingdx + " " + tempSightingdy + ")"
            });
            var tempSightingOrigin1BBox = tempSighting.getBBox();
            var tempSightingScale = tempSightingCircleScale;
            tempSighting.attr({
                transform: "scale(" + tempSightingScale + ")" 
            });
            var tempSightingBBox = tempSighting.getBBox();
            tempSightingdx = tempSightingCircledx;
            tempSightingdy = tempSightingCircledy;
            
            //白い鍵の設定
            whiteKey.attr({
                opacity: 1
            });
            var tempWhiteKey = whiteKey.clone();
            tempWhiteKey.attr({
                opacity:0,
                transform: "scale(1)"
            })
            var tempWhiteKeyOrigin0BBox = tempWhiteKey.getBBox();
            var tempWhiteKeydx = -tempWhiteKeyOrigin0BBox.x;
            var tempWhiteKeydy = -tempWhiteKeyOrigin0BBox.y;
            tempWhiteKey.attr({
                transform: "translate(" + tempWhiteKeydx + " " + tempWhiteKeydy + ")"
            });
            var tempWhiteKeyOrigin1BBox = tempWhiteKey.getBBox();
            var tempWhiteKeyScale = tempSightingScale;
            tempWhiteKey.attr({
                transform: "scale(" + tempWhiteKeyScale + ")" 
            });
            var tempWhiteKeyBBox = tempWhiteKey.getBBox();
            tempWhiteKeydx = tempSightingdx;
            tempWhiteKeydy = tempSightingdy;
            //青い鍵の設定
            var tempBlueKey = blueKey.clone();
            tempBlueKey.attr({
                opacity: 0,
                transform: "scale(1)"
            })
            var tempBlueKeyOrigin0BBox = tempBlueKey.getBBox();
            var tempBlueKeydx = -tempBlueKeyOrigin0BBox.x;
            var tempBlueKeydy = -tempBlueKeyOrigin0BBox.y;
            tempBlueKey.attr({
                transform: "translate(" + tempBlueKeydx + " " + tempBlueKeydy + ")"
            });
            var tempBlueKeyOrigin1BBox = tempBlueKey.getBBox();
            var tempBlueKeyScale = logoScale * 3 ;
            tempBlueKey.attr({
                transform: "scale(" + tempBlueKeyScale + ")" 
            });
            var tempBlueKeyOrigin2BBox = tempBlueKey.getBBox();
            var tempBlueKeyRotation = -20;
            tempBlueKey.attr({
                transform: "rotate(" + tempBlueKeyRotation + ")"
            })
            var tempBlueKeyBBox = tempBlueKey.getBBox();
            tempBlueKeydx = tempSightingdx;
            tempBlueKeydy = tempSightingdy;
            blueKey.animate({
                "stroke-width": 0,
                transform: "translate(" + tempBlueKeydx + " " + tempBlueKeydy + ") " + "scale(" + tempBlueKeyScale + ") " + "rotate(" + tempBlueKeyRotation + ")"
            },1000);
            sightingCircle.animate({
                transform: "translate(" + tempSightingCircledx + " " + tempSightingCircledy + ") " + "scale(" + tempSightingCircleScale + ")"
            },1000);
            sighting.animate({
                transform: "translate(" + tempSightingdx + " " + tempSightingdy + ") " + "scale(" + tempSightingScale + ")"
            },1000);
            whiteKey.animate({
                transform: "translate(" + tempWhiteKeydx + " " + tempWhiteKeydy + ") " + "scale(" + tempWhiteKeyScale + ")"
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
};
