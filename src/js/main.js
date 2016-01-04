//import Pt from "./libs/pt.js"
import verge from "./libs/verge.js"
import Clipboard from "./libs/clipboard.min.js"

let space, form, center, viewPort, bot, lastTime, colorIndex, mouseSpeed, timeout, colors, pt, projectCanvas, cw, ch, context, post, homeScreenMode, projectScreenMode

pt = document.querySelectorAll("#pt")
projectCanvas = document.querySelectorAll(".teaser-dumpster")
post = document.querySelectorAll(".post-container")

lastTime = -5000
colorIndex = 0
mouseSpeed = 4000

//Feature detect
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in g)if(g.hasOwnProperty(f)){if(e=[],n=g[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function i(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?x.className.baseVal=n:x.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=f(_?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,l,u="modernizr",d=f("div"),c=p();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),d.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(c.fake?c:d).appendChild(i),c.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),s=t(d,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=l,x.offsetHeight):d.parentNode.removeChild(d),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function l(){d&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var d,p,c,v,h,y=["modernizr","tspan"];!N.style;)d=!0,N.modElem=f(y.shift()),N.style=N.modElem.style;for(c=e.length,p=0;c>p;p++)if(v=e[p],h=N.style[v],a(v,"-")&&(v=s(v)),N.style[v]!==t){if(i||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{N.style[v]=o}catch(g){}if(N.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+E.join(s+" ")+s).split(" "),u(a,n,t))}var y=[],g=[],C={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var x=n.documentElement,_="svg"===x.nodeName.toLowerCase(),w="Moz O ms Webkit",S=C._config.usePrefixes?w.split(" "):[];C._cssomPrefixes=S;var b=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=b;var E=C._config.usePrefixes?w.toLowerCase().split(" "):[];C._domPrefixes=E;var z={elem:f("modernizr")};Modernizr._q.push(function(){delete z.elem});var N={style:z.elem.style};Modernizr._q.unshift(function(){delete N.style}),C.testAllProps=h;var P=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?b(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};Modernizr.addTest("backgroundblendmode",P("backgroundBlendMode","text")),o(),i(y),delete C.addTest,delete C.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);
let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
let isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
if( (isChrome || isSafari) && (Modernizr.backgroundblendmode) ){
  console.log("Woo! Crazy blending modes for you.")
  homeScreenMode = true
  isMobile ? projectScreenMode=false : projectScreenMode = true
} 
else {
  console.log("Woof. This site is cooler for other people.")
  homeScreenMode = false
  projectScreenMode = false
}



class Main {
  constructor(options = {}) {
    

    if ( pt.length !== 0 && ( homeScreenMode ) ) {
      document.querySelector('.screenLayer').style.mixBlendMode = "screen"
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
      if (projectScreenMode) {
        // - - - BACKGROUND VIDEO BUILD  - - - //
        document.querySelector('.screenLayer').style.mixBlendMode = "screen"
        var canvasWrap = document.querySelector('.projects-teaser-container')
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
      }
      else {
        //No video && blend-mode support, give em the static shit
        console.log("givin em the static shit")
        var objs = document.querySelectorAll(".projectModule")
        var urls = {}
        var dumpster = document.querySelector('.teaser-dumpster')
        for (var i = 0; i < objs.length; i++) {
          var temp = [].filter.call(objs[i].attributes, function(at) { return /^data-static/.test(at.name) })
          if ( temp[0].value !== "" ) {
            objs[i].style.backgroundImage = "url('"+temp[0].value+"')"
            // console.log(temp[0].value)
          }
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
      window.addEventListener("resize", function() {
        packPostGrid(8)
      })
      packPostGrid(8)
      //Force safari to pack..
      setTimeout(function(){
        packPostGrid(8)
      }, 10);
      
    }
    /*

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
    */
    //Force safari grid packing  
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
