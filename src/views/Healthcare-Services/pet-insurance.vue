<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Pet Insurance" />
        <h1>Pet Insurance</h1>
        <p class="text-justify">Pet insurance is becoming more and more popular in Australia. It offers you peace of mind as it covers some or all of the treatment costs if your pet was ever involved in an accident or suffers a sudden illness. There is no equivalent of Medicare for pets, thus often treatment costs exceed what an equivalent problem would cost for a human patient.</p>
        <p class="text-justify">Did you know that 24 hr emergency care for animals can cost over $1,000 per day? Some surgeries such as repair of fractured bones or exploratory surgery can also add up to thousands of dollars and that does not even include the recovery and aftercare treatment. It is a heartbreaking situation to have to choose between the health of your pet and financial constraints, so for peace of mind we strongly recommend that your pet is insured.</p>
        <p class="text-justify">There are several companies that offer pet insurance and we can help you find one that best suits your needs and your pet.</p>

        <h3 class="text-justify">What does pet insurance cover?</h3>
        <p class="text-justify">Individual packages vary in the type of treatment covered. However, they usually include most accidents and unexpected illnesses.</p>
        <p class="text-justify">You need to consider the differences between policies, in particular the claim excess amount, proportion of treatment costs covered, annual claim limit, age restrictions, pre-existing illness exclusions and policy costs.</p>
        <p class="text-justify"><strong>We highly recommend pet insurance and encourage you to discuss it with us at your next visit.</strong></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'petinsurance',
  components: {
    Breadcrumbs
  }
}
</script>