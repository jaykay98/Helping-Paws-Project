import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import { firestorePlugin } from 'vuefire';
import "./plugins/bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
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
      if (user) {
        // await this.$store.dispatch("autoSignIn", user);
        console.log('localid', user.uid)
        this.$store.dispatch("setLocalUser", {id: user.uid});
      }
      this.$store.dispatch("setLocalUser", {fetched: true});
    });
  }
}).$mount("#app");
