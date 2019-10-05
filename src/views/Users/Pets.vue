<template>
  <div >
    <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="fb-profile-block">
              <div class="fb-profile-block-thumb cover-container"></div>
                <div class="profile-img">
                  <a href="#">
                    <div class="profile-container">
                      
                      <img class="profile-image" :src="user.pets[$route.params.id].avatar" />    
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
                  <h2>{{ `${name}` }}</h2>
                </div>
                <div class="fb-profile-block-menu">
                  <div class="block-menu">
                    <ul>
                      <li class="profile-details" v-b-modal.modal-prevent-closing-person>Details</li>
                    </ul>
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
                          label="Name:"
                          label-align-sm="right"
                          label-for="nested-street"
                        >
                          <b-form-input
                            id="nested-street"
                            v-model="name"
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
                      </b-card>
                    </b-modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div>

      <!-- <div @click="imageClick"> -->
        <h1 align="center">Care Milestones</h1>
        <div align="center">
          <b-dropdown offset="0" text="Type" class="m-7" >
            <div class="dropDownPetTypes">
              <b-dropdown-item v-for="prop in petTypesArr" :key="prop.id" @click="getSelectedPetType(prop)">{{prop}}</b-dropdown-item>
            </div>
          </b-dropdown>
           <b-dropdown id="dropdown-offset" offset="0" text="Age" class="m-5">
            <b-dropdown-item @click="getSelectedPetAge('Puppies/Kittens')" href="#">Puppies/Kittens</b-dropdown-item>
            <b-dropdown-item  @click="getSelectedPetAge('Adults')" href="#">Adults</b-dropdown-item>
            <b-dropdown-item  @click="getSelectedPetAge('Seniors')" href="#">Seniors</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div align="center" v-if="petTypeSelected ==='Dogs'">
                <h1>Dogs</h1>
                <div align="center" v-if="petAgeSelected ==='Puppies/Kittens'">
                  <b-carousel
                      v-model="slide"
                      :interval="0"
                      controls
                      indicators
                      background="#ababab"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
                    >
                      <b-carousel-slide class="pet-carousel-slide" caption="Puppies" img-blank img-alt="Blank image" >
                        <p> When Puppies Learn to Go Potty Weeks three to four is also the time when 
                          pups develop control over their bladder and bowel movements, and learn to leave their 
                          sleeping area before relieving themselves.
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide class="pet-carousel-slide"  caption="Puppies" img-blank img-alt="Blank image">
                        <p>When Puppies Start Eating Solid Food While puppies may start trying to sample 
                          mom's solid food as soon as their teeth start coming in, it's not until the 
                          fourth week that the mother's milk production starts to slow down and pups begin 
                          the permanent transition to solid puppy food. This weaning process typically takes 
                          about four more weeks, and puppies are fully weaned by week eight.
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide  class="pet-carousel-slide" caption="Puppies" img-blank img-alt="Blank image">
                        <p>The fourth week in the puppy timeline is also when puppies begin forming emotional 
                          attachments and bonds with the people around them. While it's still too early to separate
                          a pup from his mother and littermates, this is a great time to start getting to know the 
                          puppy you intend to adopt.
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide class="pet-carousel-slide"  caption="Puppies" img-blank img-alt="Blank image">
                        <p>Although puppies start learning about the world and the social order within their litter
                          by week three, weeks four through twelve make up a crucial window for socialization that 
                          will make the difference between a pup growing into a well-adjusted dog or one with emotional 
                          and behavioral problems. The earlier puppies in this stage of development can start meeting 
                          new people, interacting with other pets (but you'll want to make sure these pups are also vaccinated 
                          and have gone through their vet checks so as to not expose your puppy to anything), exploring the world, 
                          and gaining new and positive experiences, the better.
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide class="pet-carousel-slide"  caption="Puppies" img-blank img-alt="Blank image">
                        <p>According to the American Kennel Club, puppies should start receiving vaccinations between six and eight weeks. 
                          By the time a puppy is ready to be adopted, he should already be vaccinated for distemper, parvovirus, and parainfluenza.
                          A pup will be ready for his next round of vaccinations between ten and twelve weeks of age.
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide class="pet-carousel-slide" caption="Puppies" img-blank img-alt="Blank image">
                          <p>By week seven, says Dogtime, a puppy has developed the physical coordination and muscle control necessary to begin house-training.
                            Accidents are still likely. His muscles continue to develop and he gains new neural pathways that help him understand how and where 
                            to properly relieve himself.
                          </p>
                        </b-carousel-slide>
                      <b-carousel-slide class="pet-carousel-slide"  caption="Puppies" img-blank img-alt="Blank image">
                        <p>Once puppies are fully weaned at week eight, they're ready to leave their canine birth family and go to their new homes. This can be
                          a delicate time. While a pup this age is still within the time frame of readily accepting new family members and new experiences, he's 
                          also shifting into a fear stage that can last until about week twelve. Puppies at this age need a lot of reassurance and positivity to
                            keep from becoming anxious adults.
                        </p>
                        </b-carousel-slide>
                      <b-carousel-slide class="pet-carousel-slide"  caption="Puppies" img-blank img-alt="Blank image">
                        <p>By week nine, after he's had a chance to settle into his new home and form a bond with his new family, a pup is ready to begin basic 
                          obedience training. While some pet parents are reluctant to enroll their pups in obedience classes prior to obtaining all of their 
                          vaccinations, the American Veterinary Society of Animal Behavior points out that the socialization benefits of attending obedience 
                          classes at this age far outweigh any risks posed by not having completed vaccinations. Make sure to check with your pup's veterinarian 
                          to get their opinion first.
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide class="pet-carousel-slide"  caption="Puppies" img-blank img-alt="Blank image">
                        <p>At week twelve, a puppy's dominance and submission instincts start coming to the fore 
                          and he starts to figure out where he fits in the social order of the household. At week 
                          twelve, the fear stage gives way to curiosity as he becomes more independent and assertive. 
                          Now, he needs plenty of reassurance from his loved ones. Usually, pups are secure about their
                          place in the family by about six months of age.
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide  class="pet-carousel-slide" caption="Puppies" img-blank img-alt="Blank image">
                        <p>
                          Adult teeth start coming in between three and six months of age, which is when the dreaded chewing 
                          begins. It's important to puppy-proof the house at this stage, hiding or placing out of reach anything
                          you don't want to get chewed, as well as anything that might pose a choking hazard or otherwise harm the pup, 
                          such as power cords or toxic plants. Providing chew toys during this time can help prevent him from satisfying 
                          his urge to chew on the living room rug or your favorite shoes.
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide  class="pet-carousel-slide" caption="Puppies" img-blank img-alt="Blank image">
                        <p>
                          Puppies can be spayed or neutered between four and six months. This should be done no later than six months of age, 
                          in order to prevent the effects of hormones from causing disruptive behavior.
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide  class="pet-carousel-slide" caption="Puppies" img-blank img-alt="Blank image">
                        <p>
                          As adolescent pups become more independent, they may try to assert themselves in the pack order, establish dominance, 
                          and stake out their territory. It's common for pups between six and eighteen months of age to push their boundaries and 
                          challenge the authority of their human, as well as any other pets that make up their "pack."
                        </p>
                      </b-carousel-slide>
                      <b-carousel-slide  class="pet-carousel-slide" caption="Puppies" img-blank img-alt="Blank image">
                        <p>
                          Puppies typically develop the emotional maturity and temperament of an adult dog between twelve and eighteen months of age, 
                          although they may continue to occasionally exhibit puppy behavior like chewing and nipping until they're about two years old.
                          Generally, by the time a pup reaches eighteen months, he's settled into his grown-up personality and fully acclimated to his
                            place in the family. Now this doesn't mean he won't still be a bundle of energy — this can continue for a few years depending 
                            on the dog, which is why regular exercise and training is important for him to learn proper behaviors.
                        </p>
                      </b-carousel-slide>
                  </b-carousel>
                </div>
                <div v-else-if="petAgeSelected === 'Adults'">
                  <b-carousel
                    id="carousel-2"
                    v-model="slide"
                    :interval="0"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                  >
                    <b-carousel-slide  class="pet-carousel-slide" caption="Adults" img-blank img-alt="Blank image">
                      <p>
                      When it comes to adult dogs, the most important goal can be considered to be a sufficient intake of nutrients in relation to their
                        activity levels, and also the prevention of excessive weight gain.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Adults" img-blank img-alt="Blank image">
                      <p>
                      Dogs can be classified as adults in various ways. Achieving a particular height characteristic of a breed or a breed type indicates 
                      that the size of the support organs (bones, cartilage) is beginning to resemble the dimensions of those in an adult dog. At this stage, 
                      the strength, coordination, size and shape of the muscular system (muscles, tendons) can still change. Some very small or small breeds 
                      achieve the height typical for their breed at approximately 6 months of age. Correspondingly, in big or large breeds, dogs achieve the 
                      height typical for their breed at approximately 12 – 18 months of age. At this stage, the musculoskeletal system still needs practice in 
                      order to develop fully and to support the dog in the best possible way. Correct feeding supports the development of the bone structure. 
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Adults" img-blank img-alt="Blank image">
                      <p>
                      The protein, fat and mineral requirements of adult dogs are different from their requirements as a puppy. For adult dogs, as far as nutrition
                        is concerned, the emphasis shifts more from growth support to maintaining the body’s energy/protein needs, as well as supporting energy consumption 
                        and restoration.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Adults" img-blank img-alt="Blank image">
                      <p>
                      Developing muscles in young adult dogs still need coordination practice. That is why it is wise to keep exertion at a reasonable level. The size and durability 
                      of the muscles and tendons start to develop with exercise, so it is recommended to keep the intensity and duration of exercise sessions at a reasonable level, 
                      so that the dog’s musculoskeletal system is not over-exerted. At this stage, dogs need food meant for adult dogs.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Adults" img-blank img-alt="Blank image">
                      <p>
                      Once the dog is 2-3 years of age, the amount of exercise and other activities can be increased. The dog owner must find out more information about the breed of 
                      dog that they own: at what stage are the dog’s limbs and back ready for long walks, or correspondingly, to activities requiring more jumping and climbing.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Adults" img-blank img-alt="Blank image">
                      <p>
                        The number of feeding times per day can vary a lot for any healthy adult dog. The feeding rhythm of an adult dog is often determined by the daily rhythm of the family. 
                        However, one of the basic premises is that the dog’s stomach should not be full of food before going for a long walk, or before jumping/climbing. It is difficult to move
                        around on a full stomach, and it could make the dog prone to gastric volvulus, for example.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Adults" img-blank img-alt="Blank image">
                      <p>
                        The owner is able to check daily how well the dog’s nutritional requirements are met, depending on how solid the dog’s excrement is, how the dog’s intestines are functioning 
                        otherwise, and what their appetite is like. Eating the right amount of food with plenty of meat, your dog will remain in a suitable weight category. When food can be digested 
                        easily, your dog will recover well after exercise, sleep well, and see sweet dreams.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Adults" img-blank img-alt="Blank image">
                      <p>
                      The owner must also remember the hierarchy related to feeding pets: the strongest member of the herd controls the food. This is also highly significant for successful dog training.
                      </p>
                    </b-carousel-slide>
                  </b-carousel>
                </div>
                <div v-else>
                  <b-carousel
                    id="carousel-2"
                    v-model="slide"
                    :interval="0"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                  >
                    <b-carousel-slide class="pet-carousel-slide" caption="Seniors" img-blank img-alt="Blank image">
                      <p>
                        Dogs over 8 years of age are usually considered to be aging dogs. In larger breeds, the aging process can begin slightly earlier; and in some individuals, the aging process can begin 
                        earlier due to illnesses or other reasons.  When dogs start to age, their performance levels decline slightly, due to a decline in their oxygen-carrying capacity, for example. 
                        However, at this stage, it is important to monitor the amount of exercise, as well as the amount of food that the dog gets.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Seniors" img-blank img-alt="Blank image">
                      <p>
                        There are physiological changes that are related to aging, such as a mild decrease in activity levels. This should be taken into consideration when planning the amount of food 
                        to be given to the dog. In addition, some individuals can have special needs related to certain illnesses/breeds, the significance of which will be highlighted as the dog becomes older.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Seniors" img-blank img-alt="Blank image">
                      <p>
                          Sometimes, increasing the amount of feeding times per day can have a positive effect on intestinal functionality. In this case, the amount of food given in one serving does not make 
                          the dog’s stomach feel too full. Some seniors need regular feeding intervals to be happy. On the other hand, others prefer interesting outings, and the regularity of feeding intervals 
                          is not as essential. 
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Seniors" img-blank img-alt="Blank image">
                      <p>
                          At times, the condition of joints needs special attention in aging dogs. Joint functionality can be improved with suitable nutritional supplements, fatty acids, and supportive therapy. 
                          Mild exercise and a good muscular condition help dogs even with joint problems remain mobile for a long time.  
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Seniors" img-blank img-alt="Blank image">
                      <p>
                          As the dog ages, it is often a great idea to slightly increase the amount of fibre in their food, and start feeding slightly lighter options. At the same time, it must be ensured that the 
                          dog has a sufficient protein intake. Feeding levels should be kept even, so that there would be no weight fluctuations, which are harmful to the dog’s health.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Seniors" img-blank img-alt="Blank image">
                      <p>
                        As the dog ages, they tend to get prone to tartar build-ups. Chewing on dry food pellets is a great tool for slowing this process down. It is also recommended to give the dog other bones 
                        or treats to chew, which would help slow down the build-up of tartar.
                      </p>
                    </b-carousel-slide>
                    <b-carousel-slide class="pet-carousel-slide" caption="Seniors" img-blank img-alt="Blank image">
                      <p>
                        Happy retirement!
                      </p>
                    </b-carousel-slide>
                  </b-carousel>
                </div>
              </div>
              <div align="center" v-else>
                <h1>Cats</h1>
                <div v-if="petAgeSelected ==='Puppies/Kittens'">
                  <b-carousel
                    id="carousel-4"
                    v-model="slide"
                    :interval="0"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                  >
                    <b-carousel-slide class="pet-carousel-slide" caption="Kittens" img-blank img-alt="Blank image">
                      <p>
                        Kittens have a very high play drive. Now is the best time for gradual positive introductions to children and other pets. It is also the right time for your cat to become comfortable with nail trims, 
                        tooth and coat brushing, carrier training, and transportation.
                      </p>
                    </b-carousel-slide>
                  </b-carousel>
                </div>
                <div v-else-if="petAgeSelected ==='Adults'">
                  <b-carousel
                    id="carousel-5"
                    v-model="slide"
                    :interval="0"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                  >
                    <b-carousel-slide class="pet-carousel-slide" caption="Adults" img-blank img-alt="Blank image">
                      <p>
                        Many people assume their cat is young and healthy and don’t go to the veterinarian for regular check-ups. However, your cat will benefit from regular check-ups to keep them healthy and prevent any disease 
                        or illnesses.
                      </p>
                    </b-carousel-slide>
                  </b-carousel>
                </div>
                <div v-else>
                  <b-carousel
                    id="carousel-6"
                    v-model="slide"
                    :interval="0"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                  >
                    <b-carousel-slide class="pet-carousel-slide" caption="Seniors" img-blank img-alt="Blank image">
                      <p>
                        The human equivalent at this stage is about 70 human years.
                        Senior and geriatric cats that exhibit behavioral changes (e.g., vocalization, changes in litter box usage) should be evaluated more frequently for an underlying medical problem.
                      </p>
                    </b-carousel-slide>
                  </b-carousel>
                </div>
              </div>
            </div>
          </div>
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
      petTypesArr: ["Cats","Dogs"],
      //  petTypesArr: ["Bearded Dragon" , "Birds", "Burro", "Cats","Chameleons (Veiled)","Chickens", "Chinchillas",
      //     "Chinese Water Dragon","Cows", "Dogs","Donkey","Ducks","Ferrets","Fish","Geckos","Geese (Chinese Swan Goose)", "Gerbils",
      //     "Goats","Guinea","Fowl","Guinea Pigs","Hamsters", "Hedgehogs","Horses","Iguanas","Llamas", "Lizards", "Mice",
      //     "Mule","Peafowl", "Pigs and Hogs", "Pigeons","Ponies", "Pot Bellied Pig", "Rabbits", "Rats", "Sheep", "Skinks", "Snakes",
      //     "Stick Insects", "Sugar Gliders", "Tarantula", "Turkeys","Turtles"],
      petTypeSelected:"",
      petAgeSelected:"",
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
      },
      slide: 0,
      sliding: null
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
       this.editedPet = {
        name: "",
        age: "",
        colour: "",
        gender: "",
        avatar: ""
      }
    },
    onFileSelected(event) {
      console.log(event.target.files[0].name);
      this.file = event.target.files[0];
      this.submitForm();
    },

    logPets(){
      console.log("pets ", this.user.pets.aaaaaaaaaaaaaaa)
    },
    DogClicked() {
      console.log("Dog button dropdown clicked");
    },
    listPetTypes() {
      const petTypeArr = ["Bearded Dragon" , "Birds", "Burro", "Cats","Chameleons (Veiled)","Chickens", "Chinchillas",
      "Chinese Water Dragon","Cows", "Dogs","Donkey","Ducks","Ferrets","Fish","Geckos","Geese (Chinese Swan Goose)", "Gerbils",
      "Goats","Guinea","Fowl","Guinea Pigs","Hamsters", "Hedgehogs","Horses","Iguanas","Llamas", "Lizards", "Mice",
      "Mule","Peafowl", "Pigs and Hogs", "Pigeons","Ponies", "Pot Bellied Pig", "Rabbits", "Rats", "Sheep", "Skinks", "Snakes",
      "Stick Insects", "Sugar Gliders", "Tarantula", "Turkeys","Turtles"]
      for (let i =0; i<petTypeArr.length; i++) {
        console.log("pet", petTypeArr[i])
      }
    },
    getSelectedPetType(petType){
      console.log("pet type clicked", petType)
      this.petTypeSelected=petType
    },
    getSelectedPetAge(petAge){
      console.log("pet age selected: ", petAge)
      this.petAgeSelected = petAge
    },
     onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
  },
    
  computed: {
    ...mapGetters(["user"]),
       
       petTypesArr: function() {
          const petTypeArr = ["Bearded Dragon" , "Birds", "Burro", "Cats","Chameleons (Veiled)","Chickens", "Chinchillas",
          "Chinese Water Dragon","Cows", "Dogs","Donkey","Ducks","Ferrets","Fish","Geckos","Geese (Chinese Swan Goose)", "Gerbils",
          "Goats","Guinea","Fowl","Guinea Pigs","Hamsters", "Hedgehogs","Horses","Iguanas","Llamas", "Lizards", "Mice",
          "Mule","Peafowl", "Pigs and Hogs", "Pigeons","Ponies", "Pot Bellied Pig", "Rabbits", "Rats", "Sheep", "Skinks", "Snakes",
          "Stick Insects", "Sugar Gliders", "Tarantula", "Turkeys","Turtles"]
      },
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

<style>
.dropDownPetTypes {
   height: 100px;
   color: "blue";
   overflow: auto;
}
.customClassForDropDown
    {
       height: 100px;
      color: "blue";
      overflow: auto;
    }
@media (max-width: 500px) {
    .dropdown-menu{
          height:200px;
          overflow-y:auto;
       }
    }
    
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
.carousel-caption {
color: black;

}

 .pet-carousel-slide  {
   height:40vh;
} 

.pet-carousel-slide p {
  color: black;
}


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