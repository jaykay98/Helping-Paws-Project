<template>
  <div>
    <div v-if="pets">
      <router-view></router-view>
    </div >
    <div v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="fb-profile-block">
              <div class="fb-profile-block-thumb cover-container"></div>
                <div class="profile-img">
                  <a href="#">
                    <div class="profile-container">
                      <img class="profile-image" :src="user.avatar"/>    
                      <div class="profile-overlay">
                        <div class="profile-text">
                          upload a photo
                          <!-- binding upload icon to bootstrap form file  -->
                          <label for='picture' class="upload">
                            <fa-icon  :icon="['fas', 'upload']" size="2x"  />
                          </label>
                          <!-- hiding form file -->
                          <b-form-file
                            style='display: none;'
                            id="picture"
                            v-model="file"
                            accept=".jpg, .png, .gif"
                            :state="Boolean(file)"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                            @change="onFileSelected"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="profile-name">
                  <h2>{{ `${first_name} ${last_name}` }}</h2>
                </div>
                <div class="fb-profile-block-menu">
                  <div class="block-menu">
                    <ul>
                      <li class="profile-details" v-b-modal.modal-prevent-closing-person>Details</li>
                    </ul>
                    <div class="mt-3">
                      Submitted Names:
                      <div v-if="personSubmittedNames.length === 0">--</div>
                      <ul v-else class="mb-0 pl-3">
                        <li v-for="name in personSubmittedNames" :key="name">{{ name }}</li>
                      </ul>
                    </div>
                    <!-- using b-modal to create popup window with user details that can be edited,
                    replacing the default ok and cancel button behaviour with some custom behavior -->
                    <b-modal
                      id="modal-prevent-closing-person"
                      ref="modal"
                      title="Submit Your Name"
                      @ok="submitForm"
                      @cancel="cancel"
                    >
                      <b-card :key="componentKey" bg-variant="light">
                        <b-form-group
                          label-cols-sm="3"
                          label="Email:"
                          label-align-sm="right"
                          label-for="nested-street"
                        >
                          <b-form-input
                            id="nested-street"
                            v-model="email"
                          />
                        </b-form-group>

                        <b-form-group
                          label-cols-sm="3"
                          label="First Name:"
                          label-align-sm="right"
                          label-for="nested-state"
                        >
                          <b-form-input
                            id="nested-state"
                            v-model="first_name"
                          />
                        </b-form-group>

                        <b-form-group
                          label-cols-sm="3"
                          label="Last Name:"
                          label-align-sm="right"
                          label-for="nested-state"
                        >
                          <b-form-input
                            id="nested-state"
                            v-model="last_name"
                          />
                        </b-form-group>

                        <b-form-group
                          label-cols-sm="3"
                          label="Display Name:"
                          label-align-sm="right"
                          label-for="nested-country"
                        >
                          <b-form-input
                            id="nested-country"
                            v-model="display_name"
                          />
                        </b-form-group>
                         <!--Home Phone -->
                        <b-form-group 
                          label-cols-sm="3"
                          label="Home Phone:"
                          label-align-sm="right"
                          label-for="nested-country"
                        >
                            <b-form-input
                            id="input-4"
                            v-model="homePhone"
                            type="text"
                            @change="phoneInputHandler('homePhone', $event)"
                            :required="homePhoneRequired"
                            ></b-form-input>
                        </b-form-group>

                        <!--Mobile Phone -->
                        <b-form-group 
                          label-cols-sm="3"
                          label="Mobile Phone:"
                          label-align-sm="right"
                          label-for="nested-country"
                        >
                            <b-form-input
                            id="input-5"
                            v-model="mobilePhone"
                            type="text"
                            @change="phoneInputHandler('mobilePhone', $event)"
                            :required="mobilePhoneRequired"
                            ></b-form-input>
                        </b-form-group>

                        <!--Work Phone -->
                        <b-form-group 
                          label-cols-sm="3"
                          label="Work Phone:"
                          label-align-sm="right"
                          label-for="nested-country"
                        >
                            <b-form-input
                            id="input-6"
                            v-model="workPhone"
                            type="text"
                            @change="phoneInputHandler('workPhone', $event)"
                            :required="workPhoneRequired"
                            ></b-form-input>
                        </b-form-group>
                        
                        <!-- Address -->
                        <b-form-group 
                          label-cols-sm="3"
                          label="Address:"
                          label-align-sm="right"
                          label-for="nested-country"
                        >
                            <b-form-input
                            id="input-6"
                            v-model="address"
                            type="text"
                            :required="addressRequired"
                            ></b-form-input>
                        </b-form-group>
                          <!--DO NOT DELETE, DATE FIELD FOR PROFILE, NOT FUNCTIONAL RN
                        <b-form-group
                            label-cols-sm="3"
                            label="DOB:"
                            label-align-sm="right"
                            label-for="nested-country"
                          >
                            <b-form-input :disabled=isDisabled v-model="DOB"  id="nested-country"></b-form-input>
                          </b-form-group>
                          -->
                      </b-card>
                    </b-modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pet-management-div" >
          <h2 class="pet-management-heading" >Pet Management
            <b-button class= "add-pet" variant="primary" v-b-modal.modal-prevent-closing>Add Pet</b-button>
          </h2>
        </div>
        <div align="center">
          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Create a Profile for your Pet"
            @show="resetModalPet"
            @hidden="resetModalPet"
            @ok="submitFormPet"
          >
            <form ref="form" @submit.stop.prevent="handleSubmitPet">
              <b-form-group
                :state="petNameState"
                label="Age"
                label-for="age-input"
                invalid-feedback="Age is required"
              >
                <b-form-input
                  id="age-input"
                  v-model="addedPet.age"
                  :state="petAgeState"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                :state="petColourState"
                label="Colour"
                label-for="colour-input"
                invalid-feedback="Colour is required"
              >
                <b-form-input
                  id="colour-input"
                  v-model="addedPet.colour"
                  :state="petColourState"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                :state="petGenderState"
                label="Gender"
                label-for="gender-input"
                invalid-feedback="Gender is required"
              >
                <b-form-input
                  id="gender-input"
                  v-model="addedPet.gender"
                  :state="petGenderState"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                :state="petNameState"
                label="Name"
                label-for="name-input"
                invalid-feedback="Name is required"
              >
                <b-form-input
                  id="name-input"
                  v-model="addedPet.name"
                  :state="petNameState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
        </div>
        <!-- <div class="container"> 
          <div class="row">
            <div class="col-md-12">
              <grid-layout
                :layout.sync="petsArrGrid"
                :col-num="12"
                :row-height="30"
                :is-draggable="false"
                :is-resizable="true"
                :is-mirrored="false"
                :vertical-compact="true"
                :margin="[10, 10]"
                :use-css-transforms="true"
              >
                <grid-item v-for="(item, index) in petsArrGrid"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :maxW="item.maxW"
                  :maxH="item.maxH"
                  :key="item.i">
                  <div  class ="grid-item-image">
                    <img  class ="grid-item-image"  @click="petLink(item.id)" :src="item.url">
                    <div  @click="deletePet(item.id)" >
                      <fa-icon class = "delete-pet" :icon="['fas', 'trash']" size="2x" pull="right" />
                    </div>
                  </div>
                </grid-item>
              </grid-layout>
            </div>
          </div>
        </div> -->
        <div v-for="prop in petsArr" :key="prop.id">
          <div align="center">
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row>
                <b-col md="12" >
                  <div class="pet-card-image">
                    <b-img
                      id="pet-image"
                      @click="petLink(prop.id)"
                      thumbnail 
                      fluid
                      :src="getPetAvatar(prop)"
                      class="rounded-0"
                    />
                    <div  @click="deletePet(prop.id)" >
                      <fa-icon class = "delete-pet" :icon="['fas', 'trash']" size="2x" pull="right" />
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import * as firebase from "firebase";
import { mapGetters, mapActions } from "vuex";
import VueGridLayout from 'vue-grid-layout';
const uuidv4 = require('uuid/v4');

