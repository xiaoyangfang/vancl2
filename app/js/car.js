require(["config"], function(){
 	require(["jquery", "tools","header","template","cookie"], function($,tools,header,template,cookie){
 		$("ul").header();
 		var cart = $.cookie("cart");
 		 // console.log(cart);
		if(cart){
			var json_cart = JSON.parse(cart);
			console.log(json_cart.length);
			if(json_cart.length === 0){
				window.location.reload();
				
				alert("购物车为空");

				location.href = "http://localhost:1314/html/tshirt.html";
			}
		}else{
			cart = [];
			if(cart.length === 0){
				alert("购物车为空");
				location.href = "http://localhost:1314/html/tshirt.html";
			}
		}
		
		var str = template("tableTemplate",{product:json_cart});
		  // console.log(str);
		$("#commodity").html(str);
		//渲染显示购物车页面
		$(".delet").click(function(){
			if(confirm("你确定要删除?")){
				$(this).parents("tr").remove();
				for(var i = 0; i < json_cart.length; i++){
					console.log($(this).parent().attr("data-id"),json_cart[i].id);
						if($(this).parent().attr("data-id") === json_cart[i].id){
							json_cart.splice(i,1);
						}
					}
					//console.log($(this).parent().parent().attr("data-id"),json_cart[i].id);
				var cart = JSON.stringify(json_cart);
				$.cookie("cart",cart,{expires:5,path:"/"});
				//location.reload();
			}
			                 
		})
		$("#delete").click(function(){
			if(confirm("你确定要清空?")){
				$.cookie("cart",cart,{expires:-1,path:"/"});
				window.location.reload();
			};
			
		})
		$(function(){
			/*总价*/
			function test(){
				var sum=0;
				var num = 0;
				// console.log($(".price"));
				$(".checkbox:checked").each(function(index, domEle){
					var prices = $(this).parent().next().next().next().next().find("i").text();
					// console.log(prices);
					var nums  = $(this).parent().next().next().next().next().next().find("i").text();
					// console.log(nums);
					sum+=prices*nums;
					num += parseInt(nums);
				});
				$(".allPrice").text(sum);
				$("#packages").text(num);
				// console.log(sums);
			}
			var len = $(".checkbox").length;
			var sums = 0;
			/*全选*/
			$("#allCheckbox").click(function(){
				var allCheckbox = $(this).prop("checked");
				if($(this).prop("checked")){
					sums = len;
					$(".checkbox").prop("checked",true);
					$("#checkbox").prop("checked",true);
				}else{
					sums = 0;
					$(".checkbox").prop("checked",false);
					$("#checkbox").prop("checked",false);
				};
				test();
			});
			/*全选*/
			$("#checkbox").click(function(){
				if($(this).prop("checked")){ 
					sums = len;
					$(".checkbox").prop("checked",true);
					$("#allCheckbox").prop("checked",true);
				}else{
					sums = 0;
					$(".checkbox").prop("checked",false);
					$("#allCheckbox").prop("checked",false);
				}
				test();
			});
			/*单个*/
			$(".checkbox").click(function(){
				// console.log(sums);
				if($(this).prop("checked")){
					sums++;
				}else{
					sums--;
				}
				if(sums === len){
					$("#checkbox").prop("checked",true);
					$("#allCheckbox").prop("checked",true);
				}else{
					$("#allCheckbox").prop("checked",false);
					$("#checkbox").prop("checked",false);
				}
				test();
			});
			/*减*/
			$(".minus").click(function(){
				var nums =$(this).next().text();
				if(--nums<1){
					nums = 1; 
				}
				var prices = $(this).parent().prev().find(".prices").text();
				$(this).next().text(nums);
				// console.log(prices);
				$(this).parent().next().next().find(".sprice").text(parseInt(nums*prices));
				var val = $(this).next().text();
				for(var i = 0; i < json_cart.length; i++){
					if($(this).parent().parent().attr("data-id") === json_cart[i].id){
						//console.log(val)
						json_cart[i].nums = val;

					}
					console.log(json_cart);
					var cart = JSON.stringify(json_cart);
				    $.cookie("cart",cart,{expires:5,path:"/"});
				}
				test();
			})
			/*加*/
			$(".add").click(function(){
				var cart = $.cookie("cart");
				var json_cart = [],
				 json_cart = JSON.parse(cart);
				 console.log(json_cart);

				var nums =$(this).prev().text();
				
				nums++;
				var prices = $(this).parent().prev().find(".prices").text();
				// console.log(prices.val());
				$(this).prev().text(nums);
				$(this).parent().next().next().find(".sprice").text(parseInt(nums*prices));
				var val = $(this).prev().text();
				for(var i = 0; i < json_cart.length; i++){
					if($(this).parent().parent().attr("data-id") === json_cart[i].id){
						console.log(val)
						json_cart[i].nums = val;

					}
					console.log(json_cart);
					var cart = JSON.stringify(json_cart);
				    $.cookie("cart",cart,{expires:5,path:"/"});
				}
				test();
			})
		})
 	})
 })