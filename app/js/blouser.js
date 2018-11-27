require(["config"], function(){
	require(["jquery","tools","template","login","slideshow","header","blouseSlideshow","cookie"], function($,tools,template,login,slideshow,blouseSlideshow,header,cookie){
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html",function(){
				$("ul").header();
				resolve();
			});
			$("#lunbo").load("/html/component/lunbo.html",function(){
				$(".blouse_slideshow").blouseSlideshow();
			});
			$("#blouseMeun").load("/html/component/blouseMeun.html",function(){
				 // $("#blouseMeun").blouse();
				// console.log(555);
				//  console.dir($);
				// console.log($(".tabs").blouse);
				// console.log($(".tabs"));
				$(".tabs").mousemove(function(){
			 		$.ajax({
				 		method: "get",
				 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_webpage",
				 		success: function(res){
				 			//console.log(res);
				 			var html = template("pro-template",{blouse_webpage: res.products});
				 			$("#xinpin").html(html);
				 		}
			 		});
			 		$.ajax({
				 		method: "get",
				 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_shirt",
				 		success: function(res){
				 			//console.log(res);
				 			var html = template("pro-templatet",{blouse_shirt: res.product});
				 			$("#niujinfan").html(html);
				 		}
			 		});
			 		$.ajax({
				 		method: "get",
				 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_caroset",
				 		success: function(res){
				 			//console.log(res);
				 			var html = template("pro-templates",{blouse_caroset: res.product});
				 			$("#product_caroset").html(html);
		 				}
		 			});
		 			$.ajax({
				 		method: "get",
				 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_washablecotton",
				 		success: function(res){
				 			//console.log(res);
				 			var html = template("pro-templatef",{blouse_washablecotton: res.product});
				 			$("#product_washable").html(html);
			 			}
		 			});
		 			$.ajax({
				 		method: "get",
				 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_washableproductShirt",
				 		success: function(res){
				 			//console.log(res);
				 			var html = template("pro-templatex",{blouse_washableproductShir: res.product});
				 			$("#productShirt").html(html);
				 		}
			 		})
			 	});
			 	$("#tabsLeft").click(function(){
			 		$(this).css({"background":"#a10000"}).find("a").css({"color":"white"}).find("i").show();
			 		$(this).next().css({"background":"#f3f3f3"}).find("a").css({"color":"black"}).find("i").hide();
			 		$(".left_img").find("img").attr("src","/img/blouse/chpdg_03_02.jpg");
			 		$(".niujinfan").find("img").attr("src","/img/blouse/chpdg_10.jpg");
			 		$(".caroset").find("img").attr("src","/img/blouse/chpdg_20.jpg");
			 		$(".left").show();
			 		$(".right").hide();
			 	});
			 	$("#tabsRight").click(function(){
			 		$(this).css({"background":"#a10000"}).find("a").css({"color":"white"}).find("i").show();
			 		$(this).prev().css({"background":"#f3f3f3"}).find("a").css({"color":"black"}).find("i").hide();
			 		$(".left_img").find("img").attr("src","/img/blouse/xlfjgb7p.jpg");
			 		$(".niujinfan").find("img").attr("src","/img/blouse/swtq.jpg");
			 		$(".caroset").find("img").attr("src","/img/blouse/cstt.jpg");
			 		$(".left").hide();
			 		$(".right").show();
			 	})
			});
			$("footer").load("/html/component/footer.html",function(){

			});		 	
		})
	})
});