<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Specialist Referrals" />
        <b-img center src="@/assets/banner-cats.jpg" fluid alt="Cat Banner"></b-img>
        <h1>Specialist Referrals</h1>
        <p
          class="text-justify"
        >When an animal develops an unusual illness or injury, there is often a need for specialised expertise and equipment to properly diagnose and treat the problem. If your pet has a problem that requires this level of expertise we can refer you to a specialist that has earned our trust and confidence in order to give your pet the optimal chance of recovery.</p>
        <p
          class="text-justify"
        >Australian registered veterinary specialists undergo a rigorous training and examination process to obtain their qualifications, and like human specialists are considered to be the epitome of knowledge in their field. We work closely alongside the specialists and together can offer optimum care for pets that require this service.</p>
        <p
          class="text-justify"
        >Specialists are independent veterinarians and set their own fees. It's a good idea to ask them about costs when you call to make an appointment.</p>
        <p
          class="text-justify"
        >Our sense of responsibility doesn't end just because you've taken your pet to a specialist. If you find yourself faced with difficult decisions regarding the recommended treatment, please don't hesitate to call us. We'll be pleased to help you evaluate your options.</p>
        <p class="text-justify">
          <strong>We’re happy to discuss and organise a specialist referral if required by your pet.</strong>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'specialistreferrals',
  components: {
    Breadcrumbs
  }
}
</script>