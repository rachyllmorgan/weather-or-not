define(function(require){

	var firebase = require("firebase");

	var uid = null;

	// Detect if already logged in
		var ref = new Firebase("https://weather-or-not.firebaseio.com");
		var authData = ref.getAuth();
			console.log("authData", authData);

		//   if there is no token key on the authData object, authenticate with GitHub OAuth
	if(authData === null) {
		ref.authWithOAuthPopup("github", function(error, authData) {
			if (error) {
	  			console.log("Login Failed!", error);
			} else {
  				console.log("Authenticated successfully with payload:", authData);

  				auth.setUid(authData.uid);

 //   require(["core_list"], function(){}) --- create a new file to hold all info so page will not load until authenticated
			}
		});

// user already authenticated, store uid and show data
	} else {
		auth.setUid(authData.uid);
//   require(["core_list"], function(){}) --- create a new file to hold all info so page will not load until authenticated	
	
	}	

	return {

		getUid: function(){
			console.log("returning ", uid);
			return uid;
		},
		setUid: function(newId) {
		console.log("setting user id to ", newId);
		uid = newId;
		}
	};

});