define(function(require) {
  var $ = require("jquery");
  var getWeather = require("get-weather");

  $(".btn-group").click(function() {
    coordinates = $(this).attr("coordinates");
    getWeather(coordinates, 1).then(function(data) {
      console.log(data);
      $("#current").html(currentTpl(data2.list));
    });
  });
});