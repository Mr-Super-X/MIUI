/*---------------模块化js--------------*/
define(function(require, exports, module) {
	require("jquery-3.2.1.js");
	require("data.js");
	console.log($)
	
	$(function() {

		/*-----------------主轮播区---------------------*/
		var slide = $("#slider");
		var next = $("#slider .next");
		var prev = $("#slider .prev");
		var contain = $("#slider .contain");
		var pointUl = $("#slider .slider-point");

		var num = 0;
		var timer = null;

		/*-----创建轮播图片----*/
		var item = "";
		var slideData = aData.slider;
		for(var i = 0; i < slideData.image.length; i++) {
			item += '<li class="item">' +
				'<a href="#" alt=""><img src="./' + slideData.image[i] + '"></a>' +
				'</li>';
			contain.html(item);
		}
		var slideLi = $(".contain .item");

		/*轮播左右点击按钮*/
		next.on('click', function() {
			autoPlay();
		})
		prev.on('click', function() {
			num--;
			if(num < 0) {
				num = slideLi.length - 1;
			}
			contain.css("transform", "translateX(" + -(num * slideLi.width()) + "px)");

			setPoint(num);
		})

		/*轮播函数*/
		function autoPlay() {
			num++;
			if(num > slideLi.length - 1) {
				num = 0;
			}
			contain.css("transform", "translateX(" + -(num * slideLi.width()) + "px)");

			setPoint(num);
		}

		timer = setInterval(autoPlay, 2000);

		/*----创建轮播导航小点----*/
		var oLi = '';
		for(var i = 0; i < slideLi.length; i++) {
			if(i == 0) {
				oLi += '<li class="active"></li>';
			} else {
				oLi += '<li></li>';
			}
			pointUl.html(oLi);
		}
		var sildePoint = $("#slider .slider-point li");

		sildePoint.on('click', function() {
			var index = $(this).index();
			contain.css("transform", "translateX(" + -(index * slideLi.width()) + "px)");
			setPoint(index);
			num = index;
		})

		/*设置轮播小点背景*/
		function setPoint(index) {
			for(var i = 0; i < sildePoint.length; i++) {
				sildePoint.eq(i).removeClass("active");
			}
			sildePoint.eq(index).addClass("active");
		}

		slide.on('mouseover', function() {
			clearInterval(timer);
		});
		slide.on('mouseout', function() {
			timer = setInterval(autoPlay, 2000);
		})
		/*------------主轮播结束-----------------*/

		/*----------------------------------数据------------------------------------------*/

		/*---------------头部导航---------------*/
		var headerData = aData.headerMenu;
		var header = document.getElementById("header");
		var headMenu = header.getElementsByClassName("header-menu")[0];
		var menuStr = '';
		for(var i = 0; i < headerData.title.length; i++) {
			menuStr += '<li>' +
				'<a href="detail.html" class="hvr-pulse-shrink">' + headerData.title[i] + '</a>' +
				'<div class="content">' +
				'<ul class="goods-list">'
			for(var j = 0; j < 4; j++) {
				menuStr += '<li class="item">' +
								'<figure class="prod-img">' +
								'<img src="./' + headerData.image[i] + '">' +
								'</figure>' +
								'<p class="name">' + headerData.name + '</p>' +
								'<span class="price">' + headerData.price + '</span>' +
							'</li>';
			}

			menuStr += '</ul>' +
				'</div>' +
				'</li>';
		}
		headMenu.innerHTML = menuStr;
		/*---------------头部导航结束---------------*/
		
		/*---------------搜索数据---------------*/
		var search = aData.headerRight.search;
		var headerR = header.getElementsByClassName("header-right")[0];
		var searchBox = headerR.getElementsByTagName("ul")[0];
		var searStr = '';
		for(var i=0;i<search.name.length;i++){
			if(i<=10){
				searStr += '<li>'+search.name[i]+'<span>'+search.piece[i]+'</span></li>';
			}
		}
		searchBox.innerHTML = searStr;
		/*---------------搜索数据结束---------------*/

		/*---------------小米明星单品---------------*/
		var skuData = aData.starSingleProduct;
		var sku = document.getElementById("sku");
		var skuBox = sku.getElementsByClassName("m-s2")[0];
		var skuStr = '';
		for(var i = 0; i < skuData.title.length; i++) {
			skuStr += '<div class="m-slide-item">' +
				'<ul class="m-cols m-col-5">'
			for(var j = 0; j < 5; j++) {
				skuStr += '<li class="col sku-item animated flip '+skuData.classes[j]+'">' +
								'<dl class="row">' +
								'<dt><img src="./' + skuData.image[j] + '"></dt>' +
								'<dd class="name">' + skuData.name + '</dd>' +
								'<dd class="desc">' + skuData.desc + '</dd>' +
								'<dd class="price">' + skuData.price + '</dd>' +
								'</dl>' +
							'</li>';
			}
			skuStr += '</ul>' +
				'</div>';
		}
		skuBox.innerHTML = skuStr;
		/*---------------小米明星单品结束---------------*/

		/*-------------智能硬件----------------*/
		var hard = document.getElementById('hard');
		var hardData = aData.intelligent;
		var hardBox = hard.getElementsByClassName('span16')[0];
		var hardUl = hardBox.getElementsByClassName("m-cols")[0];
		var str1 = '';
		for(var i = 0; i < hardData.image.length; i++) {
			str1 += '<li class="col '+hardData.classes[i]+'">'
			for(var j = 0; j < 2; j++) {
				str1 += '<div class="row animated flip">' +
							'<span class="tip blue">' + hardData.status[1] + '</span>' +
							'<dl>' +
							'<dt><img src="./' + hardData.image[i] + '"></dt>' +
							'<dd class="name">' + hardData.name + '</dd>' +
							'<dd class="desc">' + hardData.desc + '</dd>' +
							'<dd class="price">' + hardData.price + '</dd>' +
							'</dl>' +
						'</div>'
			}
			str1 += '</li>';
		}
		hardUl.innerHTML = str1;
		/*------------智能硬件结束-------------*/

		/*--------------搭配开始--------------*/
		var matchData = aData.match;
		var match = document.getElementById('match');
		var matchBox = match.getElementsByClassName('m-s4')[0];
		var str2 = '';
		for(var i = 0; i < matchData.contents.dapei.length; i++) {
			str2 += '<div class="m-slide-item">' +
				'<ul class="m-cols m-col-4">'
			for(var j = 0; j < matchData.contents.dapei.length; j++) {
				str2 += '<li class="col animated flip '+matchData.classes[j]+'">' +
							'<div class="row" content="' + matchData.evaluate + '" from="来自于米米小aa 的评价">' +
							'<span class="tip orange">' + matchData.status[0] + '</span>' +
							'<dl>' +
							'<dt><img src="./' + matchData.image[j] + '"></dt>' +
							'<dd class="name">' + matchData.name + '</dd>' +
							'<dd class="price">' + matchData.price + '</dd>' +
							'<dd class="cmt">' + matchData.cmt + '</dd>' +
							'</dl>' +
							'</div>' +
							'<div class="row" content="' + matchData.evaluate + '" from="来自于米米小aa 的评价">' +
							'<span class="tip blue">' + matchData.status[1] + '</span>' +
							'<dl>' +
							'<dt><img src="./' + matchData.image[j + 1] + '"></dt>' +
							'<dd class="name">' + matchData.name + '</dd>' +
							'<dd class="price">' + matchData.price + '</dd>' +
							'<dd class="cmt">' + matchData.cmt + '</dd>' +
							'</dl>' +
							'</div>' +
						'</li>'
			}
			str2 += '</ul>' +
				'</div>';
		}
		matchBox.innerHTML = str2;
		/*-------------搭配结束------------*/

		/*-------------配件开始------------*/
		var partData = aData.match;
		var parts = document.getElementById("parts");
		var partBox = parts.getElementsByClassName('m-s4')[0];
		var str3 = '';
		for(var i = 0; i < partData.contents.dapei.length; i++) {
			str3 += '<div class="m-slide-item">' +
				'<ul class="m-cols m-col-4">'
			for(var j = 0; j < partData.contents.dapei.length; j++) {
				str3 += '<li class="col animated flip '+partData.classes[j]+'">' +
							'<div class="row" content="' + partData.evaluate + '" from="来自于米米小aa 的评价">' +
							'<span class="tip orange">' + partData.status[0] + '</span>' +
							'<dl>' +
							'<dt><img src="./' + partData.image[j + 5] + '"></dt>' +
							'<dd class="name">' + partData.name + '</dd>' +
							'<dd class="price">' + partData.price + '</dd>' +
							'<dd class="cmt">' + partData.cmt + '</dd>' +
							'</dl>' +
							'</div>' +
							'<div class="row" content="' + partData.evaluate + '" from="来自于米米小aa 的评价">' +
							'<span class="tip blue">' + partData.status[1] + '</span>' +
							'<dl>' +
							'<dt><img src="./' + partData.image[j + 9] + '"></dt>' +
							'<dd class="name">' + partData.name + '</dd>' +
							'<dd class="price">' + partData.price + '</dd>' +
							'<dd class="cmt">' + partData.cmt + '</dd>' +
							'</dl>' +
							'</div>' +
						'</li>'
			}
			str3 += '</ul>' +
				'</div>';
		}
		partBox.innerHTML = str3;
		/*------------配件开始------------*/

		/*------------周边开始------------*/
		var ambitusDate = aData.surrounding;
		var ambitus = document.getElementById("ambitus");
		var ambitusBox = ambitus.getElementsByClassName("m-s5")[0];
		var str4 = '';
		for(var i = 0; i < ambitusDate.contents.length; i++) {
			str4 += '<div class="m-slide-item">' +
				'<ul class="m-cols m-col-4">'
			for(var j = 0; j < 3; j++) {
				str4 += '<li class="col animated flip '+ambitusDate.classes[i]+'">' +
							'<div class="row">' +
							'<span class="tip orange">' + ambitusDate.status[0] + '</span>' +
							'<dl>' +
							'<dt><img src="./' + ambitusDate.image[j] + '"></dt>' +
							'<dd class="name">' + ambitusDate.name + '</dd>' +
							'<dd class="desc">' + ambitusDate.desc + '</dd>' +
							'<dd class="price">' + ambitusDate.price + '</dd>' +
							'</dl>' +
							'</div>' +
							'<div class="row">' +
							'<span class="tip blue">' + ambitusDate.status[1] + '</span>' +
							'<dl>' +
							'<dt><img src="./' + ambitusDate.image[j + 1] + '"></dt>' +
							'<dd class="name">' + ambitusDate.name + '</dd>' +
							'<dd class="desc">' + ambitusDate.desc + '</dd>' +
							'<dd class="price">' + ambitusDate.price + '</dd>' +
							'</dl>' +
							'</div>' +
						'</li>';
			}

			str4 += '<li class="col animated flip '+ambitusDate.classes[i]+'">' +
						'<div class="row">' +
						'<span class="tip orange">' + ambitusDate.status[0] + '</span>' +
						'<dl>' +
						'<dt><img src="./' + ambitusDate.image[4] + '"></dt>' +
						'<dd class="name">' + ambitusDate.name + '</dd>' +
						'<dd class="desc">' + ambitusDate.desc + '</dd>' +
						'<dd class="price">' + ambitusDate.price + '</dd>' +
						'</dl>' +
						'</div>' +
						'<div class="row row_half small-intro">' +
						'<div class="small-introL">' +
						'<b>' + ambitusDate.introL.name + '</b>' +
						'<small>' + ambitusDate.introL.price + '</small>' +
						'</div>' +
						'<div class="small-introR">' +
						'<img src="./' + ambitusDate.image[7] + '">' +
						'</div>' +
						'</div>' +
						'<div class="row row_half scan-more">' +
						'<div class="scan-moreL">' +
						'<b>浏览更多</b>' +
						'<small>热门</small>' +
						'</div>' +
						'<div class="scan-moreR icon"></div>' +
						'</div>' +
						'</li>' +
						'</ul>' +
						'</div>';
		}
		ambitusBox.innerHTML = str4;
		/*-------------周边结束-------------*/

		/*---------------为你推荐---------------*/
		var recoData = aData.recommend;
		var recommend = document.getElementById("recommend");
		var recoBox = recommend.getElementsByClassName("m-s2")[0];
		var recoStr = '';
		for(var i = 0; i < recoData.title.length; i++) {
			recoStr += '<div class="m-slide-item">' +
				'<ul class="m-cols m-col-5">'
			for(var j = 0; j < 5; j++) {
				recoStr += '<li class="col sku-item animated flip '+recoData.classes[j]+'">' +
								'<dl class="row">' +
								'<dt><img src="./' + recoData.image[j] + '"></dt>' +
								'<dd class="name">' + recoData.name + '</dd>' +
								'<dd class="price">' + recoData.price + '</dd>' +
								'<dd class="cmt">' + recoData.cmt + '</dd>' +
								'</dl>' +
							'</li>';
			}
			recoStr += '</ul>' +
				'</div>';
		}
		recoBox.innerHTML = recoStr;
		/*---------------为你推荐结束---------------*/

		/*---------------热评产品---------------*/
		var commData = aData.comment;
		var comment = document.getElementById("comment");
		var commBox = comment.getElementsByClassName("m-col-4")[0];
		var commStr = '';
		for(var i = 0; i < commData.image.length; i++) {
			commStr += '<li class="col animated flip">' +
							'<div class="row">' +
							'<img src="./' + commData.image[i] + '">' +
							'<div class="content">' +
							'<div class="cmt">' +
							'' + commData.cmt[i] + '' +
							'</div>' +
							'<div class="from">' + commData.from + '</div>' +
							'<a href="#" class="name">' + commData.name[i] + '</a>' +
							'<a href="#" class="price">' + commData.price + '</a>' +
							'</div>' +
							'</div>' +
						'</li>';
		}
		commBox.innerHTML = commStr;
		/*---------------热评产品结束---------------*/

		/*---------------内容区---------------*/
		var contData = aData.content;
		var content = document.getElementById("content");
		var contBox = content.getElementsByClassName("m-col-4")[0];
		var conStr = '';
		for(var i=0;i<contData.image.length;i++){
			conStr += '<li class="col '+contData.classes[i]+'">'+
							'<div class="row">'+
								'<dl>'+
									'<dt class="type">'+contData.type[i]+'</dt>'+
									'<dd class="name">'+contData.name[i]+'</dd>'+
									'<dd class="desc">'+contData.desc[i]+'</dd>'+
									'<dd class="status"></dd>'+
									'<dd><img src="./'+contData.image[i]+'"></dd>'+
								'</dl>'+
							'</div>'+
						'</li>';
		}
		contBox.innerHTML = conStr;
		/*---------------内容区结束---------------*/
		
		
		/*---------------视频区---------------*/
		var videoData = aData.video;
		var video = document.getElementById("video");
		var viBox = video.getElementsByClassName("m-col-4")[0];
		var viStr = '';
		for(var i=0;i<videoData.video.length;i++){
			viStr += '<li class="col animated flip">'+
						'<div class="row">'+
							'<div class="video">'+
								'<label class="play-btn" for="video-switch"></label>'+
								'<img src="./'+videoData.video[i]+'">'+
							'</div>'+
							'<div class="content">'+
								'<p class="name">'+
									'<a href="#">'+videoData.name[i]+'</a>'+
								'</p>'+
								'<p class="desc">'+videoData.desc[i]+'</p>'+
							'</div>'+
						'</div>'+
					'</li>';
		}
		viBox.innerHTML = viStr;
		/*---------------视频区结束---------------*/

	})

})