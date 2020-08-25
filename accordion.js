$(function(){
    $('dd').css('display' ,'none');
    $('dl dt').click(function(){
        if($('+dd',this).css('display')=='none'){
            $('+dd',this).slideDown('slow');
            $(this).addClass('selected');
        }
        else{
            $('+dd',this).slideUp('slow');
            $(this).removeClass('selected');

        }
    });
  
  });