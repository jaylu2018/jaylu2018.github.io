define([],function(){var e,t,n,i,d,o=!1,s=function(e,t){document.getElementById("viewer").className="",setTimeout(function(){d.className="anm-swipe"},0),o=!0,document.ontouchstart=function(e){if("A"!=e.target.tagName)return!1}},a=function(){document.getElementById("viewer-box").className="",o=!1,document.ontouchstart=function(){return!0}};return{init:function(){i=document.getElementsByClassName("slider-trigger")[0],document.body.scrollHeight/document.body.scrollWidth,document.body.scrollWidth,0,function(){var i=document.getElementById("viewer");function o(e){return $("link.menu-list").attr(e)}i||((i=document.createElement("div")).id="viewer",i.className="hide"),e=document.getElementById("js-tagcloud"),t=document.getElementById("js-aboutme"),n=document.getElementById("js-friends");var s=e?'<span class="viewer-title">'+o("tags")+'</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>':"",a=n?'<span class="viewer-title">'+o("friends")+'</span><div class="viewer-div friends" id="js-mobile-friends"></div>':"",r=t?'<span class="viewer-title">'+o("about")+'</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>':"";i.innerHTML='<div id="viewer-box">        <div class="viewer-box-l">            <div class="viewer-box-wrap">'+r+a+s+'</div>        </div>        <div class="viewer-box-r"></div>        </div>',document.getElementsByTagName("body")[0].appendChild(i);var l=document.getElementById("viewer-box");d=l,l.style.height=document.body.scrollHeight+"px"}(),e&&(document.getElementById("js-mobile-tagcloud").innerHTML=e.innerHTML),t&&(document.getElementById("js-mobile-aboutme").innerHTML=t.innerHTML),n&&(document.getElementById("js-mobile-friends").innerHTML=n.innerHTML),function(){document.getElementById("viewer-box").addEventListener("webkitTransitionEnd",function(){0==o&&(document.getElementById("viewer").className="hide",o=!0)},!1),i.addEventListener("touchend",function(){s()},!1);var e,t=document.getElementsByClassName("viewer-box-r")[0];t.addEventListener("touchstart",function(){e=+new Date},!1),t.addEventListener("touchend",function(){+new Date-e<300&&a(),e=0},!1),$(".slider-trigger").click(function(){s()}),$(".viewer-box-r").click(function(){a()});var n=$("#mobile-nav .overlay"),d=$(".js-mobile-header");window.onscroll=function(){var e=document.documentElement.scrollTop+document.body.scrollTop;e>=69?n.addClass("fixed"):n.removeClass("fixed"),e>=160?d.removeClass("hide").addClass("fixed"):d.addClass("hide").removeClass("fixed")},d[0].addEventListener("touchstart",function(){$("html, body").animate({scrollTop:0},"slow")},!1)}(),resetTags()}}});