$(document).ready(function(){
    $('#toggle').click(function(){
        var number = $(this).val();
        if (number==0){
            $(this).val(1);
            $('.w3-card').css('height',420);
            $('.mission').css('height',250);
            $('*').each(function(){
            $(this).css('font-size', 16);  
            });
        }
        else{
            $(this).val(0);
            $('.w3-card').css('height',550);
             $('.mission').css('height',350);
            $('*').each(function(){ 
            $(this).css('font-size', 20);  
        }); 
           
     }
     }); 

  $('#inverter').click(function(){
        var number = $(this).val();
        if (number==1){
            $(this).val(0);
            $('body').css('background-color','black');
            $('body').css('filter','invert(100%)');
        }
        else{
            $(this).val(1);
            $('body').css('background-color','white');
            $('body').css('filter','invert(0%)');
    
           
     }
     }); 
  });