// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnsSVyoVBqj_MLsjm27IN8rawZ7A6Y8eY",
  authDomain: "modusversus-project.firebaseapp.com",
  projectId: "modusversus-project",
  storageBucket: "modusversus-project.appspot.com",
  messagingSenderId: "295123108152",
  appId: "1:295123108152:web:5b08fb1d9576c1a5ecc1cd",
};

module.exports = class {
  _database;
  _firebase;
  _config = firebaseConfig;

  constructor(firebase) {
    this.posts = [];

    this.init(firebase);
  }

  init(firebase) {
    this._firebase = firebase.initializeApp(firebaseConfig);
    this._database = this._firebase.database();
  }

  loadPosts() {
    return this._database
      .ref("/portfolio")
      .limitToFirst(4)
      .get()
      .then(snap => Object.values(snap.val()));
  }

  getPostsByTag(tag) {
    return this._database
      .ref("/portfolio")
      .orderByChild("tags/"+tag)
      .equalTo(true)
      .limitToLast(4)
      .once("value")
      .then(snap => Object.values(snap.val()));
  }
};
