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

