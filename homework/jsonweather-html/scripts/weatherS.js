$(function () {  

$.ajax({
                url: "scripts/weather.json",
                dataType: "json",
                success: function (data) {
//                    var temp_f = data['Franklin']['High'];
                    var temp_s = data['Springfield']['High'];
//                    var temp_g = data['Greenville']['High'];
//                    var summary_f = data['Franklin']['Summary'];
                    var summary_s = data['Springfield']['Summary'];
//                    var summary_g = data['Greenville']['Summary'];
//                    var summaryIcon = data['current_observation']['icon_url'];
//                    var summaryExp = data ['current_observation']['icon'];
//                    var temp_c = data['current_observation']['temp_c'];
//                    var weather = data['current_observation']['weather'];
                    console.log(data);
                    
                   // $('currentTemp').text(temp_f);
//                   document.getElementById('FcurrentTemp').innerHTML = temp_f + '&deg;f';
                   document.getElementById('ScurrentTemp').innerHTML = temp_s + '&deg;f';
//                   document.getElementById('GcurrentTemp').innerHTML = temp_g + '&deg;f';
//                    document.getElementById('Fsummary').innerHTML = summary_f;
//                    document.getElementById('Gsummary').innerHTML = summary_g;
                    document.getElementById('Ssummary').innerHTML = summary_s;
//                    document.getElementById('summary').innerHTML = summaryExp;
//                    document.getElementById('add1').innerHTML = '<img src = "' + summaryIcon + '">';
//                    document.getElementById('add2').innerHTML = temp_c + '&deg;c';
//                    document.getElementById('add3').innerHTML = weather;
}
     })

  
  
//   $("#page-header").load("../modules/header.html");
//  $("#page-nav").load("../modules/navigation.html");
//  $("#footer-content").load("../modules/footer.html");
});