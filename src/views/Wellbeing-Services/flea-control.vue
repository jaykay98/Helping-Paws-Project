<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Pet Care Services" page="Flea Control" />
        <b-img center src="@/assets/banner-cats.jpg" fluid alt="Cat Banner"></b-img>
        <h1>Flea Control</h1>
        <p
          class="text-justify"
        >Fleas are most often seen during the warmer months but as we keep our homes nice and warm throughout winter, we see fleas all year round. Only a small part of the adult flea population actually lives on your pet. The fleas’ eggs and larvae live in the environment and can survive for up to a year, so it is important to not only treat your animal directly for fleas but also decontaminate the environment as well. Wash your pet’s bedding using the hottest cycle and regularly vacuum/clean carpets. We do not recommend flea collars or flea shampoos alone as they fail to address the environmental flea infestation.</p>
        <p
          class="text-justify"
        >Fleas will tend to jump onto your pet only to feed and then jump off again. Dogs and cats can have a reaction to flea saliva resulting in a skin condition called Flea Allergy Dermatitis or FAD. Treatment of FAD can be complicated and veterinary consultation is recommended.</p>
        <p class="text-justify">Some signs that your pet may have fleas include:</p>
        <ul class="text-justify">
          <li>Scratching, biting and hair loss, especially at the base of the tail and rump</li>
          <li>You may see fleas (especially over the rump and in the groin region)</li>
          <li>It can be difficult to find the fleas, but is relatively easy to check for flea dirt. Simply moisten a cotton ball, part your pet’s fur and place the cotton ball on the skin over the rump. If the cotton ball takes on black specs surrounded by a reddish area, this may be flea dirt and can indicate that your pet has fleas.</li>
        </ul>
        <p
          id="warning-text"
          class="text-justify"
        >Warning: Some non-veterinary brands of flea treatments for dogs are potentially lethal when applied to cats. Always seek veterinary advice about the best flea treatments for your pet.</p>
        <p
          class="text-justify"
        >Please call us to discuss an appropriate flea control program for your pet.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'fleacontrol',
  components: {
    Breadcrumbs
  }
}
</script>

<style scoped>
#warning-text {
  color: red;
}
</style>