<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Wellbeing Services" page="Boarding Advice" />
        <h1>Boarding Advice</h1>
        <h3 class="text-justify">Going on holidays soon?</h3>
        <p
          class="text-justify"
        >Before considering whether to board your pet please check their vaccination records to make sure they have been vaccinated within the past 12 months. If your pet is due for a booster vaccination make sure this is done well ahead of the boarding period. It is a good idea to contact the boarding facility to check their individual policy as to how soon before boarding a vaccination can be administered.</p>
        <p
          class="text-justify"
        >When choosing a boarding facility, there are a number of factors to consider, such as:</p>
        <ul class="text-justify">
          <li>How big are individual kennels?</li>
          <li>Is there any natural light?</li>
          <li>Will your pet have access to a run during the day?</li>
          <li>How many kennels are there in the complex? Fewer kennels may mean a quieter, calmer stay.</li>
          <li>Do the kennels smell bad? If so, this can indicate poor hygiene or ventilation problems.</li>
          <li>Are the staff/owners welcoming, friendly and polite?</li>
          <li>Did they require proof of vaccination? Vaccination is a legal requirement to help prevent the spread of disease.</li>
          <li>Are there signs of overbooking or overcrowding?</li>
          <li>Do they provide food or can you provide your own pet’s specific diet?</li>
          <li>Can they medicate dogs if required?</li>
          <li>Which veterinarian do they use in an emergency?</li>
        </ul>
        <p
          class="text-justify"
        >You will need to inform the boarding facility of any health problems your pet may have had or is prone to. If medication is to be administered you should let them know at time of booking. Write down the dose, frequency and name of medication.</p>
        <p
          class="text-justify"
        >If on long term medication, please ensure you bring along extra just in case. Please provide the boarding facility with our details in the event that your pet needs veterinary attention in your absence.</p>
        <p
          class="text-justify"
        >An ideal boarding facility for your pet has a relaxed, calm atmosphere, created by having fewer kennels/animals, a design that minimises stress and allows maintenance of a high standard of hygiene.</p>
        <p class="text-justify">
          <strong>Please give us a call to discuss boarding and determine if your pet is up to date with the required vaccinations.</strong>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'boardingadvice',
  components: {
    Breadcrumbs
  }
}
</script>