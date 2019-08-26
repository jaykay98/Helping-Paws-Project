<template>
  <b-container>
    <b-row>
      <div class="col-md-6 mt-5 mb-3 mx-auto">
        <h1 class="mb-3 font-weight-normal">Reset Your Password</h1>
        <b-form v-if="!emailSent" @submit.prevent="resetPassword">
          <b-form-group
            label="Email"
            label-for="email"
            description="Please enter your email address to reset your password."
          >
            <b-form-input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              aria-required="true"
              required
            ></b-form-input>
          </b-form-group>

          <b-button block type="submit" variant="primary">Submit</b-button>
        </b-form>
        <div v-if="hideForm">
          <h4>Password reset email has successfully been sent!</h4>
          <hr />
          <router-link to="/">Return to the Home Page</router-link>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { fb } from "@/firebase";
export default {
  data() {
    return {
      email: "",
      emailSent: false,
      hideForm: false
    };
  },
  methods: {
    resetPassword() {
      fb.auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.emailSent = true;
          this.hideForm = true;
        })
        .catch(error => {
          alert(error.message);
          console.log(error);
        });
    }
  }
};
</script>
