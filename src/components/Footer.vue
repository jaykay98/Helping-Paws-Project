<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <b-col id="footer-content" class="col-lg-5 col-md-12 col-sm-12 mt-2">
          <h5 class="mb-3">Clinic Details</h5>
          <p class="clinic-details">
            <strong>Helping Paws Vet Clinic</strong>
            <br />
            <fa-icon class="mr-2" :icon="['fas', 'map-marker-alt']" />3684-3688 Mount Lindesay Highway, Park Ridge, 4125, Queensland
            <br />
            <fa-icon class="mr-2" :icon="['fas', 'phone']" />(07) 3297 1005
            <br />
            <fa-icon class="mr-2" :icon="['fas', 'envelope']" />helpingpawsvet@yahoo.com.au
          </p>
        </b-col>
        <b-col class="col-lg-3 col-md-12 col-sm-12 mt-2">
          <h5 class="title mb-3">Clinic Hours</h5>
          <p class="hour-details">
            <strong>Mon-Fri:</strong> 8:30am - 5:30pm
            <br />
            <strong>Sat-Sun:</strong> Closed
          </p>
        </b-col>
        <b-col class="col-lg-3 col-md-12 col-sm-12 mt-2">
          <h5 class="title mb-3">Our Community</h5>
          <a
            aria-label="Helping Paws Facebook Page"
            href="https://www.facebook.com/helpingpawsveterinaryclinic/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-dark"
          >
            <fa-icon class="mr-2" :icon="['fab', 'facebook-square']" />Facebook
          </a>
          <br />
          <a
            aria-label="Helping Paws Adoption Program Website"
            href="https://www.petrescue.com.au/groups/11227/Helping-Paws-Adoption-Program"
            target="_blank"
            rel="noopener noreferrer"
            class="text-dark"
          >
            <fa-icon class="mr-2" :icon="['fas', 'dog']" />Helping Paws Adoption Program
          </a>
          <br />
          <a
            aria-label="Lost Pet Finders Website"
            href="https://lostpetfinders.com.au"
            target="_blank"
            rel="noopener noreferrer"
            class="text-dark"
          >
            <fa-icon class="mr-2" :icon="['fas', 'paw']" />Lost Pet Finders
          </a>
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

.clinic-details {
  font-size: 14px;
}

.hour-details {
  font-size: 14px;
}

.copyright-text {
  font-size: 0.899rem;
}
</style>