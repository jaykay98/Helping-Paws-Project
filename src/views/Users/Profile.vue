<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>My Profile</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { fb, db } from "@/firebase";
export default {
  data() {
    return {
      getUser: null,
      profile: {
        name: "",
        phone: "",
        address: "",
        postcode: ""
      },
      account: {
        name: "",
        email: "",
        photoUrl: "",
        emailVerified: "",
        password: "",
        confirmPassword: "",
        uid: ""
      }
    };
  },
  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("users").doc(user.uid)
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    updateProfilePicture() {
      const user = fb.auth().currentUser;
      console.log(user);
    },
    updateProfile() {
      this.$firestore.profile.update();
    }
  }
};
</script>