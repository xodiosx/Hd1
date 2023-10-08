// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyBIHYrQ9UDuniqixbgiwEKVvGekc24j_j8",
    authDomain: "xlogin1.firebaseapp.com",
    databaseURL: "https://xlogin1-default-rtdb.firebaseio.com",
    projectId: "xlogin1",
    storageBucket: "xlogin1.appspot.com",
    messagingSenderId: "694120584058",
    appId: "1:694120584058:web:8a6980c9d6ad2409147cc3",
    measurementId: "G-92FBT6BCXM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


        
        import {getDatabase, ref, get, set, child, update, remove}
        from //Copy and Paste the URL from near the top of the CDN you pasted in from firebase
"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
        // (the one where you imported "initializeApp" from),
        //but change "firebase-app" to "firebase-database"
        

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const db = getDatabase();


const auth = getAuth(app);

const user = auth.currentUser;
let currentuser = null;

//alert("ok");

 currentuser = JSON.parse(localStorage.getItem("user"));


if (user) {
  
   if (currentuser !== null){
alert( "Welcome back " + currentuser.email)

}
//window.location=("../");
  
} else {
  // No user is signed in.
//alert("Welcome back ");
if (currentuser == null){
alert("please login first")
window.location=("login/");
}
}

var logoutt = document.querySelector("#logout");
    

logoutt.addEventListener('click', logout);

 

function rrr(){
var uidu = JSON.parse(localStorage.getItem("uid3"));
var enterID = uidu;

alert(uidu);
            remove(ref(db, "uid/"+ enterID))
            .then(()=>{
                alert("logged out");
window.location=("login/");
            })
            .catch((error)=>{
                alert(error);
            });
        }




function logout(){

 currentuser = JSON.parse(localStorage.getItem("user"));
if (currentuser !== null){


//alert ("logedout")
signOut(auth).then(() => {
  // Sign-out successful.
rrr();
sessionStorage.removeItem("user", user);
localStorage.setItem("user", user);

return;
}).catch((error) => {
  // An error happened.

});


} else {
alert ("not logged in")
}
}
