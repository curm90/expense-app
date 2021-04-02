import { firebase, googleAuthProvider } from '../firebase/firebase';
import * as types from './types/auth';

export const login = (uid) => ({
  type: types.LOGIN,
  uid,
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: types.LOGOUT,
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
