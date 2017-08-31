/**
 * Created by Administrator on 2017/1/11.
 */
$('.search-text').focus(function(){
    $(this).addClass('search-focus') ;
    $('.search-btn').addClass('search-focus');
    $('.keywords').show();
}).blur(function () {
    $(this).removeClass('search-focus');
    $('.search-btn').removeClass('search-focus');
    $('.keywords').hide();
});
$('.nav-item').on('mouseenter','li',function () {
    var index=$(this).index();
    var that=$('.header-nav-menu');
    if(index>=7){
        that.stop().slideUp();
    }else {
        that.stop().slideDown().find('ul').siblings().fadeOut().eq(index).fadeIn().hover(function () {
            that.show();
        }, function () {
            that.stop().slideUp();
        });
    }
});
$('.header-top').mouseover(function(){
    $('.header-nav-menu').stop().slideUp();
});
/*页面顶部轮播*/
$(function(){
    var length=$('.slider-main>li').length,
        startIndex=null,
        canAuto=false,
        t=3000,
        timer=null,
        currentIndex=0;
    $('.slider-main>li:not(:first)').hide();
    $('.slider-main,.btn,.index').hover(
        function(){
            stop();
        },
        function(){
            start();
        });
    $(".index>li").mouseenter(function(){
        startIndex=currentIndex;
        currentIndex=$(this).index();
        play(startIndex,currentIndex);
    });
    $('.pre').click(function(){
        startIndex=currentIndex;
        currentIndex=--currentIndex % length;
        play(startIndex,currentIndex);
    });
    $('.next').click(function(){
        startIndex=currentIndex;
        currentIndex=++currentIndex % length;
        play(startIndex,currentIndex);
    });

    function play(){
        if (startIndex === currentIndex) {
            return;
        }
        $('.slider-main>li').eq(startIndex).stop().fadeOut(500).
        parent().children().eq(currentIndex).stop().fadeIn(1000);
        $('.index>li').eq(currentIndex).addClass
        ('active').siblings().removeClass('active');
    }
    function start(){
        if(!canAuto){
            canAuto=true;
            timer=setInterval(function(){$('.next').triggerHandler('click');},t);
        }
    }
    function stop(){
        canAuto=false;
        clearInterval(timer);
    }
    start();
});
/* catgory*/
$(function(){
    $('.category .category-item').mouseover(function(){
        var index=$(this).index();
        $('.children').eq(index).css('display','block');

    }).mouseout(function(){
        var i=$(this).index();
        $('.children').eq(i).css('display','none');

    })
});
/* Carousel*/
(function($){
    $.fn.Carousel=function(options){
        var dft={
            div:$('.xm-carousel-wrapper'),
            ul:$('.main-banner'),
            next:$('.arrow-l'),
            pre:$('.arrow-r'),
            btn:$('.arrow'),
            num:1,
            dot:null,
            left:0,
            leftA:0,
            startIndex:0,
            currentIndex: 0,
            t:8000,
            timer:null,
            auto:true
        };
      $.extend(dft,options);
        return this.each(function(){
            $(dft.btn).hover(
                function(){
                    stop();
                },
                function(){
                    if(dft.auto===true){
                        start();
                    }
                });
            $(dft.pre).click(function(){
                if(dft.currentIndex==0){
                    return false;
                }
                {
                    dft.startIndex = dft.currentIndex;
                    dft.currentIndex = --dft.currentIndex % dft.ul.length;
                    if(dft.dot===null) {
                        dft.pre.addClass('disable').siblings().removeClass('disable');
                    }else{

                        dft.dot.eq(dft.currentIndex).addClass('pager-active').siblings().removeClass('pager-active');
                    }
                    dft.left = "-100%";
                    dft.leftA = "100%";
                    play(dft.left, dft.leftA);
                }
            });
            $(dft.next).click(function(){
                if(dft.currentIndex==dft.num){
                    return false;
                }
                {
                    dft.startIndex = dft.currentIndex;
                    dft.currentIndex = ++dft.currentIndex % dft.ul.length;
                    if(dft.dot===null){
                            dft.next.addClass('disable').siblings().removeClass('disable');
                    }else{
                        dft.dot.eq(dft.currentIndex).addClass('pager-active').siblings().removeClass('pager-active');
                    }
                    dft.left = "100%";
                    dft.leftA = "-100%";
                    play(dft.left, dft.leftA);
                }
            });
            if(dft.dot!==null){
               dft.dot.click(function(){
                    dft.startIndex=dft.currentIndex;
                    dft.currentIndex=$(this).index();
                    if(dft.currentIndex>dft.startIndex){
                        dft.left = "100%";
                        dft.leftA = "-100%";
                        dft.dot.eq(dft.currentIndex).addClass('pager-active').siblings().removeClass('pager-active');
                        play(dft.currentIndex, dft.startIndex);
                    }else{
                        dft.left = "-100%";
                        dft.leftA = "100%";
                        dft.dot.eq(dft.currentIndex).addClass('pager-active').siblings().removeClass('pager-active');
                        play(dft.currentIndex, dft.startIndex);
                    }
                });
            }
            function play(){
                dft.ul.eq(dft.currentIndex).css({left: dft.left}).stop().animate({left: 0});
                dft.ul.eq(dft.startIndex).css({left: 0}).stop().animate({left: dft.leftA});
            }
            function start() {
                dft.timer = setInterval(function () {
                    if(dft.currentIndex!==dft.num) {
                        dft.next.triggerHandler("click");
                    }else{
                        dft.pre.triggerHandler("click");
                    }
                },dft.t);
            }
            function stop(){
                clearInterval(dft.timer);
            }
            if(dft.auto===true){
                start();
            }
        });
    }
})(jQuery);
$('.xm-carousel-wrapper').Carousel({
});
$('.xm-carousel-wrapper-1').Carousel({
    num:3,
    auto:false,
    next:$('.arrow-l-1'),
    pre:$('.arrow-r-1'),
    ul:$('.xm-carousel-list')
});
$('.xm-carousel-wrapper-2').Carousel({
    ul:$('#book').find('li'),
    next:$('.control-next '),
    pre:$('.control-prev'),
    num:2,
    dot:$('.content-item-first').find('.pager'),
    auto:false
});
$('.xm-carousel-wrapper-3').Carousel({
    ul:$('#mi').find('li'),
    next:$('.control-next-1'),
    pre:$('.control-prev-1'),
    num:3,
    dot:$('.content-item-second').find('.pager'),
    auto:false
});
$('.xm-carousel-wrapper-4').Carousel({
    ul:$('#GM').find('li'),
    next:$('.control-next-2'),
    pre:$('.control-prev-2'),
    num:3,
    dot:$('.content-item-third').find('.pager'),
    auto:false
});
$('.xm-carousel-wrapper-5').Carousel({
    ul:$('#app').find('li'),
    next:$('.control-next-3'),
    pre:$('.control-prev-3'),
    num:3,
    dot:$('.content-item-fourth').find('.pager'),
    auto:false
});
$('.content-list').on('mouseenter','li',function(){
    $(this).find('.arrow').on('mouseenter','a',function(){
        $(this).addClass('change');
    })
}).on('mouseleave','li',function(){
    $(this).find('.arrow').on('mouseleave','a',function(){
        $(this).removeClass('change');
    })
});
/*tab-list*/
$('#dp').on('mouseenter','li',function(){
   $(this).addClass('tab-active').siblings().removeClass('tab-active');
   var index=$(this).index();
   $('.box-rt-1>ul').eq(index).show().siblings().hide();
});
$('#pj').on('mouseenter','li',function(){
    $(this).addClass('tab-active').siblings().removeClass('tab-active');
    var index=$(this).index();
    $('.box-rt-2>ul').eq(index).show().siblings().hide();
});
$('#zb').on('mouseenter','li',function(){
    $(this).addClass('tab-active').siblings().removeClass('tab-active');
    var index=$(this).index();
    $('.box-rt-3>ul').eq(index).show().siblings().hide();
});
/*视频模态框开关.视频播放开关*/
$('.video-list').on('click','li',function(){
    var index=$(this).index();
    var content=$(this).find('h3').text();
    $(".modal-hd").find('h3').html(content);
   $('.modal-bd').find('video').eq(index).show().siblings().hide();
    $('.modal').fadeIn();
});
$('.close').click(function(){
    $('.modal').fadeOut();
   $('video').trigger('pause');
});
