<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Microchipping" />
        <h1>Microchipping</h1>
        <p class="text-justify">A microchip is about the size of a grain of rice and is injected under your pet’s skin. It can be done during a normal consultation. The microchip is embedded with a code unique to your pet and is the most effective form of permanent identification. This code is placed onto a national computer database, so it is particularly useful in the return of lost pets. They can also assist where the ownership of an animal is in dispute. In some states of Australia microchipping of pets is now compulsory.</p>
        <p class="text-justify">If a pet is ever lost and is handed in at a veterinary clinic or animal shelter a microchip scanner is passed over the animal to reveal the unique code. The vet or animal shelter can then refer to the database to identify the name, address and phone number of the owner, so they can be reunited.</p>
        <p class="text-justify"><strong>If your pet is not microchipped please give us a call to make an appointment to have one inserted.  If you find a lost pet please call us to arrange a scan; we can reunite microchipped pets with their worried owners.</strong></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'microchipping',
  components: {
    Breadcrumbs
  }
}
</script>