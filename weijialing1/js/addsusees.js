// 函数名： addCookie
// 参数：
//    name:  cookie 的名字
//    val: cookie 的值
//    day: 多少天以后过期
// 返回值为空
function addCookie(name, val, day)
{
	var oDate = new Date();

	oDate.setDate(oDate.getDate() + day);
	
	document.cookie = ""+name+"="+val+";expires=" + oDate;
	
}

// 函数名： getCookie
// 参数：
//    name 得到的cookie 的名字
// 返回值： 如果等于"",说明没有找到，否则，就是所对应cookie 的值

// 找 cookie 名字为 username 所对应的值
// var username = getCookie("username");

function getCookie(name)
{
	// 得到cookie
	// username=老马; password=123456
	var str = document.cookie;

	// 按照 ; 分割
	var arr = str.split("; ");
	// username=老马
	// password=123456

	for (var i = 0; i < arr.length; i++)
	{
		var arr1 = arr[i].split("=");
		
		if (arr1[0] == name)
		{
			
			return arr1[1];
		}
	}
	// 如果一个都找不到，就返回 "";
	
	return "";	
}
// 删除一个 cookie 
///  将这个 cookie 的过期时间 设成 昨天，系统会自动清除掉
function removeCookie(name)
{
	addCookie(name, 1, -1);
}

function binding(oElem, eventName, fn)
{
	// 如果绑定对象中存在 attachEvent 这个方法，
	// 说明是在IE浏览器中
	if (oElem.attachEvent)
	{
		// eventName  :  click ==> onclick
		oElem.attachEvent("on" + eventName, fn);
	}
	else
	{	
		oElem.addEventListener(eventName, fn, false);
	}
}

