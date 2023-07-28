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

//무비차트 탭메뉴
$(document).ready(function () {
    $('.movie_tab li').click(function () {
        var activeTab = $(this).attr('data-tab');
        $('.movie_tab li').removeClass('active');
        $('.tab_content').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
    });
});

//무비차트 슬라이더
$('.movie_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    prevArrow: $('.prev02'),
    nextArrow: $('.next02')
});

$('.movie_slider02').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});

//모바일 무비차트 탭메뉴
const tabs = document.querySelectorAll('.mobile_tab');
const tabContents = document.querySelectorAll('.mobile_tab-content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // 모든 탭과 탭 컨텐츠 비활성화
        tabs.forEach((t) => t.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));

        // 클릭한 탭과 해당 탭 컨텐츠 활성화
        tab.classList.add('active');
        const activeTab = tab.getAttribute('data-tab');
        const activeContent = document.getElementById(activeTab);
        activeContent.classList.add('active');
    });
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
    // 페이지가 로드되면 첫 번째 콘텐츠를 열도록 설정
    $('.accordian-item .content').eq(0).addClass('active');

    $('.accordian-item .title').click(function () {
        const content = $(this).next();
        // 클릭한 콘텐츠를 열고 나머지 콘텐츠는 닫음
        $('.accordian-item .content').not(content).removeClass('active').slideUp(300);
        content.stop().slideToggle(300);
        $(this).toggleClass('active');
    });
});

//모바일 푸터 아코디언
$(function () {
    $('.inform_title').click(function () {
        const informInner = $(this).next('.inform_inner');
        if (informInner.height() === 0) {
            informInner.animate({ height: '150px' }, 300);
        } else {
            informInner.animate({ height: '0' }, 300);
        }
    });
});


/* 탑버튼 */
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('.btn_quick_pc, .btn_quick, .btn_top').addClass('active')
    } else {
        $('.btn_quick_pc, .btn_quick, .btn_top').removeClass('active')
    }
})