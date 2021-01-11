'use strict';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnsSVyoVBqj_MLsjm27IN8rawZ7A6Y8eY",
  authDomain: "modusversus-project.firebaseapp.com",
  projectId: "modusversus-project",
  storageBucket: "modusversus-project.appspot.com",
  messagingSenderId: "295123108152",
  appId: "1:295123108152:web:5b08fb1d9576c1a5ecc1cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const portfolio = [];


function getData() {  
  database.ref('/').once('value', (snap)=>{
    snap.forEach((el)=>{
      portfolio.push(el.val());
    });
  });
}

getData();

setTimeout(() => {
  console.log(portfolio)
  
}, 5000);