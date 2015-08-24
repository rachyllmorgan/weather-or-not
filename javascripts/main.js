requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["dependencies", "get-auth", "set-auth", "get-zip", "get-weather", "verify-zip"],
  function(dependencies, getAuth, setAuth, getZip, getWeather, verifyZip) {

    $(document).on("click", "#facebook", function(){
      console.log("facebook login");
        getAuth.getLogin("facebook");
    });

    $(document).on("click", "#github", function(){
      console.log("github login");
        getAuth.getLogin("github");
    });

    $(document).on("click", "#googleplus", function(){
      console.log("google login");
        getAuth.getLogin("google");    
    });
  });