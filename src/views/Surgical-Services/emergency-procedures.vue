<template>
<b-container>
  <b-row>
    <b-col>
      <Breadcrumbs service="Surgical Services" page="Emergency Procedures" />
      <h1>Emergency Procedures</h1>
      <p class="text-justify">We provide you and your pets with an after-hours emergency service for critical illness or injury. We hope your pet never needs us for an emergency however, common emergencies relate to car accidents, heart conditions, poisoning and a range of injuries.</p>
      <p class="text-justify">Upon arrival, your pet will be assessed by one of our veterinarians. We will aim to provide an estimate of the costs involved with your case, however, please be aware that with emergency procedures costs can vary depending on what services and treatments are required. Our veterinarians will keep you updated regularly during the course of your pet's stay in hospital. In some cases we may need to refer to a veterinary specialist centre or 24-hour emergency facility.</p>
      <p class="text-justify"><strong>Please contact us to discuss our after-hours arrangement, it’s always nice to know this information before you actually need it.</strong></p>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'emergencyprocedures',
  components: {
    Breadcrumbs
  }
}
</script>