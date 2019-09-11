import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import { firestorePlugin } from 'vuefire';
import "./plugins/bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import firebase from "firebase";
import VeeValidate from "vee-validate";

library.add(fas, fab);

Vue.component("fa-icon", FontAwesomeIcon);

let VeeValidateConfig = (VeeValidate,
{ inject: true, fieldsBagName: "veeFields", errorBagName: "veeErrors" });

Vue.config.productionTip = false;

new Vue({
  VeeValidateConfig,
  firestorePlugin,
  router,
  store,
  render: h => h(App),
  created() {
    firebase.auth().onAuthStateChanged(async user => {
      console.log("auth check main")
      if (user) {
        // await this.$store.dispatch("autoSignIn", user);
      }
    });
  }
}).$mount("#app");
