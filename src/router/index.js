import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Emergency from "../views/Emergency.vue";
import Register from "../views/Users/Register.vue";
import Login from "../views/Users/Login.vue";
import ForgotPassword from '../views/Users/ForgotPassword.vue';
import Profile from "../views/Users/Profile.vue";
import Pets from "../views/Users/Pets.vue";
import Details from "../views/Users/Details.vue";
import Healthchecks from "../views/Healthcare-Services/healthchecks.vue";
import CatVaccination from "../views/Healthcare-Services/cat-vaccinations.vue";
import DogVaccination from "../views/Healthcare-Services/dog-vaccinations.vue";
import FleaAndTickControl from "../views/Healthcare-Services/flea-and-tick-control.vue";
import IntestinalWorms from "../views/Healthcare-Services/intestinal-worms.vue";
import Microchipping from "../views/Healthcare-Services/microchipping.vue";
import Dentistry from "../views/Healthcare-Services/dentistry.vue";
import Radiography from "../views/Healthcare-Services/radiography.vue";
import Ultrasonography from "../views/Healthcare-Services/ultrasonography.vue";
import SpecialistReferrals from "../views/Healthcare-Services/specialist-referrals.vue";
import ClinicalPathology from "../views/Healthcare-Services/clinical-pathology.vue";
import PetInsurance from "../views/Healthcare-Services/pet-insurance.vue";
import Desexing from "../views/Surgical-Services/desexing.vue";
import Orthopaedic from "../views/Surgical-Services/orthopaedic.vue";
import SoftTissue from "../views/Surgical-Services/soft-tissue.vue";
import Ophthalmic from "../views/Surgical-Services/ophthalmic.vue";
import Dental from "../views/Surgical-Services/dental.vue";
import EmergencyProcedures from "../views/Surgical-Services/emergency-procedures.vue";
import NailClipping from '../views/Wellbeing-Services/nail-clipping.vue';
import BoardingAdvice from '../views/Wellbeing-Services/boarding-advice.vue';
import BehaviouralAdvice from '../views/Wellbeing-Services/behavioural-advice.vue';
import Heartworm from '../views/Wellbeing-Services/heartworm.vue';
import NutritionalAdvice from '../views/Wellbeing-Services/nutritional-advice.vue';
import DogCare from '../views/Wellbeing-Services/dog-care.vue';
import CatCare from '../views/Wellbeing-Services/cat-care.vue';
import FleaControl from '../views/Wellbeing-Services/flea-control.vue';
import Forms from '../views/Forms.vue';
import AuthGuard from "./auth-guard";
import NotFound from "../views/404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/emergency",
      name: "emergency",
      component: Emergency
    },
    {
      path: "/healthcare-services/healthchecks",
      name: "healthchecks",
      component: Healthchecks
    },
    {
      path: "/healthcare-services/cat-vaccination",
      name: "catvaccinations",
      component: CatVaccination
    },
    {
      path: "/healthcare-services/dog-vaccination",
      name: "dogvaccinations",
      component: DogVaccination
    },
    {
      path: "/healthcare-services/flea-and-tick-control",
      name: "fleaandtickcontrol",
      component: FleaAndTickControl
    },
    {
      path: "/healthcare-services/intestinal-worms",
      name: "intestinalworms",
      component: IntestinalWorms
    },
    {
      path: "/healthcare-services/microchipping",
      name: "microchipping",
      component: Microchipping
    },
    {
      path: "/healthcare-services/dentistry",
      name: "dentistry",
      component: Dentistry
    },
    {
      path: "/healthcare-services/radiography",
      name: "radiography",
      component: Radiography
    },
    {
      path: "/healthcare-services/ultrasonography",
      name: "ultrasonography",
      component: Ultrasonography
    },
    {
      path: "/healthcare-services/specialist-referrals",
      name: "specialistreferrals",
      component: SpecialistReferrals
    },
    {
      path: "/healthcare-services/clinical-pathology",
      name: "clinicalpathology",
      component: ClinicalPathology
    },
    {
      path: "/healthcare-services/pet-insurance",
      name: "petinsurance",
      component: PetInsurance
    },
    {
      path: "/surgical-services/desexing",
      name: "desexing",
      component: Desexing
    },
    {
      path: "/surgical-services/orthopaedic",
      name: "orthopaedic",
      component: Orthopaedic
    },
    {
      path: "/surgical-services/soft-tissue",
      name: "softtissue",
      component: SoftTissue
    },
    {
      path: "/surgical-services/ophthalmic",
      name: "ophthalmic",
      component: Ophthalmic
    },
    {
      path: "/surgical-services/dental",
      name: "dental",
      component: Dental
    },
    {
      path: "/surgical-services/emergency-procedures",
      name: "emergencyprocedures",
      component: EmergencyProcedures
    },
    {
      path: '/wellbeing-services/nail-clipping',
      name: 'nailclipping',
      component: NailClipping
    },
    {
      path: '/wellbeing-services/boarding-advice',
      name: 'boardingadvice',
      component: BoardingAdvice
    },
    {
      path: '/wellbeing-services/behavioural-advice',
      name: 'behaviouraladvice',
      component: BehaviouralAdvice
    },
    {
      path: '/wellbeing-services/heartworm',
      name: 'heartworm',
      component: Heartworm
    },
    {
      path: '/wellbeing-services/nutritional-advice',
      name: 'nutritionaladvice',
      component: NutritionalAdvice
    },
    {
      path: '/wellbeing-services/dog-care',
      name: 'dogcare',
      component: DogCare
    },
    {
      path: '/wellbeing-services/cat-care',
      name: 'catcare',
      component: CatCare
    },
    {
      path: '/wellbeing-services/flea-control',
      name: 'fleacontrol',
      component: FleaControl
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms
    },
    {
      path: "/contact-us",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Contact.vue")
    },
    {
      path: "/meet-our-team",
      name: "meet",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/OurTeam.vue")
    },
    {
      path: "/users/register",
      name: "register",
      component: Register
    },
    {
      path: "/users/login",
      name: "login",
      component: Login
    },
    {
      path: '/users/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword,
    },
    {
      path: "/users/profile",
      component: Profile,
      beforeEnter: AuthGuard,
      children: [
        {
          path: "pets/:id",
          name: "pets",
          component: Pets,
        },
        {
          path: "details",
          name: "details",
          component: Details
        }
      ]
    },
    {
      path: "/404",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});


