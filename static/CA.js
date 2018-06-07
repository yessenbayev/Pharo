function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "300px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
}

// Close side navigation
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


$(document).ready(function(){
    $('#toggle').click(function(){

        var number = $(this).val();
        if (number==0){
            $(this).val(1);
            $('body').each(function(){
            $(this).css('font-size', "1.3vw");
            });
        }
        else{
            $(this).val(0);

            $('body').each(function(){
            $(this).css('font-size', "1.5vw");

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