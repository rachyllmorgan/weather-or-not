define (["jquery", "q"], function($, Q) {

  return function(zip) {  
    var deferred = Q.defer();
    console.log(zip);


    $.ajax ({
      url: "http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us"
    })
    .done(function(data) {
      console.log(data.coord);
      deferred.resolve(data);
    })
    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });
    
    return deferred.promise;
  };
});
