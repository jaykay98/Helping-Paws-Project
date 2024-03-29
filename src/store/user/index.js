import * as firebase from "firebase";
// var merge = require('merge-deep');
const merge = require('deepmerge');

export default {
  state: {
    user: {}
  },
  mutations: {
    setUser(state, payload) {
      // Merging the existing use data with the updated use data
      state.user = merge(state.user, payload);
    },
    resetUser(state, payload) {
      state.user = payload;
    },
    removePet(state, payload) {
      delete state.user.pets[payload]
    }
  },
  actions: {
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
          commit("setLoading", false);
          const newUser = {
            id: data.user.uid,
            name: data.user.displayName,
            email: data.user.email,
            photoUrl: data.user.photoURL
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      });
    },
    resetPasswordWithEmail({ commit }, payload) {
      const { email } = payload;
      commit("setLoading", true);
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          commit("setLoading", false);
          alert("Password reset email has been sent.");
          console.log("Email Sent");
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("resetUser", {});
    },
    getProfile({ commit }, userId) {
      const ref = firebase
        .firestore()
        .collection("users")
        .where("id", "==", userId);
      return ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          commit("setUser", doc.data());
        });
      });
    },
    // getAllUsers() {
    //   const ref = firebase
    //     .firestore()
    //     .collection("users")
    //   return ref.get().then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log("this is the doc data form getAllUsers store ", doc.data().id)
    //       console.log('debug: getAllUsersfinished');
    //     });
    //   });
    // },
    updateProfile({ commit }, payload) {
      // Write to the database
      return firebase
        .firestore()
        .collection("users")
        .doc(this.getters.user.id)
        .update(payload)
        .then(function() {
          commit("setUser", payload);
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },

    updatePets({ commit }, { firebasePayload, storePayload }) {
      // Write to the database
      return firebase
        .firestore()
        .collection("users")
        .doc(this.getters.user.id)
        .update(firebasePayload)
        .then(function() {
          commit("setUser", storePayload);
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    removePet({ commit }, petId) {
      commit("removePet", petId);
    },
    setLocalUser ({ commit }, payload) {
      commit("setUser", payload);
    },
  },

  

  getters: {
    user(state) {
      return state.user;
    }
  }
};
