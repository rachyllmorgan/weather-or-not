define (["jquery", "q"], function($, Q) {

  return function(zip) {  
    var deferred = Q.defer();
    console.log(zip);


    $.ajax ({
      url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=imperial&APPID=1b7f1f7355165ced17dbbeaf8d5ed137"
    })
    .done(function(data) {
      console.log(data);
      deferred.resolve(data);
    })
    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });
    
    return deferred.promise;
  };
});
