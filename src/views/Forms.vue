<template>
  <div>
    <b-card>
        <b-form @submit="onSubmit" v-if="show">
        
        <b-card id="personalDetailsCard" title="Personal Details">
            <!-- Name -->
            <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="form.name"
                required
                ></b-form-input>
            </b-form-group>    
            
            <!-- Email Address -->
            <b-form-group
                id="input-group-2"
                label="Email address:"
                label-for="input-2"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                required
                ></b-form-input>
            </b-form-group>

            <!-- Home Address -->
            <b-form-group id="input-group-3" label="Home address:" label-for="input-3"
            >
                <b-form-input
                id="input-3"
                v-model="form.homeAddress"
                type="text"
                required
                ></b-form-input>
            </b-form-group>

            <!-- Postal Address -->
            <b-form-group id="input-group-3" label="Postal address:" label-for="input-3"
            >
                <b-form-input
                id="input-3"
                v-model="form.postalAddress"
                type="text"
                required
                ></b-form-input>
            </b-form-group>

            <!--Home Phone -->
            <b-form-group id="input-group-4" label="Home phone:" label-for="input-4"
            >
                <b-form-input
                id="input-4"
                v-model="form.homePhone"
                type="text"
                @change="phoneInputHandler('homePhone', $event)"
                :required="homePhoneRequired"
                ></b-form-input>
            </b-form-group>

            <!--Mobile Phone -->
            <b-form-group id="input-group-5" label="Mobile phone:" label-for="input-5"
            >
                <b-form-input
                id="input-5"
                v-model="form.mobilePhone"
                type="text"
                @change="phoneInputHandler('mobilePhone', $event)"
                :required="mobilePhoneRequired"
                ></b-form-input>
            </b-form-group>

            <!--Work Phone -->
            <b-form-group id="input-group-6" label="Work phone:" label-for="input-6"
            >
                <b-form-input
                id="input-6"
                v-model="form.workPhone"
                type="text"
                @change="phoneInputHandler('workPhone', $event)"
                :required="workPhoneRequired"
                ></b-form-input>
            </b-form-group>
        </b-card>

        <b-button id="addPetButton" variant="outline-primary" @click="addPet">
                <span class="btn-label">
                    <fa-icon :icon="['fas', 'plus']"  pull="left" />
                </span>
                Add Pet
            </b-button>

            <div class="pets-container">
                <b-card class="pet-card"
                        :title="form.pets[pet.index].name ? form.pets[pet.index].name : `Pet ${pet.index + 1}`"
                        v-for="pet in form.pets"
                        :key="pet.index">
                    <div class="w-md-50">
                        <!-- Delete pets button -->
                        <b-button id="deletePetButton" variant="danger" @click="deletePet(pet.id)">
                            <span class="icon-only-btn">
                                <fa-icon :icon="['fas', 'times']" />
                            </span>
                        </b-button>

                        <!--Pet's Name -->
                        <b-form-group label="Pet's Name:" label-for="input-6"
                        >
                            <b-form-input
                            id="input-6"
                            v-model="form.pets[pet.index].name"
                            type="text"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <!--Pet's Breed -->
                        <b-form-group id="input-group-7" label="Breed:" label-for="input-7"
                        >
                            <b-form-input
                            id="input-7"
                            v-model="form.pets[pet.index].breed"
                            type="text"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <!--Pet's Colour -->
                        <b-form-group id="input-group-8" label="Colour:" label-for="input-8"
                        >
                            <b-form-input
                            id="input-8"
                            v-model="form.pets[pet.index].colour"
                            type="text"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <!--Pet's Sex -->
                        <b-form-group id="input-group-3" label="Sex:" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.pets[pet.index].sex"
                            :options="sex"
                            required
                            ></b-form-select>
                        </b-form-group>
                        
                        <!--Pet's Age -->
                        <b-form-group id="input-group-1" label="Age:" label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.pets[pet.index].age"
                            type="text"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <!--Pet's Weight -->
                        <b-form-group id="input-group-1" label="Weight:" label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.pets[pet.index].weight"
                            type="text"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-4">
                            <b-form-checkbox v-model="form.pets[pet.index].desexed">Desexed</b-form-checkbox>
                        </b-form-group>

                        <!--Pet's Microchip Number -->
                        <b-form-group id="input-group-1" label="Microchip Number:" label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.pets[pet.index].microchipNumber"
                            type="text"
                            ></b-form-input>
                        </b-form-group>

                        <!--Flea Control Products -->
                        <b-form-group id="input-group-1" label="Flea Control:" label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.pets[pet.index].fleaControl"
                            type="text"
                            ></b-form-input>
                        </b-form-group>

                        <!--Tick Control Products -->
                        <b-form-group id="input-group-1" label="Tick Control:" label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.pets[pet.index].tickControl"
                            type="text"
                            ></b-form-input>
                        </b-form-group>

                        <!--Intestinal Worming Products -->
                        <b-form-group id="input-group-1" label="Intestinal Worming:" label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.pets[pet.index].intestinalWorming"
                            type="text"
                            ></b-form-input>
                        </b-form-group>

                        <!--Heartworm Prevention Products -->
                        <b-form-group id="input-group-1" label="Heartworm Prevention:" label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.pets[pet.index].heartwormPrevention"
                            type="text"
                            ></b-form-input>
                        </b-form-group>

                        <!--Diet Products -->
                        <b-form-group id="input-group-1" label="Diet:" label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.pets[pet.index].diet"
                            type="text"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                </b-card>
            </div>

        <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card> -->
    </b-card>
    </div>
</template>

<script>
    import './../assets/css/forms.css';
    export default {
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    homeAddress: '',
                    postalAddress: '',
                    homePhone: '',
                    workPhone: '',
                    mobilePhone: '',
                    pets: [],
                },
                homePhoneRequired: true,
                workPhoneRequired: true,
                mobilePhoneRequired: true,
                sex: [{ text: 'Select One', value: null }, 'Male', 'Female'],
                show: true
            }
        },
        methods: {
            getDate() {
                const event = new Date();
                const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
                return event.toLocaleDateString('en-AU', options);
            },
            onSubmit(evt) {
                evt.preventDefault()
                // alert(JSON.stringify(this.form))

                const url = 'https://us-central1-helping-paws-vet-ec213.cloudfunctions.net/api/form/newClientInformation';
                const data = {
                    ...this.form,
                    date: this.getDate()
                }

                try {
                    fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => response.json())
                    .then((json) => {
                        console.log('Success:', json);
                        this.makeToast();
                    });
                } catch (error) {
                    console.error('Error:', error);
                }
            },
            addPet() {
                console.log('addpet')
                this.form.pets.push({
                    index: this.form.pets.length,
                    desexed: false,
                })
            },
            deletePet(petId) {
                this.form.pets.splice(petId);
            },
            makeToast() {
                this.$bvToast.toast('The form has been succesfully submitted', {
                    title: 'Success',
                    variant: 'success',
                    solid: true
                })
            },
            phoneInputHandler(inputType, value) {
                if (value) {
                    // If we are in here, it means one of the phone related inputs
                    // has a non-null value. Therefore, set the 'required' attribute to false
                    // for the other inputs. (we only require at least one phone number).
                    if (inputType === 'homePhone') {
                        this.mobilePhoneRequired = false;
                        this.workPhoneRequired = false;
                    } else if (inputType === 'mobilePhone') {
                        this.homePhoneRequired = false;
                        this.workPhoneRequired = false;
                    } else if (inputType === 'workPhone') {
                        this.homePhoneRequired = false;
                        this.mobilePhoneRequired = false;
                    }
                }
            } 
        }
    }
</script>