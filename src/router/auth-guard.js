
import * as firebase from "firebase";
export default (to, from, next) => {
  console.log("auth guard check ")
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      next()
    } else {
      // No user is signed in.
      next('/users/login');
    }
  });
}