$(function(){

// スティッキーヘッダー
//*スクロールすると色が付く

  var $win = $(window),
      $top = $('.top'),
      $header = $('.header'),
      topHeight = $top.outerHeight();
      fixedClass = 'fixed';
    
    $win.on('load scroll',function(){
      var value = $(this).scrollTop();
      if($win.width() > 768){
        if(value > topHeight){
          $header.addClass(fixedClass);
        }else{
          $header.removeClass(fixedClass);
        }
      }
    });
});

// ハンバーガーメニュー
$('.hamburger-btn').click(function(){
  $(this).toggleClass('active');
  $('.header__nav').fadeToggle(300);
  $('body').toggleClass('noscroll');
});

// スライダー
// slickを使用
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  fade: true,
  cssEase: 'linear'
});

