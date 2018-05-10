function pop(){
    var modal = document.getElementById('myModal');
    document.getElementById('hello').innerHTML="The Pharo is a for profit organization that serves B2C bikers who need high-protection, gps tracking and unlocking mechanism via smart devices. We will generate revenue using direct sales model.";
    modal.style.display = "block";
    }   


var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
// Script for side navigation
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
            $('.w3-card').css('height',420);
            $('.mission').css('height',250);

            $('*').each(function(){
            $(this).css('font-size',16);  
            });
        }
        else{
            $(this).val(0);
            $('.w3-card').css('height',550);
             $('.mission').css('height',350);
            $('*').each(function(){ 
            $(this).css('font-size',20);  
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

       // $('*').each(function(){
       // var k =  parseInt($(this).css('font-size')); 
       // var redSize = ((k*110)/100) ; //here, you can give the percentage( now it is reduced to 90%)
       //     $(this).css('font-size',redSize);  

       // });
       // $(#w3-card).(function(){
       //       $(this).css('min-height',800);
       // }); 

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

