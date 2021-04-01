import firebase from 'firebase';

const testConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_TEST_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_TEST_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_TEST_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_TEST_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_TEST_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_TEST_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_TEST_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_TEST_MEASUREMENT_ID,
};

const devConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const config =
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'production'
    ? devConfig
    : testConfig;

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };
