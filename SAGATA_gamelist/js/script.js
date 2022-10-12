$(function () {

  var marginHight = 100;

  $.when(
    $('.load img').fadeIn(1500).delay(750).fadeOut(1500),
    $('html,body').addClass('scrollHide')
  ).done(function () {
    $('.load').fadeOut();
    $('html,body').removeClass('scrollHide')
  });

  $('.contents').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    fade: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true
  });

  $('#game_explanation_top').click(function () { //アンカーリンクをクリックでイベント処理
    pageScroll(this);
    return false; //clickイベント実行後にaタグのhrefリンクを打ち消す
  });

  $('#cubicreturn_top').click(function () {
    pageScroll(this);
    return false;
  });

  $('#rollroom_top').click(function () {
    pageScroll(this);
    return false;
  });

  $('#flipboard_top').click(function () {
    pageScroll(this);
    return false;
  });

  function pageScroll(link) {
    var href = $(link).attr("href"); //アンカーリンクの属性を取得
    var target = $(href); //hrefの値が"#"または""だった場合"html"が、それ以外の場合はhrefをtargetに代入
    var position = target.offset().top - marginHight; //画面上部からターゲット要素までの距離 - ヘッダー高さをpositionに代入
    $("html, body").animate({ scrollTop: position }, 500, "swing"); // 取得したpositionの位置まで0.5秒でゆっくり移動
  }

  // 動きのきっかけとなるアニメーションの名前を定義
  function fadeAnime() {
    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top + 400;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
});