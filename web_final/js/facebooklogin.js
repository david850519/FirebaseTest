

  function login(){
  	alert("hi");
  			var config = {
    apiKey: "AIzaSyC29IcXEjMcz1GMWIb93UPkJBKmRexvowM",
    authDomain: "facebooklogin-f6d7c.firebaseapp.com",
    databaseURL: "https://facebooklogin-f6d7c.firebaseio.com",
    projectId: "facebooklogin-f6d7c",
    storageBucket: "facebooklogin-f6d7c.appspot.com",
    messagingSenderId: "269057605882"
  };
  firebase.initializeApp(config);

		  	var provider = new firebase.auth.FacebookAuthProvider();
		  	provider.setCustomParameters({
			  'display': 'popup'
			});
			firebase.auth().signInWithPopup(provider).then(function(result) {
			  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
			  var token = result.credential.accessToken;
			  // The signed-in user info.
			  var user = result.user;
			  // ...
			}).catch(function(error) {
			  // Handle Errors here
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
			  // ...
			});
		  }