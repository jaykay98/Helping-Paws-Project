<template>
  <b-container>
    <b-row>
      <div class="col my-4">
        <h1 align="center">Contact Us</h1>
        <h6 align="center">
          Contact us for friendly advice and professional pet health care by phone at
          <strong>(07) 3297 1005</strong>, or drop in to our practice here:
        </h6>
        <div class="google-maps" align="center">
          <iframe
            width="600"
            height="400"
            frameborder="0"
            style="border:0"
            :src="googleMapURL"
            allowfullscreen
          ></iframe>
        </div>

        <h6 class="mt-3" align="center">Alternatively, you can send us an email via the form below:</h6>
        <b-form class="col-md-6 mt-3 mx-auto" action="https://formspree.io/jkidd0020@gmail.com" method="POST">
          <b-form-group label="Name" label-for="name">
            <b-form-input
              type="text"
              name="name"
              v-model="name"
              placeholder="Enter your name"
              aria-required
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Email" label-for="email">
            <b-form-input
              type="text"
              name="email"
              v-model="email"
              placeholder="Enter your email"
              aria-required
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Message" label-for="message">
            <b-form-textarea
              v-model="message"
              name="message"
              placeholder="Enter your message..."
              aria-required
              required
            ></b-form-textarea>
          </b-form-group>

           <div class="g-recaptcha" :data-sitekey=recaptchaKey></div>

          <b-button block type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      recaptchaKey: `${process.env.VUE_APP_RECAPTCHASITEKEY}`,
      googleMapURL: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMwea3cdHkWsRkNoMIlwy7kw&key=${process.env.VUE_APP_MAPAPIKEY}`
    };
  },
  methods: {
  }
};
</script>
