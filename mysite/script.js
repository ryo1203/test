$(function(){

$('.menu > a , .table-group > a').hover(
  function(){
    $(this).css('background-color','rgba(209, 209, 209,0.9)');
  },
  function(){
    $(this).css('background-color','rgba(209, 209, 209,0.0)');
  });

  $('.menu:nth-child(2)').hover(
    function(){
      $('.menu-table').slideDown('fast');
    },
    function(){
      $('.menu-table').slideUp();
    });

});
