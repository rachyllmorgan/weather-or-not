


define(function(require) {
  var $ = require("jquery");
  var getZip = require("get-zip");
  var getWeather = require("get-weather");

  $("#submit-button").click(function(e) {
    e.preventDefault();
    console.log("submit clicked");

    var input = $("#input").val();
    console.log("input", input);

// Hides invalid zip message and resets zip input field to empty.
    $("#input").click(function() {
        $("#message").css("display", "none");
        $("#input").val("");
    });

// Verifies that zip input is 5 digits and contains only numbers,
// puts invalid zip message on screen if not.
      len=input.length;
      digits="0123456789";
      if(len != 5 && len != 10) {
        $("#message").css("display", "block");
      } 

      for(i=0; i<5; i++) {
      if (digits.indexOf(input.charAt(i))<0) {
        $("#message").css("display", "block");
        break;
        } 
      }
    }

      require(["hbs!../templates/current", "hbs!../templates/button"], function(currentTpl, buttonTpl) {
        getZip(input).then(function(data) {
          $("#buttons").html(buttonTpl(data.coord));
          console.log(data.coord);
          getWeather(data.coord, 1).then(function(data2) {
            console.log(data2);
            $("#current").html(currentTpl(data2.list));
        });
      });
    }); 
  });
});