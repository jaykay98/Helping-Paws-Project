<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Wellbeing Services" page="Dog Care" />
        <b-img center src="@/assets/banner-dogs.jpg" fluid alt="Dog Banner"></b-img>
        <h1>Dog Care</h1>
        <p class="text-justify">Owning a dog provides companionship, loyalty and affection for people of all ages and is an invaluable addition to families and individuals.</p>
        <p class="text-justify">However, it is important to find the breed of dog most suitable to your particular lifestyle and be aware of the responsibility that comes with dog ownership before you adopt or purchase a dog. As your vet, we are willing to discuss the many aspects of dog care, including breed-specific medical problems and routine health care such as vaccinations, flea and tick control, desexing and worming that your future dog may need.</p>
        <p class="text-justify">After purchasing your puppy or dog, there are several important aspects of their care, to consider:</p>
        <ul class="text-justify">
          <li>We strongly recommend that you insure your new dog. Please see our information sheet on insurance for more about this topic.</li>
          <li>Suitable bedding such as washable rugs, cushions or blankets need to be provided in a weatherproof kennel or indoors.</li>
          <li>A secure area such as a dog-proof yard is essential. Your dog should never be left unsupervised when tethered.</li>
          <li>All dogs need daily exercise and mental stimulation to help avoid behavioural and health problems. Dogs view their human owners as being part of their pack and can develop behavioural issues if they feel neglected or excluded. It is also vitally important that dogs are socialised with people and other dogs from an early age in order to learn appropriate interactive behaviours.</li>
          <li>All pets require a minimum of one health check a year. On average, dogs age five to eight times faster than humans, allowing major health changes to develop in a relatively short amount of time. The risk of cancer, diabetes, obesity, arthritis, heart disease and other serious conditions all increase with age. However, a visit to us helps us diagnose, treat or even prevent health problems before they become life-threatening. Routine vaccinations, flea and tick control and worming are also recommended. A visit to us is also a good opportunity to ask about nutrition, behaviour, and other issues.</li>
          <li>Nutrition is an important part of your dogs care. A healthy and balanced diet is essential. This will provide protein to build the body; fats for skin and coat health; carbohydrates for energy; and minerals and vitamins for good bone development and healthy tissues.</li>
          <li>It is essential to keep your dogs teeth clean. A regular dental care routine will minimise tartar build-up on your pet’s teeth. Never give your dog cooked bones, as these can be brittle and easily splinter, causing harm to your dog.</li>
          <li>Fresh water bowls must always be available for your dog. They should be kept clean and placed in the shade</li>
          <li>Grooming and brushing is essential, particularly for long-haired breeds. This helps remove dust, dead skin, loose hairs, grass seeds, and tangles and it also assists to shorten the coat moult, which occurs every autumn and spring. Dirty or smelly dogs should be bathed. However, keep in mind that frequent shampooing can strip the natural oils from the coat and cause skin dryness and irritation.</li>
        </ul>
        <p class="text-justify">Our staff are always keen to discuss routine health care for your current or future pets. For further information about pet care, please phone our helpful staff during business hours.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'dogcare',
  components: {
    Breadcrumbs
  }
}
</script>