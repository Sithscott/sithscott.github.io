// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();
    //
    //            function ajaxFromApi() {
    //                $.ajax({
    //                    url: "http://api.wunderground.com/api/ede33b3287d21605/geolookup/conditions/q/IA/Cedar_Rapids.json",
    //                    dataType: "jsonp",
    //                    success: function (parsed_json) {
    //                        console.log(data);
    //                        var location = parsed_json['location']['city'];
    //                        var temp_f = parsed_json['current_observation']['temp_f'];
    //                        alert("Current temperature in " + location + " is: " + temp_f);
    //                    }
    //                });
    //};

    
    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({
                url: "https://api.wunderground.com/api/ede33b3287d21605/geolookup/q/" + lat + ',' + long + ".json",
                dataType: "jsonp",
                success: function (data) {
                    var location = data['location']['city'];
                    var state = data['location']['state'];
                    document.getElementById("title").innerHTML = 'Sithscott | ' + location + ', ' + state;
                    document.getElementById('city').innerHTML = location + ',' + state;
                    //var temp_f = data['current_observation']['temp_f'];
//                   var temp = $('currentTemp');
//                    var summary = $('summary');
//                    document.getElementById('cityDisplay').innerHTML = location;
                     console.log(data)
//                    temp.text(temp_f);
//                    summary.text(location);
                   // alert("Current temperature in " + location + " is: " + temp_f);
                     getConditions(location, state);
                }

                //        $("#cover").fadeOut(250);
            })
        };
    
function getConditions(location, state) {
     $.ajax({
                url: "https://api.wunderground.com/api/ede33b3287d21605/conditions/q/" + state + '/' + location + ".json",
                dataType: "jsonp",
                success: function (data) {
                    var temp_f = data['current_observation']['temp_f'];
                    var summaryIcon = data['current_observation']['icon_url'];
                    var summaryExp = data ['current_observation']['icon'];
                    var temp_c = data['current_observation']['temp_c'];
                    var weather = data['current_observation']['weather'];
                    var precipitation = data['current_observation']['precip_1hr_metric'];
                    var wind = data['current_observation']['wind_mph'];
                    console.log(data);
                    
//                    document.getElementById('temp').innerHTML = temp_f + '&deg;';
                    document.getElementById('sun').innerHTML = '<img id="sunimg" src="' + summaryIcon + '" alt="Picture icon"><p id= "temp">' + temp_f + '&deg;</p>';
                    
                    document.getElementById('precipitation').innerHTML = precipitation + '%';
                    document.getElementById('wind').innerHTML = wind + 'MPH';
                    
//                    $('currentTemp').text(temp_f);
//                    document.getElementById('currentTemp').innerHTML = temp_f + '&deg;f';
//                    document.getElementById('summary').innerHTML = summaryExp;
//                    document.getElementById('add1').innerHTML = '<img src = "' + summaryIcon + '">';
//                    document.getElementById('add2').innerHTML = temp_c + '&deg;c';
//                    document.getElementById('add3').innerHTML = weather;
}
     })
};
    $("#cover").fadeOut(250);
    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});