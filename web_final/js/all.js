var config = {
	apiKey: "AIzaSyC29IcXEjMcz1GMWIb93UPkJBKmRexvowM",
	authDomain: "facebooklogin-f6d7c.firebaseapp.com",
	databaseURL: "https://facebooklogin-f6d7c.firebaseio.com",
	projectId: "facebooklogin-f6d7c",
	storageBucket: "facebooklogin-f6d7c.appspot.com",
	messagingSenderId: "269057605882"
	};

function login(){
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
	var name,email,photoUrl,uid;
		    name = user.displayName;
  			email = user.email;
  			photoUrl = user.photoURL;
  			uid = user.uid;
  			console.log('name:'name+',email:'+email+',photoUrl:'+photoUrl+',uid:'+uid)
  	  	/*var database=firebase.database();
  		database.ref('Users/'+uid+'/').set({
  					username: name,
  					email: email,
  					profile_pic:photoUrl		
  			});*/

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

function checkIfUserExist(){
	var USERS_LOCATION="https://facebooklogin-f6d7c.firebaseio.com/Users"
	var usersRef=new firebase(USERS_LOCATION);
	usersRef.once('value', function(snapshot) {
    	var exists = (snapshot.val() !== null);
    	userExistsCallback(uid, exists);
   	 	if (exists) {
    		alert('user ' + userId + ' exists!');
  		} else {
   			alert('user ' + userId + ' does not exist!');
  		}
  });
}
//
/*function GetData(){
	firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    // User is signed in.
		    alert("Yes");
		    var name,email,photoUrl,uid;
		    name = user.displayName;
  			email = user.email;
  			photoUrl = user.photoURL;
  			uid = user.uid;
  			//checkUser
  			var database=firebase.database();
  			var users=database.ref('Users/');
  			
  			users.once('value',function(snapshot){
				if(!snapshot.hadChild(uid)){
					alert("nope");
				}else{
					alert("exist");
				}
	});
  			var database=firebase.database();
  			database.ref('Users/'+uid+'/').set({
  					username: name,
  					email: email,
  					profile_pic:photoUrl		
  			});
		  } else {
		    // No user is signed in.
		    alert("No");
		  }
		});
}*/


$(function(){

	$( ".menu" ).click(function() {
  
 	 $('.shoes').slideToggle();
  
	});

});

$(function(){

	$( ".us" ).click(function() {
  
 	 $('.f1').slideToggle();
  
	});

});

$(function(){

	$( ".mem" ).click(function() {
  
 	 $('.f2').slideToggle();
  
	});

});

$(function(){

	$( ".cen" ).click(function() {
  
 	 $('.f3').slideToggle();
  
	});

});
