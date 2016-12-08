
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



onload = function() {

	var str = getCookie("arr");

	// 用于存储所有的商品
	var arr = [];
	if (str != "")
	{
		// 说明之前 cookie 中有商品的内容
		// 取出来转换成数组
		arr = eval(str);
	}
	//var arr = [];

	// 商品由 名称 和 价格组成
	// 例如：
	// {product: XXX, price: 180}
	var allA = document.getElementById("jrgwc");
	var shuliang1=document.getElementById('shuliang1');
			//获取单价
	var danjia1=document.getElementsByClassName('danjia1')[0];
	
		allA.onclick= function()
		{
			
			// 这个是照片
			var odivimg=document.getElementsByClassName('view_pro_con_text')[0];
			var op=odivimg.getElementsByTagName('p')[0];
			var oimge=op.getElementsByTagName('img')[0];
			// 取出商品名字
			var ohua =document.getElementById("hua");
			var shuliang1=document.getElementById('shuliang1');
			//获取单价
			var danjia1=document.getElementsByClassName('danjia1')[0];
			
			// 取出标签对象中的名字，也就是商品的名称
			// 函数库中自定义的函数
			// 添加了一个 cookie,名字是 product, 内容是 商品的信息, 过期时间是 7天后
			//alert(oSpan.innerHTML);
			
			// 转换成一个
			// var str = encodeURI(oSpan.innerHTML);
            
			var obj = {};
//			obj.id=id;
			obj.product = oimge.src;
			obj.price = ohua.innerHTML;
			obj.shuliang=shuliang1.value;
			obj.danjia=danjia1.innerHTML;
			// 将创建好的商品添加到数组中
			arr.push(obj);
           
			// 将数组的内容设置到 cookie 中呢？
			// cookie 的名字是 arr, 内容是数组中的商品，过期时间是7天以后
			
			addCookie("arr",arr.toSource(),7);
            alert("obj");
			/*
			addCookie("product", oSpan.innerHTML, 7);
			
			// 函数库中自定义的函数
			// 添加了一个 cookie,名字是 price, 内容是商品的价格, 过期时间是 7天后 
			addCookie("price", oPrice.innerHTML, 7);
			//*/
			
			alert("添加成功");
			var jrgwc=document.getElementById('jrgwc');
			
			jrgwc.href='shopcat.html';
		}
		
		var zongji1=document.getElementById('zongji1');
		var heji=(shuliang1.value)*(danjia1.innerHTML);
		zongji1.innerHTML=heji;
		shuliang1.oninput=function(){
			zongji1.innerText=(shuliang1.value)*(danjia1.innerHTML);
		}
//		shuliang1.onfocus();
		
	}


//	var btnGoto = document.getElementById("goto");
//	
//	btnGoto.onclick = function() {
//		// 跳转到另一个页面？
//		
//		location.href = "cookie我的购物车mycookie.html";
//	}
//}

