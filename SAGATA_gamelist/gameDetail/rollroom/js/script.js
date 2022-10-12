$(function () {

    // カラーチェンジ
    $("#color_change").click(function () {
        if ($("html, body").hasClass("background_white")) {
            $("html, body").removeClass("background_white");
            $("header, .sub_content, .app_footer").removeClass("barbackground_white");
            $("html, body, .header_text, .sns_icon").removeClass("text_black");
            $(".sub_content").removeClass("background_shadow_black");
            $(this).removeClass("button_visual_white");
            $(this).text("BLACK");
        } else {
            $("html, body").addClass("background_white");
            $("header, .sub_content, .app_footer").addClass("barbackground_white");
            $("html, body, .header_text, .sns_icon").addClass("text_black");
            $(".sub_content").addClass("background_shadow_black");
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
    
    var main_content01_headline = $("#main_content01_headline");
    var main_content01_caption = $("#main_content01_caption");
    var main_content01_image = $("#main_content01_image");

    var main_content02_headline = $("#main_content02_headline");
    var main_content02_caption = $("#main_content02_caption");
    var main_content02_image = $("#main_content02_image");

    var sub_content01 = $("#sub_content01");
    var sub_content02 = $("#sub_content02");
    var sub_content03 = $("#sub_content03");

    var movie_text = $(".pv .section-headline span");
    var pv_movie = $("#pv_movie");

    $(window).on("scroll load", function () {
        var now_offset = $(window).scrollTop();

        // アプリURLのフッター表示
        if (now_offset >= footer_app_nav_offset) {
            $(".app_footer").fadeIn(250);
        } else {
            $(".app_footer").fadeOut(250);
        }

        fadeAnimation(main_content01_headline, main_content01_headline.offset().top, 500, "scroll-in");
        fadeAnimation(main_content01_caption, main_content01_caption.offset().top, 600, "fadeLeft");
        fadeAnimation(main_content01_image, main_content01_image.offset().top, 600, "zoomIn");

        fadeAnimation(main_content02_headline, main_content02_headline.offset().top, 500, "scroll-in");
        fadeAnimation(main_content02_caption, main_content02_caption.offset().top, 600, "fadeRight");
        fadeAnimation(main_content02_image, main_content02_image.offset().top, 600, "zoomIn");

        fadeAnimation(sub_content01, sub_content01.offset().top, 400, "fadeUp");

        fadeAnimation(sub_content02, sub_content02.offset().top, 400, "fadeUp");
        fadeAnimation(sub_content02, sub_content02.offset().top, 400, "delay-time02");

        fadeAnimation(sub_content03, sub_content03.offset().top, 400, "fadeUp");
        fadeAnimation(sub_content03, sub_content03.offset().top, 400, "delay-time04");

        fadeAnimation(movie_text, movie_text.offset().top, 500, "scroll-in");
        fadeAnimation(pv_movie, pv_movie.offset().top, 300, "fadeUp");

        function fadeAnimation(target, targethight, marginhight, attachAnimation){
            if (now_offset >= targethight - marginhight) {
                target.addClass(attachAnimation);
            } else {
                // target.removeClass(attachAnimation);
            }
        }
    });
});