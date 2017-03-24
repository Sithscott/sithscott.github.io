$('#query').keyup(function(){
      var value = $('#query').val();
    var rExp = new RegExp(value, "i");
      $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
          console.log(data);
          var output = '<ol>';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
//        getData(val.lat, val.lon);
    }); // end each
    output += '</ol>';
    $("#searchResults").html(output);
//          console.log(val.l.lat);
// send results to the page
  
  }); // end getJSON
  }); // end keyup

// Get weather data from wunderground.com
//function getData(input) {
//    // Get the data from the wunderground API
//    $.ajax({
//        url: "https://api.wunderground.com/api/ede33b3287d21605/geolookup/conditions/q/" + input + ".json",
//        dataType: "jsonp", 
//        success: function (data) {
//            console.log(data);
//            var location = data.location.city + ', ' + data.location.state;
//            var temp_f = data.current_observation.temp_f;
//            console.log('Location is: ' + location);
//            console.log('Temp is: ' + temp_f);
//            $("#cityDisplay").text(location);
//            $("title").html(location + " | Weather Center");
//            $("#currentTemp").html(Math.round(temp_f) + '°');
//            $("#summary").text(toTitleCase(data.current_observation.icon));
//            $("#cover").fadeOut(250);
//        }
//    });
//}


// Intercept the menu link clicks
$("#searchResults").on("click", "a", function (evt) {
    evt.preventDefault();
    // With the text value get the needed value from the weather.json file
    var jsonCity = $(this).text(); // Franklin, etc...
    console.log(jsonCity);
    $.ajax({
        url: "https://api.wunderground.com/api/ede33b3287d21605/geolookup/conditions/q/" + jsonCity + ".json",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
//            console.log(data[jsonCity]);
//            var zip = data['location']['zip'];
            var city = data['location']['city'];
            var country =data['location']['country'];
            var summaryIcon = data['current_observation']['icon_url'];
            var temp_f = data['current_observation']['temp_f'];
            var wind = data['current_observation']['wind_mph'];
            var precipitaion = data ['current_observation']['precip_today_metric']
            console.log(data['location']);
//            getData(zip);
            
            var output2 = ' \<main> <div class="heading"> <h1 id="city">'+ city + ', ' + country + '</h1> </div> <div id="sun>';
            output2 += '<img id="sunimg" src="' + summaryIcon + '" alt="Picture icon"> <p id="temp">' + temp_f + '&deg;F</p> </div> <div id="flex"> ';
            output2 += '<div class="extra"> <table> <tr> <th>Wind</th> <th> Precipitation</th> </tr> <tr> <td id="wind">' + wind + ' mph </td> <td id="precipitation">' + precipitaion + '%</td> </tr> </table> </div>';
            output2 += ' </div></main>';
            $('#title').text(city + ' | Sithscott');
            $('#searchResults').html(output2);
        }
    });
});


// A function for changing a string to TitleCase
function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}



//
//$('#query').keyup(function(){
//      var value = $('#query').val();
//    var rExp = new RegExp(value, "i");
//      $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
//          console.log(data);
//          var output = '<ol>';
//    $.each(data.RESULTS, function(key, val) {
//      if (val.name.search(rExp) != -1) {
//        output += '<li>';
//        output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
//        output += '</li>';
//      }
//    }); // end each
//    output += '</ol>';
//    $("#searchResults").html(output);
//    getData(val.name)// send results to the page
//  
//  }); // end getJSON
//  }); // end keyup