$(function(){
	
	/*------------主轮播区-----------------*/
	var slide = $("#slider");
	var next = $("#slider .next");
	var prev = $("#slider .prev");
	var contain = $("#slider .contain");
	var slideLi = $(".contain .item");
	var sildePoint = $("#slider .slider-point li");
	var num = 0;
	var timer = null;
	
	next.on('click',function(){
		autoPlay();
	})
	prev.on('click',function(){
		num--;
		if(num < 0){
			num = slideLi.length-1;
		}
		contain.css("transform","translateX("+ -(num*slideLi.width())+"px)");
		
		setPoint(num);
	})
	
	sildePoint.on('click',function(){
		var index = $(this).index();
		contain.css("transform","translateX("+ -(index*slideLi.width())+"px)");
		setPoint(index);
		num = index;
	})
	
	function autoPlay(){
		num++;
		if(num > slideLi.length-1){
			num = 0;
		}
		contain.css("transform","translateX("+ -(num*slideLi.width())+"px)");
		
		setPoint(num);
	}
	
	timer = setInterval(autoPlay,2000);
	
	
	function setPoint(index){
		for(var i=0;i<sildePoint.length;i++){
			sildePoint.eq(i).removeClass("active");
		}
		sildePoint.eq(index).addClass("active");
	}
	
	slide.on('mouseover',function(){
		clearInterval(timer);
	});
	slide.on('mouseout',function(){
		timer = setInterval(autoPlay,2000);
	})
	/*------------主轮播结束-----------------*/
	
	
	
	
	/*----------------------------------数据------------------------------------------*/
	
	
	/*-----智能硬件-----*/
	var hard = document.getElementById('hard');
	var hardData = aData.intelligent;
	var hardBox = hard.getElementsByClassName('span16')[0];
	var hardUl = hardBox.getElementsByClassName("m-cols")[0];
	var str1 = '';
	for(var i=0;i<hardData.image.length;i++){
		str1 += '<li class="col">'
					for(var j=0;j<2;j++){
						str1 += '<div class="row">'+
									'<span class="tip blue">'+hardData.status[1]+'</span>'+
									'<dl>'+
										'<dt><img src="./'+hardData.image[i]+'"></dt>'+
										'<dd class="name">'+hardData.name+'</dd>'+
										'<dd class="desc">'+hardData.desc+'</dd>'+
										'<dd class="price">'+hardData.price+'</dd>'+
									'</dl>'+
								'</div>'
					}
				str1 += '</li>';
	}
	hardUl.innerHTML = str1;
	/*-----智能硬件结束-----*/
	
	
	/*-------搭配开始-------*/
	var matchData = aData.match;
	var match = document.getElementById('match');
	var matchBox = match.getElementsByClassName('m-s4')[0];
	var str2 = '';
	for(var i=0;i<matchData.contents.dapei.length;i++){
		str2 += '<div class="m-slide-item">'+
					'<ul class="m-cols m-col-4">'
						for(var j=0;j<matchData.contents.dapei.length;j++){
							str2 += '<li class="col">'+
										'<div class="row" content="'+matchData.evaluate+'" from="来自于米米小aa 的评价">'+
											'<span class="tip orange">'+matchData.status[0]+'</span>'+
											'<dl>'+
												'<dt><img src="./'+matchData.image[j]+'"></dt>'+
												'<dd class="name">'+matchData.name+'</dd>'+
												'<dd class="price">'+matchData.price+'</dd>'+
												'<dd class="cmt">'+matchData.cmt+'</dd>'+
											'</dl>'+
										'</div>'+
										'<div class="row" content="'+matchData.evaluate+'" from="来自于米米小aa 的评价">'+
											'<span class="tip blue">'+matchData.status[1]+'</span>'+
											'<dl>'+
												'<dt><img src="./'+matchData.image[j+1]+'"></dt>'+
												'<dd class="name">'+matchData.name+'</dd>'+
												'<dd class="price">'+matchData.price+'</dd>'+
												'<dd class="cmt">'+matchData.cmt+'</dd>'+
											'</dl>'+
										'</div>'+
									'</li>'
						}
					str2 += '</ul>'+
				'</div>';
	}
	matchBox.innerHTML = str2;
	/*-------搭配结束-------*/
	
	
	/*-------配件开始-------*/
	var partData = aData.match;
	var parts = document.getElementById("parts");
	var partBox = parts.getElementsByClassName('m-s4')[0];
	var str3 = '';
	for(var i=0;i<partData.contents.dapei.length;i++){
		str3 += '<div class="m-slide-item">'+
					'<ul class="m-cols m-col-4">'
						for(var j=0;j<partData.contents.dapei.length;j++){
							str3 += '<li class="col">'+
										'<div class="row" content="'+partData.evaluate+'" from="来自于米米小aa 的评价">'+
											'<span class="tip orange">'+partData.status[0]+'</span>'+
											'<dl>'+
												'<dt><img src="./'+partData.image[j+1]+'"></dt>'+
												'<dd class="name">'+partData.name+'</dd>'+
												'<dd class="price">'+partData.price+'</dd>'+
												'<dd class="cmt">'+partData.cmt+'</dd>'+
											'</dl>'+
										'</div>'+
										'<div class="row" content="'+partData.evaluate+'" from="来自于米米小aa 的评价">'+
											'<span class="tip blue">'+partData.status[1]+'</span>'+
											'<dl>'+
												'<dt><img src="./'+partData.image[j+1]+'"></dt>'+
												'<dd class="name">'+partData.name+'</dd>'+
												'<dd class="price">'+partData.price+'</dd>'+
												'<dd class="cmt">'+partData.cmt+'</dd>'+
											'</dl>'+
										'</div>'+
									'</li>'
						}
					str3 += '</ul>'+
				'</div>';
	}
	partBox.innerHTML = str3;
	/*-------配件开始-------*/
	
	
	/*-------周边开始-------*/
	var ambitusDate = aData.surrounding;
	var ambitus = document.getElementById("ambitus");
	var ambitusBox = ambitus.getElementsByClassName("m-s5")[0];
	var str4 = '';
	for(var i=0;i<ambitusDate.contents.length;i++){
		str4 += '<div class="m-slide-item">'+
					'<ul class="m-cols m-col-4">'
						for(var j=0;j<3;j++){
							str4 += '<li class="col">'+
										'<div class="row">'+
											'<span class="tip orange">'+ambitusDate.status[0]+'</span>'+
											'<dl>'+
												'<dt><img src="./'+ambitusDate.image[j]+'"></dt>'+
												'<dd class="name">'+ambitusDate.name+'</dd>'+
												'<dd class="desc">'+ambitusDate.desc+'</dd>'+
												'<dd class="price">'+ambitusDate.price+'</dd>'+
											'</dl>'+
										'</div>'+
										'<div class="row">'+
											'<span class="tip blue">'+ambitusDate.status[1]+'</span>'+
											'<dl>'+
												'<dt><img src="./'+ambitusDate.image[j+1]+'"></dt>'+
												'<dd class="name">'+ambitusDate.name+'</dd>'+
												'<dd class="desc">'+ambitusDate.desc+'</dd>'+
												'<dd class="price">'+ambitusDate.price+'</dd>'+
											'</dl>'+
										'</div>'+
									'</li>';
						}
						
					  str4 += '<li class="col">'+
								'<div class="row">'+
									'<span class="tip orange">'+ambitusDate.status[0]+'</span>'+
									'<dl>'+
										'<dt><img src="./'+ambitusDate.image[4]+'"></dt>'+
										'<dd class="name">'+ambitusDate.name+'</dd>'+
										'<dd class="desc">'+ambitusDate.desc+'</dd>'+
										'<dd class="price">'+ambitusDate.price+'</dd>'+
									'</dl>'+
								'</div>'+
								'<div class="row row_half small-intro">'+
									'<div class="small-introL">'+
										'<b>'+ambitusDate.introL.name+'</b>'+
										'<small>'+ambitusDate.introL.price+'</small>'+
									'</div>'+
									'<div class="small-introR">'+
										'<img src="./'+ambitusDate.image[7]+'">'+
									'</div>'+
								'</div>'+
								'<div class="row row_half scan-more">'+
									'<div class="scan-moreL">'+
										'<b>浏览更多</b>'+
										'<small>热门</small>'+
									'</div>'+
									'<div class="scan-moreR icon"></div>'+
								'</div>'+
							'</li>'+
						'</ul>'+
					'</div>';
	}
	ambitusBox.innerHTML = str4;
	/*-------周边结束-------*/
	
	
	
})