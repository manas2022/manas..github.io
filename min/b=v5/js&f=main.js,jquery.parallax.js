$(document).ready(function(){window.onresize=refresh;var depth=0;var depths=[];var heading=$('.splash h2');var closeSpeed=800;var openSpeed=500;var delayTime=0;var old_delayTime=delayTime;var balls=0;$('.ball').each(function(i){depths[i]=$(this).attr("data-depth");});function refresh(){winW=window.innerWidth||document.body.clientWidth;winH=window.innerHeight||document.body.clientHeight;ballW=winW/2000*282;mouseX=winH/2;$('.ball').each(function(i){$(this).children('img').css({'width':depths[i]*ballW+"px"});});fw=winW*0.100;fw=Math.min(fw,120);fw=Math.max(fw,50);heading.css({'font-size':fw});headingH=heading.height();heading.css('margin-top',-parseInt(headingH)/2+'px');heading.find('img').css('maxWidth',fw*0.93+'px');var livecss="#portfolio .item.active h2{font-size:"+parseInt(winW*0.085)+"px;}";if(!$('.livecss').length){$('body').append('<style class="livecss">'+livecss+'</style>');}else{$('.livecss').text(livecss);}
if($('.item.active').length){$('.item.active').scrollTo({},0);}}
refresh();var blinker;window.clearInterval(blinker);var blinker=setInterval(function(){$('.ball .overlay').each(function(i){$(this).clearQueue().stop().fadeOut(5).delay(i*200).fadeOut(5).fadeIn(5).fadeOut(5).fadeIn('fast').delay(200).fadeOut('fast');});},10000);$('.ball .overlay').hide();$(".item .viewdetails").on('click',function(event){openitem=$(this).parent().parent().attr('class').split(' ')[1].toString();url='#portfolio/'+openitem.toString();window.location.hash=url;});$(".item .viewdetails2").on('click',function(event){var $el=$(this).parent().parent();setTimeout(function(){$el.addClass('hover');$(".header").addClass('viewing-item');$el.removeClass('hover hoverable').addClass('active');$("#portfolio .item.active img[data-original], #portfolio .item.active iframe[data-original]").each(function(){$(this).attr("src",$(this).attr("data-original"));$(this).removeAttr("data-original");});},20);setTimeout(function(){$el.scrollTo({callback:function(){$('#portfolio').css({'overflow':'hidden'});$el.css({'overflow':'auto'});}},0);},500);});$('.launch').on('click',function(event){event.preventDefault();window.open($(this).attr('data-url'));});$('.scrolldown').on('click',function(event){console.log($('.item.active').scrollTop()+" H:"+$('.item.active .info').height());$('.item.active').stop().animate({scrollTop:$('.item.active .info').height()+140+'px'},500,$.easie(.36,0,0,1.04));});$('.gohome-btn').on('click',function(){window.location.hash="#";});$('.back').on('click',function(){window.location.hash='#portfolio';});$('.next-btn').click(function(){next=$('.item.active').next();$('.back').click();setTimeout(function(){for(var i=0;i<5;i++){if(next.find('.viewdetails').length){break;}
next=next.next();}
next.find('.viewdetails').click();},1200);});$('.prev-btn').click(function(){prev=$('.item.active').prev();$('.back').click();setTimeout(function(){for(var i=0;i<5;i++){if(prev.find('.viewdetails').length){break;}
prev=prev.prev();}
prev.find('.viewdetails').click();},1200);});closeActivePage=function(callback){if(pageToClose=="portfolio"&&window.location.hash!='#portfolio'){if($('.item.active').length){delay=1200;$('.item').removeClass('active');setTimeout(function(){$('.item').removeClass('normal hoverable');},600);}else{delay=700;$('.item').removeClass('normal hoverable');}
setTimeout(function(){$('#portfolio').stop().fadeOut(closeSpeed,function(){$('.item').removeClass('normal hoverable active').css('overflow','hidden');$('.header').removeClass('viewing-item');$(this).css({'overflow':'auto'});callback();});},delay);}else if(pageToClose=="about"){$('#about').stop().slideUp(closeSpeed,function(){$(this).find('section').removeClass('visible');callback();});}else if(pageToClose=="contact"){$('#contact').stop().slideUp(closeSpeed,function(){callback();});}else{callback();}
pageToClose="";}
$('.music').on('click',function(){$(this).find('i').toggleClass(function(){if($(this).is(".icon-volume-off")){m=$('#music').text();$('body').append(m);$('#player').css('opacity','0');return"icon-volume-up icon-volume-off";}else{$('#player').remove();return"icon-volume-up icon-volume-off";}});});$('.effects').on('click',function(){$(this).find('i').toggleClass(function(){if($(this).is(".icon-check-empty")){$('.ball').each(function(i,el){setTimeout(function(){$(el).addClass('bounce');},(i*333));});return"icon-check icon-check-empty";}else{$('.ball').removeClass('bounce');return"icon-check icon-check-empty";}});});$('.btn').click(function(e){e.preventDefault()
window.location.hash=$(this).find('a').attr('href');});$('.ball').css('opacity',0);$('.splash h2 span').css('opacity','0');init_homepage=function(){$('.splash h2 span').each(function(i,el){n=1;setTimeout(function(){$(el).shuffleLetters({"step":20,"fps":24,callback:function(){if(n==2){$('<img src="img/plus.png" alt="">').prependTo('span.second').css('width','0').animate({'width':'120px'},1200,function(){$('h3').removeClass('hidden');$('.header').removeClass('hidden');$('.ribbon').fadeIn('slow');$('.ball').each(function(i,el){setTimeout(function(){$(el).hide().css('opacity',1).fadeIn('2000');},(i*333)+2000);});});refresh();}
n++}}).css('opacity','1');},0+(i*1500))});setTimeout(function(){refresh();},100);balls=$('#balls').parallax();}
$(window).hashchange(function(){var hash=window.location.hash.substring(1);var portfolioItem=hash.split('../index.html')[1];if(portfolioItem){if(!$('.header').hasClass('active')){addDelay=3000;}else{addDelay=0;}
var $el=$('.'+portfolioItem);setTimeout(function(){$el.addClass('hover');$(".header").addClass('viewing-item');$el.removeClass('hover hoverable').addClass('active');$("#portfolio .item.active img[data-original], #portfolio .item.active iframe[data-original]").each(function(){$(this).attr("src",$(this).attr("data-original"));$(this).removeAttr("data-original");});},20+addDelay);setTimeout(function(){$el.scrollTo({callback:function(){$('#portfolio').css({'overflow':'hidden'});$el.css({'overflow':'auto'});}},0);},500+addDelay);}
if(hash!=""){if((hash.indexOf("portfolio")>=0&&!$('.header').hasClass('active'))||hash=="portfolio"||hash=="about"||hash=="contact"){if(!$('#menu .btn.active').length){$(window).unbind('mousemove');balls.parallax('disable');$('.header').addClass('active');$('#pages').css({'top':'100%','display':'block'}).stop().delay(800).animate({'top':0},openSpeed,function(){});delayTime=1200;}else{delayTime=1;}
pageToClose=$('.btn.active').text();pageToOpen=hash.split('../index.html')[0];$('.btn.active').removeClass('active');$('#menu li.'+hash.split('../index.html')[0]+'-btn').addClass('active');closeActivePage(function(){if(pageToOpen=='portfolio'){if($('.header').hasClass('viewing-item')){$('#portfolio').css({'overflow':'auto'});$('.item.active').animate({'scrollTop':'0'},1000).css({'overflow':'hidden'});setTimeout(function(){$('.item.active h2').attr('style',null);$('.item.active').removeClass('active');$(".header").removeClass('viewing-item');},220);setTimeout(function(){$('.item').addClass('hoverable');},20);}else{$('#portfolio').delay(delayTime).show(function(){setTimeout(function(){$(".item").addClass('hoverable');},800);$('#portfolio').scrollTop(0);$('#portfolio .item').waypoint(function(direction){if(direction=="down"){$(this).addClass('normal');}else if(direction=="up"){}},{offset:'100%',context:'#portfolio'});});}}else if(pageToOpen=='about'){$('#about').css({'top':'100%','display':'block'}).stop().delay(delayTime).animate({'top':80},openSpeed,function(){$(this).find('section').addClass('visible');});}else if(pageToOpen=='contact'){$('#contact').css({'top':'100%','display':'block'}).stop().delay(delayTime).animate({'top':80},openSpeed,function(){});}});}}else{pageToClose=$('.btn.active').text();closeActivePage(function(){$('#pages').slideUp(800,function(){$('.header').removeClass('active viewing-item');$('.btn.active').removeClass('active');$('.item').scrollTop('0px').css({'overflow':'hidden'});balls.parallax('enable');});});}});});scrollElement=$('#portfolio');$.fn.scrollTo=function(options,offeset){var options=$.extend({callback:function(){}},arguments[0]||{});scrollElement.stop().animate({scrollTop:$(this).position().top-offeset+$(this).parent().scrollTop()},1000,$.easie(.36,0,0,1.04),function(){options.callback.call(this);});};;;(function($,window,document,undefined){var NAME='parallax';var MAGIC_NUMBER=30;var DEFAULTS={calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:false,calibrateY:true,invertX:true,invertY:true,limitX:false,limitY:false,scalarX:10.0,scalarY:10.0,frictionX:0.1,frictionY:0.1};function Plugin(element,options){this.element=element;this.$context=$(element).data('api',this);this.$layers=$('body').find('.layer');var data={calibrateX:this.$context.data('calibrate-x')||null,calibrateY:this.$context.data('calibrate-y')||null,invertX:this.$context.data('invert-x')||null,invertY:this.$context.data('invert-y')||null,limitX:parseFloat(this.$context.data('limit-x'))||null,limitY:parseFloat(this.$context.data('limit-y'))||null,scalarX:parseFloat(this.$context.data('scalar-x'))||null,scalarY:parseFloat(this.$context.data('scalar-y'))||null,frictionX:parseFloat(this.$context.data('friction-x'))||null,frictionY:parseFloat(this.$context.data('friction-y'))||null};for(var key in data){if(data[key]===null)delete data[key];}
$.extend(this,DEFAULTS,options,data);this.calibrationTimer=null;this.calibrationFlag=true;this.enabled=false;this.depths=[];this.raf=null;this.ox=0;this.oy=0;this.ow=0;this.oh=0;this.cx=0;this.cy=0;this.ix=0;this.iy=0;this.mx=0;this.my=0;this.vx=0;this.vy=0;this.onMouseMove=this.onMouseMove.bind(this);this.onDeviceOrientation=this.onDeviceOrientation.bind(this);this.onOrientationTimer=this.onOrientationTimer.bind(this);this.onCalibrationTimer=this.onCalibrationTimer.bind(this);this.onAnimationFrame=this.onAnimationFrame.bind(this);this.onWindowResize=this.onWindowResize.bind(this);this.initialise();}
Plugin.prototype.transformSupport=function(value){var element=document.createElement('div');var propertySupport=false;var propertyValue=null;var featureSupport=false;var cssProperty=null;var jsProperty=null;for(var i=0,l=this.vendors.length;i<l;i++){if(this.vendors[i]!==null){cssProperty=this.vendors[i][0]+'transform';jsProperty=this.vendors[i][1]+'Transform';}else{cssProperty='transform';jsProperty='transform';}
if(element.style[jsProperty]!==undefined){propertySupport=true;break;}}
switch(value){case'2D':featureSupport=propertySupport;break;case'3D':if(propertySupport){document.body.appendChild(element);element.style[jsProperty]='translate3d(1px,1px,1px)';propertyValue=window.getComputedStyle(element).getPropertyValue(cssProperty);featureSupport=propertyValue!==undefined&&propertyValue.length>0&&propertyValue!=="none";document.body.removeChild(element);}
break;}
return featureSupport;};Plugin.prototype.ww=null;Plugin.prototype.wh=null;Plugin.prototype.hw=null;Plugin.prototype.hh=null;Plugin.prototype.portrait=null;Plugin.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);Plugin.prototype.vendors=[null,['-webkit-','webkit'],['-moz-','Moz'],['-o-','O'],['-ms-','ms']];Plugin.prototype.motionSupport=!!window.DeviceMotionEvent;Plugin.prototype.orientationSupport=!!window.DeviceOrientationEvent;Plugin.prototype.orientationStatus=0;Plugin.prototype.transform2DSupport=Plugin.prototype.transformSupport('2D');Plugin.prototype.transform3DSupport=Plugin.prototype.transformSupport('3D');Plugin.prototype.initialise=function(){if(this.$context.css('position')==='static'){this.$context.css({position:'relative'});}
this.$layers.css({position:'absolute',display:'block',height:'100%',width:'100%',left:0,top:0});this.$layers.first().css({position:'relative'});this.$layers.each($.proxy(function(index,element){this.depths.push($(element).data('depth')||0);},this));this.accelerate(this.$context);this.accelerate(this.$layers);this.updateDimensions();this.enable();this.queueCalibration(this.calibrationDelay);};Plugin.prototype.updateDimensions=function(){this.ox=this.$context.offset().left;this.oy=this.$context.offset().top;this.ow=this.$context.width();this.oh=this.$context.height();this.ww=window.innerWidth;this.wh=window.innerHeight;this.hw=this.ww/2;this.hh=this.wh/2;};Plugin.prototype.queueCalibration=function(delay){clearTimeout(this.calibrationTimer);this.calibrationTimer=setTimeout(this.onCalibrationTimer,delay);};Plugin.prototype.enable=function(){if(!this.enabled){this.enabled=true;if(this.orientationSupport){this.portrait=null;window.addEventListener('deviceorientation',this.onDeviceOrientation);setTimeout(this.onOrientationTimer,this.supportDelay);}else{this.cx=0;this.cy=0;this.portrait=false;window.addEventListener('mousemove',this.onMouseMove);}
window.addEventListener('resize',this.onWindowResize);this.raf=requestAnimationFrame(this.onAnimationFrame);}};Plugin.prototype.disable=function(){if(this.enabled){this.enabled=false;if(this.orientationSupport){window.removeEventListener('deviceorientation',this.onDeviceOrientation);}else{window.removeEventListener('mousemove',this.onMouseMove);}
window.removeEventListener('resize',this.onWindowResize);cancelAnimationFrame(this.raf);}};Plugin.prototype.calibrate=function(x,y){this.calibrateX=x===undefined?this.calibrateX:x;this.calibrateY=y===undefined?this.calibrateY:y;};Plugin.prototype.invert=function(x,y){this.invertX=x===undefined?this.invertX:x;this.invertY=y===undefined?this.invertY:y;};Plugin.prototype.friction=function(x,y){this.frictionX=x===undefined?this.frictionX:x;this.frictionY=y===undefined?this.frictionY:y;};Plugin.prototype.scalar=function(x,y){this.scalarX=x===undefined?this.scalarX:x;this.scalarY=y===undefined?this.scalarY:y;};Plugin.prototype.limit=function(x,y){this.limitX=x===undefined?this.limitX:x;this.limitY=y===undefined?this.limitY:y;};Plugin.prototype.clamp=function(value,min,max){value=Math.max(value,min);value=Math.min(value,max);return value;};Plugin.prototype.css=function(element,property,value){var jsProperty=null;for(var i=0,l=this.vendors.length;i<l;i++){if(this.vendors[i]!==null){jsProperty=$.camelCase(this.vendors[i][1]+'-'+property);}else{jsProperty=property;}
if(element.style[jsProperty]!==undefined){element.style[jsProperty]=value;break;}}};Plugin.prototype.accelerate=function($element){for(var i=0,l=$element.length;i<l;i++){var element=$element[i];this.css(element,'transform','translate3d(0,0,0)');this.css(element,'transform-style','preserve-3d');this.css(element,'backface-visibility','hidden');}};Plugin.prototype.setPosition=function(element,x,y){x+='%';y+='%';if(this.transform3DSupport){this.css(element,'transform','translate3d('+x+','+y+',0)');}else if(this.transform2DSupport){this.css(element,'transform','translate('+x+','+y+')');}else{element.style.left=x;element.style.top=y;}};Plugin.prototype.onOrientationTimer=function(event){if(this.orientationSupport&&this.orientationStatus===0){this.disable();this.orientationSupport=false;this.enable();}};Plugin.prototype.onCalibrationTimer=function(event){this.calibrationFlag=true;};Plugin.prototype.onWindowResize=function(event){this.updateDimensions();};Plugin.prototype.onAnimationFrame=function(){var dx=this.ix-this.cx;var dy=this.iy-this.cy;if((Math.abs(dx)>this.calibrationThreshold)||(Math.abs(dy)>this.calibrationThreshold)){this.queueCalibration(0);}
if(this.portrait){this.mx=(this.calibrateX?dy:this.iy)*this.scalarX;this.my=(this.calibrateY?dx:this.ix)*this.scalarY;}else{this.mx=(this.calibrateX?dx:this.ix)*this.scalarX;this.my=(this.calibrateY?dy:this.iy)*this.scalarY;}
if(!isNaN(parseFloat(this.limitX))){this.mx=this.clamp(this.mx,-this.limitX,this.limitX);}
if(!isNaN(parseFloat(this.limitY))){this.my=this.clamp(this.my,-this.limitY,this.limitY);}
this.vx+=(this.mx-this.vx)*this.frictionX;this.vy+=(this.my-this.vy)*this.frictionY;for(var i=0,l=this.$layers.length;i<l;i++){var depth=this.depths[i];var layer=this.$layers[i];var xOffset=this.vx*depth*(this.invertX?-1:1);var yOffset=this.vy*depth*(this.invertY?-1:1);this.setPosition(layer,xOffset,yOffset);}
this.raf=requestAnimationFrame(this.onAnimationFrame);};Plugin.prototype.onDeviceOrientation=function(event){if(!this.desktop&&event.beta!==null&&event.gamma!==null){this.orientationStatus=1;var x=(event.beta||0)/MAGIC_NUMBER;var y=(event.gamma||0)/MAGIC_NUMBER;var portrait=window.innerHeight>window.innerWidth;if(this.portrait!==portrait){this.portrait=portrait;this.calibrationFlag=true;}
if(this.calibrationFlag){this.calibrationFlag=false;this.cx=x;this.cy=y;}
this.ix=x;this.iy=y;}};Plugin.prototype.onMouseMove=function(event){this.ix=(event.pageX-this.hw)/this.hw;this.iy=(event.pageY-this.hh)/this.hh;};var API={enable:Plugin.prototype.enable,disable:Plugin.prototype.disable,calibrate:Plugin.prototype.calibrate,friction:Plugin.prototype.friction,invert:Plugin.prototype.invert,scalar:Plugin.prototype.scalar,limit:Plugin.prototype.limit};$.fn[NAME]=function(value){var args=arguments;return this.each(function(){var $this=$(this);var plugin=$this.data(NAME);if(!plugin){plugin=new Plugin(this,value);$this.data(NAME,plugin);}
if(API[value]){plugin[value].apply(plugin,Array.prototype.slice.call(args,1));}});};})(window.jQuery||window.Zepto,window,document);;(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];}
if(!window.requestAnimationFrame){window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};}
if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(id){clearTimeout(id);};}}());