<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>!function(t,e){function s(){if(this.hasDeviceMotion="ondevicemotion"in t,this.threshold=15,this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof e.CustomEvent)this.event=new e.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof e.createEvent)return!1;this.event=e.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}s.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},s.prototype.start=function(){this.reset(),this.hasDeviceMotion&&t.addEventListener("devicemotion",this,!1)},s.prototype.stop=function(){this.hasDeviceMotion&&t.removeEventListener("devicemotion",this,!1),this.reset()},s.prototype.devicemotion=function(e){var s,i,n,h=e.accelerationIncludingGravity;if(null===this.lastX&&null===this.lastY&&null===this.lastZ)return this.lastX=h.x,this.lastY=h.y,void(this.lastZ=h.z);s=Math.abs(this.lastX-h.x),i=Math.abs(this.lastY-h.y),n=Math.abs(this.lastZ-h.z),(s>this.threshold&&i>this.threshold||s>this.threshold&&n>this.threshold||i>this.threshold&&n>this.threshold)&&(new Date).getTime()-this.lastTime.getTime()>1e3&&(t.dispatchEvent(this.event),this.lastTime=new Date),this.lastX=h.x,this.lastY=h.y,this.lastZ=h.z},s.prototype.handleEvent=function(t){if("function"==typeof this[t.type])return this[t.type](t)};var i=new s;i&&i.start()}(window,document);