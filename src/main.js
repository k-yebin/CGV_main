//menu_list
$(function () {
    $('.lnb li').mouseover(function () {
        $('.menu_list').stop().animate({
            height: 300,
        }, 300)
    })
    $('.lnb li').mouseout(function () {
        $('.menu_list').stop().animate({
            height: 0,
        }, 300)
    })
    $('.menu_list').mouseover(function () {
        $('.menu_list').stop().animate({
            height: 300,
        }, 300)
    })
    $('.menu_list').mouseout(function () {
        $('.menu_list').stop().animate({
            height: 0,
        }, 300)
    })
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
})

//무비차트 탭메뉴
//첫번째 탭
$(function () {
    $('ul.movie_tab li').click(function () {
        var activeTab = $(this).attr('data-tab');
        $('ul.movie_tab li').removeClass('on');
        $('.tabcont').removeClass('on');
        $(this).addClass('on');
        $('#' + activeTab).addClass('on');
    })
});

//메인 비주얼
$('.visual_slick').slick({
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    fade: true
});

//event_middle_banner
$('.event_middle_banner').slick({
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    dots: true
});

//아코디언메뉴
$(function () {
    $('.accordian-item .content').eq(0).show() //콘텐츠 하나는 펼쳐진채로 보여줌
    $('.accordian-item .title').click(function () {
        $(this).next().stop().slideToggle(300)
        $(this).toggleClass('active')
        //this = 함수적용된 애만 메서드가 적용됨. 
        //this를 기준으로 next에 메서드 적용해라.
    })
})


/* 탑버튼 */
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('.btn_quick_pc, .btn_quick, .btn_top').addClass('active')
    } else {
        $('.btn_quick_pc, .btn_quick, .btn_top').removeClass('active')
    }
})