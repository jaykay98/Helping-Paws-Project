<template>
  <div class="home">
    <b-container>
      <b-jumbotron
        align="center"
        bg-variant="primary"
        text-variant="light"
        header="Helping Paws Vet Clinic"
        lead="We love & care for your pets!"
      ></b-jumbotron>
      <b-carousel controls indicators img-width="1024" img-height="480">
        <b-carousel-slide
          img-src="@/assets/helping-paws-banner.jpg"
          img-width="1024"
          img-height="480"
        ></b-carousel-slide>
        <b-carousel-slide>
          <img
            slot="img"
            width="1024"
            height="480"
            src="@/assets/baby-knoxx.jpg"
            alt="Baby Knoxx, a little Black pug"
          />
        </b-carousel-slide>
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
</style>
