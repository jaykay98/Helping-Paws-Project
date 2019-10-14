<template>
  <div class="home">
    <b-container>
      <!-- <b-jumbotron
        align="center"
        bg-variant="primary"
        text-variant="light"
        header="Helping Paws Vet Clinic"
        lead="We love & care for your pets!"
      ></b-jumbotron> -->
      <b-carousel img-width="1024" img-height="480">
        <b-carousel-slide
          class="carousel"
          img-src="@/assets/helping-paws-banner.jpg"
          img-width="1024"
          img-height="480"
          alt="Helping Paws Showcase"
        ></b-carousel-slide>
      </b-carousel>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {};
</script>

<style>
#jumbotron {
  background-image: url("~@/assets/helping-paws-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.carousel {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
