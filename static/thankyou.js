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
          $(".features").css('height', 40+"%");
          $('h1').css('font-size', 4+"vw");
          $('h2').css('font-size', 3+"vw");
          $('h3').css('font-size', 2+"vw");
          $('th').css('font-size', 2+"vw");
           $('th').css('font-size', 1.2+"vw");
            $('p').css('font-size', 1.2+"vw");

            // $('body').each(function(){
            // $(this).css('font-size', 1.2+"vw");
            
        }
        else{
            $(this).val(0);
            $(".features").css('height', 35+"%");
             $('h1').css('font-size', 4.2+"vw");
          $('h2').css('font-size', 3.2+"vw");
          $('h3').css('font-size', 2.2+"vw");
          $('th').css('font-size', 2.2+"vw");
           $('th').css('font-size', 1.4+"vw");
            $('p').css('font-size', 1.4+"vw");
            // $('body').each(function(){
            // $(this).css('font-size', 1.4+"vw;");
        }//);

     
     });


 $('#tiggle').click(function(){
        var number = $(this).val();
        if (number==0){
            $(this).val(1);
          $(".features").css('height', 40+"%");
          $('h1').css('font-size', 4+"rem");
          $('h2').css('font-size', 3+"rem");
          $('h3').css('font-size', 2+"rem");
          $('th').css('font-size', 3+"vw");
           $('td').css('font-size', 1.5+"vw");
            $('p').css('font-size', 1.2+"rem");

            // $('body').each(function(){
            // $(this).css('font-size', 1.2+"vw");
            
        }
        else{
            $(this).val(0);
            $(".features").css('height', 35+"%");
            $('h1').css('font-size', 4.2+"rem");
          $('h2').css('font-size', 3.2+"rem");
          $('h3').css('font-size', 2.2+"rem");
          $('th').css('font-size', 3.2+"vw");
           $('td').css('font-size', 1.7+"vw");
            $('p').css('font-size', 1.4+"rem");
            // $('body').each(function(){
            // $(this).css('font-size', 1.4+"vw;");
        }//);

     
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
$('#inverters').click(function(){
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
