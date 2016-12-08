onload=function(){
	//产生验证码
	var yam=document.getElementsByClassName('lable-yzm')[0];
	var sjs=Math.floor(Math.random()*10000+1000);
	yam.innerHTML=sjs;
	
	//触发input时输出信息提醒
	var passworddiv1=document.getElementById('passworddiv');
	var mobilemadiv1=document.getElementById('mobilemadiv');
	var mobilediv1=document.getElementById('mobilediv');
	
	var mobile1=document.getElementById('mobile');
	var mobilema1=document.getElementById('mobilema');
	var password1=document.getElementById('password');
	mobile1.onclick=function(){
		mobilediv1.style.display='inline-block';
		mobilediv1.style.fontSize='12px';
	}
	mobilema1.onclick=function(){
		mobilemadiv1.style.display='inline-block';
		mobilemadiv1.style.fontSize='12px';
	}
	password1.onclick=function(){
		passworddiv1.style.display='inline-block';
		passworddiv1.style.fontSize='12px';
	}
	$(function(){
		var ok1=false;	
		var ok2=false;
		var ok3=false;
	
	$('#mobile').focus(function(){
           
        }).blur(function(){
                	var reg = /^1[34578]\d{9}$/;
//^1[34578]\d{9}$/
        	if(reg.test(this.value)==false){
               $('#mobileerrorInfo').text('验证错误')
            }else{                  
                  $('#mobileerrorInfo').text("输入正确!");
                   ok1=true;
            }
           
        });
	

	$('#mobilema').focus(function(){
           
        }).blur(function(){
//              	var reg = /\w+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
        	if($(this).val()!=$('.lable-yzm').text()){
               $('#errorInfo1').text('输入错误')
            }else{                  
                   $('#errorInfo1').text("输入正确!");
                   ok2=true;
            }
           
        });
	$('#password').focus(function(){
           
        }).blur(function(){
//              	var reg = /\w+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
        	if($(this).val().length >= 6 && $(this).val().length <=20 && $(this).val()!='')
        	{
               $('#errorInfo2').text('输入正确')
                ok3=true;
            }else
            {
                   $('#errorInfo2').text("输入不正确!");
                  
            }
           
        });
        
        
        
        $('#submitmobilejoinbtn').click(function()
        {
        	
        	if(ok1&&ok2&&ok3)
        	{
        		
        		console.log("sd");
        		var str = getCookie("arr");
        		console.log("sd1");
				var arr = [];
				if (str != "")
				{
					arr = eval(str);
				}
					var btn1= document.getElementById("submitmobilejoinbtn");
					console.log("sd1");
					btn1.onclick= function()
					{
						// 这个是手机号
						console.log('22');
						var mobile=document.getElementById('mobile');						
						// 手机验证码
						var mobilema =document.getElementById("mobilema");
						//密码			
						var password1=document.getElementById('password');
						        
						var obj = {};
						obj.product =mobile.value;
						obj.price = mobilema.value;
						obj.shuliang=password1.value;
						
						// 将创建好的商品添加到数组中
						arr.push(obj);
						addCookie("arr",arr.toSource(),7);
			            alert("obj");			
						alert("添加成功");
						window.open('login.html');
			//			var btn=document.getElementById('submitmobilejoinbtn');			
			//			btn.href='.html';
					}		
			}		
				       	
       	
        	else
        	{
       			return false
       		}        	
        	
        })   
        
	})

	
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

