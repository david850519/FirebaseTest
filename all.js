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
		var token = result.credential.accessToken;
		var user = result.user;
		var name,email,photoUrl,uid;
		name = user.displayName;
  		email = user.email;
  		photoUrl = user.photoURL;
  		uid = user.uid;
  		console.log(uid);
  		$( "#headerLogout" ).show();

	}).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		var email = error.email;
		var credential = error.credential;
	});
	}

function logout(){
	firebase.auth().signOut().then(function() {
 	console.log("logout ok");
 	document.getElementById('headerLogin').innerHTML='<a href="#">登入</a>';
 	 // Sign-out successful.
		}).catch(function(error) {
  	// An error happened.
  	console.log("logout error");
	});
	}
/*
function setCookie(name){
	var d = new Date();
	d.setTime=(d.getTime()+1000);
	var expires="expires"+d.toUTCString();
	document.cookie="username="+name+";"+expires+";path=/";
}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}

function checkCookie(){
	var username=getCookie("username");
	if(username!=""){
		console.log("user:"+username);
		return 0;
	}else{
		console.log("no user");
		return 1;
	}
}*/

function changeheader(name,img){
	console.log("name:"+name);
	console.log("img:"+img);
	document.getElementById('headerLogin').innerHTML='<a href="#"><img src="'+img+'">'+name+'</a>';
}