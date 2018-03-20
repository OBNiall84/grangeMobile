//javascript document


    $(document).ready(function(e) {
   $("#loginbtn").click(function(e){
  var studentNumber = "C10814698";
  var input = $("#studentN").val();
  var stuPassword= "1234";
  var passInput= $("#password").val();
  if (!input.trim() || studentNumber !== input ||
          (!passInput.trim() ||stuPassword !== passInput )) {
    e.preventDefault();  
    alert("Please enter a valid student number or password");
  }    
  
  // login validation and href disabled if false
  
      
  
});
    });      
                
            
                
      $(document).ready(function() {              
      $("#intro").css("color","#4863A0" ); 
      $("#loginbtn").css("color","#4863A0" );
      $("#prjD").css("color","#4863A0" );
      $("#uiD").css("color","#4863A0" );
       $("#designP").css("color","#4863A0" );  
       
   });
   
   
     //call json data and print to CDM page 
      $(document).ready(function() {
            $("#jsonGroup").click(function(){
                //jquery mobile collasipble kept doubling up json data when opened and re-opened,
                //therefore I assigned a class to the data and removed the data when the collapsible closed
               $('#lecturerC').find('.data-item').remove();
               $.getJSON("http://localhost:8888/php/json-data-lecturers.php",function(data){
                  
                 // iterate throug the json data to display lectures contact details
                    
                   var ulEl = $('#lecturerC').append("<ul>");
                   for (var i=0; i<5; i++){
                     var lecturer=data.lecturers[i];  
                   
                  
                   $(ulEl).append( "<ul class='data-item'>"+"  "+ lecturer.firstName + "  " + lecturer.lastName+ "  " +"<li> "+"  "+ lecturer.email  +"</li>"+"<br>"+"</ul>" );
                  }
               });
           });
       
       
       
         //logout and clear input value on login page form
         
         $(document).ready(function() {
   $("#logout").click(function(){   
       
         $("#studentN").val("");
        $("#password").val("");
          
     
           
   }); 
        
   });
         });
// societies page code



var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&jsoncallback=?";
var src;
$(document).ready(function(){
 $.getJSON(flickrAPI,
 {
 api_key: "b2a16da5c144945851c3f8705cc1da51",
 tags: "students + societies",
 tagmode: "any",
 format: "json",
 safe_search: "1",
 per_page: "1"
},
 function(data){
 $.each(data.photos.photo, function(i,item){
 src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
 $("<img/>").attr("src", src).appendTo("#flickrImg1");
 });
 }); 
});

//flickrImg2 div image for societies

 


// var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&jsoncallback=?";
// var src;
// $(document).ready(function(){
//  $.getJSON(flickrAPI,
//  {
//  api_key: "b2a16da5c144945851c3f8705cc1da51",
//  tags:  "study+ buddy",
//  tagmode: "any",
//  format: "json",
//  safe_search: "1",
//  per_page: "1"
// },
//  function(data){
//  $.each(data.photos.photo, function(i,item){
//  src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
//  $("<img/>").attr("src", src).appendTo("#flickrImg2");
//  });
//  }); 
// });

//flikrImg4 div socities images

var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&jsoncallback=?";
var src;
$(document).ready(function(){
 $.getJSON(flickrAPI,
 {
 api_key: "b2a16da5c144945851c3f8705cc1da51",
 tags: " students+ socialising",
 tagmode: "any",
 format: "json",
 safe_search: "1",
 per_page: "1"
},
 function(data){
 $.each(data.photos.photo, function(i,item){
 src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
 $("<img/>").attr("src", src).appendTo("#flickrImg3");
 });
 }); 
});

$(document).ready(function() {
$("#societiesText").text("In the DIT Societies Office with the DIT Societies\n\
 and Events Committee we endeavour to promote and provide a huge and diverse \n\
range of student lead volunteering opportunities, societies, activities and events.\n\
     For further information contact the Societies office 01 402 3172");
    });
    
    
//lecturers, student and class info ajax call for summer supervision details

$(document).ready(function() {
        
        
                   
             
$("#LI1").one("click",function(){  // to prevent data to be called on click open and close, .one only allow json call once
    
$.getJSON("http://localhost:8888/php/json-data-lecturers.php",function(data){
 $.getJSON("http://localhost:8888/php/json-data-students.php",function(dataS){ 
  $.getJSON("http://localhost:8888/php/json-data-modules.php",function(dataM){
                    
                    for (var z=0; z<1; z++){
                     var module=dataM.modules[z];  
                     
                     $('#LI1Info').append("<h4><u> Location & Date</u></h4> Institution: " +module.location +" <br> "+"Room:"+"  "+ module.room+"<br>"+"Next meeting:" +"<br>"+module.dueDate);
      
                    for (var x=0; x<1; x++){
                     var lecturer=data.lecturers[x]; 
                 
                     
       $('#LI1Info').append(' <h4><u>Supervisor Name & Student List: </u></h4>' + "<th><strong>"+ lecturer.firstName +"  "+lecturer.lastName+ '</strong></th>');
 
                        for (var i=0; i<4; i++){
                     var student=dataS.students[i]; 
                  
                  $('#LI1Info').append( "<li>" + student.firstName + "  " + student.lastName + "</li>");
    
                    
                 
                    
                    
              }
          
                        }
                    }
                });
    
              });
            });


        });
    });
    
    //map api code
  
function initMap() {
    var defaultLatLng = new google.maps.LatLng(53.352184, -6.260846);  // Default to my location dublin,
    var destination= new google.maps.LatLng(53.338558, -6.266574);// marker for DIT Aungier st
    
    
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }

        // Find the users current position.  Cache the location for 5 seconds, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 5000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add a marker to represent users current location
        var marker = new google.maps.Marker({
            position: latlng,
            icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5
    },
            map: map,
            title: "ME!"
        });
        // add a marker to represent users destination
        var marker = new google.maps.Marker({
            position: destination,
            map: map,
            title: "DIT Aungier St!"
        });
    }
}

    
        
        //module information json call
        
$(document).ready(function() {
            $("#moduleBtn").click(function(){
              $('#moduleUl').find('.data-item').remove();
             $.getJSON("http://localhost:8888/php/json-data-modules.php",function(dataMod){
                 
                 
                 var ulMod= $("#moduleUl").append("<ul>");
                 for (var i=0; i<=4;i++){
                 var module= dataMod.modules[i];
                 $(ulMod).append( "<ul class='data-item'>"+"<strong><li >"+ module.moduleName +"</strong></li>"+"<li> "+" Credits " + module.credits+ " </li> " +"<li> "+" Room number: "+ module.room  +"</li>" +"<u>Please see timetable</u>"+"<li><br> "+"</li></ul>" );
                 
                 }
             });
         });
     });