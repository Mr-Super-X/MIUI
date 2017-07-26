window.onload = function(){
	var slider = document.getElementById("slider");
	var oLis = slider.getElementsByTagName("li");
	var point = document.getElementById("slide-point");
	var num = 0;
	var now = null;
	var iw = window.innerWidth;
	var timer = null;
	
	
	touchSwipe(slider,"left",fnLeft);
	touchSwipe(slider,"right",fnRight);
	
	function fnLeft(){
		num++;
		if(num > oLis.length-1){
			num = 0;
		}
		now = -num * iw;
		slider.style.transition = '1s';
		slider.style.transform = slider.style.webkitTransform = "translateX("+now+"px)";
		setBg(num);
		
		clearInterval(timer);
		timer = setInterval(function(){
			fnLeft()
		},2000)
	}
	
	function fnRight(){
		num--;
		if(num < 0){
			num = oLis.length-1;
		}
		now = -num * iw;
		slider.style.transition = '1s';
		slider.style.transform = slider.style.webkitTransform = "translateX("+now+"px)";
		setBg(num);
	}
	
	/*生成圆点*/
	for(var i = 0;i<oLis.length;i++){
		if(i == 0){
			point.innerHTML += "<li class='active'></li>"
		}else{
			point.innerHTML += "<li></li>"
		}
	}
	
	
	
	function setBg(index){
		var points = point.getElementsByTagName("li");
		for(var i = 0;i<points.length;i++){
			points[i].className = '';
		}
		points[index].className = "active";
	}
	
	timer = setInterval(function(){
		fnLeft()
	},2000)
	
	
	
	
	var nav = document.getElementsByClassName("nav")[0];
	var aA = nav.getElementsByTagName("a");
	for(var i=0;i<aA.length;i++){
		aA[i].ontouchstart = function(ev){
			for(var i=0;i<aA.length;i++){
				aA[i].className = "";
			}
			this.className = "active";
			
			ev.preventDefault();
		}
	}
}