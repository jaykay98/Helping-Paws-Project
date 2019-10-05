<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <b-col id="footer-content" class="col-md-3 mt-2">
          <h5 class="purple">Clinic Details</h5>
          <address>
            <strong>Helping Paws Vet Clinic</strong>
            <br />3684-3688 Mount Lindesay Highway
            <br />Park Ridge, QLD, 4125
            <br />
            <fa-icon :icon="['fas', 'phone']" />
            <a href="tel:+610732971005"> (07) 3297 1005</a>
            <br />
            <fa-icon :icon="['fas', 'envelope']" />
            <a href="mailto:helpingpawsvet@yahoo.com.au"> helpingpawsvet@yahoo.com.au</a>
          </address>
        </b-col>
        <b-col class="mt-2 mb-3">
          <h5 class="title">Clinic Hours</h5>
          <ul class="list-unstyled">
            <li>Monday: 8:30AM - 5:30PM</li>
            <li>Tuesday: 8:30AM - 5:30PM</li>
            <li>Wednesday: 8:30AM - 5:30PM</li>
            <li>Thursday: 8:30AM - 5:30PM</li>
            <li>Friday: 8:30AM - 5:30PM</li>
            <li>Saturday: CLOSED</li>
            <li>Sunday: CLOSED</li>
          </ul>
        </b-col>
        <b-col class="col-md-3 mt-2">
          <h5 class="title">Follow Us</h5>
          <a
            aria-label="Helping Paws Facebook Page"
            href="https://www.facebook.com/helpingpawsveterinaryclinic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <fa-icon :icon="['fab', 'facebook-square']" /> Facebook
          </a>
        </b-col>
        <b-col class="mt-2">
          <h5 class="title">Our Community</h5>
          <span class="image-links">
            <a href="https://www.petrescue.com.au/groups/11227/Helping-Paws-Adoption-Program" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/large_HPAP_Logo.png" width="140px" alt="HPAP logo" />
            </a>
            <a href="https://lostpetfinders.com.au" target="_blank" rel="noopener noreferrer">
              <img
                src="@/assets/lost-pet-finders-logo.png"
                width="140px"
                alt="Lost Pet Finders Logo"
              />
            </a>
          </span>
        </b-col>
      </div>
      <hr />
      <div class="text-center">
        <p class="copyright-text">&copy; {{ new Date().getFullYear() }} Helping Paws Vet Clinic</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
#footer {
  background-color: #eeeeee;
}
.copyright-text {
  font-size: .899rem;
}
</style>