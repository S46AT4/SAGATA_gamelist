$(function () {

    $('#js-top').click(function () { //アンカーリンクをクリックでイベント処理
        pageScroll(this, 0);
        return false; //clickイベント実行後にaタグのhrefリンクを打ち消す
    });

    $('#js-image').click(function () {
        pageScroll(this, 100);
        return false;
    });

    $('#js-movie').click(function () {
        pageScroll(this, 100);
        return false;
    });

    $('#js-content').click(function () {
        pageScroll(this, 100);
        return false;
    });

    function pageScroll(link, marginHight) {
        var href = $(link).attr("href"); //アンカーリンクの属性を取得
        var target = $(href); //hrefの値が"#"または""だった場合"html"が、それ以外の場合はhrefをtargetに代入
        var position = target.offset().top - marginHight; //画面上部からターゲット要素までの距離 - ヘッダー高さをpositionに代入
        $("html, body").animate({ scrollTop: position }, 500, "swing"); // 取得したpositionの位置まで0.5秒でゆっくり移動
    }
});