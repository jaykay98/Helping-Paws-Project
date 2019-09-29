<template>
  <b-container>
    <b-row>
      <div class="col-md-6 mt-5 mx-auto">
        <h2 class="mb-3 font-weight-normal">Create an Account</h2>

        <b-alert variant="danger" dismissible v-model="showError" :show="showError">{{errorMsg}}</b-alert>

        <b-form @submit.prevent="register">
          <b-form-group label="First Name" label-for="firstname">
            <b-form-input
              type="text"
              v-model="firstName"
              placeholder="Enter first name"
              aria-required="true"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Last Name" label-for="lastname">
            <b-form-input
              type="text"
              v-model="lastName"
              placeholder="Enter last name"
              aria-required="true"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Email Address"
            label-for="email"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="email"
              v-model="email"
              name="email"
              type="email"
              placeholder="Enter email"
              aria-required="true"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Password" label-for="password">
            <b-form-input
              id="password"
              v-model="password"
              type="password"
              :state="checkPasswords"
              aria-describedby="password-help-block"
              aria-required="true"
              required
            ></b-form-input>
            <b-form-text
              id="password-help-block"
            >Passwords must be a minimum of 6 characters, and should contain letters, numbers and special characters.</b-form-text>
            <b-form-invalid-feedback
              :state="checkPasswords"
            >Passwords must be longer than 6 characters</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label="Confirm Password" label-for="confirm-password">
            <b-form-input
              id="confirm-password"
              v-model="confirmPassword"
              type="password"
              :state="comparePasswords"
              aria-required="true"
              required
            ></b-form-input>
            <b-form-invalid-feedback :state="comparePasswords">Passwords do not match</b-form-invalid-feedback>
          </b-form-group>

          <div>
            <p>
              Already have an account?
              <router-link to="/users/login">Login Here</router-link>
            </p>
          </div>

          <b-button block type="submit" :disabled="loading" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { fb, db } from "@/firebase";
export default {
  name: "register",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMsg: "",
      showError: false
    };
  },
  computed: {
    checkPasswords() {
      return this.password.length >= 6;
    },
    comparePasswords() {
      return (
        this.password === this.confirmPassword &&
        this.confirmPassword.length > 0
      );
    },
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        this.showError = true;
        this.errorMsg = "Passwords do not match!";
      } else {
        fb.auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            // Get the current date and time for when the user was created
            let currentTime = new Date().toLocaleString();
            // Insert the user into the database
            db.collection("users")
              .doc(user.user.uid)
              .set({
                id: user.user.uid,
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                created: currentTime
              });
            this.$store.dispatch("signUserUp", {
              email: this.email,
              password: this.password
            });

            let newUser = fb.auth().currentUser;

            newUser
              .sendEmailVerification()
              .then(() => {
                console.log("Email verification sent");
              })
              .catch(error => {
                alert(error.message);
                console.log(error);
              });
          })
          .catch(error => {
            this.showError = true;
            this.errorMsg = error.message;
            console.log(error);
          });
      }
    }
  }
};
</script>
