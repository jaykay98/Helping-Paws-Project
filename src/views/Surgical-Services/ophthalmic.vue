<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Surgical Services" page="Ophthalmic" />
        <b-img center src="@/assets/banner-dogs.jpg" fluid alt="Dog Banner"></b-img>
        <h1>Ophthalmic</h1>
        <p class="text-justify">Ophthalmic surgery is the specific area of pet care involving treatment of an animal’s eyes. For certain breeds, this service also involves the examination and certification of breeding dogs to verify their eyes are in good condition.</p>
        <p class="text-justify">Eye examinations require specific equipment, such as an ophthalmoscope (a magnifying light to look into the eye). Our veterinarians may also use a special dye called fluorescein (it glows a green/yellow colour under a UV light) to identify damage to the cornea (the clear layer at the front of the eye). Many eye conditions can be treated medically, however, specific conditions may require surgery.</p>
        <p class="text-justify"><strong>Our practice is fully equipped to offer the following eye surgeries:</strong></p>
        <ul class="text-justify">
          <li>Enucleation (removal) of the eye for severe glaucoma or cancer cases</li>
          <li>Entropion surgery to prevent ocular damage from inward pointing eye lashes/eyelids</li>
          <li>Ectropion surgery to correct outward facing lower eyelids</li>
          <li>Eyelid tumour removal</li>
          <li>Cherry eye surgery to correct a protruding third eyelid in dogs</li>
          <li>Surgery to repair corneal ulcers (ulcers on the eye surface)</li>
        </ul>
        <p class="text-justify">Our veterinarians can also refer your pet to a specialist veterinary ophthalmologist for specialised procedures such as eye ultrasound, vision testing or cataract removal.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'ophthalmic',
  components: {
    Breadcrumbs
  }
}
</script>