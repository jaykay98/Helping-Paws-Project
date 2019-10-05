<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Surgical Services" page="Soft Tissue" />
        <b-img center src="@/assets/banner-dogs.jpg" fluid alt="Dog Banner"></b-img>
        <h1>Soft Tissue</h1>
        <p class="text-justify">Our veterinarians’ high level of expertise and our practice’s fully equipped surgical suite allows us to perform the vast majority of soft tissue surgical procedures that your pet may require. Soft tissue surgery encompasses any surgery that is not related to bones. It includes procedures such as desexing, exploratory laporotomies, caesareans, lump removals, biopsies, wound stitch-ups, removal of intestinal foreign bodies - the list is endless!</p>
        <p class="text-justify">A very common soft tissue surgery is the removal of lumps. Some lumps may require a biopsy prior to removal to help understand whether they are cancerous or not. This information assists us in planning the surgery accordingly to give your pet the best possible outcome. Once they have been removed we recommend sending them to our external laboratory for analysis.</p>
        <p class="text-justify">Although most lumps are benign (not harmful), a minority are more serious (malignant). In the case of malignant (cancerous) tumours, early removal and an accurate diagnosis is extremely important to maximise the chances of a good outcome.</p>
        <p class="text-justify"><strong>If you find a lump or bump on your pet please make an appointment to visit one of our veterinarians to discuss any surgery your pet may require.</strong></p>
        <p class="text-justify">Please see our section under desexing for more details about this surgery.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'softtissue',
  components: {
    Breadcrumbs
  }
}
</script>