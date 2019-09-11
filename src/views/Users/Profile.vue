<template>
  <div>
    <div v-if="pets">
      <router-view></router-view>
    </div >
    <div v-else>
      <div width="100px" height="100px">
      <b-img center :src="user.avatar"  rounded="circle"  fluid-grow alt="Fluid-grow image" />
      <b-form-file
        v-model="file"
        accept=".jpg, .png, .gif"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        @change="onFileSelected"
      />
       </div>
      <div @click="editClick">
        <fa-icon id="edit" :icon="['fas', 'edit']" size="2x" pull="right" />
      </div>
      <h1 align="center">
        {{ `${first_name} ${last_name}` }}
      </h1>
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
            :disabled="isDisabled"
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
            :disabled="isDisabled"
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
            :disabled="isDisabled"
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
            :disabled="isDisabled"
          />
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

        <b-form-group align="center">
          <b-button variant="primary" @click="submitForm">
            Save
          </b-button>
        </b-form-group>
        <b-form-group align="center">
          <b-button variant="primary" @click="cancel">
            cancel
          </b-button>
        </b-form-group>
      </b-card>

      <!-- <div @click="imageClick"> -->
      <h2 align="center">Pet Management</h2>
     
      <div align="center">
        <b-button v-b-modal.modal-prevent-closing>Add Pet</b-button>

        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="Create a Profile for your Pet"
          @show="resetModal"
          @hidden="resetModal"
          @ok="submitFormPet"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              :state="nameState"
              label="Age"
              label-for="age-input"
              invalid-feedback="Age is required"
            >
              <b-form-input
                id="age-input"
                v-model="addedPet.age"
                :state="ageState"
                required
              ></b-form-input>
            </b-form-group>
             <b-form-group
              :state="colourState"
              label="Colour"
              label-for="colour-input"
              invalid-feedback="Colour is required"
            >
              <b-form-input
                id="colour-input"
                v-model="addedPet.colour"
                :state="colourState"
                required
              ></b-form-input>
            </b-form-group>
             <b-form-group
              :state="genderState"
              label="Gender"
              label-for="gender-input"
              invalid-feedback="Gender is required"
            >
              <b-form-input
                id="gender-input"
                v-model="addedPet.gender"
                :state="genderState"
                required
              ></b-form-input>
            </b-form-group>
             <b-form-group
              :state="nameState"
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input
                id="name-input"
                v-model="addedPet.name"
                :state="nameState"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
        </div>
      <div v-for="prop in petsArr" :key="prop.id">
        <div align="center">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row>
              <b-col md="6" @click="petLink(prop.id)">
                <b-card-body :title="prop.name"/>
                <div>
                  <b-card-img
                    :src="prop.avatar"
                    class="rounded-0"
                  />
                </div>
              </b-col>
            </b-row>
          </b-card>
          <b-button variant="primary" @click="deletePet(prop.id)">Delete Pet</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import { mapGetters, mapActions } from "vuex";
const uuidv4 = require('uuid/v4');
export default {
  data() {
    return {
      //added pet properties, used to update database and store
       addedPet: {
        age: '',
        colour: '',
        gender: '',
        name: '',
      },
      //states of added pet for popup form only
      ageState: null,
      colourState: null,
      genderState: null,
      nameState: null,
      submittedNames: [],
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
        avatar: ""
      },
      
    };
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.getProfile(user.uid)
        console.log("this is user id in profile page", user.uid);
        console.log("this is user details in profile page", user);
        console.log("uuid ", uuidv4())
      }
    });
  },
  methods: {
    //checking popup form validity of fields 
    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.ageState = valid ? 'valid' : 'invalid'
        this.colourState = valid ? 'valid' : 'invalid'
        this.genderState = valid ? 'valid' : 'invalid'
        this.nameState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModal() {
        this.addedPet.age = ''
        this.ageState = null
        this.addedPet.colour = ''
        this.colourState = null
        this.addedPet.gender = ''
        this.genderState = null
        this.addedPet.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.addedPet.age)
        this.submittedNames.push(this.addedPet.colour)
        this.submittedNames.push(this.addedPet.gender)
        this.submittedNames.push(this.addedPet.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide()
          })
        
      },
    
      deletePet(petId){
        console.log("this is the pet id going to be deleted ", this.user.pets[petId])
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
            console.log(this.addedPet.age)
            console.log(this.addedPet.colour)
            console.log(this.addedPet.gender)
            console.log(this.addedPet.name)
            console.log("very cool log")
            firebaseObj[`pets.${randPetID}.${key}`] = clone[key];
            console.log(firebaseObj)
            console.log("clone ",clone)
            console.log("clone key: ",clone[key])
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
            console.log("Uploaded a blob or file!", snapshot);
            return snapshot.ref.getDownloadURL();
          })
          .then(url => {
            console.log(url);
            this.editedUser.avatar = url;
            // Remove keys that were no edited in editedUser (empty strings)
            const clone = this.cloneUserFields();
            console.log(clone);
            return this.updateProfile(clone)
          });
      } else {
          const clone = this.cloneUserFields();
          console.log(clone);
          return this.updateProfile(clone)
      }

    },
    editClick() {
      console.log("edit button clicked");
      this.isDisabled = false;
    },
    cancel() {
      console.log("cancel button clicked");
      this.isDisabled = true;
      //re-render parent card and all its child inputs
      this.componentKey += 1;
    },
    onFileSelected(event) {
      console.log(event.target.files[0].name);
      this.file = event.target.files[0];
    },

    firstImageClick() {
      console.log("first image clicked");
    },
    secondImageClick() {
      console.log("second image clicked");
    },
    thirdImageClick() {
      console.log("third image clicked");
    },
    fourthImageClick() {
      console.log("fourth image clicked");
    }
  },
  computed: {
    ...mapGetters(["user"]),
    
    petsArr: function() {
      if (this.user && this.user.pets) {
        console.log('this.user', this.user);
        const result = Object.keys(this.user.pets).map((petId) => {
          return {
            ...this.user.pets[petId],
            id: petId
          };
        })
        console.log('result', result);
        return result;
      }
    },
    email: {
      get() {
         if (this.user) {
          console.log('debug: this.email get called');
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
    }
  },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log('beforeRouteUpdate', to.name)
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
</style>
