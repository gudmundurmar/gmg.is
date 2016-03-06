// Watchmen Smiley, with gradient and blood, and scale and rotation
// ...and keyboard-handling to move it around

"use strict";
/* jshint browser: true, devel: true, globalstrict: true */

/*
Stay within this 72 character margin, to keep your code easily readable
         1         2         3         4         5         6         7
123456789012345678901234567890123456789012345678901234567890123456789012
*/

// ======================
// IMPORTANT INSTRUCTIONS
// ======================
//
// * As ever, Fork Off this Fiddle BEFORE making any changes.
//
// * Submit your URL with an explicit numerical version suffix
//   (e.g. "jsfiddle.net/qWeRtY/0" denoting version 0)
//   NB: If you do not provide a suffix, the marker is allowed
//   to assume anything. In particular, they may assume 0.
//
// * Don't modify this framework except where instructed.
//   It is here to help you (and to help us when marking!)
//
// * DON'T CHEAT!


// ==========
// OBJECTIVES
// ==========
//
// * Draw a "midground" smiley at coords x=350, y=50 with radius=50
// * WASD keys should move it up/left/down/right by 10 pixels-per-event
// * OP keys should divide/multiply its radius by a factor of 1.1
// * QE keys should reduce/increase its orientation by 1/37th of a
//      revolution.
// * T should toggle a "trail" behind the moveable one.
//   HINT: Doing this is actually easier than NOT doing it!
//
// * B should toggle a background of 2 other smileys
// * F should toggle a foreground of 2 other smileys
// * One of the foreground smileys should rotate in the opposite
//   direction to the player-moveable one.
//
// * M should toggle support for moving the smiley via the mouse
//
// * The background should be on by default
// * The foreground should be on by default
// * The trail should be off by default
// * The mouse-control should be off by default
//
// NB: The trail *doesn't* have to be preserved across F and B toggles
//     Typically, either of these toggles will have the side-effect of
//     erasing the current trail.
//
//     The drawBackground and drawForeground functions have been
//     provided for you, but you'll have to modify the foreground one
//     to implement the counter-rotation feature.


// ============
// UGLY GLOBALS
// ============
//
// Regrettable, but they just make things easier.
//
var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");


// ================
// HELPER FUNCTIONS
// ================

function clear() {
    g_ctx.clearRect(0, 0, g_canvas.width, g_canvas.height);
}

function drawBackground() {
    drawDefaultSmiley(g_ctx);
    drawSmileyAt(g_ctx,  25, 375,  25, -Math.PI/8);
}

function drawForeground() {
    drawSmileyAt(g_ctx,  25, 375,  25, Math.PI/8);
    
    // TODO: Make this one rotate in the opposite direction
    //       to your player-controllable one.
    drawSmileyAt(g_ctx, 300, 300, 100, Math.PI/8-g_smiley.angle);
}

function fillEllipse(ctx, cx, cy, halfWidth, halfHeight, angle) {
    ctx.save(); // save the current ctx state, to restore later
    ctx.beginPath();
    
    // These "matrix ops" are applied in last-to-first order
    // ..which can seem a bit weird, but actually makes sense
    //
    // After modifying the ctx state like this, it's important
    // to restore it
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.scale(halfWidth, halfHeight);
    
    // Just draw a unit circle, and let the matrices do the rest!
    ctx.arc(0, 0, 1, 0, Math.PI*2);
    ctx.fill();
    
    ctx.restore();
}


// =================
// MATRIX CLEVERNESS
// =================

function drawSmileyAt(ctx, cx, cy, radius, angle) {
    // This matrix trickery lets me take a "default smiley",
    // and transform it so I can draw it anyway, at any size,
    // and at any angle.
    //
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    var scale = radius / g_defaultSmileyRadius;
    ctx.scale(scale, scale);
    ctx.translate(-g_defaultSmileyX, -g_defaultSmileyY);
    drawDefaultSmiley(ctx);
    ctx.restore();
}


// =================
// OUR SMILEY OBJECT
// =================

// Let's make the user-controllable smiley into a simple
// little javascript object. (Global for "convenience").
//
var g_smiley = {
    x : 350,
    y :  50,
    
    radius : 50,
    angle  : 0
};

// Let's add a draw method...
//
// (We could have done that above, but I find that it's sometimes
// cleaner to add the functions separately, to reduce indentation.)
//
g_smiley.draw = function() {
    drawSmileyAt(g_ctx, 
                 this.x, this.y, 
                 this.radius, this.angle);
};

