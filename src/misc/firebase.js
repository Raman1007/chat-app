/* eslint-disable no-undef */
import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/messaging';
import { isLocalhost } from './helpers';

const config = {
  apiKey: 'AIzaSyCWZUswV65zMTNNTmiTXg3P3smtw6xVHIg',
  authDomain: 'chat-web-app-3b298.firebaseapp.com',
  databaseURL: 'https://chat-web-app-3b298-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-3b298',
  storageBucket: 'chat-web-app-3b298.appspot.com',
  messagingSenderId: '388644001391',
  appId: '1:388644001391:web:fd0f85d26f98b7c6945f9a',
};
const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('us-central1');
export const fcmVapidKey =
  'BJM6T3Whfqnd83t0BzHxSqW9FuYU3Hsp7RcxH6Csjw6yynqFXCwM2m69vIamSa1omdD4nm9yiL_68jElqWwQh_U';

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BJM6T3Whfqnd83t0BzHxSqW9FuYU3Hsp7RcxH6Csjw6yynqFXCwM2m69vIamSa1omdD4nm9yiL_68jElqWwQh_U'
  );

  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useEmulator('localhost', 5001);
}
