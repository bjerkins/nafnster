var admin = require("firebase-admin");
var serviceAccountConfig = require('./serviceAccount.json');

var names = require('../../names-male-is.json');

var app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountConfig),
  databaseURL: 'https://nafnster.firebaseio.com'
});

Object.keys(names).forEach(function (key) {
    app
        .database()
        .ref('names/male')
        .push()
        .set({
            name: key,
            type: names[key].type,
            info: names[key].info || ''
        });
});