// You *might* want to add other methods here, as part of your
// implementation.. or you could just manipulate the object
// state directly from inside other (non-member) functions.
//
// On a small project like this, direct manipulation is fine,
// and might be simpler. On a larger project, you would be
// more likely to do everything via "methods" i.e. functions

g_smiley.moveright = function() {
    if(this.x<400) {
        this.x = this.x+10;
    }
};

g_smiley.moveleft = function() {
    if(this.x > 0) {
        this.x = this.x-10;
    }
};

g_smiley.moveup = function() {
    if(this.y > 0) {
        this.y = this.y-10;
    }
};

g_smiley.movedown = function() {
    if(this.y < 400) {
        this.y = this.y+10;
    }
};
g_smiley.movemouse = function(x,y) {
        this.y = g_mouseY;
        this.x = g_mouseX;
};
g_smiley.expand = function() {
    this.radius = this.radius*1.1;
    
};
g_smiley.condense = function() {
    this.radius = this.radius/1.1;
};
g_smiley.reduce = function() {
    this.angle = this.angle-1/37;
    /*Just to keep the angle from reducing infinitely*/
    if(this.angle < 0) {
        this.angle = this.angle + 2*Math.PI;
    }
}
g_smiley.increase = function() {
    this.angle = this.angle+1/37;
    /*Just to keep the angle from increasing infinitely*/
    if(this.angle > 2*Math.PI) {
        this.angle = this.angle - 2*Math.PI;
    }
}

// which belong to the object itself.


// ======================
// DEFAULT SMILEY DRAWING
// ======================

var g_defaultSmileyX = 200,
    g_defaultSmileyY = 200,
    g_defaultSmileyRadius = 150;


// =====================================================
// YOUR VERSION OF drawDefaultSmiley(ctx) SHOULD GO HERE
// =====================================================
//
// Your version will replace my placeholder implementation.
//
var base = 200,
    defaultSmileyRadius = 150;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function drawDefaultSmiley(ctx) {
    if(innerperson) {
        drawBrain(ctx);
    } else {
        drawHead(ctx);
        drawMouth(ctx);
    }
    drawEyes(ctx);
    drawCheeks(ctx);
    drawBlood(ctx);
}

function drawHead(ctx) {
    // Drawing the main head
    var gradient = ctx.createRadialGradient(-0.5, 0.3, 0.0, -0.05, 0.01, 1.1);
    gradient.addColorStop(0,"#ffc900");
    gradient.addColorStop(0.5, "#ffc401");
    gradient.addColorStop(0.93, "#ffb301");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;
    fillEllipse(ctx, base, base, defaultSmileyRadius, defaultSmileyRadius, Math.PI / 2);
    
    //draw small black border around smiley
    drawArc(ctx, base, base, defaultSmileyRadius, defaultSmileyRadius, 1, 0, 2*Math.PI, 0.01);
}

function drawBrain(ctx) {
    // Drawing the main head
    var gradient = ctx.createRadialGradient(-0.5, 0.3, 0.0, -0.05, 0.01, 1.1);
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;
    fillEllipse(ctx, base, base, defaultSmileyRadius/2, defaultSmileyRadius/2, Math.PI / 2);
}

function drawEyes(ctx) {
    var width = 9.75,
        height = 37.5,
        betweeneyes = 49.5;
    
    ctx.fillStyle = "black";    
    //left eye
    fillEllipse(ctx, base-betweeneyes, base-height, width, height, 0);
    //right eye
    fillEllipse(ctx, base+betweeneyes, base-height, width, height, 0);
}

function drawMouth(ctx) {
    var position = 43.5,
        width = 100.5,
        height = 60;
    
    ctx.fillStyle = "black";

    var radius = 0.85,
        startangle = 0,
        endangle = Math.PI,
        lineWidth = 0.067;  
    //draw smile
    drawArc(ctx, base, base+position, width, height, radius, startangle, endangle, lineWidth);
    //thicken smile
    drawArc(ctx, base, base+position+4.5, width-2.7, height+1, radius-0.02, startangle+0.45, endangle/1.17, lineWidth+0.013);
}

