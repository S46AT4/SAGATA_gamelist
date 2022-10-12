$(function () {

    // カラーチェンジ
    $("#color_change").click(function () {
        if ($("html, body").hasClass("background_white")) {
            $("html, body").removeClass("background_white");
            $("header, .app_footer").removeClass("barbackground_white");
            $("html, body, .header_text, .sns_icon").removeClass("text_black");
            $(this).removeClass("button_visual_white");
            $(this).text("BLACK");
        } else {
            $("html, body").addClass("background_white");
            $("header, .app_footer").addClass("barbackground_white");
            $("html, body, .header_text, .sns_icon").addClass("text_black");
            $(this).addClass("button_visual_white");
            $(this).text("WHITE");
        }

    });


    // ページ内リンク
    $("#js-top").click(function () { //アンカーリンクをクリックでイベント処理
        pageScroll(this, 0);
        return false; //clickイベント実行後にaタグのhrefリンクを打ち消す
    });

    $("#js-image").click(function () {
        pageScroll(this, 100);
        return false;
    });

    $("#js-movie").click(function () {
        pageScroll(this, 100);
        return false;
    });

    $("#js-content").click(function () {
        pageScroll(this, 100);
        return false;
    });

    function pageScroll(link, marginHight) {
        var href = $(link).attr("href"); //アンカーリンクの属性を取得
        var target = $(href); //hrefの値が"#"または""だった場合"html"が、それ以外の場合はhrefをtargetに代入
        var position = target.offset().top - marginHight; //画面上部からターゲット要素までの距離 - ヘッダー高さをpositionに代入
        $("html, body").animate({ scrollTop: position }, 500, "swing"); // 取得したpositionの位置まで0.5秒でゆっくり移動
    }

    // Scroll表示
    var footer_app_nav_offset = $(".app_link").offset().top;
    
    var catchphrase = $(".catchphrase");
    var sub_visual01 = $("#sub_visual01_image");
    var sub_visual02 = $("#sub_visual02_image");
    var section_headline01 = $("#section-headline01");
    var section_headline02 = $("#section-headline02");
    var movie_text = $(".pv .section-headline span");
    var content_text = $(".content .section-headline span");
    var pv_movie = $("#pv_movie");
    var content_slider = $("#content_slider");

    $(window).on("scroll load", function () {
        var now_offset = $(window).scrollTop();

        // アプリURLのフッター表示
        if (now_offset >= footer_app_nav_offset) {
            $(".app_footer").fadeIn(250);
        } else {
            $(".app_footer").fadeOut(250);
        }

        fadeAnimation(catchphrase, catchphrase.offset().top, 500, "blur");
        fadeAnimation(sub_visual01, sub_visual01.offset().top, 300, "fadeUp");
        fadeAnimation(sub_visual02, sub_visual02.offset().top, 300, "fadeUp");
        fadeAnimation(section_headline01, section_headline01.offset().top, 300, "fadeLeft");
        fadeAnimation(section_headline02, section_headline02.offset().top, 300, "fadeRight");
        fadeAnimation(section_headline02, section_headline02.offset().top, 300, "fadeRight");
        fadeAnimation(movie_text, movie_text.offset().top, 500, "scroll-in");
        fadeAnimation(content_text, content_text.offset().top, 500, "scroll-in");
        fadeAnimation(pv_movie, pv_movie.offset().top, 300, "fadeUp");
        fadeAnimation(content_slider, content_slider.offset().top, 300, "fadeUp");

        function fadeAnimation(target, targethight, marginhight, attachAnimation){
            if (now_offset >= targethight - marginhight) {
                target.addClass(attachAnimation);
            } else {
                // target.removeClass(attachAnimation);
            }
        }
    });
});