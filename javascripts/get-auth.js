define(function(require){
	var firebase = require("firebase");
	var setAuth = require("set-auth");

	return {

	   		getLogin: function(logSource) {

			var uid = null;

			// Detect if already logged in
				var ref = new Firebase("https://weather-or-not.firebaseio.com");
				var authData = ref.getAuth();
					console.log("authData", authData);

				//   if there is no token key on the authData object, authenticate with GitHub OAuth
			if(authData === null) {
				ref.authWithOAuthPopup(logSource, function(error, authData) {
					if (error) {
			  			console.log("Login Failed!", error);
					} else {
		  				console.log("Authenticated successfully with payload:", authData);

		  				setAuth.setUid(authData.uid);

		 //   require(["core_list"], function(){}) --- create a new file to hold all info so page will not load until authenticated
					}
				});

		// user already authenticated, store uid and show data
			} else {
				setAuth.setUid(authData.uid);
		//   require(["core_list"], function(){}) --- create a new file to hold all info so page will not load until authenticated	
			
			}
		}
	};
});