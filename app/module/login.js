define(["jquery"],function($){
	$.fn.extend({
		login:function(){
			var $infor = $(".login .infor"),
				$quick = $(".login .quick"),
				$user_infor = $(".login .user_infor"),
				$user_quick = $('.login .user_quick');
			$infor.on("click",function(){
				$quick.css({"background":"#f5f5f5","color":"#656565","border-bottom":"1px solid #D1D1D1"});
				$infor.css({"background":"#b42025","font-weight":"bolder","color":"white"});
				$user_infor.css({"display":"block"});
				$user_quick .css({"display":"none"});
			})
			$quick.on("click",function(){
				$infor.css({"background":"#f5f5f5","color":"#656565","border-bottom":"1px solid #D1D1D1"});
				$quick.css({"background":"#b42025","font-weight":"bolder","color":"white","height":"35px","line-height":"35px"});
				$user_quick.css({"display":"block"});
				$user_infor.css({"display":"none"});
			})
		}
	})
})