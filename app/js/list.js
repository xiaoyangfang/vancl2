require(["config"], function(){
	require(["jquery", "tools","template","cookie","header"], function($,tools,template,cookie,header){
		$("header").load("/html/component/header.html .top_bar,.top_bar2",function(){
			$("ul").header();
		});
		$("#vanclLogoSearch").load("/html/component/tshirt.html",function(){
			//同时发送异步请求渲染主体部分

			//从url上取出id参数，然后携带这个参数去请求当前数据
			var str = location.search.slice(1);
			var arr = str.split("=");
			var obj = {};
			obj[arr[0]] = arr[1];

			$.ajax({
				url:"http://localhost/webpage-project-www/api/vi/list.php",
				data: obj,
				method:"POST",
				dataType:"json",
				success: function(res){
					if(res.code === 1){
						 // console.log(res.product);
						var str = template("list-template",{product: res.product});
						$("#proList").html(str);
					}
				}
			})
		});
		$("footer").load("/html/component/footer.html",function(){
		});
	})
});