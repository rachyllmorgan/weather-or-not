


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
        alert("Zip is not the correct length");
      }

      for(i=0; i<5; i++) {
      if (digits.indexOf(input.charAt(i))<0) {
        alert("First five digits must be numeric");
        break;
      }
    }

    require(["hbs!../templates/current"], function(currentTpl) {
      getZip(input).then(function(data) {
        console.log(data.coord);
        getWeather(data.coord).then(function(data2) {
          console.log(data2);
          $("body").html(currentTpl(data2.list));
        });
      });
    }); 
  });
});