function drawCheeks(ctx) {
    var width = 85.5;
    var height = 42;
    var widthrad = 4.5;
    var heightrad = 15;
    var angle = Math.PI/3;
    
    //left cheek
    fillEllipse(ctx, base-width, base+height, widthrad, heightrad, angle);
    //right cheek
    fillEllipse(ctx, base+width, base+height, widthrad, heightrad, -angle);    
}

function drawBlood(ctx) {
    var baseheight = 8.5,
        basewidth = 32,
        angle = 2.4;
    
    //color for blooddrops
    var gradient = ctx.createRadialGradient(-0.5, 0.3, 0.0, -0.05, 0.01, 1.1);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(0.3, "#A00000");
    gradient.addColorStop(1,"#7D2703");
    ctx.fillStyle = gradient;
    
    
    var bloodcolor;
    x = 90;
    y = 110;
    var xend = 200,
        yend = 240,
        width = 6;
    
    //blood line that goes through eye
    bloodcolor = gradientBloodLines(ctx, x, y, xend, yend);
    drawLine(ctx, x, y, xend, yend, width, bloodcolor);
    fillEllipse(ctx, xend, yend, baseheight-3, basewidth-10.5, angle);
    
    //blood line #2
    bloodcolor = gradientBloodLines(ctx, x, y, xend-97.5, yend-45);
    drawLine(ctx, x, y, xend-82.5, yend-78, width, bloodcolor);
    fillEllipse(ctx, xend-82.5, yend-78, baseheight-4, basewidth-17, angle+0.3);
    
    //blood line #3
    bloodcolor = gradientBloodLines(ctx, x, y, xend-112.5, yend-60);
    drawLine(ctx, x, y, xend-100, yend-93, width-1.7, bloodcolor);
    fillEllipse(ctx, xend-100, yend-93, baseheight-5, basewidth-20, angle+0.4);
    
    //blood line #4
    bloodcolor = gradientBloodLines(ctx, x, y, xend-75, yend-75);
    drawLine(ctx, x, y, xend-70, yend-105, width-1.7, bloodcolor);
    fillEllipse(ctx, xend-70, yend-105, baseheight-5, basewidth-20, angle-0.3);
    
    var x = 109,
        y = 132;
        
    //main blood drop left of eye
    fillEllipse(ctx, x, y, baseheight, basewidth, angle);
}

function gradientBloodLines(ctx, sx, sy, ex,ey){
    var color = ctx.createLinearGradient(sx, sy, ex, ey);
    color.addColorStop(0,"#7D2703");
    color.addColorStop(0.9, "#af040f");
    color.addColorStop(1,"#9F1703");
    return color;
}

function drawArc(ctx, bx, by, wx, wy, radius, sa, ea, lineWidth){
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.translate(bx,by);
    ctx.scale(wx, wy);
    ctx.arc(0, 0, radius, sa, ea);
    
    ctx.stroke();
    ctx.restore();
}

function drawLine(ctx, sx, sy, ex, ey, width, color){
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    ctx.restore();
}

function fillEllipse(ctx, cx, cy, halfWidth, halfHeight, angle) {
    ctx.save(); // save the current ctx state, to restore later
    ctx.beginPath();

    // These "matrix ops" are applied in last-to-first order
    // ..which can seem a bit weird, but actually makes sense
    //
    // After modifying the ctx state like this, it's important
    // to restore it
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.scale(halfWidth, halfHeight);

    // Just draw a unit circle, and let the matrices do the rest!
    ctx.arc(0, 0, 1, 0, Math.PI * 2);
    
    ctx.fill();
    ctx.restore();
}


// ======
// REDRAW
// ======
//
// Your code should call this when needed, to update the
// screen. You'll have to edit this routine to make it do
// everything that is required (e.g. background, foreground,
// dealing with the "trail" etc).
//
function redraw() {
    
    
    // Simple version: just draw the initial "midground" smiley
    // NB: This doesn't handle background/foreground yet.
    /*Toggle background*/
    //checks whether background needs to be checked because of toggle
    //or if the trail is off then everything is drawn again
    if(!trail) {
        clear();
        if(background) {
            drawBackground();
        }
    }

    if (mousecontrol) {
        g_smiley.movemouse();
    }

    g_smiley.draw();

    if(foreground) {
        drawForeground();
    }
}



// ========================================
// YOUR EVENT-HANDLING STUFF SHOULD GO HERE
// ========================================

