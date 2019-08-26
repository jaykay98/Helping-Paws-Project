<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 id="error-text" class="text-center">It looks like that page could not be found!</h1>
        <hr />
        <b-img
          center
          src="@/assets/404-img.jpg"
          alt="A picture of a dog crying, most likely because it cannot find the content you were looking for!"
        ></b-img>
        <h4 align="center"><router-link to="/">Return Home</router-link></h4>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "notfound"
};
</script>

<style>
#error-text {
  color: red;
}
</style>