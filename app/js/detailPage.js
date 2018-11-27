require(["config"], function(){
 	require(["jquery", "tools","header","template","cookie"], function($,tools,header,template,cookie){
 		new Promise(function(resolve, reject){
 			$("header").load("/html/component/header.html",function(){
 				$("ul").header();
 				resolve();				
 			});
 			$("#detailPage").load("/html/component/detailPage.html",function(){
 			});

			$("footer").load("/html/component/footer.html",function(){
			});
 		}).then(function(){
			var str = location.search.slice(1);
			var arr = str.split("=");
			var obj = {};
			obj[arr[0]] = arr[1];
			$.ajax({
			  	url:"http://localhost/webpage-project-www/api/vi/detail.php",
			  	data: obj,
			  	method:"POST",
			  	dataType:"json",
			  	success: function(res){
			  		if(res.code === 1){
			  			// console.log(res);as
			  			var str = template("detail-template",{product: res.product});
			  			$(".detail_head").html(str);
			  		}
			  		/**/
			  		// console.log(res);
	 				$(".Txt").click(function(){
	 					$(".colorImgli").css({"border":"3px solid #a10000"});
						$(".d").show();
						$(".colorImgtli").css({"border":"1px solid #B4B4B4"});
						$(".pic").find("img").attr({"src","/img/detail/1.1.jpg"});
						$(".dt").hide();
						$(".s").hide();
						$(".xxl").hide();
						$(".black").show();
						$(".white").hide();
						$(".danpinli").show();
						$("#img").attr({"src","/img/detail/1.1.jpg"});
						$("#bigimg").attr({"src","/img/detail/1.jpg"});
	 				})
					 $(".tTxt").click(function(){
					 	$(".colorImgtli").css({"border":"3px solid #a10000"});
					 	$(".dt").show();
						$(".colorImgli").css({"border":"1px solid #B4B4B4"});
						$(".d").hide();
						$(".pic").find("img").attr({"src","/img/detail/1.1.2.jpg"});
					 	$("#bigimg").attr({"src","/img/detail/1.2.jpg"});
					 	$("#img").attr({"src","/img/detail/1.2.2.jpg"});
					 	$(".white").show();
						$(".black").hide();
					 })
					$(".smallImg").mousemove(function(e){
				        var _left = e.pageX - $(this).offset().left - $("#fdj").width()/2,
				            _top = e.pageY - $(this).offset().top - $("#fdj").height()/2;
				            // console.log(_left);
				        if(_left < 0) _left = 0;
				        if(_top < 0) _top = 0
				        if(_left > $(this).width() - $("#fdj").width()) _left = $(this).width() - $("#fdj").width();
				        if(_top > $(this).height() - $("#fdj").height()) _top = $(this).height() - $("#fdj").height();
				       //放大镜
				        $("#fdj").show();
				        $(".bigImg").show();
				        //move
				        $("#fdj").css({"left":_left});
				        $("#fdj").css({"top":_top});
				        //
				        $("#bigimg").css({"left": -2* _left});
				        $("#bigimg").css({"top": -2*_top});

				        // console.log($("#bigimg").offset().top);
				    })
				    $(".smallImg").hover(function(){
				    	$("#fdj").hide();
				    	$(".bigImg").hide();
				    })	
			    	var rightcar = $(".rightcar");
			    	var cart = $.cookie("cart");
			    	var arr=[];
			    	if(cart){
			    		arr = JSON.parse(cart);
			    	}
				    rightcar.click(function(){
				    	
				    		
				    		for(var i = 0;i<arr.length;i++){
					    		if(arr[i].id === res.product.id){
					    			arr[i].nums++;
					    			break;
					    		}
					    		console.log(i,arr.length);
					    		
					    	}
					    	if(i === arr.length){
				    			var carProduct = {
					    		id : res.product.id,
					    		name : res.product.name,
					    		price : res.product.price,
					    		img : res.product.img,
					    		nums:1
					    	}
				    			arr.push(carProduct);
				    		}
				    	
			
				    	console.log(arr);
				    	var str = JSON.stringify(arr);
				    	$.cookie("cart",str,{
				    		path:"/"
				    	});

				    	location.href = "http://localhost:1314/html/car.html";

				    });
			  	}
			});
 		});
 	});
});