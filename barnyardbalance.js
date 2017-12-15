$(function() {

    /************************/
    /*  Base game objects   */
    /************************/
    var backgroundAnim = new gf.animation({
        url : "sprites/farm.png"
    });
    var backAnim = new gf.animation({
        url : "sprites/backbutton.png"
    });
    var statsAnim = new gf.animation({
        url : "sprites/statsbutton.png"
    });
    var upgradeAnim = new gf.animation({
        url : "sprites/upgradebutton.png"
    });
    var valueAnim = new gf.animation();

    /************************/
    /*  Initial DB objects  */
    /************************/
    var plot = new Array(90);
    for (i=0; i<90; i++)
      plot[i] = new gf.animation({url : "sprites/emptyplot.png"});

    /************************/
    /* Upgrade menu objects */
    /************************/

    var upgradeBase = new gf.animation({
        url : "sprites/upgrade_base.png"
    });
    var upgradeCoin1 = new gf.animation({
        url : "sprites/upgrade_coin.png"
    });
    var upgradeCoin2 = new gf.animation({
        url : "sprites/upgrade_coin.png"
    });
    var upgradeCoin3 = new gf.animation({
        url : "sprites/upgrade_coin.png"
    });
    var upgradeCoin4 = new gf.animation({
        url : "sprites/upgrade_coin.png"
    });
    var upgradeCoin5 = new gf.animation({
        url : "sprites/upgrade_coin.png"
    });
    var upgradeCoin6 = new gf.animation({
        url : "sprites/upgrade_coin.png"
    });
    var upgradeCoin7 = new gf.animation({
        url : "sprites/upgrade_coin.png"
    });
    var upgradeCoin8 = new gf.animation({
        url : "sprites/upgrade_coin.png"
    });
    var upgradeBuy1 = new gf.animation({
        url : "sprites/upgrade_buy.png"
    });
    var upgradeBuy2 = new gf.animation({
        url : "sprites/upgrade_buy.png"
    });
    var upgradeBuy3 = new gf.animation({
        url : "sprites/upgrade_buy.png"
    });
    var upgradeBuy4 = new gf.animation({
        url : "sprites/upgrade_buy.png"
    });
    var upgradeBuy5 = new gf.animation({
        url : "sprites/upgrade_buy.png"
    });
    var upgradeBuy6 = new gf.animation({
        url : "sprites/upgrade_buy.png"
    });
    var upgradeBuy7 = new gf.animation({
        url : "sprites/upgrade_buy.png"
    });
    var upgradeBuy8 = new gf.animation({
        url : "sprites/upgrade_buy.png"
    });
    var upgradeSell1 = new gf.animation({
        url : "sprites/upgrade_sell.png"
    });
    var upgradeSell2 = new gf.animation({
        url : "sprites/upgrade_sell.png"
    });
    var upgradeSell3 = new gf.animation({
        url : "sprites/upgrade_sell.png"
    });
    var upgradeSell4 = new gf.animation({
        url : "sprites/upgrade_sell.png"
    });
    var upgradeSell5 = new gf.animation({
        url : "sprites/upgrade_sell.png"
    });
    var upgradeSell6 = new gf.animation({
        url : "sprites/upgrade_sell.png"
    });
    var upgradeSell7 = new gf.animation({
        url : "sprites/upgrade_sell.png"
    });
    var upgradeSell8 = new gf.animation({
        url : "sprites/upgrade_sell.png"
    });
    var upgradeClose = new gf.animation({
        url : "sprites/upgrade_close.png"
    });
    var upgradeChicken = new gf.animation({
        url : "sprites/upgrade_chicken.png"
    });
    var upgradePig = new gf.animation({
        url : "sprites/upgrade_pig.png"
    });
    var upgradeCow = new gf.animation({
        url : "sprites/upgrade_cow.png"
    });
    var upgradeFlower = new gf.animation({
        url : "sprites/upgrade_flower.png"
    });
    var upgradeCorn = new gf.animation({
        url : "sprites/upgrade_corn.png"
    });

    var price1 = new gf.animation();
    var price2 = new gf.animation();
    var price3 = new gf.animation();
    var price4 = new gf.animation();
    var price5 = new gf.animation();
    var price6 = new gf.animation();
    var price7 = new gf.animation();
    var price8 = new gf.animation();

    /************************/
    /*  Stat menu objects   */
    /************************/

    var statBase = new gf.animation({
        url : "sprites/upgrade_base.png"
    });
    var statClose = new gf.animation({
        url : "sprites/upgrade_close.png"
    });
    var statChicken = new gf.animation({
        url : "sprites/upgrade_chicken.png"
    });
    var statPig = new gf.animation({
        url : "sprites/upgrade_pig.png"
    });
    var statCow = new gf.animation({
        url : "sprites/upgrade_cow.png"
    });
    var statFlower = new gf.animation({
        url : "sprites/upgrade_flower.png"
    });
    var statCorn = new gf.animation({
        url : "sprites/upgrade_corn.png"
    });

    var stat1 = new gf.animation();
    var stat2 = new gf.animation();
    var stat3 = new gf.animation();
    var stat5 = new gf.animation();
    var stat6 = new gf.animation();

    /************************/
    /* Select plot object   */
    /************************/

    var selectAnim = new gf.animation({
        url: "sprites/selectframe.png"
    });




    var initialize = function() {
        init_load_from_db();
        init_farm_base();
        init_farm_plots();
        init_farm_animals();
        $("#container").css("display", "block");
        setInterval(gameLoop, 125);
    }

    var selected = false;
    var selectedIndex = -1;
    var shopFlag = 0, statFlag = 0;
    var valueNum;
    var chickenNum, pigNum, cowNum;
    var flowerNum = 0, cornNum = 0;
    var chickens = new Array(10);
    var pigs = new Array(10);
    var cows = new Array(10);
    var flowers = new Array(90);
    var corns = new Array(90);

    for (i=0; i<10; i++)
        chickens[i] = new gf.animation({url : "sprites/chicken.png", speed: 2, x: 192+i*40-Math.floor(i/5)*160, y:96+Math.floor(i/5)*48, xbound: 192, ybound: 96})
    for (i=0; i<10; i++)
        pigs[i] = new gf.animation({url : "sprites/pig.png", speed: 2, x: 464+i*40-Math.floor(i/5)*160, y:96+Math.floor(i/5)*48, xbound: 464, ybound: 96})
    for (i=0; i<10; i++)
        cows[i] = new gf.animation({url : "sprites/cow.png", speed: 2, x: 736+i*40-Math.floor(i/5)*160, y:96+Math.floor(i/5)*48, xbound: 736, ybound: 96})
    var init_load_from_db = function() {
        valueNum = 500;
        chickenNum = 2;
        pigNum = 1;
        cowNum = 2;
    }
    var init_farm_base = function() {
        $("#game").append("<div id='container' style='display: none; width: 1280px; height: 720px;'>");
        gf.addSprite("container","background",{width: 1280, height: 720});
	    gf.addSprite("container","back",{width: 96, height: 32, x: 16, y: 656});
	    gf.addSprite("container","stats",{width: 96, height: 32, x: 1168, y: 576});
      	gf.addSprite("container","upgrade",{width: 96, height: 32, x: 1168, y: 624});
        gf.addSprite("container","value",{width: 256, height: 32, x: 1168, y: 688, innerHTML: valueNum.toString()});

        gf.setAnimation("background", backgroundAnim);
	    gf.setAnimation("back", backAnim);
      	gf.setAnimation("stats", statsAnim);
	    gf.setAnimation("upgrade", upgradeAnim);
	    $("#upgrade").on("click", makeshop);
      $("#stats").on("click", makestats);
      $("#back").on("click", function() {
          window.location = "index.php";
      });

    }
    var init_farm_plots = function() {
        var user_id = Math.floor(Math.random()*2+1);
        for (i=0; i<90; i++) {
            if (user_id==1) {
                if (i==0 || i==1 || i==2 || i==6 || i==8 || i==10 || i==12 || i==13 || i==14)
                    pick = 1;
                else if (i==3 || i==4 || i==5 || i==7 || i==9 || i==11 || i==15 || i==16 || i==17)
                    pick = 2;
                else
                    pick = 0;
            }
            else if (user_id==2) {
                if (i==0 || i==6 || i==12 || i==18  )
                    pick = 1;
                else if (i==1 || i==7 || i==13 || i==19 )
                    pick = 2;
                else
                    pick = 0;
            }
            else
                pick = 0;

            switch (pick) {
                case 0:
                    gf.addSprite("container","plot"+i,{width: 32, height: 32, x:Math.floor(i/18)*64+Math.floor(i/6)*48+160, y:Math.floor(i/3)*64+i*48-Math.floor(i/6)*416+320});
                    gf.setAnimation("plot" + i, plot[i]);
                    break;
                case 1:
                    flowers[flowerNum] = i;
                    flowerNum++;
                    plot[i].url = "sprites/flower.png"
                    gf.addSprite("container","plot"+i,{width: 32, height: 32, x:Math.floor(i/18)*64+Math.floor(i/6)*48+160, y:Math.floor(i/3)*64+i*48-Math.floor(i/6)*416+320});
                    gf.setAnimation("plot" + i, plot[i]);
                    break;
                case 2:
                    corns[cornNum] = i;
                    cornNum++;
                    plot[i].url = "sprites/corn.png"
                    gf.addSprite("container","plot"+i,{width: 32, height: 32, x:Math.floor(i/18)*64+Math.floor(i/6)*48+160, y:Math.floor(i/3)*64+i*48-Math.floor(i/6)*416+320});
                    gf.setAnimation("plot" + i, plot[i]);
                    break;
            }
            $('#plot' + i).on('click', function() {selectPlot(this.id);});
        }
    }
    var init_farm_animals = function() {
        for (i=0; i<chickenNum; i++) {
            gf.addSprite("container","chicken"+(i+1),{width: 32, height: 32, x: 192+i*40-Math.floor(i/5)*160, y: 96+Math.floor(i/5)*48, xbound: 192, ybound: 96});
            gf.setAnimation("chicken"+(i+1), chickens[i]);
        }
        for (i=0; i<pigNum; i++) {
            gf.addSprite("container","pig"+(i+1),{width: 32, height: 32, x: 464+i*40-Math.floor(i/5)*160, y: 96+Math.floor(i/5)*48, xbound: 464, ybound: 96});
            gf.setAnimation("pig"+(i+1), pigs[i]);
        }
        for (i=0; i<cowNum; i++) {
            gf.addSprite("container","cow"+(i+1),{width: 32, height: 32, x: 736+i*40-Math.floor(i/5)*160, y: 96+Math.floor(i/5)*48, xbound: 736, ybound: 96});
            gf.setAnimation("cow"+(i+1), cows[i]);
        }

    }

    var makeshop = function() {
      if (!shopFlag) {
        shopFlag = 1;
        if (selected) {
            selected = false;
            selectedIndex = -1;
            $("#select").remove();
        }
        gf.addSprite("container","upgradebase",{width: 464, height: 496, x:400, y:96});
        gf.addSprite("container","coin1",{width: 32, height: 32, x:592, y:128});
        gf.addSprite("container","coin2",{width: 32, height: 32, x:592, y:240});
        gf.addSprite("container","coin3",{width: 32, height: 32, x:592, y:352});
        gf.addSprite("container","coin4",{width: 32, height: 32, x:592, y:464});
        gf.addSprite("container","coin5",{width: 32, height: 32, x:800, y:128});
        gf.addSprite("container","coin6",{width: 32, height: 32, x:800, y:240});
        gf.addSprite("container","coin7",{width: 32, height: 32, x:800, y:352});
        gf.addSprite("container","coin8",{width: 32, height: 32, x:800, y:464});
        gf.addSprite("container","sell1",{width: 64, height: 32, x:544, y:192});
        gf.addSprite("container","sell2",{width: 64, height: 32, x:544, y:304});
        gf.addSprite("container","sell3",{width: 64, height: 32, x:544, y:416});
        gf.addSprite("container","sell4",{width: 64, height: 32, x:544, y:528});
        gf.addSprite("container","sell5",{width: 64, height: 32, x:752, y:192});
        gf.addSprite("container","sell6",{width: 64, height: 32, x:752, y:304});
        gf.addSprite("container","sell7",{width: 64, height: 32, x:752, y:416});
        gf.addSprite("container","sell8",{width: 64, height: 32, x:752, y:528});
        gf.addSprite("container","buy1",{width: 64, height: 32, x:544, y:160});
        gf.addSprite("container","buy2",{width: 64, height: 32, x:544, y:272});
        gf.addSprite("container","buy3",{width: 64, height: 32, x:544, y:384});
        gf.addSprite("container","buy4",{width: 64, height: 32, x:544, y:496});
        gf.addSprite("container","buy5",{width: 64, height: 32, x:752, y:160});
        gf.addSprite("container","buy6",{width: 64, height: 32, x:752, y:272});
        gf.addSprite("container","buy7",{width: 64, height: 32, x:752, y:384});
        gf.addSprite("container","buy8",{width: 64, height: 32, x:752, y:496});
        gf.addSprite("container","price1",{width: 48, height: 32, x:544, y:128, innerHTML:"40"});
        gf.addSprite("container","price2",{width: 48, height: 32, x:544, y:240, innerHTML:"50"});
        gf.addSprite("container","price3",{width: 48, height: 32, x:544, y:352, innerHTML:"60"});
        gf.addSprite("container","price4",{width: 48, height: 32, x:544, y:464, innerHTML:"0"});
        gf.addSprite("container","price5",{width: 48, height: 32, x:752, y:128, innerHTML:"5"});
        gf.addSprite("container","price6",{width: 48, height: 32, x:752, y:240, innerHTML:"10"});
        gf.addSprite("container","price7",{width: 48, height: 32, x:752, y:352, innerHTML:"0"});
        gf.addSprite("container","price8",{width: 48, height: 32, x:752, y:464, innerHTML:"0"});
        gf.addSprite("container","upgradeclose",{width: 32, height: 32, x:848, y:80});
        gf.addSprite("container","upgradeChicken",{width: 64, height: 64, x:448, y:144});
        gf.addSprite("container","upgradePig",{width: 64, height: 64, x:448, y:256});
        gf.addSprite("container","upgradeCow",{width: 64, height: 64, x:448, y:368});
        gf.addSprite("container","upgradeFlower",{width: 64, height: 64, x:656, y:144});
        gf.addSprite("container","upgradeCorn",{width: 64, height: 64, x:656, y:256});

        gf.setAnimation("upgradebase", upgradeBase);
        gf.setAnimation("coin1", upgradeCoin1);
        gf.setAnimation("coin2", upgradeCoin2);
        gf.setAnimation("coin3", upgradeCoin3);
        gf.setAnimation("coin4", upgradeCoin4);
        gf.setAnimation("coin5", upgradeCoin5);
        gf.setAnimation("coin6", upgradeCoin6);
        gf.setAnimation("coin7", upgradeCoin7);
        gf.setAnimation("coin8", upgradeCoin8);
        gf.setAnimation("sell1", upgradeSell1);
        gf.setAnimation("sell2", upgradeSell2);
        gf.setAnimation("sell3", upgradeSell3);
        gf.setAnimation("sell4", upgradeSell4);
        gf.setAnimation("sell5", upgradeSell5);
        gf.setAnimation("sell6", upgradeSell6);
        gf.setAnimation("sell7", upgradeSell7);
        gf.setAnimation("sell8", upgradeSell8);
        gf.setAnimation("buy1", upgradeBuy1);
        gf.setAnimation("buy2", upgradeBuy2);
        gf.setAnimation("buy3", upgradeBuy3);
        gf.setAnimation("buy4", upgradeBuy4);
        gf.setAnimation("buy5", upgradeBuy5);
        gf.setAnimation("buy6", upgradeBuy6);
        gf.setAnimation("buy7", upgradeBuy7);
        gf.setAnimation("buy8", upgradeBuy8);
        gf.setAnimation("upgradeChicken", upgradeChicken);
        gf.setAnimation("upgradePig", upgradePig);
        gf.setAnimation("upgradeCow", upgradeCow);
        gf.setAnimation("upgradeFlower", upgradeFlower);
        gf.setAnimation("upgradeCorn", upgradeCorn);
        gf.setAnimation("upgradeclose", upgradeClose);
        $("#upgradeclose").on("click", closeShop);
        $("#buy1").on("click", function() {buyitem(1);});
        $("#buy2").on("click", function() {buyitem(2);});
        $("#buy3").on("click", function() {buyitem(3);});
        $("#buy4").on("click", function() {buyitem(4);});
        $("#buy5").on("click", function() {buyitem(5);});
        $("#buy6").on("click", function() {buyitem(6);});
        $("#buy7").on("click", function() {buyitem(7);});
        $("#buy8").on("click", function() {buyitem(8);});
        $("#sell1").on("click", function() {sellitem(1);});
        $("#sell2").on("click", function() {sellitem(2);});
        $("#sell3").on("click", function() {sellitem(3);});
        $("#sell4").on("click", function() {sellitem(4);});
        $("#sell5").on("click", function() {sellitem(5);});
        $("#sell6").on("click", function() {sellitem(6);});
        $("#sell7").on("click", function() {sellitem(7);});
        $("#sell8").on("click", function() {sellitem(8);});
      }
    }

    var makestats = function(){
      if (!statFlag) {
        statFlag = 1;
        if (selected) {
            selected = false;
            selectedIndex = -1;
            $("#select").remove();
        }
        gf.addSprite("container","statBase",{width: 464, height: 496, x:400, y:96});
        gf.addSprite("container","stat1",{width: 64, height: 64, x:544, y:128+48, innerHTML: chickenNum.toString()});
        gf.addSprite("container","stat2",{width: 48, height: 32, x:544, y:240+48, innerHTML: pigNum.toString()});
        gf.addSprite("container","stat3",{width: 48, height: 32, x:544, y:352+48, innerHTML: cowNum.toString()});
        gf.addSprite("container","stat5",{width: 48, height: 32, x:752, y:128+48, innerHTML: flowerNum.toString()});
        gf.addSprite("container","stat6",{width: 48, height: 32, x:752, y:240+48, innerHTML: cornNum.toString()});
        gf.addSprite("container","statclose",{width: 32, height: 32, x:848, y:80});
        gf.addSprite("container","statChicken",{width: 64, height: 64, x:448, y:144});
        gf.addSprite("container","statPig",{width: 64, height: 64, x:448, y:256});
        gf.addSprite("container","statCow",{width: 64, height: 64, x:448, y:368});
        gf.addSprite("container","statFlower",{width: 64, height: 64, x:656, y:144});
        gf.addSprite("container","statCorn",{width: 64, height: 64, x:656, y:256});
        gf.addSprite("container","statClose",{width: 32, height: 32, x:848, y:80});

        gf.setAnimation("statBase", statBase);
        gf.setAnimation("stat1", stat1);
        gf.setAnimation("stat2", stat2);
        gf.setAnimation("stat3", stat3);
        gf.setAnimation("stat5", stat5);
        gf.setAnimation("stat6", stat6);
        gf.setAnimation("statChicken", statChicken);
        gf.setAnimation("statPig", statPig);
        gf.setAnimation("statCow", statCow);
        gf.setAnimation("statFlower", statFlower);
        gf.setAnimation("statCorn", statCorn);
        gf.setAnimation("statClose", statClose);
        $("#statClose").on("click", closeStat);
      }
    }

    var closeShop = function() {
        shopFlag = 0;
        $("#upgradebase").remove();
        $("#coin1").remove();
        $("#coin2").remove();
        $("#coin3").remove();
        $("#coin4").remove();
        $("#coin5").remove();
        $("#coin6").remove();
        $("#coin7").remove();
        $("#coin8").remove();
        $("#sell1").remove();
        $("#sell2").remove();
        $("#sell3").remove();
        $("#sell4").remove();
        $("#sell5").remove();
        $("#sell6").remove();
        $("#sell7").remove();
        $("#sell8").remove();
        $("#buy1").remove();
        $("#buy2").remove();
        $("#buy3").remove();
        $("#buy4").remove();
        $("#buy5").remove();
        $("#buy6").remove();
        $("#buy7").remove();
        $("#buy8").remove();
        $("#price1").remove();
        $("#price2").remove();
        $("#price3").remove();
        $("#price4").remove();
        $("#price5").remove();
        $("#price6").remove();
        $("#price7").remove();
        $("#price8").remove();
        $("#upgradeChicken").remove();
        $("#upgradePig").remove();
        $("#upgradeCow").remove();
        $("#upgradeFlower").remove();
        $("#upgradeCorn").remove();
        $("#upgradeclose").remove();
    }

    var closeStat = function() {
        statFlag = 0;
        $("#statBase").remove();
        $("#stat1").remove();
        $("#stat2").remove();
        $("#stat3").remove();
        $("#stat5").remove();
        $("#stat6").remove();
        $("#statChicken").remove();
        $("#statPig").remove();
        $("#statCow").remove();
        $("#statFlower").remove();
        $("#statCorn").remove();
        $("#statClose").remove();
    }


    var buyitem = function(item) {
        switch(item) {
            case 1:
                if (valueNum >= 40 && chickenNum < 10) {
                    valueNum -= 40;
                    $("value").remove();
                    chickenNum++;
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    gf.addSprite("container","chicken"+chickenNum,{width: 32, height: 32, x: 192+(chickenNum-1)*32-Math.floor((chickenNum-1)/5)*160, y: 96+Math.floor((chickenNum-1)/5)*48, xbound: 192, ybound: 96});
                    gf.setAnimation("chicken"+chickenNum, chickens[chickenNum-1]);
                }
                break;
            case 2:
                if (valueNum >= 50 && pigNum < 10) {
                    valueNum -= 50;
                    $("value").remove();
                    pigNum++;
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    gf.addSprite("container","pig"+pigNum,{width: 32, height: 32, x: 464+(pigNum-1)*32-Math.floor((pigNum-1)/5)*160, y: 96+Math.floor((pigNum-1)/5)*48, xbound: 464, ybound: 96});
                    gf.setAnimation("pig"+pigNum, pigs[pigNum-1]);
                }
                break;
            case 3:
                if (valueNum >= 60 && cowNum < 10) {
                    valueNum -= 60;
                    $("value").remove();
                    cowNum++;
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    gf.addSprite("container","cow"+cowNum,{width: 32, height: 32, x: 736+(cowNum-1)*32-Math.floor((cowNum-1)/5)*160, y: 96+Math.floor((cowNum-1)/5)*48, xbound: 736, ybound: 96});
                    gf.setAnimation("cow"+cowNum, cows[cowNum-1]);
                }
                break;
            case 5:
                if (valueNum >= 5 && flowerNum+cornNum < 90) {
                    valueNum -= 5;
                    $("value").remove();
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    for (i=0; plot[i].url != "sprites/emptyplot.png"; i++)
                        ;
                    flowers[flowerNum] = i;
                    flowerNum++;
                    plot[i].url = "sprites/flower.png";
                    $("#plot" + i).remove();
                    gf.addSprite("container","plot"+i,{width: 32, height: 32, x:Math.floor(i/18)*64+Math.floor(i/6)*48+160, y:Math.floor(i/3)*64+i*48-Math.floor(i/6)*416+320});
                    gf.setAnimation("plot" + i, plot[i]);
                    $('#plot' + i).on('click', function() {selectPlot(this.id);});
                }
                break;
            case 6:
                if (valueNum >= 10 && flowerNum+cornNum < 90) {
                    valueNum -= 10;
                    $("value").remove();
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    for (i=0; plot[i].url != "sprites/emptyplot.png"; i++)
                        ;
                    corns[cornNum] = i;
                    cornNum++;
                    plot[i].url = "sprites/corn.png";
                    $("#plot" + i).remove();
                    gf.addSprite("container","plot"+i,{width: 32, height: 32, x:Math.floor(i/18)*64+Math.floor(i/6)*48+160, y:Math.floor(i/3)*64+i*48-Math.floor(i/6)*416+320});
                    gf.setAnimation("plot" + i, plot[i]);
                    $('#plot' + i).on('click', function() {selectPlot(this.id);});
                }
                break;
        }
    }

    var sellitem = function(item) {
        switch(item) {
            case 1:
                if (chickenNum > 0) {
                    valueNum += 40;
                    $("value").remove();
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    $("#chicken"+chickenNum).remove();
                    chickenNum--;
                }
                break;
            case 2:
                if (pigNum > 0) {
                    valueNum += 50;
                    $("value").remove();
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    $("#pig"+pigNum).remove();
                    pigNum--;
                }
                break;
            case 3:
                if (cowNum > 0) {
                    valueNum += 60;
                    $("value").remove();
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    $("#cow"+cowNum).remove();
                    cowNum--;
                }
                break;
            case 5:
                if (flowerNum > 0) {
                    valueNum += 5;
                    $("value").remove();
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    plot[flowers[flowerNum-1]].url = "sprites/emptyplot.png";
                    $("#plot" + flowers[flowerNum-1]).remove();
                    gf.addSprite("container","plot"+flowers[flowerNum-1],{width: 32, height: 32, x:Math.floor(flowers[flowerNum-1]/18)*64+Math.floor(flowers[flowerNum-1]/6)*48+160, y:Math.floor(flowers[flowerNum-1]/3)*64+flowers[flowerNum-1]*48-Math.floor(flowers[flowerNum-1]/6)*416+320});
                    gf.setAnimation("plot" + flowers[flowerNum-1], plot[flowers[flowerNum-1]]);
                    $('#plot' + flowers[flowerNum-1]).on('click', function() {selectPlot(this.id);});
                    flowerNum--;
                }
                break;
            case 6:
                if (cornNum > 0) {
                    valueNum += 10;
                    $("value").remove();
                    gf.addSprite("container","value",{width: 256, height: 32, x: 512, y: 16, innerHTML: valueNum.toString()});
                    plot[corns[cornNum-1]].url = "sprites/emptyplot.png";
                    $("#plot" + corns[cornNum-1]).remove();
                    gf.addSprite("container","plot"+corns[cornNum-1],{width: 32, height: 32, x:Math.floor(corns[cornNum-1]/18)*64+Math.floor(corns[cornNum-1]/6)*48+160, y:Math.floor(corns[cornNum-1]/3)*64+corns[cornNum-1]*48-Math.floor(corns[cornNum-1]/6)*416+320});
                    gf.setAnimation("plot" + corns[cornNum-1], plot[corns[cornNum-1]]);
                    $('#plot' + corns[cornNum-1]).on('click', function() {selectPlot(this.id);});
                    cornNum--;
                }
                break;
        }
    }

    var selectPlot = function(divId) {
        if (!statFlag && !shopFlag) {
            if (!selected) {
                selected = true;
                selectedIndex = parseInt(divId.substr(4));
                gf.addSprite("container","select",{width: 40, height: 40, x:Math.floor(selectedIndex/18)*64+Math.floor(selectedIndex/6)*48+156, y:Math.floor(selectedIndex/3)*64+selectedIndex*48-Math.floor(selectedIndex/6)*416+316});
                gf.setAnimation("select", selectAnim);
            }
            else {
                $("#select").remove();
                selected = false;
                var plotIndex = parseInt(divId.substr(4));
                if (plot[plotIndex].url === plot[selectedIndex].url)
                    return;
                if (plot[selectedIndex].url === "sprites/corn.png")
                    for (i=0; i<cornNum; i++)
                        if (corns[i] == selectedIndex)
                            corns[i] = plotIndex;
                if (plot[selectedIndex].url === "sprites/flower.png")
                    for (i=0; i<flowerNum; i++)
                        if (flowers[i] == selectedIndex)
                            flowers[i] = plotIndex;
                if (plot[plotIndex].url === "sprites/corn.png")
                    for (i=0; i<cornNum; i++)
                        if (corns[i] == plotIndex)
                            corns[i] = selectedIndex;
                if (plot[plotIndex].url === "sprites/flower.png")
                    for (i=0; i<flowerNum; i++)
                        if (flowers[i] == plotIndex)
                            flowers[i] = selectedIndex;
                var temp = plot[selectedIndex].url;
                plot[selectedIndex].url = plot[plotIndex].url;
                plot[plotIndex].url = temp;
                $("#plot"+plotIndex).remove();
                $("#plot"+selectedIndex).remove();
                gf.addSprite("container","plot"+selectedIndex,{width: 32, height: 32, x:Math.floor(selectedIndex/18)*64+Math.floor(selectedIndex/6)*48+160, y:Math.floor(selectedIndex/3)*64+selectedIndex*48-Math.floor(selectedIndex/6)*416+320});
                gf.setAnimation("plot"+selectedIndex, plot[selectedIndex]);
                $('#plot' + selectedIndex).on('click', function() {selectPlot(this.id);});
                gf.addSprite("container","plot"+plotIndex,{width: 32, height: 32, x:Math.floor(plotIndex/18)*64+Math.floor(plotIndex/6)*48+160, y:Math.floor(plotIndex/3)*64+plotIndex*48-Math.floor(plotIndex/6)*416+320});
                gf.setAnimation("plot"+plotIndex, plot[plotIndex]);
                $('#plot' + plotIndex).on('click', function() {selectPlot(this.id);});
                selectedIndex = -1;
            }
        }
    }

    var gameLoop = function() {
      for (i=0; chickens[i] != null; i++)
          gf.movement("chicken"+(i+1), chickens[i]);
      for (i=0; pigs[i] != null; i++)
          gf.movement("pig"+(i+1), pigs[i]);
      for (i=0; cows[i] != null; i++)
          gf.movement("cow"+(i+1), cows[i]);
    }


    gf.startPreloading(initialize);
    $("#back").on("click", function(){alert("Clicked")});
});
