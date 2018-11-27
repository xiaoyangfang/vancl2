define(["jquery"],function($){
	$.fn.extend({
		header:function(){
			//weixin
			$(".weixin").mouseenter(function(){
				$("#weixin").css({"display":"block"});
			})
			$(".weixin").mouseleave(function(){
				$("#weixin").css({"display":"none"});
			})
			//2
			$(".vancl_option2,.vancl_option2 a").mouseenter(function(){
				$(".vancl_second").stop().slideDown("slow");
			})
			$(".vancl_option2,.vancl_option2 a").mouseleave(function(){
				$(".vancl_second").stop().slideUp("slow");
			})
			//3
			$(".vancl_option3,.vancl_option3 a").mouseenter(function(){
				$(".vancl_thirdly").stop().slideDown("slow");
			})
			$(".vancl_option3,.vancl_option3 a").mouseleave(function(){
				$(".vancl_thirdly").slideUp("slow");
			})
			//4
			$(".vancl_option4,.vancl_option4 a").mouseenter(function(){
				$(".vancl_fourthly").stop().slideDown("slow");
			})
			$(".vancl_option4,.vancl_option4 a").mouseleave(function(){
				$(".vancl_fourthly").stop().slideUp("slow");
			})
			//5
			$(".vancl_option5,.vancl_option5 a").mouseenter(function(){
				$(".vancl_fifth").stop().slideDown("slow");
			})
			$(".vancl_option5,.vancl_option5 a").mouseleave(function(){
				$(".vancl_fifth").stop().slideUp("slow");
			})
			//6
			$(".vancl_option6,.vancl_option6 a").mouseenter(function(){
				$(".vancl_sixth").stop().slideDown("slow");
			})
			$(".vancl_option6,.vancl_option6 a").mouseleave(function(){
				$(".vancl_sixth").stop().slideUp("slow");
			})
			//7
			$(".vancl_option7,.vancl_option7 a").mouseenter(function(){
				$(".vancl_seventh").stop().slideDown("slow");
			})
			$(".vancl_option7,.vancl_option7 a").mouseleave(function(){
				$(".vancl_seventh").stop().slideUp("slow");
			})
			//8
			$(".vancl_option8,.vancl_option8 a").mouseenter(function(){
				$(".vancl_eighth").stop().slideDown("slow");
			})
			$(".vancl_option8,.vancl_option8 a").mouseleave(function(){
				$(".vancl_eighth").stop().slideUp("slow");
			})
			//9
			$(".vancl_option9,.vancl_option9 a").mouseenter(function(){
				$(".vancl_ninth").stop().slideDown("slow");
			})
			$(".vancl_option9,.vancl_option9 a").mouseleave(function(){
				$(".vancl_ninth").stop().slideUp("slow");
			})
			//10
			$(".vancl_option10,.vancl_option10 a").mouseenter(function(){
				$(".vancl_tenth").stop().slideDown("slow");
			})
			$(".vancl_option10,.vancl_option10 a").mouseleave(function(){
				$(".vancl_tenth").stop().slideUp("slow");
			})
			var login = $.cookie("username");
		 	// console.log(login);
		 	$("#welcom").text("欢迎您"+login+"用户！").show();
		 	$("#login").hide();
		 	$("#register").hide();
		 	$("#quit").show();
		 	$("#quit").click(function(){
			 	$("#login").show();
			 	$("#register").show();
			 	$("#quit").hide();
			 	$("#welcom").hide();
			 	$.cookie(login,{expires:-1,path:"/"});
		 	});
		}
	})
})