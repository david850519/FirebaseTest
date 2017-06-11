
 var config = {
        apiKey: "AIzaSyB-vFIegNSwJN7VIb8s_gzndptHs8N-eSs",
        authDomain: "webfblogin-6ae83.firebaseapp.com",
        databaseURL: "https://webfblogin-6ae83.firebaseio.com",
        projectId: "webfblogin-6ae83",
        storageBucket: "webfblogin-6ae83.appspot.com",
        messagingSenderId: "312418366446"
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

function GetUserData(){
        var user=firebase.auth().currentUser;
        if(user){
        alert(user);
        }else{
        alert("error");
        }
}