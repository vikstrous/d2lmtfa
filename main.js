setInterval(function(){
	$.get("/d2l/lp/auth/sessionTimeout/extend.d2l");
}, 1000*60*30);
$.getScript("https://raw.github.com/vikstrous/d2lmtfa/master/injectme.js", function() {});