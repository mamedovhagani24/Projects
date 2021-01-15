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
  _length = null;

  constructor(firebase) {
    this.init(firebase);
  }

  init(firebase) {
    this._firebase = firebase.initializeApp(firebaseConfig);
    this._database = this._firebase.database();

    this.dataLength;
  }

  loadPosts(paginationIndex = 0) {
    return this._database
      .ref("/portfolio-2/")
      .orderByKey()
      .startAt(''+paginationIndex)
      .limitToFirst(4)
      .get()
      .then((snap) => Object.values(snap.val()));
  }

  loadPostsByTag(tag) {
    return this._database
      .ref("/portfolio-2/")
      .orderByChild("tags/" + tag)
      .equalTo(true)
      .limitToFirst(4)
      .once("value")
      .then((snap) => Object.values(snap.val()));
  }

  get dataLength() {
    if (this._length !== null) return this._length;

    return this._database
      .ref("/portfolio-2/")
      .limitToLast(1)
      .get()
      .then((snap) => {
        return this._length = +Object.keys(snap.val())[0] + 1;
      })
      .catch((err) => console.error(err));
  }
};