var g_keys = [],
    KEY_W = 'W'.charCodeAt(0),
    KEY_A = 'A'.charCodeAt(0),
    KEY_S = 'S'.charCodeAt(0),
    KEY_D = 'D'.charCodeAt(0),
    KEY_O = 'O'.charCodeAt(0),
    KEY_P = 'P'.charCodeAt(0),
    KEY_Q = 'Q'.charCodeAt(0),
    KEY_E = 'E'.charCodeAt(0),
    KEY_T = 'T'.charCodeAt(0),
    KEY_B = 'B'.charCodeAt(0),
    KEY_F = 'F'.charCodeAt(0),
    KEY_M = 'M'.charCodeAt(0),
    KEY_I = 'I'.charCodeAt(0);

g_keys.push(KEY_W);
g_keys.push(KEY_A);
g_keys.push(KEY_S);
g_keys.push(KEY_D);
g_keys.push(KEY_O);
g_keys.push(KEY_P);
g_keys.push(KEY_Q);
g_keys.push(KEY_E);
g_keys.push(KEY_T);
g_keys.push(KEY_B);
g_keys.push(KEY_F);
g_keys.push(KEY_M);
g_keys.push(KEY_I);

// Toggled values
var trail = false,
    background = false,
    foreground = false,
    innerperson = true,
    mousecontrol = false;

//values so won't be toggled often per press
var trailpressed = false,
    backgroundpressed= false,
    foregroundpressed = false,
    innerpersonpressed = false,
    mousecontrolpressed = false;

function handleKeydown(evt) {
    //the toogle handling of buttons is different
    g_keys[evt.keyCode] = true;
    
    // toggle button handling
    if(g_keys[KEY_T] === true) {
        if(trailpressed  === false)  {
            trailpressed = true;
            trail = !trail;
        }
    }
    if(g_keys[KEY_F] === true) {
        if(foregroundpressed  === false)  {
            foregroundpressed = true;
            foreground = !foreground;
            clear();
            if(background) {
                drawBackground();
            }
        }
    }
    if(g_keys[KEY_B] === true) {
        if(backgroundpressed  === false)  {
            backgroundpressed = true;
            clear();
            background = !background;
            if(background) {
                drawBackground();
            }
        }
    }
    if(g_keys[KEY_M] === true) {
        if(mousecontrolpressed  === false)  {
            mousecontrolpressed = true;
            mousecontrol = !mousecontrol;
        }
    }
    if(g_keys[KEY_I] === true) {
        if(innerpersonpressed  === false)  {
            innerpersonpressed = true;
            innerperson = !innerperson;
        }
    }
}

function handleKeyup(evt) {
    g_keys[evt.keyCode] = false;
    if(evt.keyCode === KEY_T) {
        trailpressed = false;
    }
    if(evt.keyCode === KEY_B) {
        backgroundpressed = false;
    }
    if(evt.keyCode === KEY_F) {
        foregroundpressed = false;
    }
    if(evt.keyCode === KEY_M) {
        mousecontrolpressed = false;
    }
    if(evt.keyCode === KEY_I) {
        innerpersonpressed = false;
    }


}

function initKeyboardHandlers() {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
}

var g_mouseX = 0, g_mouseY = 0;

function handleMouseMove(evt) {
    g_mouseX = evt.clientX - g_canvas.offsetLeft;
    g_mouseY = evt.clientY - g_canvas.offsetTop;
}

function initMouseHandlers() {
    window.addEventListener("mousemove", handleMouseMove);
}
// For now, I'm just going to do this, to kick things off...
initMouseHandlers();
initKeyboardHandlers();
drawBackground();

function gameloop() {

    if (g_keys[KEY_W] === true) {
        g_smiley.moveup();
    }
    if (g_keys[KEY_A] === true) {
        g_smiley.moveleft();
    }
    if (g_keys[KEY_S] === true) {
        g_smiley.movedown();
    }
    if (g_keys[KEY_D] === true) {
        g_smiley.moveright();
    }
    if (g_keys[KEY_O] === true) {
        g_smiley.expand();
    }
    if (g_keys[KEY_P] === true) {
        g_smiley.condense();
    }
    if (g_keys[KEY_Q] === true) {
        g_smiley.reduce();
    }
    if (g_keys[KEY_E] === true) {
        g_smiley.increase();
    }


    
    redraw();

    setTimeout(gameloop, 10);
}

gameloop();

