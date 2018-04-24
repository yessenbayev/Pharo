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


