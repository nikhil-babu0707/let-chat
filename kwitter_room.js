const firebaseConfig = {
    apiKey: "AIzaSyC9jnHiz7PCABqFXZN0Uo6cce0XjAZwC4g",
    authDomain: "kwitter-9c066.firebaseapp.com",
    databaseURL: "https://kwitter-9c066-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c066",
    storageBucket: "kwitter-9c066.appspot.com",
    messagingSenderId: "602149681928",
    appId: "1:602149681928:web:604ae48f733a40d68e0abd"
};
const app = initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
        });
    });
}
getData();