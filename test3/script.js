$(function(){
//jQuery
$('h2').hover(
  function(){

    $(this).css({
      'color':'skyblue',
      'background-color':'white',
      'width':'120px',
      'height':'120px',
      'border-radius':'60px',
      'line-height':'110px',
      'font-weight':'bold',
      'margin-top':'8px',
      'margin-left':'15px',
    });

},
function(){
  $(this).css({
    //'float': 'left',
    'width': '90px',
    'height': '90px',
    'background-color': 'skyblue',
    //'text-align': 'center',
    'line-height': '85px',
    'color':'white',
    //'border': '5px solid skyblue',
    //'box-sizing': 'border-box',
    'border-radius': '500px',
    //'transition': 'all 0.2s ease-out',
    //'font-size': '20px',
    //'margin-right': '30px',
    'margin-left': '30px',
    'margin-top':'16.6px',
    //'position': 'absolute',
  })

})

});