$(function(){
	var str = getCookie("arr");
	var arr = eval(str);
	console.log(arr);
	if(arr.length>0)
	{
		var frame2=document.getElementById('frame');
		var frame1=document.getElementById('frame1');
		var zj=document.getElementsByClassName('zj')[0];
		frame2.style.display='none';
		frame1.style.display='block';
		zj.style.display='block';
	}
	
	for (var i = 0; i <arr.length; i++)
	{		
//			console.log(arr[i].danjia);
			//大的div
			var $frame1=$('#frame1');
			var $odiv=$('<div class="cart_company"></div>');	
//			$odiv.addClass('cart-company');
//			$odiv.addClass("i");
			//中的div
			var $odiv1=$('<div></div>');	
			var $odiv2=$('<div></div>');	
			$odiv1.addClass('company');
			$odiv2.addClass('cart-pro');
			$odiv.append($odiv1);
			$odiv.append($odiv2);
			
			//company里的四个span
			var $span1=$('<span></span>');
			var $span2=$('<span></span>');
			var $span3=$('<span></span>');
			var $span4=$('<span></span>');
			
			var $input1=$('<input/>');
			$input1.attr('type','checkbox');
			
			$span1.addClass('sp1x');
			$span1.append($input1);
			$span1.text('商铺');
			
			$span2.addClass('sp2x');
			$span2.text('春秋仿真花');
			
			
			$span3.addClass('sp3x');
			var $a1=$("<a></a>");
			var $a2=$("<a></a>");
			var $a3=$("<a></a>");
			var $img1=$("<img/>");
			var $img2=$("<img/>");
			var $img3=$("<img/>");			
			$img1.attr('src','img/Connect_logo_1.png');
			$img2.attr('src','img/Connect_logo_1.png');
			$img3.attr('src','img/Connect_logo_1.png')
			$a1.append($img1);
			$a2.append($img2);
			$a3.append($img3);
			$span3.append($a1);
			$span3.append($a2);
			$span3.append($a3);
			
			
			$span4.addClass('sp4x');
			var $a4=$("<a></a>");
			$a4.text('继续购买');
			$span4.append($a4);
			$odiv1.append($span1);
			$odiv1.append($span2);
			$odiv1.append($span3);
			$odiv1.append($span4);
			//第二块
			var $input3=$('<input/>');
			$input3.attr('type','checkbox');
			$input3.attr('name','ck');
			$input3.attr('value','1')
			$odiv2.append($input3);
			
			var $odiv2_1=$('<div></div>');
			var $a2_1=$("<a></a>");
//			var $img2_1=$("<img/>");
			$a2_1.addClass('hua1cookie');
			//图片
//			$img2_1.attr('src','arr[i].product');
			$a2_1.append($("<img src='"+arr[i].product+"'>"));
			$odiv2_1.append($a2_1)
			$odiv2_1.addClass('pro-img');
			$odiv.append($odiv2_1);
			
			
			var $odiv2_2=$('<div></div>');
			$odiv2_2.addClass('pro-con');
			
			var $oul1=$("<ul></ul>");
			var $li1=$("<li></li>");
			var $li2=$("<li></li>");
			
			$li1.addClass('c-blink');
			$li1.text('高档仿真花湘妃兰蜘蛛兰花束');
			$li2.text('粉色颜色');
			
			$oul1.append($li1);
			$oul1.append($li2);
			$odiv2_2.append($oul1);
									
			
			var $odiv2_3=$('<div></div>');
			$odiv2_3.addClass('pro-deta');
			var $oul2_1=$("<ul></ul>");
			var $li2_1=$("<li></li>");
			var $li2_2=$("<li></li>");
			var $li2_3=$("<li></li>");
			var $li2_4=$("<li></li>");
			var $li2_5=$("<li class='oli5'></li>");
			$li2_5.text(arr.length);
			$li2_5.css('display','none');
			
			$li2_1.addClass('pro-price');
			$li2_1.html(arr[i].danjia);
			$li2_2.addClass('pro-number');
			var $oinput2_2_1=$('<input/>');
			var $oinput2_2_2=$('<input/>');
			var $oinput2_2_3=$('<input/>');
			$oinput2_2_1.attr('type','button');
			$oinput2_2_1.val('-')
			$oinput2_2_2.attr('type','text');
			$oinput2_2_3.attr('type','button');
			$oinput2_2_3.val('+');
			$oinput2_2_2.val(arr[i].shuliang);
			$li2_2.append($oinput2_2_1);
			$li2_2.append($oinput2_2_2);
			$li2_2.append($oinput2_2_3);
			
			$li2_3.addClass('pro-price-all');
			$li2_3.text(arr[i].danjia*arr[i].shuliang);
			
			$li2_4.addClass('pro-del');
			$li2_4.text('删除');
			$oul2_1.append($li2_1);
			$oul2_1.append($li2_2);
			$oul2_1.append($li2_3);
			$oul2_1.append($li2_4);
			$oul2_1.append($li2_5);
			
			$odiv2_3.append($oul2_1);
			$odiv2.append($odiv2_1);
			$odiv2.append($odiv2_2);
			$odiv2.append($odiv2_3);
			$frame1.append($odiv);
			
//			var $zongji1=$('')
//			$frame1.append($zongji1);
			
			
	
				
//		console.log(arr[i].danjia*arr[i].shuliang);
//		console.log(arr[i].shuliang);
	//这个}是for循环里面的
	}
	
	$('.pro-number').each(function(idx,val){
//		var ii=idx;
//		console.log($(this).eq(0).children('input').length);
//		$(this).
//		console.log($('.pro-number').eq(idx).children('input').eq(0));
		$('.pro-number').eq(idx).children('input').eq(0).click(function(){
//			console.log(11);
			var hesuan=$(this).next().val();
			
//			console.log(hesuan);
			hesuan--;
			$(this).next().val(hesuan);
			var bianliang=$(this).next().val();
			var danjia=$(this).closest('.pro-number').prev('.pro-price').text();
//			console.log(danjia);
			var zong1=bianliang*danjia;
			console.log(zong1)
			$(this).closest('.pro-number').next('.pro-price-all').text(zong1);		
			
		})
		
		$('.pro-number').eq(idx).children('input').eq(2).click(function(){
//			console.log(12);
			var hesuan1=$(this).prev().val();			
//			console.log(hesuan1);
			hesuan1++;
			$(this).prev().val(hesuan1);
			var bianliang1=$(this).prev().val();
			var danjia1=$(this).closest('.pro-number').prev('.pro-price').text();
			var zong2=bianliang1*danjia1;
//			console.log(j);
			$(this).closest('.pro-number').next('.pro-price-all').text(zong2);
						
		})		

	})
	
//		console.log($('.pro-del').length);
		$('.pro-del').each(function(idx,val){
//			console.log(idx);
//			$(this).eq(idx).xx=idx;
			$(this).click(function(){
				console.log(idx);
				$(this).closest('.cart_company').remove();
				console.log(arr.length);
				//截取长度
				arr.splice(idx,1);
//				console.log(arr);
//				arr.toSource();
				console.log(arr.toSource());
				removeCookie(arr);
				addCookie("arr",arr.toSource(),7);
				
			})
			
		})
			
			
		
		
//		$(this).closest('.cart_company').remove();
//		console.log($(this).index());

	

	
	
	

//	var pro_del=$('.pro-del');
//	var $check=$('.cart-pro').children('input[type=checkbox]');
	
//		alert(234);
//		pro_del.click(function(){
//			if($check.prop('checked'))
//			{
//				console.log($check.resize());
//				console.log(this);
				
//				alert("确定删除吗？");
//				console.log($(this).next().text());
				
				
//				$('.cart-company').remove();
				
		
//			}
//			else{				
//					alert("请勾选");
//			}	
//		})
	//这个}是for循环里面的
	
})