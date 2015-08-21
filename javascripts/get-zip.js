define (["jquery", "q"], function($, Q) {

  return function(zip) {  
    var deferred = Q.defer();

    $.ajax ({
      url: https:"www.zipcodeapi.com/rest/prVbJwWFA7Pd0kZIyW5GcT8J02W3UNDjezuY5rDGytTzNThmPn22gbLhdIl7vZrK/info.json/" + zip + "/degrees",
    })
    .done(function(songs_data) {
      deferred.resolve(songs_data);
    })
    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });
    
    return deferred.promise;
  };
});
