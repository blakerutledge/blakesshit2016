//import Pt from "./libs/pt.js";
import verge from "./libs/verge.js";
import Clipboard from "./libs/clipboard.min.js";

var space, form, center, viewPort, bot, lastTime, colorIndex, mouseSpeed, timeout

var pt = document.querySelectorAll("#pt")

lastTime = -5000
colorIndex = 0
mouseSpeed = 4000


class Main {
    constructor(options = {}) {
    
        buildPt()
        window.addEventListener('resize', function(event){
          updatePt()
        });
        window.addEventListener('mousemove', function(event){
          mouseSpeed = getMouseSpeed(event);
          event.stopPropagation();
          clearTimeout(timeout);
          timeout = setTimeout(function(){mouseSpeed = 4000;}, 200);
        });
        window.addEventListener("touchstart", function(event){
          clickAdd(event);
        });
        window.addEventListener("mousedown", function(event){
          clickAdd(event);
        });

        let splashButton = document.querySelectorAll(".home-work-anchor");

        splashButton[0].addEventListener( 'mouseover', function() {
          homeButtonEnter();
        });

        splashButton[0].addEventListener( 'mouseout', function() {
          homeButtonLeave();
        });

        var clipboard = new Clipboard('#footer-email');
        
        clipboard.on('success', function(e) {
            document.querySelector(".copied-alert-triangle").classList.add("copied-alert-showing");
            document.querySelector(".copied-alert").classList.add("copied-alert-showing");
            setTimeout(function(){
                document.querySelector(".copied-alert-triangle").classList.remove("copied-alert-showing");
                document.querySelector(".copied-alert").classList.remove("copied-alert-showing");
            }, 3000);
            
        });

        clipboard.on('error', function(e) {
            document.querySelector(".copied-alert-triangle").classList.add("copied-alert-showing");
            document.querySelector(".copied-alert").classList.add("copied-alert-showing");
            document.querySelector(".copied-alert").innerHTML = "Error copying.";
            setTimeout(function(){
                document.querySelector(".copied-alert-triangle").classList.remove("copied-alert-showing");
                document.querySelector(".copied-alert").classList.remove("copied-alert-showing");
                e.clearSelection();
            }, 3000);
        });



        
  }
}

// Change home screen colors on big button hover
function homeButtonEnter() {
  document.querySelectorAll(".screenLayer")[0].classList.add("screenLayer-reverse");
}

function homeButtonLeave() {
  document.querySelectorAll(".screenLayer")[0].classList.remove("screenLayer-reverse");
}




// A Shape is a kind of Vector
function Shape() {
  Vector.apply( this, arguments ); // call Vector's constructor
  this.age = 0
  this.maxAge = 450
  this.size =  0
  this.color = "#00FFFF";
}
Util.extend( Shape, Vector ); // extends Vector class

// define an animate function so it can be animated when added into Space
Shape.prototype.animate = function(time, fps, context) {
  if (this.age++ > this.maxAge) space.remove(this)

  // draw shapes
  var progress = this.age / this.maxAge
  var opacity = progress > 0.7 ? 1 - ( progress - 0.7 ) / 0.2  : 1
  form.fill( Util.toRGBColor( this.color, true, opacity ) )
  var largerSize = space.size.x > space.size.x ? space.size.x : space.size.y
  this.size = Math.pow( progress, 1/2 ) * largerSize
  form.point( this, this.size, true )

}

var colors = ['#27AAE1', '#F57558', '#00C29E', '#82626D']

function buildPt() {

    //// 1. Define Space and Form
    space = new CanvasSpace("demo", "#cccccc" ).display();
    form = new Form( space );
    form.stroke( false );

    center = space.size.$divide(2)
    mousex = center.x
    mousey = center.y

    //// 2. Create Elements
    bot = {
        animate: function( time, fs, context ) {
          if ( ( time - lastTime ) > mouseSpeed ) {
                var me = new Shape( mousex, mousey )
                me.color = colors[colorIndex]
                space.add( me )
                colorIndex = colorIndex < 3 ? colorIndex+1 : 0;
                lastTime = time
            }      
        }
    }

    

    // 4. Start playing
    space.add(bot);
    space.play();

}

function updatePt() {
    viewPort = {
        x: verge.viewportW(),
        y: verge.viewportH()
    }

    center = space.size.$divide(2)

    mousex = center.x
    mousey = center.y

}

var mrefreshinterval = 500; // update display every 500ms
var lastmousex=-1; 
var lastmousey=-1;
var lastmousetime;
var mousetravel = 0;
var mousex, mousey;

function getMouseSpeed(e) {
    mousex = e.pageX;
    mousey = e.pageY;
    if (lastmousex > -1) {
        mousetravel = Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
    }

    if (mousex===lastmousex && mousey===lastmousey) {
        //didnt move, stop firing more shit
        mouseSpeed = 4000;
        return mouseSpeed;
    }
    else {
        lastmousex = mousex;
        lastmousey = mousey;

        mousetravel = mousetravel>100 ? 100 : mousetravel*5
        mousetravel = ( 100 - mousetravel ) / 100

        mouseSpeed = mousetravel*4000
        mouseSpeed = mouseSpeed<50 ? 50 : mouseSpeed
    
        return mouseSpeed;
    }
}

function clickAdd(e) {
    mousex = (e.touches!=undefined) ? e.touches[0].pageX : e.pageX;
    mousey = (e.touches!=undefined) ? e.touches[0].pageY : e.pageY;

    var me = new Shape( mousex, mousey )
    me.color = colors[colorIndex]
    space.add( me )
    colorIndex = colorIndex < 3 ? colorIndex+1 : 0;

}

document.addEventListener('DOMContentLoaded', event => new Main)
