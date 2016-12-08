$(function()
{
			
	$.get('index.txt',function(response)
	{
		var obj = JSON.parse(response);
//		var pageCount = obj.totalCount % obj.pageSize > 0 ? parseInt(obj.totalCount / obj.pageSize) + 1 :  parseInt(obj.totalCount / obj.pageSize)
		var pageFlag = '';
//		console.log(obj)
//		console.log(obj.show_per_page)
//		console.log(obj.result)
		var a=obj.result;
		console.log("长度"+a.length);
		//遍历title
		$.each(a,function(index,val){
			//大的div		           			             
            var $product = $('<div class="pro_list"></div>');
            var $wrap = $('<div class="pro_list1"></div>');
            
            var $img  = $('<p class="p1"><a href="#" class="imge1" ><img src="'+ val.src +'"/></a></p>'); 
            var $oul=$('<ul><li class="price1">'+val.title+'</li><li class="miaoshu1">'+val.price+'</li><li class="miaoshu2"></li><span class="miaoshu21">'+val.miaoshu+'</span><span class="miaoshu22"><a href="#"><img src="'+ val.src1 +'"/></a></span></ul>')
    		
            $product.appendTo('#frame');
            $wrap.appendTo($product)
            
              $img.appendTo($wrap);
              $oul.appendTo($wrap);
              				              
					    
		   })	


						
		//设置当前的内容有多少
		var show_per_page=obj.show_per_page;
		//设置全部内容的长度
		var number_of_items=$('.pro_list').children().size();
		//设置有多少页
		var number_of_pages=Math.ceil(number_of_items/show_per_page);
		//设置显示当前页的下标
		$('#current_page').val(0);
		//设置显示现在的内容是5个长度
		$('#show_per_page').val(show_per_page);
		
		//下面为设置分页的按钮
		var navigation_html = '<a class="previous_link" href="javascript:previous();">上一页</a>';
		var current_link = 0;
		while(number_of_pages > current_link){
			navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
			current_link++;
		}
		navigation_html += '<a class="next_link" href="javascript:next();">下一页</a>';
		//将分页的按钮添加到div里面
		$('#page_navigation').html(navigation_html);	
		//设置默认的第一个按钮的样式
		$('#page_navigation .page_link:first').addClass('active_page');
		//先设置所有的内容为none
		$('.pro_list').children().css('display', 'none');
		//设置现在的内容是可见的
		$('.pro_list').children().slice(0, show_per_page).css('display', 'block');
		console.log($('.pro_list').children().slice(0, show_per_page).length)
	})
	
	
	
	
	
})
		function previous(){
			new_page = parseInt($('#current_page').val()) - 1;
			if($('.active_page').prev('.page_link').length==true){
				go_to_page(new_page);
			}
		}
		function next(){
			new_page = parseInt($('#current_page').val()) + 1;
			//if there is an item after the current active link run the function
			if($('.active_page').next('.page_link').length==true){
				go_to_page(new_page);
			}
		}
		function go_to_page(page_num){
		//获取当前的内容的长度
		var show_per_page = parseInt($('#show_per_page').val());
		start_from = page_num * show_per_page;
		end_on = start_from + show_per_page;
		//点击那里就显示哪里
		$('.pro_list').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
		//添加样式
		$('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
		//点击那里然后下标就显示出来
		$('#current_page').val(page_num);
		
		}