import verge from "./libs/verge.js";
import Clipboard from "./libs/clipboard.min.js";

var space, form, center, viewPort, bot, lastTime, colorIndex, mouseSpeed, timeout

var pt = document.querySelectorAll("#pt")

lastTime = -5000;
colorIndex = 0;
mouseSpeed = 4000;

class Main {
  constructor(options = {}) {

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
            window.addEventListener("touchmove", function(event){
              event.preventDefault();
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
        space = new CanvasSpace("demo", "#fff" ).display();
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


    /*
	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

	if (!isMobile) {
	new WOW().init({
	}); */
	

	var iconDesign = true;
	var iconMotion = true;
	var iconFrontend = true;

    var custom_event = $.support.touch ? "tap" : "click";

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
    $(document).on(custom_event, ".iconPairDesign", function(e) {
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

    $(document).on(custom_event, ".iconPairMotion", function(e) {
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

    $(document).on(custom_event, ".iconPairFrontend", function(e) {
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

    $(document).on(custom_event, ".projectsHeaderToggle", function(e) {
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
    	$(x).css("opacity","1");
		$(y).css("opacity","1");
    }

    function lowerOpacity(x) {
    	$(x).css("opacity","0.7");
    }

    function crushOpacity(x) {
        $(x).css("opacity","0.1");
    }

    //PROJECT LIST HOVER STATES
    $(".projectModule").mouseenter( function() {
    	var id= this.id;
    	var handle = ".backgroundThumbnail-"+id+"-poster";
    	$(handle).css("opacity", "1");
    });
  	$(".projectModule").mouseleave( function() {
		var id= this.id;
    	var handle = ".backgroundThumbnail-"+id+"-poster";
    	$(handle).css("opacity", "0");
  	});


  	//RESIZE FULLSCREEN VIDEO
	var vid_w_orig;  // original video dimensions
	var vid_h_orig;

    vid_w_orig = parseInt($('video').attr('width'));
    vid_h_orig = parseInt($('video').attr('height'));

    $(window).resize(function () { resizeToCover(); });
    $(window).trigger('resize');

	function resizeToCover() {
	    // use largest scale factor of horizontal/vertical
	    var w = $(".gridWrap").width();
	    var h = $(window).innerHeight();
	    if ( w*0.5625 > h) {
	    	//wider. trim height, set to width
	    	$('.bgScale').height("auto");
	    	$('.bgScale').width($(window).innerWidth());
	    }
	    else {
	    	//wider. trim height, set to width
	    	$('.bgScale').height($(window).innerHeight());
	    	$('.bgScale').width("auto");
	    }    
	}
    }
}

document.addEventListener('DOMContentLoaded', event => new Main)
