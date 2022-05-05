$(function () {
    //gnb
    let $gnb = $("#gnb"),
        $gnbDepth1 = $gnb.find(".gnb-1dep > li"),
        $gnbBg = $gnb.find(".gnb-bg");

    //초기화
    $gnbDepth1.removeClass("on");

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
});
