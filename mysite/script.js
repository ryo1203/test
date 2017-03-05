$(function(){

$('.header-list').hover(
  function(){
    $(this).css('background-color','rgb(210,210,210)');
  },
  function(){
    $(this).css('background-color','rgb(255, 255, 255)');
    $('.menu').css('border-color', 'opacity(0.0)');
  }
);

$('.header-list').hover(
  function(){
    $('header>ul>li>div>ul>li').css('height','50px');
  },
  function() {
    $('header>ul>li>div>ul>li').css('height','0px');
  }
);


});
