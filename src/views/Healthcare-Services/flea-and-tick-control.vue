<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Flea and Tick Control" />
        <h1>Flea and Tick Control</h1>
        <h3 class="text-justify">Flea Control</h3>
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
        <p class="text-justify">
          <strong>Please call us to discuss an appropriate flea control program for your pet.</strong>
        </p>

        <h3 class="text-justify">Tick Control</h3>
        <p
          class="text-justify"
        >The main tick of concern for pet owners is the Paralysis Tick (Ixodes holocyclus) as it can cause paralysis and death within 2-4 days of attachment. Whilst Paralysis Ticks occur naturally only in certain geographic areas (mainly along the coastal eastern seaboard of Australia) they can attach to pets who visit these areas during the warmer months, particularly if they are allowed to run through scrub. Ticks may also hitch a ride back with you or a neighbour in cars, rugs, towels or plants.</p>
        <p
          class="text-justify"
        >If you notice a tick on a pet that is not displaying signs of tick paralysis, remove the tick straight away.To do this, grasp the tick firmly where it attaches to your pet’s skin and give a quick sideways pull. It is better not to try and kill the tick first as the dying tick may inject more of its potent toxin into your pet. If you are not confident removing the tick please call us immediately to make an appointment to have it removed.</p>
        <p
          class="text-justify"
        >Once the tick is removed your pet should be kept cool and quiet whilst being closely monitored for 24 hours. If your pet starts to display any signs of tick paralysis, such as vomiting, weakness, staggering, breathing difficulty, or altered bark, seek immediate veterinary attention as this is a genuine veterinary emergency. If your pet is showing any of the above signs, do not offer food or water as these may be accidentally inhaled in tick-affected dogs.</p>
        <p
          class="text-justify"
        >Treatment of tick paralysis includes searching for and removing all ticks. This may include clipping the animal completely and/or the use of medication to kill remaining ticks. Tick antiserum is administered to counteract the toxin and supportive care is provided during recovery. This can be costly in comparison to what it would cost to use tick prevention initially.</p>
        <p class="text-justify">
          However,
          <strong>no tick prevention is 100% effective and should always be used in combination with daily searches of your pet.</strong> Searching your pet shouldn’t cease once you return from tick-affected regions but should continue for at least 7 days after returning home. Use your fingers to feel over the entire body, especially under the collar, on the face and around the front of your pet. Don’t forget to check carefully between the toes, under the lips and in the ears.
        </p>
        <p class="text-justify">
          <strong>We are more than happy to show you how to do a thorough tick search, please call us to discuss.</strong>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'fleaandtickcontrol',
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
