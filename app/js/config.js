require.config({
	baseUrl: "/",
	paths: {
		"header": "module/header",
		"blouse": "module/blouse",
		"blouseSlideshow": "module/blouseSlideshow",
		"login": "module/login",
		"slideshow": "module/slideshow",
		"jquery": "libs/jquery/jquery-1.11.3",
		"bootstrap": "libs/bootstrap/js/bootstrap",
		"tools": "libs/tools",
		"template": "libs/template-web",
		"cookie": "libs/jquery.cookie"
	},
	//垫片
	shim:{
		"bootstrap": {
			deps: ["jquery"]
		}
	}
})