<template>
  <div >
    <div v-if="pets">
      <router-view></router-view>
    </div>
    <div v-else>
      <b-img center :src="user.avatar" rounded="circle" alt="Center image" />
      <b-form-file
        v-model="file"
        accept=".jpg, .png, .gif"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        @change="onFileSelected"
      />

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
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row>
            <b-col md="6">
              <b-card-body title="first dog" />
              <div @click="petLink" >
                <b-card-img
                  src="https://i.imgur.com/e63PCIO.jpg"
                  class="rounded-0"
                />
              </div>
            </b-col>
            <b-col md="6">
              <b-card-body title="second dog" />
              <div @click="secondImageClick">
                <b-card-img
                  src="https://data.whicdn.com/images/315789676/large.jpg"
                  class="rounded-0"
                />
              </div>
            </b-col>
          </b-row>
        </b-card>
        <!-- </div> -->
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row>
            <b-col md="6">
              <b-card-body title="third dog" />
              <div @click="thirdImageClick">
                <b-card-img
                  src="https://i.ytimg.com/vi/CinfuRwQlO0/hqdefault.jpg"
                  class="rounded-0"
                />
              </div>
            </b-col>
            <b-col md="6">
              <b-card-body title="seal dog" />
              <div @click="fourthImageClick">
                <b-card-img
                  src="http://66.media.tumblr.com/fc9944b6a7c2a5a8f7e10601cb4438d6/tumblr_msxfpyWTCI1rqy4aeo1_500.gif"
                  class="rounded-0"
                />
              </div>
            </b-col>
            <b-col md="6">
              <!-- <b-card-body title="Horizontal Card">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card-body> -->
            </b-col>
          </b-row>
        </b-card>
      </div>
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
      pets: false,
      editedUser: {
        email: "",
        first_name: "",
        last_name: "",
        display_name: "",
        DOB: "",
        avatar: ""
      }
    };
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.getProfile(user.uid)
        console.log("this is user id in profile page", user.uid);
        console.log("this is user details in profile page", user);
      }
    });
  },
  methods: {
    changePetVal () {
      this.pets="pet"
      console.log(this.pets)
    },

     petLink() {
       this.$router.push("/users/profile/pets");
      },

  ...mapActions(["getProfile","updateProfile"]),

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
    email: {
      get() {
        return this.user.email;
      },
      set(email) {
        this.editedUser.email = email;
      }
    },
    first_name: {
      get() {
        return this.user.first_name;
      },
      set(first_name) {
        this.editedUser.first_name = first_name;
      }
    },
    last_name: {
      get() {
        return this.user.last_name;
      },
      set(last_name) {
        this.editedUser.last_name = last_name;
      }
    },
    display_name: {
      get() {
        return this.user.display_name;
      },
      set(display_name) {
        this.editedUser.display_name = display_name;
      }
    },
    DOB: {
      get() {
        return this.user.DOB.toDate().toLocaleDateString("en-AU");
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
