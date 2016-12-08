$(document).ready(function(){
	$('.con-ta-in li').first().addClass('first')
	$(".con-ta-in li").click(function(){
		var index=$(this).index()
		$('.con-ta-in li').removeClass('first').eq(index).addClass('first')
		$('.tabs-in-con').hide().eq(index).show()
	})
	//back
	$(window).scroll(function(){
		if($(window).scrollTop()>156){
			$('.back').css("display","block")
		}else{
			$('.back').css("display","none")
		}
	})
	$('.back').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	//
	$(window).scroll(function(){
		if($(window).scrollTop()>156){
			$('.fx-dh').slideDown()
		}else{
			$('.fx-dh').slideUp()
		}
	})
	//lunbo
	var lunbo=$('.x-lunbo .container')
	var pic=$('.x-lun');
	var imgBox=$('.bottom-lb');
//	var width=pic.width();
	var left=$('.x-left');
	var right=$('.x-right');
	var flog=true
	var t=setInterval(move,2000);
	function move(){	
		if(!flog){
			return
		}
		flog=false
		var width=pic.width()+20;
		imgBox.stop(true).animate({left:-width},600,function(){
			var first=$('.bottom-lb .x-lun:first-child')
			imgBox.append(first)
			imgBox.css("left",0)
			flog=true
		})
	}
	lunbo.mouseover(function(){
		clearInterval(t);
	})
	lunbo.mouseout(function(){
		t=setInterval(move,2000);
	})
	right.click(function(){
		move()
	})
	left.click(function(){
		if(!flog){
			return
		}
		flog=false
		var width=pic.width()+20;
		var first=$('.bottom-lb .x-lun:first-child')
		var last=$('.bottom-lb .x-lun:last-child')
		first.stop(true).before(last)
		imgBox.css("left",-width)
		imgBox.animate({left:0},600,function(){
			flog=true
		})

	})
	//
	//
	var n1=0
	var flag=true
	var t1=setInterval(move1,5000)
	function move1(){
		n1++
		if(n1>=$('.slider-lunbo').length){
			n1=0
		}
		$('.slider-lunbo').stop(true).hide().eq(n1).show()
	}
})