require(["config"], function(){
	require(["jquery", "tools", "login","slideshow","header","cookie"], function($,tools,login,slideshow,header,cookie){
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html",function(){
				resolve();
				$("ul").header();
			});
			$("footer").load("/html/component/footer.html",function(){
			});
			$("section").load("/html/component/section.html",function(){
				$("#vancl_scroll").slideshow({
					prev:"left",
					next:"right"
				});
			});
		 })
	 	$(".login").login();
	})
});