export default {
   components: {
           GridLayout: VueGridLayout.GridLayout,
           GridItem: VueGridLayout.GridItem
       },
  data() {
     
    return {
      //added pet properties, used to update database and store
       addedPet: {
        age: '',
        colour: '',
        gender: '',
        name: '',
      },
      //states of user details popup form
      personName: null,
      personNameState: null,
      personSubmittedNames: [],
      //states of added pet for popup form only
      petAgeState: null,
      petColourState: null,
      petGenderState: null,
      petNameState: null,
      petSubmittedNames: [],
      isDisabled: true,
      //used for re-rendering card and inputs
      componentKey: 0,
      //local files to update profile picture with
      file: null,
      pets: false,
      editedUser: {
        email: "",
        first_name: "",
        last_name: "",
        display_name: "",
        DOB: "",
        avatar: "",
        homePhone: "",
        mobilePhone: "",
        workPhone: "",
        address: ""
      },
      homePhoneRequired: true,
      workPhoneRequired: true,
      mobilePhoneRequired: true,
      addressRequired: true,
    };
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.getProfile(user.uid)
      }
    });
  },
  methods: {
     phoneInputHandler(inputType, value) {
        if (value) {
            // If we are in here, it means one of the phone related inputs
            // has a non-null value. Therefore, set the 'required' attribute to false
            // for the other inputs. (we only require at least one phone number).
            if (inputType === "homePhone") {
                this.mobilePhoneRequired = false;
                this.workPhoneRequired = false;
            } else if (inputType === "mobilePhone") {
                this.homePhoneRequired = false;
                this.workPhoneRequired = false;
            } else if (inputType === "workPhone") {
                this.homePhoneRequired = false;
                this.mobilePhoneRequired = false;
            }
        }
    },

    getPetAvatar (prop) {
      return prop.avatar ? prop.avatar : "https://i0.wp.com/wrbbradio.org/wp-content/uploads/2016/10/grey-background-07.jpg?fit=2560%2C1544"
    },
    //checking popup add pet form validity of fields 
    checkFormValidityPet() {
        const valid = this.$refs.form.checkValidity()
        this.petAgeState = valid ? 'valid' : 'invalid'
        this.petColourState = valid ? 'valid' : 'invalid'
        this.petGenderState = valid ? 'valid' : 'invalid'
        this.petNameState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModalPet() {
        this.addedPet.age = ''
        this.petAgeState = null
        this.addedPet.colour = ''
        this.petColourState = null
        this.addedPet.gender = ''
        this.petGenderState = null
        this.addedPet.name = ''
        this.petNameState = null
      },
      handleOkPet(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmitPet()
      },
      handleSubmitPet() {
        // Exit when the form isn't valid
        if (!this.checkFormValidityPet()) {
          return
        }
        // Push the name to submitted names
        this.petSubmittedNames.push(this.addedPet.age)
        this.petSubmittedNames.push(this.addedPet.colour)
        this.petSubmittedNames.push(this.addedPet.gender)
        this.petSubmittedNames.push(this.addedPet.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide()
          })
        
      },
    
      deletePet(petId){
        let petToDelete = this.user.pets[petId]
        const firebaseObj = {
          [`pets.${petId}`]: firebase.firestore.FieldValue.delete()
        }
        this.updatePets({
            'firebasePayload': firebaseObj,
            'storePayload': {}
        });
        this.removePet(petId)
      },
     
     petLink(petId) {
       this.$router.push(`/users/profile/pets/${petId}`);
      },

  ...mapActions(["getProfile","updateProfile", "updatePets", "removePet"]),
      
      cloneUserFieldsPets(){
      const clone = { ...this.addedPet };
          Object.entries(clone).forEach(arr => {
            if (arr[1] == "") {
              delete clone[arr[0]];
            }
          });
        return clone
    },
    submitFormPet: function() {
       // Remove keys that were no edited in editedUser (empty strings)
      const clone = this.cloneUserFieldsPets();
      let randPetID = uuidv4();
      let firebaseObj = {};
          Object.keys(clone).map((key) => {
            firebaseObj[`pets.${randPetID}.${key}`] = clone[key];
          });
        return this.updatePets({
          'firebasePayload': firebaseObj,
          'storePayload': {
            pets: {
              [randPetID]: clone
          }
        }
      });
    },
    cloneUserFields(){
      const clone = { ...this.editedUser };
          Object.entries(clone).forEach(arr => {
            if (arr[1] == "") {
              delete clone[arr[0]];
            }
          });
        return clone
    },
    submitForm: function() {
      if (this.file!==null) {
        const ref = firebase
          .storage()
          .ref()
          .child(`profile_pictures/${this.file.name}`);
        ref
          .put(this.file)
          .then(snapshot => {
            return snapshot.ref.getDownloadURL();
          })
          .then(url => {
            this.editedUser.avatar = url;
            // Remove keys that were no edited in editedUser (empty strings)
            const clone = this.cloneUserFields();
            return this.updateProfile(clone)
          });
      } else {
          const clone = this.cloneUserFields();
          return this.updateProfile(clone)
      }

    },
    editClick() {
      this.isDisabled = false;
    },
    cancel() {
      this.isDisabled = true;
      //re-render parent card and all its child inputs
      this.componentKey += 1;
       this.editedUser = {
        email: "",
        first_name: "",
        last_name: "",
        display_name: "",
        DOB: "",
        avatar: "",
        homePhone: "",
        mobilePhone: "",
        workPhone: "",
        address: ""
      }
    },
    onFileSelected(event) {
      this.file = event.target.files[0];
      this.submitForm();
    },
  },
  computed: {
    ...mapGetters(["user"]),
    petsArr: function() {
      if (this.user && this.user.pets) {
        const result = Object.keys(this.user.pets).map((petId) => {
          return {
            ...this.user.pets[petId],
            id: petId
          };
        })
        return result;
      }
    },
     petsArrGalleryData: function() {
      if (this.user && this.user.pets) {
        const result = Object.keys(this.user.pets).map((petId) => {
          return {
            ...this.user.pets[petId],
            id: petId
          };
        })
        const petsList = [];
        result.forEach(function(element) {
          let petsListObj = {}
          petsListObj.title = element.name
          petsListObj.url = element.avatar
          petsList.push(petsListObj)
        });
        return petsList;
      }
    },
    petsArrGrid: function() {
      if (this.user && this.user.pets) {
        const result = Object.keys(this.user.pets).map((petId) => {
          return {
            ...this.user.pets[petId],
            id: petId
          };
        })
       const layout = []
       result.forEach(function(element, index) {
          let petsListObj = {}
          // petsListObj.title = element.name
          petsListObj.x = index*2
          petsListObj.y = 0
          petsListObj.w = 2
          petsListObj.h = 1
          petsListObj.i = index
          petsListObj.maxW = 4
          petsListObj.maxH = 4
          petsListObj.url = element.avatar
          petsListObj.id = element.id
          layout.push(petsListObj)
        });
        return layout;
      }
    },

    email: {
      get() {
         if (this.user) {
            return this.user.email;
        }
      },
      set(email) {
        this.editedUser.email = email;
      }
    },
    first_name: {
      get() {
         if (this.user) {
          return this.user.first_name;
        }
      },
      set(first_name) {
        this.editedUser.first_name = first_name;
      }
    },
    last_name: {
      get() {
         if (this.user) {
          return this.user.last_name;
        }
      },
      set(last_name) {
        this.editedUser.last_name = last_name;
      }
    },
    display_name: {
      get() {
         if (this.user) {
          return this.user.display_name;
        }
        
      },
      set(display_name) {
        this.editedUser.display_name = display_name;
      }
    },
    DOB: {
      get() {
         if (this.user) {
          return this.user.DOB.toDate().toLocaleDateString("en-AU");
        }

      },
      set(DOB) {
        this.editedUser.DOB = DOB;
      }
    },
    homePhone: {
      get() {
         if (this.user) {
          return this.user.homePhone
        }

      },
      set(value) {
        this.editedUser.homePhone = value;
      }
    },
    mobilePhone: {
      get() {
         if (this.user) {
          return this.user.mobilePhone
        }

      },
      set(value) {
        this.editedUser.mobilePhone = value;
      }
    },
    workPhone: {
      get() {
         if (this.user) {
          return this.user.workPhone
        }

      },
      set(value) {
        this.editedUser.workPhone = value;
      }
    },
     address: {
      get() {
         if (this.user) {
          return this.user.address
        }

      },
      set(value) {
        this.editedUser.address = value;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    next(vm => {
      // if (to.name === 'pets') is true
      // then set this.pets = true
      vm.pets = to.name === 'pets';
    })
  },
  beforeRouteUpdate(to, from, next) {
    // if (to.name === 'pets') is true
    // then set this.pets = true
    this.pets = to.name === 'pets';
    next();
}
};
</script>
<style>
#edit {
  padding-right: 20px;
}

