<template>
  <b-container>
    <b-row>
      <b-col class="my-3" v-if="showEmergency">
        <h2 align="center">EMERGENCY!</h2>
        <h5 align="center">
          Your pet requires IMMEDIATE action. Please contact the AEC ASAP by phone at
          <strong>1300 232 838</strong> or visit the website below.
          <a
            aria-label="AEC Logo"
            href="https://www.aecvets.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b-img align="center" src="@/assets/aec-logo.png" alt="AEC Logo"></b-img>
          </a>
        </h5>
      </b-col>
      <b-col class="my-3" v-if="showNonEmergency">
        <h2 align="center">NON-EMERGENCY</h2>
        <h5 align="center">
          You can contact our Vet Clinic via phone at
          <strong>(07) 3297 1005</strong> or email us at <strong>helpingpawsvet@yahoo.com.au</strong>
        </h5>
      </b-col>
      <div class="col-md-6 mt-5 mx-auto" v-if="formNotSubmitted">
        <h2 class="mb-3 text-center">Emergency Assessment</h2>
        <b-form @submit.prevent="testEmergency">
          <h4 align="center">Please answer the following questions:</h4>
          <div align="center">
            <b-form-group label="Is your pet unconscious?">
              <b-form-radio
                inline
                v-model="emergency1"
                @change="isDisabled = false"
                value="Yes"
                name="emergency1"
                required
              >Yes</b-form-radio>
              <b-form-radio
                inline
                v-model="emergency1"
                @change="isDisabled = false"
                value="No"
                name="emergency1"
                required
              >No</b-form-radio>
            </b-form-group>
            <b-form-group label="Is your pet bleeding?">
              <b-form-radio
                inline
                v-model="emergency2"
                @change="isDisabled = false"
                value="Yes"
                name="emergency2"
                required
              >Yes</b-form-radio>
              <b-form-radio
                inline
                v-model="emergency2"
                @change="isDisabled = false"
                value="No"
                name="emergency2"
                required
              >No</b-form-radio>
            </b-form-group>
            <b-form-group label="Is your pet having breathing difficulties?">
              <b-form-radio
                inline
                v-model="emergency3"
                @change="isDisabled = false"
                value="Yes"
                name="emergency3"
                required
              >Yes</b-form-radio>
              <b-form-radio
                inline
                v-model="emergency3"
                @change="isDisabled = false"
                value="No"
                name="emergency3"
                required
              >No</b-form-radio>
            </b-form-group>
            <b-form-group label="Has your pet broken any bones?">
              <b-form-radio
                inline
                v-model="emergency4"
                @change="isDisabled = false"
                value="Yes"
                name="emergency4"
                required
              >Yes</b-form-radio>
              <b-form-radio
                inline
                v-model="emergency4"
                @change="isDisabled = false"
                value="No"
                name="emergency4"
                required
              >No</b-form-radio>
            </b-form-group>
            <b-button block type="submit" :disabled="isDisabled" variant="primary">Submit</b-button>
          </div>
        </b-form>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Emergency",
  data() {
    return {
      isDisabled: true,
      formNotSubmitted: true,
      showEmergency: false,
      showNonEmergency: false,
      emergency1: "",
      emergency2: "",
      emergency3: "",
      emergency4: ""
    };
  },
  methods: {
    testEmergency() {
      if (
        this.emergency1 === "Yes" ||
        this.emergency2 === "Yes" ||
        this.emergency3 === "Yes" ||
        this.emergency4 === "Yes"
      ) {
        this.formNotSubmitted = false;
        this.showEmergency = true;
      } else {
        this.formNotSubmitted = false;
        this.showNonEmergency = true;
      }
    }
  }
};
</script>
