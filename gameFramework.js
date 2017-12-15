gf = {};

/**
 * Animation Object.
 **/
gf.animation = function(options) {
    var defaultValues = {
        url : false,
        width : 64,
        numberOfFrames : 1,
        currentFrame : 0,
        rate : 30
    }
    $.extend(this, defaultValues, options);

    if (!!this.speed) {
        this.xpos = 64;
        this.ypos = 0;
        this.wandered = 0;
        this.waittime = 0;
        this.walktime = Math.floor(Math.random()*16 + 4);
        this.stepsleft = this.walktime;
        this.flag = 0;
    }

    // Add
    if(this.url){
        gf.addImage(this.url);
    }
}

/**
 * This function sets the current frame.
 **/
gf.setFrame = function(divId, animation) {
    $("#" + divId).css("bakgroundPosition", "" + animation.currentFrame * animation.width + "px 0px");
}

gf.animationHandles = {};

/**
 * Sets the animation for the given sprite.
 **/
gf.setAnimation = function(divId, animation, loop){

    // If div has an animation already, then stop it.
    if(gf.animationHandles[divId]){
        clearInterval(gf.animationHandles[divId]);
    }

    //
    if(animation.url){
        $("#"+divId).css("backgroundImage","url('"+animation.url+"')");
    }

    if(animation.numberOfFrame > 1){
        gf.animationHandles[divId] = setInterval(function(){
            animation.currentFrame++;
            if(!loop && currentFrame > animation.numberOfFrame){
                clearInterval(gf.animationHandles[divId]);
                gf.animationHandles[divId] = false;
            } else {
                animation.currentFrame %= animation.numberOfFrame;
                gf.setFrame(divId, animation);
            }
        }, animation.rate);
    }
}

/**
 * This function adds a sprite to the div defined by the first argument
 **/
gf.addSprite = function(parentId, divId, options){
    var options = $.extend({
        x: 0,
        y: 0,
        width: 64,
        height: 64
    }, options);

    $("#"+parentId).append("<div id='"+divId+"' style='position: absolute; left:"+options.x+"px; top: "+options.y+"px; width: "+options.width+"px ;height: "+options.height+"px'></div>");
    if (!!options.innerHTML)
        $("#"+divId).html(options.innerHTML);
}


/**
 * This function sets or returns the position along the x-axis.
 **/
gf.x = function(divId,position) {
    if(position) {
        $("#"+divId).css("left", position);
    } else {
        return parseInt($("#"+divId).css("left"));
    }
}
/**
 * This function sets or returns the position along the y-axis.
 **/
gf.y = function(divId,position) {
    if(position) {
        $("#"+divId).css("top", position);
    } else {
        return parseInt($("#"+divId).css("top"));
    }
}

gf.imagesToPreload = [];

/**
 * Add an image to the list of image to preload
 **/
gf.addImage = function(url) {
    if ($.inArray(url, gf.imagesToPreload) < 0) {
        gf.imagesToPreload.push();
    }
    gf.imagesToPreload.push(url);
};


/**
 * Start the preloading of the images.
 **/
gf.startPreloading = function(endCallback, progressCallback) {
    var images = [];
    var total = gf.imagesToPreload.length;

    for (var i = 0; i < total; i++) {
        var image = new Image();
        images.push(image);
        image.src = gf.imagesToPreload[i];
    }
    var preloadingPoller = setInterval(function() {
        var counter = 0;
        var total = gf.imagesToPreload.length;
        for (var i = 0; i < total; i++) {
            if (images[i].complete) {
                counter++;
            }
        }
        if (counter == total) {
            //we are done!
            clearInterval(preloadingPoller);
            endCallback();
        } else {
            if (progressCallback) {
                count++;
                progressCallback((count / total) * 100);
            }
        }
    }, 100);
};

gf.movement = function(divId, animation) {
	if (animation.stepsleft != 0 && !animation.wandered) {
            gf.wander(divId, animation);
            if (animation.walktime%4 == 0 && gf.y(divId) != animation.ybound+64)
                gf.y(divId, gf.y(divId) + animation.speed);
            else if (animation.walktime%4 == 1 && gf.x(divId) != animation.xbound)
                gf.x(divId, gf.x(divId) - animation.speed);
            else if (animation.walktime%4 == 2 && gf.y(divId) != animation.ybound)
                gf.y(divId, gf.y(divId) - animation.speed);
            else if (animation.walktime%4 == 3 && gf.x(divId) != animation.xbound+208)
                gf.x(divId, gf.x(divId) + animation.speed);
    }
    else {
        if (animation.wandered == 0) {
            animation.xpos = 64;
            animation.waittime = Math.floor(Math.random()*8 + 4);
        }
        animation.wandered++;
        if (animation.wandered > animation.walktime*animation.waittime) {
            animation.walktime = Math.floor(Math.random()*16 + 4);
            animation.stepsleft = animation.walktime;
            animation.wandered = 0;
        }
    }
    $("#" + divId).css("background-position",""+ animation.xpos +"px "+ animation.ypos +"px");
};


gf.walkDown = function(divId, animation) {
    animation.ypos = 0;
    if (gf.y(divId) != animation.ybound+64)
        gf.walk(divId, animation);
    else
        animation.xpos = 64;
}
gf.walkLeft = function(divId, animation) {
    animation.ypos = 96;
    if (gf.x(divId) != animation.xbound)
        gf.walk(divId, animation);
    else
        animation.xpos = 64;
}
gf.walkUp = function(divId, animation) {
    animation.ypos = 32;
    if (gf.y(divId) != animation.ybound)
        gf.walk(divId, animation);
    else
        animation.xpos = 64;
}
gf.walkRight = function(divId, animation) {
    animation.ypos = 64;
    if (gf.x(divId) != animation.xbound+208)
        gf.walk(divId, animation);
    else
        animation.xpos = 64;
}

gf.walk = function(divId, animation) {
    if (animation.xpos == 0) {
        animation.xpos = 64;
        animation.flag = 0;
    }
    else if (animation.xpos == 32) {
        animation.xpos = 64;
        animation.flag = 1;
    }
    else if (animation.flag == 1) {
        animation.xpos = 0;
    }
    else {
        animation.xpos = 32;
    }
}

 gf.wander = function(divId, animation) {
    if (animation.walktime%4 == 0)
        gf.walkDown(divId, animation);
    else if (animation.walktime%4 == 1)
        gf.walkLeft(divId, animation);
    else if (animation.walktime%4 == 2)
        gf.walkUp(divId, animation);
    else {
        gf.walkRight(divId, animation); }
    animation.stepsleft--;
}
