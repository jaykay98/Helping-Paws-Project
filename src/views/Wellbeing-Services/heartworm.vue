<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Wellbeing Services" page="Heartworm" />
        <h1>Heartworm</h1>
        <p
          class="text-justify"
        >There are two broad categories of worms that may affect our pet dogs and cats, heartworm and intestinal worms. Please see our intestinal worm page for more information.</p>

        <h3 class="text-justify">Heartworm</h3>
        <p
          class="text-justify"
        >Heartworm, or Dirofilaria immitis, is a parasite that is spread by mosquitoes, so you pet does not even need to be in contact with other pets to become infected!</p>
        <p class="text-justify">
          Heartworm has a complicated life cycle. Infected dogs have microfilaria, an immature form of heartworm, circulating in their bloodstream. Microfilariae are sucked up by mosquitoes when feeding on the blood of infected dogs. The immature parasite develops into a heartworm larva inside the mosquito, then a single bite from a carrier mosquito can infect your pet
          <em>(dog or cat)</em>. As the worms mature in the heart they can cause a physical blockage as well as thickening of the heart and associated blood vessels. In the earlystages of infection there may be no visible signs, however, infection may eventually lead to signs of heart failure
          <em>(reluctance to exercise, lethargy, coughing)</em> and even death. Heartworm is present throughout most of Australia
          <em>(except Tasmania and arid areas)</em>.
        </p>
        <p
          class="text-justify"
        >Thankfully, heartworm is very easy to prevent and should form part of your pet health care routine. We have very effective preventative treatment options available including tablets, chews, spot-on's and even an annual injection for dogs administered by one of our vets. If your pet has not been on heartworm prevention we strongly recommend a heartworm test prior to starting a prevention program, followed by a repeat test 6 months after commencing.</p>
        <p class="text-justify">
          <strong>Please call us to discuss the best heartworm prevention for your pet.</strong>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'heartworm',
  components: {
    Breadcrumbs
  }
}
</script>