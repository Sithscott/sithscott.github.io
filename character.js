$("#characterul").on("click", "a", function (evt) {
    evt.preventDefault();
    // With the text value get the needed value from the weather.json file
    var jsonChara = $(this).text(); // Franklin, etc...
    console.log(jsonChara);
    $.ajax({
        url: 'character.json',
        dataType: "json",
        success: function (data) {
            console.log(data);
            console.log(data[jsonChara]);
            var name = data[jsonChara]['Name'];
            var content = data[jsonChara]['Content'];
            var img = data[jsonChara]['Picture'];
            document.getElementById('name').innerHTML = name;
            document.getElementById('content').innerHTML = content;
            document.getElementById('imgC').innerHTML = img;
            console.log(name);
        }
    })
});

//// Intercept the menu link clicks
//$("#characterul").on("click", "a", function (evt) {
//    evt.preventDefault();
//    // With the text value get the needed value from the weather.json file
//    var jsonCity = $(this).text(); // Franklin, etc...
//    console.log(jsonCity);
//    $.ajax({
//        url: "character.json",
//        dataType: "json",
//        success: function (data) {
//            console.log(data);
//            console.log(data[jsonCity]);
//            var zip = data[jsonCity].zip;
//            console.log(zip);
//            getData(zip);
//        }
//    });
//});