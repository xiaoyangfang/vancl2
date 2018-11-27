 require(["config"],function(){
 	require(["jquery","tools","login"],function($,tools,login){
 		$("#form").submit(function(e){
 			//alert(666);
 			var username = $(".username").val(),
 				password = $(".password").val(),
 				yzm = $(".yzm").val(),
 				passwordt = $("passwordt").val();
 			var user = /^[1][3,4,5,7,8,9][0-9]{9}$/;
 			var pwd = /^[\w_-]{6,16}$/;
 			var  arr = [false,false,false,false];
 			if(yzm === "EYCG3Y"){
 				arr[0] = true;
 			}else{
 				alert("请输入正确验证码");
 				return false;	
 			};
 			if(user.test(username)){
 				arr[1] = true;
 			}else{
 				alert("请输入正确的手机号！");
 				return false;
 			};
 			if(pwd.test(password)){
 				arr[2] = true;
 			}else{
 				alert("请输入6-16位密码，不区分大小写！");
 				return false;
 			};
 			if(password){
 				arr[3] = true;
 			}else{
 				alert("两次密码不一致");
 				return false;
 			};
 			
 			var isPass = arr.every(function(item){
 				return item;
 			});
 			if(isPass){
 				var data = {
 					"username" : $(".username").val(),
 					"password" : $(".password").val()
 				}
 			}

 			$.ajax({
 				type:"post",
 				data: data,
 				dataType: "json",
 				url:"http://localhost/webpage-project-www/api/vi/register.php",
 				async:true,
 				success:function(res){
 					if(res.code === 1){
 						alert("注册成功！");
 						location.href = "http://localhost:1314/html/login.html";
 					}else{
 						alert("注册失败！");
 						//location.reload();
 					}
 				}
 			});
 		
 			return false;
 		})
 	})
})


