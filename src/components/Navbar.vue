<template>
  <div>
     <div class="container-fluid" >
            <div class="row">
                <div class="col-md-12">
                    <h2 class="main-header-title">Helping Paws Vet Clinic</h2>
                     <h2 class="main-header-pn">Ph: (07) 3297 1005</h2>
                </div>
            </div>
        </div>
    <b-navbar class="navbar" toggleable="md" type="light">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item exact to="/">Home</b-nav-item>
          <b-nav-item to="/emergency">Emergency</b-nav-item>
          <b-nav-item-dropdown text="Healthcare Services">
            <b-dropdown-item
              v-for="item in healthCareServiceLinks"
              :key="item.title"
              :to="item.route"
            >{{ item.title }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Surgical Services">
            <b-dropdown-item
              v-for="item in surgicalServiceLinks"
              :key="item.title"
              :to="item.route"
            >{{ item.title }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Wellbeing Services">
            <b-dropdown-item
              v-for="item in wellbeingServiceLinks"
              :key="item.title"
              :to="item.route"
            >{{ item.title }}</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <b-nav-item to="/forms">Forms & Adopting</b-nav-item> -->

           <b-nav-item-dropdown text="Forms & Adopting">
            <b-dropdown-item to="/forms">Forms</b-dropdown-item>

            <b-dropdown-item 
            href="https://www.petrescue.com.au/groups/11227/Helping-Paws-Adoption-Program"
            target="_blank" rel="noopener noreferrer"
            >Adopting
            </b-dropdown-item>
           </b-nav-item-dropdown>

          <b-nav-item-dropdown text="About Us">
            <b-dropdown-item to="/contact-us">Contact Us</b-dropdown-item>
            <b-dropdown-item to="/meet-our-team">Meet Our Team</b-dropdown-item>
           </b-nav-item-dropdown>
          <!-- <b-nav-item to="/contact-us">Contact Us</b-nav-item> -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="isAuthenticatedLoginSignup">
          <b-nav-item to="/users/register">Sign Up</b-nav-item>
          <b-nav-item to="/users/login">Login</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="isAuthenticatedMyAccount">
          <b-nav-item-dropdown id="dropdown-left" text="My Account" class="mr-5">
            <b-dropdown-item to="/users/profile">My Profile</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button @click="logout">Logout</b-dropdown-item-button>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { fb } from "@/firebase";
export default {
  name: "Navbar",
  data() {
    return {
      name: "",
      email: "",
      healthCareServiceLinks: [
        { title: "Health Checks", route: "/healthcare-services/healthchecks" },
        {
          title: "Cat Vaccination",
          route: "/healthcare-services/cat-vaccination"
        },
        {
          title: "Dog Vaccination",
          route: "/healthcare-services/dog-vaccination"
        },
        {
          title: "Flea and Tick Control",
          route: "/healthcare-services/flea-and-tick-control"
        },
        {
          title: "Intestinal Worms",
          route: "/healthcare-services/intestinal-worms"
        },
        { title: "Microchipping", route: "/healthcare-services/microchipping" },
        { title: "Dentistry", route: "/healthcare-services/dentistry" },
        { title: "Radiography", route: "/healthcare-services/radiography" },
        {
          title: "Ultrasonography",
          route: "/healthcare-services/ultrasonography"
        },
        {
          title: "Specialist Referrals",
          route: "/healthcare-services/specialist-referrals"
        },
        {
          title: "Clinical Pathology",
          route: "/healthcare-services/clinical-pathology"
        },
        { title: "Pet Insurance", route: "/healthcare-services/pet-insurance" }
      ],
      surgicalServiceLinks: [
        { title: "Desexing", route: "/surgical-services/desexing" },
        { title: "Orthopaedic", route: "/surgical-services/orthopaedic" },
        { title: "Soft Tissue", route: "/surgical-services/soft-tissue" },
        { title: "Ophthalmic", route: "/surgical-services/ophthalmic" },
        { title: "Dental", route: "/surgical-services/dental" },
        {
          title: "Emergency Procedures",
          route: "/surgical-services/emergency-procedures"
        }
      ],
      wellbeingServiceLinks: [
        { title: "Nail Clipping", route: "/wellbeing-services/nail-clipping" },
        {
          title: "Boarding Advice",
          route: "/wellbeing-services/boarding-advice"
        },
        {
          title: "Behavioural Advice",
          route: "/wellbeing-services/behavioural-advice"
        },
        { title: "Heartworm", route: "/wellbeing-services/heartworm" },
        {
          title: "Nutritional Advice",
          route: "/wellbeing-services/nutritional-advice"
        },
        { title: "Dog Care", route: "/wellbeing-services/dog-care" },
        { title: "Cat Care", route: "/wellbeing-services/cat-care" },
        { title: "Flea Control", route: "/wellbeing-services/flea-control" }
      ]
    };
  },
  computed: {
   //check if user is logged in or not
    isAuthenticatedLoginSignup() {
      console.log('asdf', this.$store.getters.user)
      return (
        this.$store.getters.user && 
        Object.keys(this.$store.getters.user).length > 0 &&
        this.$store.getters.user.fetched &&
        !this.$store.getters.user.id
      );
    },
    isAuthenticatedMyAccount() {
      return (
        this.$store.getters.user && 
        Object.keys(this.$store.getters.user).length > 0 &&
        this.$store.getters.user.fetched &&
        this.$store.getters.user.id
      );
    },
    user() {
      console.log(this.$store.getters.user);
      return this.$store.getters.user;
    }
  },
  methods: {
    logout() {
      console.log(this.$route.path);
      this.$store.dispatch("logout");
      if (this.$route.path !== "/") {
        this.$router.push("/");
      } else {
        window.location.href = '/';
      }
    }
  }
};
</script>

<style>
.navbar-light .navbar-nav .nav-link {
  color: white !important;
  transition: 0.2s ease all;
  border-radius:3px;
  -webkit-transition: background-color ease-out 0.2s;
  -moz-transition: background-color ease-out 0.2s;
  -o-transition: background-color ease-out 0.2s;
  transition: background-color ease-out 0.2s;
}
.navbar-light .navbar-nav .dropdown-item {
  transition: 0.2s ease all;
  -webkit-transition: background-color ease-out 0.2s;
  -moz-transition: background-color ease-out 0.2s;
  -o-transition: background-color ease-out 0.2s;
  transition: background-color ease-out 0.2s;
}

.navbar-light .navbar-nav .nav-link:hover {
  background-color: lime !important;
  color: black !important;
}
.navbar-light .navbar-nav .dropdown-item:hover {
  background-color: lime;
}
.container-fluid {
  height: 100px;
  background-color: #1565C0
}
.main-header-title {
  margin-left:8.5%;
  color: white;
  /* position: absolute; */
  /* top: 20px; */
}
.main-header-pn {
  margin-left:8.5%;
  color: white;
  /* position: absolute; */
  /* top: 50px;
  right: 50px; */

}
.navbar{
  background-color: #2962FF
}

</style>