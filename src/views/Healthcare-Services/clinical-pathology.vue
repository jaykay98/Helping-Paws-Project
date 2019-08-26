<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Clinical Pathology" />
        <h1>Clinical Pathology</h1>
        <p class="text-justify">Clinical pathology involves the laboratory evaluation of blood, fluids or body tissues in order to identify existing disease. Common laboratory tests include blood chemistries, complete blood counts, blood clotting times, urinalysis, faecal tests, biopsy examination, cultures and infectious disease testing.</p>
        <p class="text-justify">Our animal hospital is equipped with an in-house laboratory that allows our veterinarians to quickly perform many of these diagnostic tests to achieve an accurate and rapid diagnosis. This is especially important in very ill animals and those requiring immediate or emergency treatment. Some more specialised tests may need to be performed by an external veterinary laboratory.</p>
        <p class="text-justify">Our in-house laboratory can provide results within minutes.  Specialised testing may take 12-24 hours for blood results or up to 14 days for biopsy results, depending on the nature of the test being performed. Ask your veterinarian when to call for your pet’s laboratory results.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'clinicalpathology',
  components: {
    Breadcrumbs
  }
}
</script>