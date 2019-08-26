<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Surgical Services" page="Orthopaedic" />
        <h1>Orthopaedic</h1>
        <p class="text-justify">Orthopaedic surgery encompasses any surgery that is related to bones or joints. It includes procedures such as fracture repairs, ligament repairs and spinal surgery to name a few.</p>
        <p class="text-justify">Our veterinarians’ high level of expertise and our practice’s fully equipped surgical suite allows us to perform certain orthopaedic surgical procedures that your pet may require. These may include:</p>
        <ul class="text-justify">
          <li>Cranial cruciate ligament repair</li>
          <li>Fracture (broken bone) repair</li>
          <li>Amputations for severe injuries or bone cancer cases</li>
        </ul>
        <p class="text-justify">Complicated orthopaedic cases, such as spinal surgery, will need to be referred to a specialist orthopaedic surgeon. Our veterinarians will assess each case individually and provide the best advice for you and your pet.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'orthopaedic',
  components: {
    Breadcrumbs
  }
}
</script>