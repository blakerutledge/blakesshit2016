//import Pt from "./libs/pt.js"
import verge from "./libs/verge.js"
import Clipboard from "./libs/clipboard.min.js"

var space, form, center, viewPort, bot, lastTime, colorIndex, mouseSpeed, timeout, colors, pt, projectCanvas

pt = document.querySelectorAll("#pt")
projectCanvas = document.querySelectorAll(".projects-teaser-container")

lastTime = -5000
colorIndex = 0
mouseSpeed = 4000

class Main {
  constructor(options = {}) {
  
    if ( pt.length !== 0 ) {
      console.log("Landing page")
      colors = ['#27AAE1', '#F57558', '#00C29E', '#82626D']
      buildPt()
      window.addEventListener('resize', function(event){
        updatePt()
      })
      window.addEventListener('mousemove', function(event){
        mouseSpeed = getMouseSpeed(event)
        event.stopPropagation()
        clearTimeout(timeout)
        timeout = setTimeout(function(){mouseSpeed = 4000;}, 200)
      })
      window.addEventListener("touchstart", function(event){
        clickAdd(event)
      })
      window.addEventListener("mousedown", function(event){
        clickAdd(event)
      })
    }

    if ( projectCanvas.length !== 0 ) {
      console.log("Projects page")

      // - - - Get all of the vimeo streaming urls - - - //
      var canvasWrap = document.querySelector('.projects-teaser-container');
      var objs = document.querySelectorAll(".projectModule")
      var urls = {}
      var pairs = {}

      var dumpster = document.querySelector('.teaser-dumpster')
      for (var i = 0; i < objs.length; i++) {
        // console.log( objs[i].id );
        var temp = [].filter.call(objs[i].attributes, function(at) { return /^data-/.test(at.name) })
        // urls["video-"+objs[i].id] = temp[0].value
        var string = "<video class='bg-video-trash' id='video-"+objs[i].id+"' src='" + temp[0].value + "' loop></video>"
        dumpster.innerHTML += string
        pairs[ "video-"+objs[i].id ] = document.querySelector( "#video-"+objs[i].id )
        objs[i].addEventListener('mouseenter', function () {
          // console.log( pairs["video-"+this.id] )
          playMyVideo( pairs["video-"+this.id], canvasWrap)
        });
        objs[i].addEventListener('mouseleave', function () {
          // console.log( pairs["video-"+this.id] )
          // pauseMyVideo( pairs["video-"+this.id], canvasWrap )
        });
      }
      
      function draw(v,c,w,h) {
          if(v.paused || v.ended) return false;
          c.drawImage(v,0,0,w,h);
          setTimeout(draw,1000/24,v,c,w,h);
      }

      function pauseMyVideo( video, canvas ) {
        var context = canvas.getContext('2d');

        var cw = Math.floor(canvas.clientWidth);
        var ch = Math.floor(canvas.clientHeight);
        canvas.width = cw;
        canvas.height = ch;

        video.pause();

        draw(video,context,cw,ch);
      }

      function playMyVideo(video, canvas) {
        // var v = document.querySelector('.bg-video');
        var context = canvas.getContext('2d');

        var cw = Math.floor(canvas.clientWidth);
        var ch = Math.floor(canvas.clientHeight);
        canvas.width = cw;
        canvas.height = ch;

        draw(video,context,cw,ch);
        video.play();

        // video.addEventListener('play', function(){
        //     draw(this,context,cw,ch);
        //     //console.log("play event");
        // },false);

        // video.addEventListener('canplay', function(){
        //     //console.log("play called")
        //     video.play();
        // },false);
      }

      


    }




    var clipboard = new Clipboard('#footer-email-link');
  
    clipboard.on('success', function(e) {
      document.querySelector(".copied-alert-triangle").classList.add("copied-alert-showing");
      document.querySelector(".copied-alert").classList.add("copied-alert-showing");
      setTimeout(function(){
        document.querySelector(".copied-alert-triangle").classList.remove("copied-alert-showing");
        document.querySelector(".copied-alert").classList.remove("copied-alert-showing");
      }, 1000);
        
    });

    clipboard.on('error', function(e) {
      document.querySelector(".copied-alert-triangle").classList.add("copied-alert-showing");
      document.querySelector(".copied-alert").classList.add("copied-alert-showing");
      document.querySelector(".copied-alert").innerHTML = "Error copying.";
      setTimeout(function(){
        document.querySelector(".copied-alert-triangle").classList.remove("copied-alert-showing");
        document.querySelector(".copied-alert").classList.remove("copied-alert-showing");
        e.clearSelection();
      }, 1000);
    });     
  }
}

// A Shape is a kind of Vector
function Shape() {
  Vector.apply( this, arguments ); // call Vector's constructor
  this.age = 0
  this.maxAge = 450
  this.size =  0
  this.color = "#00FFFF";
}

if (pt !== null ) {
  Util.extend( Shape, Vector ); // extends Vector class
}

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
