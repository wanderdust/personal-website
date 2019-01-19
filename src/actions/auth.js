import { firebase, googleAuthProvider } from '../firebase/firebase';

// LOGIN
export const login = uid => ({
  type: 'LOGIN',
  uid
});

// ASYNC LOGIN
export const startLogin = () => firebase.auth().signInWithPopup(googleAuthProvider);

// LOGOUT
export const logout = () => ({
  type: 'LOGOUT'
});

// ASYNC LOGOUT
export const startLogout = () => () => firebase.auth().signOut();
