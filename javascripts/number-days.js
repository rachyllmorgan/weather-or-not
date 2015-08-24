define(function(require) {
  var $ = require("jquery");
  var getWeather = require("get-weather");

  $(".btn-default").click(function() {
    coordinates = {};
    coordinates.lat = $(this).parent().attr("data-lat");
    coordinates.lon = $(this).parent().attr("data-lon");
    days = $(this).attr("data-days");
    getWeather(coordinates, days).then(function(data) {
      console.log(data);
      $("#current").html(currentTpl(data2.list));
    });
  });
});