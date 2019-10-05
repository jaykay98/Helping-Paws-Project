<template>
  <b-container>
    <b-row>
      <div class="col-md-6 mt-5 mx-auto">
        <h2 class="mb-3 font-weight-normal">Login to your Account</h2>

        <b-alert variant="danger" dismissible v-model="showError" :show="showError">{{ errorMsg }}</b-alert>

        <b-form @submit.prevent="login">
          <b-form-group label="Email Address" label-for="email">
            <b-form-input
              id="email"
              v-model="email"
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
              aria-describedby="password-help-block"
              aria-required="true"
              required
            ></b-form-input>
          </b-form-group>

          <b-button block type="submit" variant="primary">Login</b-button>

          <p align="center" class="mt-3">
            Don't have an account?
            <router-link to="/users/register">Sign Up</router-link>
          </p>
          <p align="center">
            <router-link to="/users/forgotpassword">Forgot your password?</router-link>
          </p>
        </b-form>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { fb } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      showError: false,
      errorMsg: ""
    };
  },
  computed: {
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
    login() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$store.dispatch("signUserIn", {
            email: this.email,
            password: this.password
          });
        })
        .catch(error => {
          this.showError = true;
          this.errorMsg = error.message;
          console.log(error);
        })
    },
    onResetPassword() {
      if (this.email === "") {
        return this.$store.dispatch("setError", {
          message: "Email can not be blank"
        });
      }
      this.$store.dispatch("resetPasswordWithEmail", { email: this.email });
    }
  }
};
</script>

