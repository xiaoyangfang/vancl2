define(["jquery"],function($){
	$.fn.extend({
 		detail:function(){
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
 		}
	})
})