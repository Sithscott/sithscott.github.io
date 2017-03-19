 jQuery(document).ready(function ($) {
     function ajaxFromLocalJson(locationToGrab) {
         $.ajax({
             url: "../homework/weather/weather.json",
             dataType: "json",
             success: function (data) {
                 console.log(data);
                 var location = data[locationToGrab]['City'];
                 var state = data[locationToGrab]['State'];
                 //Could also get the object Location by writing data.Franklin.City.
                 var temp_f = data[locationToGrab]['High'];
//                 var locationF = data['Franklin']['City'];
//                 var stateF = data['Franklin']['State'];
//                 var tempF = data['Franklin']['High'];
                 console.log("Current temperature in " + location + " is: " + temp_f);

                 var location1 = $('#location');
                 var temp = $('#temp');
                 var message = $('#message');

                 location1.text(location + ', ' + state);
                 temp.text(temp_f);
                 message.text("Current temperature in " + location + " is: " + temp_f);

             }
         });
     }
     ajaxFromLocalJson('Franklin');
 });