import * as firebase from "firebase";

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = {
        ...state.user,
        ...payload
      };
    }
  },
  actions: {
    signUserUp({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
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
      commit("setUser", null);
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
    updateProfile({ commit }, payload) {
      // Write to the database
      return firebase
        .firestore()
        .collection("users")
        .doc(this.getters.user.id)
        .update(payload)
        .then(function() {
          console.log("Document successfully updated!");
          commit("setUser", payload);
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
  },

  getters: {
    user(state) {
      return state.user;
    }
  }
};
