


define(function(require) {
  var $ = require("jquery");
  var getZip = require("get-zip");
  var getWeather = require("get-weather");

  $("#submit-button").click(function(e) {
    e.preventDefault();
    console.log("submit clicked");

    var input = $("#input").val();
    console.log("input", input);

      len=input.length;
      digits="0123456789";
      if(len != 5 && len != 10) {
        $("#warning").css("display", "block");
      }

      for(i=0; i<5; i++) {
      if (digits.indexOf(input.charAt(i))<0) {
        $("#warning").css("display", "block");
        break;
      }
    }

    require(["hbs!../templates/current"], function(currentTpl) {
      getZip(input).then(function(data) {
        console.log(data.coord);
        getWeather(data.coord, 1).then(function(data2) {
          console.log(data2);
          $("#current").html(currentTpl(data2.list));
        });
      });
    }); 
  });
});