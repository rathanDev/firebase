
### -------------------- ### -------------------- ### -------------------- ### -------------------- ###




### -------------------- ### -------------------- ### -------------------- ### -------------------- ###
Reference:

How to CRUD in angular firebase firestore
https://itnext.io/how-to-crud-in-angular-firebase-firestore-456353d7c62

https://github.com/dottedsquirrel/AngularFirebaseCRUD

### -------------------- ### -------------------- ### -------------------- ### -------------------- ###

Reference:
https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71

ng new fcc-book-trading

npm i firebase angularfire2

Firebase console
https://console.firebase.google.com/project/angular-850b4/overview
;
https://console.firebase.google.com/project/angular-850b4/settings/general/web:NWQzMTRmNWQtNDQ2Mi00NWNjLWE1NTYtNTg2NDNlNmIxMWU0

const firebaseConfig = {
  apiKey: "AIzaSyA_XxC8vb5KNaqtx_TfJpz-SdRxn11p8pA",
  authDomain: "angular-850b4.firebaseapp.com",
  databaseURL: "https://angular-850b4.firebaseio.com",
  projectId: "angular-850b4",
  storageBucket: "",
  messagingSenderId: "1002528644091",
  appId: "1:1002528644091:web:542fe20149f6a79bea095e",
  measurementId: "G-7XSKYN17G3"
};


---------------------------------------------
default rules

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}

medium
{
  "rules": {
    ".read": "auth == null",
    ".write": "auth == null"
  }
}

stack overflow
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}

---------------------------------------------



curl -X PUT -d '{
  "alanisawesome": {
    "name": "Alan Turing",
    "birthday": "June 23, 1912"
  }
}' 'https://angular-850b4.firebaseio.com/rest/saving-data/fireblog/users.json'


------

oct10project 
webApp: oct10webapp

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7SE96UA4z4e8NJUaQANvDO-GA7qXkWyY",
    authDomain: "oct10project.firebaseapp.com",
    databaseURL: "https://oct10project.firebaseio.com",
    projectId: "oct10project",
    storageBucket: "oct10project.appspot.com",
    messagingSenderId: "96545103937",
    appId: "1:96545103937:web:75d77eede47192edc6e6c0",
    measurementId: "G-F7TXJJ8KV2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>


Firebase has 2 types of databases 
Realtime Database 
Cloud firestore

Hosted in aws S3
http://firebase-trivyol.s3-website-us-east-1.amazonaws.com/




