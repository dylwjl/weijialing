
onload=function(){
	

var user1=document.getElementById('user1');
var mima=document.getElementById('mima');
var denglu=document.getElementsByClassName('input_button')[0];
        		
//console.log("sd");
var str = getCookie("arr");

//console.log("sd1");
var arr = [];
if (str != "")
{
	arr = eval(str);
}	
//	console.log(arr);	
//	for (var i=0;i>=arr.length;i++) {		
		denglu.onclick=function()
	{
//		alert(9);
		console.log('2');
		console.log(arr[0].product);
		//获取用户的名字
		var username=user1.value;
		var usermima=mima.value;
		//cookie里
		var u1=arr[0].product;
		var psw=arr[0].shuliang;
		console.log(username);
		if(u1==username&&psw==usermima)
		{
			alert('用户登录成功');
			window.open('index.html');
		}else{
			alert('用户名或密码错误');
		}		
	}	
		
		
		
		
		
		
//	}
}		
					
				       	
       	
        	   	
        	
          
function addCookie(name, val, day)
{
	var oDate = new Date();

	oDate.setDate(oDate.getDate() + day);
	
	document.cookie = ""+name+"="+val+";expires=" + oDate;
	
}
function getCookie(name)
{
	var str = document.cookie;
	var arr = str.split("; ");
	for (var i = 0; i < arr.length; i++)
	{
		var arr1 = arr[i].split("=");
		
		if (arr1[0] == name)
		{
			
			return arr1[1];
		}
	}
	return "";
	
}
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