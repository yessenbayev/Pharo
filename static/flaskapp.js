function myNumber(){
	var x=document.getElementById("myNumber").value; 
	console.log(x);
	return x; 
}


function clickme(name, count){
	fetch('/flaskapp/'+name+'/count='+count)
	.then(response => response.json())
    	.then(function(response) {
           printout(response, name);
             pop(response,name); 
             
            }
    	
        	); 
}

 function printout(response, name){
        // document.getElementById('stuff').style.display="block"; 
        document.getElementById('stuff').innerHTML=" ";
        var f="<tr> <th> Timestamp </th> <th>"+ name +  detail(name) + "</th></tr>"; 

        for(var y=0; y<Object.keys(response).length; y++){
            f+= "<tr><td>"+response[y]['Timestamp'] +"</td><td>" + response[y]['reading'] +"</td></tr>";
}
    document.getElementById('stuff').innerHTML+=f;

}
function detail(name){
      switch (name){
       case "Temperature": 
            return ' (&#8451) '; 
            break; 
        case "Audio": 
            return "";
            break; 
        case "Humidity":
            return ' (%) ' 
            break; 
        case "Gate":
            return "";
            break; 
        case "Envelope":
            return " (V) "; 
            break; 
        case "Light": 
            return ' (V/unit) '
            break; 

    }
}






function pop(response, name){
    var modal = document.getElementById('myModal');
    switch (name){
       case "Temperature": 
        if(response[0]['reading']>27){
            document.getElementById('hello').innerHTML="LOOK AT ME! It is too HOT for me! GET ME OUT OF HERE!";
            modal.style.display = "block";
        }   
         if(response[0]['reading']<17){
            document.getElementById('hello').innerHTML="I am NEEDY! It is too COLD for me! GET ME OUT OF HERE!";
            modal.style.display = "block";
        }   
        if(response[0]['reading']>=17 && response[0]['reading']<=27){
            document.getElementById('hello').innerHTML="This temperature feels great! Wish it was always like this year around!";
            modal.style.display = "block";
        }   
            break; 
        case "Audio": 
            break; 
        case "Gate":
            break; 
        case "Humidity": 
            if(response[0]['reading']>60){
            document.getElementById('hello').innerHTML="I need attention! It is too HUMID for me! I NEED TO BE MORE DRY!";
            modal.style.display = "block";
        }   
         if(response[0]['reading']<45){
            document.getElementById('hello').innerHTML="UMMM HELLO? It is NOT HUMID enough for me! GET ME WETTER!";
            modal.style.display = "block";
        }   
        if(response[0]['reading']>=45 && response[0]['reading']<=60){
            document.getElementById('hello').innerHTML="Wow this is a great humidity. Not too wet or dry. It is just right";
            modal.style.display = "block";
        }   
            break; 
        case "Envelope": 
            break; 
        case "Light": 
               if(response[0]['reading']<500){
            document.getElementById('hello').innerHTML="Please Please! I need more light or I will DIE";
            modal.style.display = "block";
        }   
         if(response[0]['reading']>800){
            document.getElementById('hello').innerHTML="I feel like you don't even care! Too much light! Are you trying to get me sunburnt?";
            modal.style.display = "block";
        }   
        if(response[0]['reading']>=500 && response[0]['reading']<=800){
            document.getElementById('hello').innerHTML="OH BABY! PERFECT lighting for my selfies!";
            modal.style.display = "block";
        }   
            break; 

    }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}



// var file = document.getElementById("file");
    
    
//     var f="<tr>";
//     for(var z=0; z<Object.keys(mydata).length; z++){
//     	var key=Object.keys(mydata)[z];
//     	f+="<th>"+ key.toUpperCase(); + "</th>";   	
//     }
//     f+="</tr>";
//     file.innerHTML +=f; 
    
//     for(var i =0; i<Object.values(mydata)[0].length; i++){
//     	var tr="<tr>";
//     	for(var x =0; x<Object.keys(mydata).length; x++){
  
//     	var key=Object.keys(mydata)[x];
//     	tr+="<td>"+ mydata[key][i] +"</td>";
    	
//     }

//     tr+="</tr>";
//     file.innerHTML +=tr; 