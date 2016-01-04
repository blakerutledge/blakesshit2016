//import Pt from "./libs/pt.js"
import verge from "./libs/verge.js"
import Clipboard from "./libs/clipboard.min.js"

var space, form, center, viewPort, bot, lastTime, colorIndex, mouseSpeed, timeout, colors, pt, projectCanvas, cw, ch, context, post

pt = document.querySelectorAll("#pt")
projectCanvas = document.querySelectorAll(".teaser-dumpster")
post = document.querySelectorAll(".post-container")

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
      // - - - BACKGROUND VIDEO BUILD  - - - //
      var canvasWrap = document.querySelector('.projects-teaser-container');
      var objs = document.querySelectorAll(".projectModule")
      var urls = {}
      var pairs = {}
      var dumpster = document.querySelector('.teaser-dumpster')
      for (var i = 0; i < objs.length; i++) {
        var temp = [].filter.call(objs[i].attributes, function(at) { return /^data-/.test(at.name) })
        var string = "<video class='bg-video-trash bgScale' id='video-"+objs[i].id+"' src='" + temp[0].value + "' loop muted ></video>"
        dumpster.innerHTML += string
        pairs[ "video-"+objs[i].id ] = document.querySelector( "#video-"+objs[i].id )
        //Add event listeners to hover
        objs[i].addEventListener('mouseenter', function () {
          document.querySelector("#video-"+this.id).style.opacity = "1"
          document.querySelector("#video-"+this.id).play()
        });
        objs[i].addEventListener('mouseleave', function () {
          document.querySelector("#video-"+this.id).style.opacity = "0"
          document.querySelector("#video-"+this.id).pause()
        });
      }
      resizeToCover()
      window.addEventListener("resize", function() {
        resizeToCover()
      })
      //Resize video container
      function resizeToCover() {
        // use largest scale factor of horizontal/vertical
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        if ( w*0.5625 > h) {
          //wider. trim height, set to width
          Array.prototype.forEach.call(document.querySelectorAll('.bgScale'), function(video) { 
            video.style.width = w+"px"
            video.style.height = "auto"
          })
        }
        else {
          Array.prototype.forEach.call(document.querySelectorAll('.bgScale'), function(video) { 
            video.style.height = h+"px"
            video.style.width = "auto"
          })
        }    
      }
      
      //Project Tag Selector Logic
      var iconDesign = true;
      var iconMotion = true;
      var iconFrontend = true;

      var custom_event = "click";

      var hexInner = "15.41,3.36 19.82,11 15.41,18.64 6.59,18.64 2.18,11 6.59,3.36 15.41,3.36"
      var circleInner = "M11,3.26c4.27,0,7.74,3.47,7.74,7.74s-3.47,7.74-7.74,7.74S3.26,15.27,3.26,11S6.73,3.26,11,3.26";
      var squareInner = "17.9,4.1 17.9,17.9 4.1,17.9 4.1,4.1 17.9,4.1";
      var check = "9.89,15.35 5.81,11.27 7.49,9.58 9.89,11.98 14.51,7.36 16.19,9.04"

      MorphSVGPlugin.convertToPath("#motion-check");
      var checkSquare = new TimelineMax({paused:true});
      var checkCircle = new TimelineMax({paused:true});
      var checkHex = new TimelineMax({paused:true});

      var t = .62;

      checkSquare.to('#design-check', t, {
        morphSVG:{shape:squareInner, shapeIndex:1},
        ease: Elastic.easeInOut.config(1.7,1)
      });
      checkSquare.to('#design-icon', t*.5,{opacity:0.7}, "-="+t/2);

      checkCircle.to('#motion-check', t, {
        morphSVG:{shape:circleInner, shapeIndex:3},
        ease: Elastic.easeInOut.config(1.7,1)
      });
      checkCircle.to('#motion-icon', t*.5,{opacity:0.7}, "-="+t/2);

      checkHex.to('#frontend-check', t, {
        morphSVG:{shape:hexInner, shapeIndex:3},
        ease: Elastic.easeInOut.config(1.7,1)
      });
      checkHex.to('#frontend-icon', t*.5,{opacity:0.7}, "-="+t/2);

      function moveSquareTrue() { 
          if (!iconDesign) {
              checkSquare.reverse();
          }
      }
      function moveSquareFalse() { 
          if (iconDesign) {
              checkSquare.play(0); 
          }
      }

      function moveCircleTrue() { 
          if (!iconMotion) {
              checkCircle.reverse(); 
          }
      }
      function moveCircleFalse() { 
          if (iconMotion) {
              checkCircle.play(0); 
          }
      }

      function moveHexTrue() { 
          if (!iconFrontend) {
              checkHex.reverse(); 
          }
      }
      function moveHexFalse() { 
          if (iconFrontend) {
              checkHex.play(0); 
          }
      }



      //CLICK CATEGORIES AND SHIT
      document.querySelector(".iconPairDesign").addEventListener(custom_event, function(e) {
        if (iconDesign && !(iconMotion && iconFrontend) ) {
          //only showing design, untoggle dat shit
          raiseOpacity(".iconPair", ".projectModule");
              moveSquareTrue();
              moveCircleTrue();
              moveHexTrue();
              truify();
        }
        else { 
          //all on, only show design
          lowerOpacity(".iconPair");
          crushOpacity(".projectModule");
          raiseOpacity(".iconPairDesign", ".designProject");
          moveSquareTrue();
          moveCircleFalse();
          moveHexFalse();
          falsify("iconDesign");
        }
      });

      document.querySelector(".iconPairMotion").addEventListener(custom_event, function(e) {
        if (iconMotion && !iconDesign && !iconFrontend) {
          //only showing motion, untoggle dat shit
          raiseOpacity(".iconPair", ".projectModule");
          moveSquareTrue();
          moveCircleTrue();
          moveHexTrue();
          truify();
        }
        else { 
          //all on, only show design
          lowerOpacity(".iconPair");
          crushOpacity(".projectModule");
          raiseOpacity(".iconPairMotion", ".motionProject");
          moveSquareFalse();
          moveCircleTrue();
          moveHexFalse();
          falsify("iconMotion");
        }
      });

      document.querySelector(".iconPairFrontend").addEventListener(custom_event, function(e) {
        if (iconFrontend && !iconMotion && !iconDesign) {
          //only showing frontend, untoggle dat shit
          raiseOpacity(".iconPair", ".projectModule");
          moveSquareTrue();
          moveCircleTrue();
          moveHexTrue();
          truify();
        }
        else { 
          //all on, only show design
          lowerOpacity(".iconPair");
          crushOpacity(".projectModule");
          raiseOpacity(".iconPairFrontend", ".frontendProject");
          moveSquareFalse();
          moveCircleFalse();
          moveHexTrue();
          falsify("iconFrontend");
        }
      });

      document.querySelector(".projectsHeaderToggle").addEventListener(custom_event, function(e) {
        moveSquareTrue();
        moveCircleTrue();
        moveHexTrue();
        truify();
        raiseOpacity(".iconPair", ".projectModule");
      });

      function truify() {
        iconDesign = true;
        iconMotion = true;
        iconFrontend = true;
      }

      function falsify(x) {
        iconDesign = false;
        iconMotion = false;
        iconFrontend = false;
        if (x=="iconDesign") {
              iconDesign = true;
          }
        if (x=="iconMotion") {
              iconMotion = true;
          }
        if (x=="iconFrontend") {
              iconFrontend = true;
          }
      }

      function raiseOpacity(x, y) {
        Array.prototype.forEach.call(document.querySelectorAll(x), function(me) { 
          me.style.opacity = "1"
        });
        Array.prototype.forEach.call(document.querySelectorAll(y), function(me) { 
          me.style.opacity = "1"
        });
      }

      function lowerOpacity(x) {
        Array.prototype.forEach.call(document.querySelectorAll(x), function(me) { 
          me.style.opacity = "0.7"
        });
      }

      function crushOpacity(x) {
        Array.prototype.forEach.call(document.querySelectorAll(x), function(me) { 
          me.style.opacity = "0.1"
        });
      }

      //end PROJECT specific
    }

    if ( post.length !== 0 ) {
      console.log("Post page")
      packPostGrid(8)
      window.addEventListener("resize", function() {
        packPostGrid(8)
      })
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

function packPostGrid(g) {
    let gutter = g
    //get consecutive grid-inline 
    let all_inline = document.querySelectorAll(".grid-inline")
    let inline_rows = []
    let j = 0
    let temp = []
    let parentWidth = document.querySelector(".post-container").clientWidth
    for ( let i = 0; i < all_inline.length; i++ ) {
      if ( (all_inline[i].nextSibling != null) && hasClass( all_inline[i].nextSibling, "grid-inline" ) ) {
        //Continue building inline group
        temp.push( all_inline[i] )
      }
      else {
        //Finish inline group
        temp.push( all_inline[i] )
        inline_rows[j] = temp
        j++
        temp = []
      }
    }
    // resize inline, but keep ratio
    if ( parentWidth < 520 ) {
      //Too Skinny
      for (let i = 0; i < inline_rows.length; i++ ) {
        for (let j = 0; j < inline_rows[i].length; j ++) {
          inline_rows[i][j].style.height = "auto"
          inline_rows[i][j].style.width = "100%"
        }
      }
    }
    else {
      //Fat enough!
      for (let i = 0; i < inline_rows.length; i++ ) {
        let gutters = (inline_rows[i].length - 1) * gutter
        let width_ratio = 0
        for (let j = 0; j < inline_rows[i].length; j ++) {
          width_ratio += ( inline_rows[i][j].naturalWidth / inline_rows[i][j].naturalHeight )
        }
        let target_height = (parentWidth - gutters) / ( width_ratio )
        for (let j = 0; j < inline_rows[i].length; j ++) {
          inline_rows[i][j].style.height = Math.floor(target_height)+"px"
          inline_rows[i][j].style.width = "auto"
        }
      }
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

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}


function buildPt() {

    //// 1. Define Space and Form
    space = new CanvasSpace("demo", "#000000" ).display();
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
