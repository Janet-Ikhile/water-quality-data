// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLoh_5uSURrD0Os6rF6-2Q5uWYnY1iDWU",
    authDomain: "water-quality-6b814.firebaseapp.com",
    databaseURL: "https://water-quality-6b814-default-rtdb.firebaseio.com",
    projectId: "water-quality-6b814",
    storageBucket: "water-quality-6b814.appspot.com",
    messagingSenderId: "615836169680",
    appId: "1:615836169680:web:c7c54d68036140b7c9b5d5",
    measurementId: "G-FT0BE0PR74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getDatabase();
onValue(ref(db, 'data'), (snapshot) => {
    const selectElement = document.getElementById('dataDisplay');
    console.log(snapshot.val());
    let temp = Object.values(snapshot.val());
    //console.log(temp[0].location.localCompare(temp[1].location));
    temp.sort((a, b) => { return a.location.localeCompare(b.location) });
    temp.forEach((item,index) => {
        const entry = document.createElement('div');
        entry.textContent = JSON.stringify(item);
        const space = document.createElement('div');
        console.log(index);
        if(index % 2 == 0)
        {
        entry.className = "bg-slate-300 px-5 rounded-sm"
        }
        else
        {
            entry.className = "bg-stone-300 px-5 1 rounded-sm"
        }
        selectElement.appendChild(entry);
        space.className = "py-1";
        selectElement.appendChild(space);
    })
})


//});
