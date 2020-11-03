var $ = jQuery.noConflict();
// ハンバーガーメニュー
$(function(){
  var imgHeight = $('.p-kv-wrapper').outerHeight();  //キービジュアルの画像の高さを取得
  var bgHeight = $('.p-kv').outerHeight(); //ファーストビューの高さを取得
  

  $(".c-hamburger__block").on('click',function(){
    if( $(window).scrollTop() < imgHeight -50){
      //ハンバーガーボタンがfvより上にあるとき
      $('.c-hamburger__line').toggleClass('is-active'); //ハンバーガーボタンのラインをクロスさせるCSSを当てたり外したりする
      $('.p-global-nav').toggleClass('open'); //ナビゲーションが開くCSSを当てたり外したりする
      $('.c-hamburger__mask').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
      $('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたときにスクロールしないようにする
    }else{
      //ハンバーガーボタンがfvより下にあるとき
      $(this).toggleClass('black'); //ハンバーガーボタンを黒くしたり白くしたりする
      $('.c-hamburger__line').toggleClass('is-active');
      $('.p-global-nav').toggleClass('open');
      $('.c-hamburger__mask').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });

  // スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.l-header__logo').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.l-header__logo').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.c-hamburger__block').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.c-hamburger__block').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.c-hamburger__text').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.c-hamburger__text').addClass('black');
    }
  });
});


// ページ内リンク
$(function () {
  var headerHight = 90; //ヘッダの高さ
  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({scrollTop:position}, 550, "swing");
    return false;
  });
});

// ヘッダースクロール
$(function(){
  $('.c-top__scroll').click(function(){
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// ページ外リンク
$(function(){
  var headerH = 90; //ヘッダーの高さ
  $(window).on("load", function(){
    if(location.hash !== ""){
      var targetOffset = $(location.hash).offset().top;
      $(window).scrollTop(targetOffset - headerH);
    }
  });
});