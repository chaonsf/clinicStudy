$(".biaoti div").on("click",function(){
	var num=$(this).index();
	$(this).siblings().find("span").removeClass("bb");
	$(this).find("span").addClass("bb");
	$(".twob .row").eq(num).addClass("aa").siblings().removeClass("aa");
	if(num==0){
		$(".xuanxiangka .row div ul").eq(0).show().siblings().hide();
		
	}
	if(num==1){
		$(".xuanxiangka .row div ul").eq(5).show().siblings().hide();
		
	}
	if(num==2){
		$(".xuanxiangka .row div ul").eq(10).show().siblings().hide();
	}
})

$(".xuanxiangka .row div ul li").on("click",function(){
	var aa=$(this).attr("index");
	localStorage.setItem("yy",aa);
	window.location.href="shipin.html"
})
$(".twob .row div").on("click",function(){
	var namer=$(this).find("span").html();
	if(namer=="正畸"){
		$(".xuanxiangka .row div ul").eq(1).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="口内"){
		$(".xuanxiangka .row div ul").eq(0).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="修复"){
		$(".xuanxiangka .row div ul").eq(2).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="美学"){
		$(".xuanxiangka .row div ul").eq(3).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="种植"){
		$(".xuanxiangka .row div ul").eq(4).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="备牙"){
		$(".xuanxiangka .row div ul").eq(5).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="根管"){
		$(".xuanxiangka .row div ul").eq(6).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="树脂"){
		$(".xuanxiangka .row div ul").eq(7).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="麻醉"){
		$(".xuanxiangka .row div ul").eq(8).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="手术"){
		$(".xuanxiangka .row div ul").eq(9).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="诊所之路"){
		$(".xuanxiangka .row div ul").eq(10).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
	if(namer=="执业考试"){
		$(".xuanxiangka .row div ul").eq(11).show().siblings().hide();
		$(this).addClass("yui").siblings().removeClass("yui");
	}
})
