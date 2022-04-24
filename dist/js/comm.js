$(function () {
    // load
    // ("use strict");
    // $("#u_skip").load("./layout/u_skip.html");
    // $("#header").load("./layout/header.html");
    // $("#footer").load("./layout/footer.html");

    //gnb
    let $gnb = $("#gnb"),
        $gnbDepth1 = $gnb.find(".gnb-1dep > li"),
        $gnbBg = $gnb.find(".gnb-bg");

    //초기화
    // $gnbDepth1.removeClass("on");

    $gnbDepth1.on("focusin mouseenter", function () {
        $(this).addClass("on");

        let depth2Height = $(this).children(".gnb-2dep").innerHeight();

        $gnbBg.stop().animate(
            {
                height: depth2Height + "px",
            },
            300,
            "easeOutExpo",
        );
    });
    $gnbDepth1.on("focusout mouseleave", function () {
        $(this).removeClass("on");
        $gnbBg.stop().animate(
            {
                height: "0",
            },
            {
                duration: 600,
                easing: "easeOutBack",
            },
        );
    });

    // header sticky
    let $window = $(window);
    $window
        .scroll(function () {
            if ($(this).scrollTop() > 50) {
                $header.addClass("sticky");
            } else {
                $header.removeClass("sticky");
            }
        })
        .trigger("scroll");

    // 메뉴 클릭시 해당 해쉬태그로 애니메이션 되면서 이동
    $(".navbar-nav a").click(function (event) {
        // a링크 기능 없애기
        event.preventDefault();

        // 만약 링크에 해쉬태그가 비어있지 않다면...
        if (this.hash != "") {
            let hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - 77, // gnb의 높이값을 빼주삼
                },
                800,
            );
        }
    });

    // slide-banner
    // var swiper = new Swiper('.slide-banner1, .slide-banner2', {
    var swiper = new Swiper(".slide-banner1", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".slide-banner2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next-out",
            prevEl: ".swiper-button-prev-out",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });

    // scrollUp
    $.scrollUp({
        scrollName: "scrollUp", // Element ID
        topDistance: "300", // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: "fade", // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: "페이지 위로 이동", // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // 스크롤시 오브젝트 애니메이션
    $(window).scroll(function () {
        $(".ani-slide").each(function () {
            let pos = $(this).offset().top,
                winscroll = $(window).scrollTop();

            if (winscroll + 700 > pos) {
                $(this).addClass("ani-top");
            }
        });
    });
});

!function ($) {
    "use strict";

    $(function () {
        initUI.setup();

        // 퍼블리싱 전용 (주의!!! 개발 완료시 모두 삭제)/////////////////////////////
        if (location.port == "8888" || location.hostname.indexOf("uxdev.etribe.co.kr") != -1) {
            header.init(); // 개발언어로 변경시 이 부분 삭제 해야 합니다. (개발언어로 인클루드 필요.)
            footer.init(); // 개발언어로 변경시 이 부분 삭제 해야 합니다. (개발언어로 인클루드 필요.)

            // mac os 일 경우 html 태그에 mac_os 클래스 붙임
            if (navigator.userAgent.indexOf("Mac OS X") != -1) {
                $("html").addClass("mac_os");
            }
        }
        /////////////////////////////////////////////////////////////////////////////
    });
};
