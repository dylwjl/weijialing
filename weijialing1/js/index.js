onload=function(){
//	$('.index_top').load('head.html?_'+Math.random());
	
	
	var khfuwu=document.getElementsByClassName('khfuwu')[0];
	var a1=khfuwu.getElementsByTagName('a')[0];
	
	var khhover=document.getElementsByClassName('khhover')[0];
	var khfw_xl=document.getElementsByClassName('khfw_xl')[0];
	a1.onmouseover=function()
	{
//		khhover.style.display='block';
		
		khfw_xl.style.display='block';
		
	}
	
		a1.onmouseleave=function()
		{
			khfw_xl.onmouseover=function()
			{
				khfw_xl.style.display='block';
			}
	//		khhover.style.display='none';
			khfw_xl.style.display='none';
		}

//轮播图
var oList = document.getElementById("list");	
	// 将ul中的三张图片复制一份
	oList.innerHTML += oList.innerHTML;	
	// 【注意】 这个是 ul 中的所有 li
	var allLi = oList.getElementsByTagName("li");	
	// 【注意】是ul top:  0px --> -300px --> -600px
	var i = 0;
	var timer = setTimeout(move, 1000);	
	function move(){		
		i++;
		// 下一张图片的top值
		var iTop = -1 * i * 218;
		// 缓冲动画显示图片
		startMove(oList, "top", iTop, next);		
	}	
	function next(){
		
		// 判断当前已经滚到第二套图片第一张的位置，那么直接回到第一张
		if (i >= allLi.length/2) {
			i = 0;
			// 瞬间切换到第一张图
			oList.style.top = "0px";
		}		
		timer = setTimeout(move, 1000);
	}
	
	
}




$(function(){
//二级菜单
$(".nav-index-pro").hover(function(){
		$(".nav-class-bord").toggle();
	});
	$(".nav-class-bord li").hover(function(){
		$(this).find(".nav-erji-bord").toggle();
	});






	
//			$(this).on('mouseenter',function(){
//				
//				$(this).css('display','block');
//				console.log($(this).index());
//		})
//		$(this).find('.nav-class-bord').on('mouseout',function(){
//			$(this).find('.nav-erji-bord').eq(4).css('display','none');
//		})




//	$('#nav-class').find('.nav-class-bord').find('.nav-erji-bord').each(function(idx,val){
//		
//		console.log(idx);
//		$(this).on('mouseover',function(){
//			console.log(idx);
//			$(this).eq($(this).index()).css('display','block');
//		})
//	})
//	$('#nav-class').find('.nav-class-bord').find('.nav-erji-bord').hover(function(){
//		$(this).eq(0).css('display','block');
//	},function(){
//		$(this).eq(0).css('display','none');
//	})

//文字动图
//获取ul
function sxgd(obj,time){
		function AutoScroll(){
			$(obj).find("ul:first").animate({marginTop:"-20px"},500,function(){
		       $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
			});
		}
		var timer = setInterval(AutoScroll, time);
	}
    sxgd(".bnl-top",'2000');
    sxgd(".bnr-top",'3000');

//把图片放大
$(".ywbrand-list li").hover(function(){
//		var litb=$(this).find(".lit-brand");
//		var brandhref=litb.attr("href");
//		var brandsrc=litb.find("img").attr("bigurl");
//	    litb.addClass("lit-brandhover");
//		$(this).append("<a class='bigbrandimg' style='display:none;'><img src="+brandsrc+" /></a>");
		$(this).find(".lit-brandimg").fadeIn(50);
	},function(){
		$(this).find(".lit-brandimg").fadeOut(50);
//		$(".lit-brand").removeClass("lit-brandhover");
	});


//function loadimg(obj){
//		$(obj).find("img").each(function(){
//			$(this).attr("src",$(this).attr("data-url"));
//		});
//	};

//点击换图片
var gygnum=0;
	$(".gyg-hyh").click(function(){
		var gyglength=$(".gygpart").size();
		gygnum++;
//		loadimg(".gygpart:eq("+gygnum+")");
		$(".gygpart:eq("+gygnum+")").show().siblings(".gygpart").hide();
		if (gygnum == (gyglength-1)) {
				gygnum = -1;
		};
	});

//自动切换图片
var jpyfade = setInterval(jpyjb, 4000);
	var jpynum=0;
    function jpyjb(){
		var gyglength=$(".jpypart").size();
		jpynum++;
//		loadimg(".jpypart:eq("+jpynum+")");
		$(".jpypart:eq("+jpynum+")").fadeIn("slow").siblings(".jpypart").fadeOut("slow");
		if (jpynum == (gyglength-1)){
				jpynum = -1;
		};
	};	
	
})
	





