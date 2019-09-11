<template>
  <div >
    <div>
      <div width="100px" height="100px" @click="logPets">
      <b-img center  :src="user.pets[$route.params.id].avatar"  rounded="circle"  fluid-grow alt="Fluid-grow image" />
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
      <!-- <h1 align="center">
        {{ `${name}` }}
      </h1> -->
      <b-card :key="componentKey" bg-variant="light">
        <b-form-group
          label-cols-sm="3"
          label="Name:"
          label-align-sm="right"
          label-for="nested-street"
        >
          <b-form-input
            id="nested-street"
            v-model="name"
            :disabled="isDisabled"
          />
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Age:"
          label-align-sm="right"
          label-for="nested-state"
        >
          <b-form-input
            id="nested-state"
            v-model="age"
            :disabled="isDisabled"
          />
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Colour:"
          label-align-sm="right"
          label-for="nested-state"
        >
          <b-form-input
            id="nested-state"
            v-model="colour"
            :disabled="isDisabled"
          />
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Gender:"
          label-align-sm="right"
          label-for="nested-country"
        >
          <b-form-input
            id="nested-country"
            v-model="gender"
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
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isDisabled: true,
      //used for re-rendering card and inputs
      componentKey: 0,
      //local files to update profile picture with
      file: null,
      editedPet: {
        name: "",
        age: "",
        colour: "",
        gender: "",
        avatar: ""
      }
    };
  },


  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.getProfile(user.uid)
        // this.getAllUsers()
        console.log("this is user id in pet page", user.uid);
        console.log("this is user details in pet page", user);
      }
    });
  },
  
  methods: {
    ...mapActions(["getProfile","updatePets"]),
      
      cloneUserFields(){
      const clone = { ...this.editedPet };
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
            this.editedPet.avatar = url;
            // Remove keys that were no edited in editedUser (empty strings)
            const clone = this.cloneUserFields();
            let firebaseObj = {};
            Object.keys(clone).map((key) => {
              firebaseObj[`pets.${this.$route.params.id}.${key}`] = clone[key];
              console.log(firebaseObj)
              console.log(this.$route.params.id)
            });
            return this.updatePets({
              'firebasePayload': firebaseObj,
              'storePayload': {
                pets: {
                  [this.$route.params.id]: clone
                }
              }
            });
          });
      } else {
          const clone = this.cloneUserFields();
          let firebaseObj = {};
          Object.keys(clone).map((key) => {
            firebaseObj[`pets.${this.$route.params.id}.${key}`] = clone[key];
          });
          console.log("debug: submit form no avatar change ",this.$route.params.id)
           return this.updatePets({
              'firebasePayload': firebaseObj,
              'storePayload': {
                pets: {
                  [this.$route.params.id]: clone
                }
              }
            });
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

    logPets(){
      console.log("pets ", this.user.pets.aaaaaaaaaaaaaaa)
    }
  },
    
  computed: {
    ...mapGetters(["user"]),
    
    name: {
      get() {
        console.log('debug: this.name get called');
        if (this.user && this.user.pets && this.user.pets[this.$route.params.id]) {
          return this.user.pets[this.$route.params.id].name;
        }
        
        
      },
      set(name) {
        this.editedPet.name = name;
      }
    },
    age: {
      get() {
         if (this.user && this.user.pets && this.user.pets[this.$route.params.id]) {
          return this.user.pets[this.$route.params.id].age;
        }
        
      },
      set(age) {
        this.editedPet.age = age;
        console.log( this.editedPet.age)
      }
    },
    colour: {
      get() {
        if (this.user && this.user.pets && this.user.pets[this.$route.params.id]) {
           return this.user.pets[this.$route.params.id].colour;
        }
       
      },
      set(colour) {
         this.editedPet.colour = colour;
      }
    },
     gender: {
      get() {
        if (this.user && this.user.pets && this.user.pets[this.$route.params.id]) {
           return this.user.pets[this.$route.params.id].gender;
        }
      },
      set(gender) {
       this.editedPet.gender = gender;
      }
    },
  },
}
</script>