// ハンバーガーメニュー
$(function() {
  $('.Hamburger').on('click',function(){
    $('.Hamburger__line').toggleClass('active');
    $('.GloNav').fadeToggle();
  });
});

// ページ内スクロールでメニューを閉じる
$(function() {
  $('.GloNav__link').click(function() {
    $('.Hamburger__line').toggleClass('active');
    $('.GloNav').fadeToggle();
  });
});

// ハンバーガーメニュー（バックグラウンドの影付き）
// $(function () {
// 	$('.ハンバーガーメニュー').click(function () {
// 		$(this).toggleClass('active');
// 		$('.バックグラウンド').fadeToggle();
// 		$('.メニューの部分').toggleClass('open');
// 	})
// 	$('.バックグラウンド').click(function () {
// 		$(this).fadeOut();
// 		$('.ハンバーガーメニュー').removeClass('active');
// 		$('.メニューの部分').removeClass('open');
// 	});
// });



// ヘッダースクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function($) {
  $('.box').bgSwitcher({
    images: ['01.jpg', '02.jpg', '03.jpg', '04.jpg'], // 切り替える背景画像
    Interval: 5000, //切り替えの間隔 1000=1秒
    start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始
    loop: true, //切り替えをループする
    shuffle: false, //背景画像の順番をシャッフルする
    effect: "fade", //エフェクトの種類 (fade / blind / clip / slide / drop / hide)
    duration: 1000, //エフェクトの時間 1000=1秒
    easing: "swing", //エフェクトのイージング 
  });
});

// 背景画像のスライダー
$(function($) {
  $('.Kv').bgSwitcher({
      images: ['../../img/fv-bgi_01@2x.jpg','../../img/fv-bgi_02@2x.jpg','../../img/fv-bgi_03@2x.jpg'], // 切り替える背景画像を指定
  });
});

$(function(){
  var imgHeight = $('.Kv__height').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
  var header = $('.Header'); //ヘッダーコンテンツ

  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight) {
       //メインビジュアル内にいるので、クラスを外す。
       header.removeClass('hidden');
     }else {
       //メインビジュアルtより下までスクロールしたので、クラスを付けて色を変える
       header.addClass('hidden');
     }
  });
});

