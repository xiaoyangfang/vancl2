define(["jquery"],function($){
	$.fn.extend({
		blouseSlideshow:function(){
			var $imgs = $(".blouse_slideshow li");
			var index = 0;
			var flag = false;
			var timer = null;
			$("#bPrev").click(function(){
				if(!flag){
					flag = true;
					$imgs.eq(index).fadeOut();
					if(--index < 0){
						index = $imgs.length-1;
					}
					$imgs.eq(index).fadeIn(function(){
						flag = false;
					});
				}
			});

			$("#bNext").click(function(){
				if(!flag){
					flag = true;
					$imgs.eq(index).fadeOut();
					if(++index >= $imgs.length){
						index = 0;
					}
					$imgs.eq(index).fadeIn(function(){
						flag = false;
					});
				}
			}); 

			$(".blouse_slideshow").hover(function(){
				clearInterval(timer);
			},(function autoPlay(){
				timer = setInterval(function(){
					$("#bNext").trigger("click");
				},2000);
				return autoPlay;
			})());
		}
	})
})