.image-container{
  margin: auto;
  width: 400px;
  height: 400px;
  text-align: center !important;
}
.fb-profile-block {
  margin: auto;
  position: relative;
  width: 100%;
}
.cover-container{
    background: #1E90FF;
    background: -webkit-radial-gradient(bottom, #73D6F5 12%, #1E90FF);
    background: radial-gradient(at bottom, #73D6F5 12%, #1E90FF)
}
.fb-profile-block-thumb{
  display: block;
  height: 315px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
}
.fb-profile-block-menu {
  border: 1px solid #d3d6db;
  border-radius: 0 0 3px 3px;
}
.profile-img a{
  bottom: 15px;
  box-shadow: none;
	display: block;
	left: 15px;
	padding:1px;
	position: absolute;
	height: 160px;
	width: 160px;
	background: rgba(0, 0, 0, 0.3) none repeat scroll 0 0;
	z-index:9;
}
.profile-img img {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.07);
  height:158px;
  padding: 5px;
  width:158px;
}
.profile-name {
  bottom: 60px;
  left: 200px;
  position: absolute;
}
.profile-name h2 {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  max-width: 275px;
  position: relative;
  text-transform: uppercase;
}
.fb-profile-block-menu{
  height: 44px;
  position: relative;
  width:100%;
  overflow:hidden;
 }
.block-menu {
  clear: right;
  padding-left: 205px;
}
.block-menu ul{
	margin:0;
	padding:0;
}
.block-menu ul li{
	display:inline-block;
}
.block-menu ul li a {
  border-right: 1px solid #e9eaed;
  float: left;
  font-size: 14px;
  font-weight: bold;
  height: 42px;
  line-height: 3.0;
  padding: 0 17px;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  color:#4b4f56;
  text-transform:capitalize;
}
.block-menu ul li:first-child a{
  border-left: 1px solid #e9eaed;
}

/* styling of upload icon */
.upload {
  width: 100px;
}
.upload:hover {
   cursor: pointer;
   color: blue
}
.profile-details {
  font-weight: bold;
}
.profile-details:hover {
  cursor: pointer;
  text-decoration: underline;

}

/* styling for pet carousel */
.pet-carousel {
  text-shadow: 1px 1px 2px #333;
  /* padding-right: 10px; */
}

/* .pet-carousel text{
  font-size: 40px;
} */
.pet-carousel-slide img {
  height:50vh
}

.pet-carousel-profile-link{
  font-size: 20px;
}
.pet-carousel-profile-link:hover {
  cursor: pointer;
  text-decoration: underline;
}

/* .pet-carousel-slide text {
  font-size: 20px !important;
} */

.image-box a {
  clear: both;
  display: inline-block;
  margin: 0 10px 10px 0;
  position: relative;
  text-align: center;
}
.bgbox {
  background-color: #232323;
  height: 150px;
  display:table-cell;
  vertical-align:middle;
  padding: 4px;
  border-radius: 2px;
  
}
.bgbox img {
   width: 200px;
   display: block;
}
.img-title {
  bottom: 5px;
  display: block;
  text-align: center;
  color: #999999;
  padding-top: 5px;
}
.img-title:hover {
  color: #232323; 
}

.grid-item-image {
  /* max-width: 300px;
  max-height: 300px; */
  height: 200px;
  width: 200px;
  padding-bottom: 50px;
  padding-left:  10px;
  padding-right: 10px;
  position: relative;
}
/* delete pet styling, used for trashbin icon */
.delete-pet {
   display: block;
   position: absolute;
   top: 10px;
   right: 50px;
   clear:both;

}
/* delete pet styling, used for trashbin icon */
.delete-pet:hover {
    color: blue;
    cursor: pointer !important;
    text-decoration: underline;
}

/* styling for the pet management images  */
.grid-item-image {
  position: relative;
}

/* pet management div, heading and add pet button styling */
.pet-management-div {
  width: 400px;
  height: 50px;
  justify-content: space-between;
  position: center;
  margin-right: auto;
  margin-left: auto;
   margin-top: 10px;
}
/* margin value gives space between heading and button */
.pet-management-heading {
  margin: 0 10px;
  display: inline-block;
}

.add-pet {
  float: right;
  margin: 0 10px;
}

.pet-card-image #pet-image:hover {
  cursor: pointer;
}

/* profile overlay styling*/
.profile-container {
  position: relative;
  width: 100%;
}

.profile-image {
  display: block;
  width: 100%;
  height: auto;
}

.profile-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.profile-container:hover .profile-overlay {
  opacity: 1;
}

.profile-text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
