<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Dentistry" />
        <b-img center src="@/assets/banner-cats.jpg" fluid alt="Cat Banner"></b-img>
        <h1>Dentistry</h1>
        <p
          class="text-justify"
        >Dentistry is a rapidly growing area of veterinary science. We have seen a greater awareness over the last 25 years of its importance to the overall health of the animals we treat.</p>
        <p class="text-justify">
          Just like humans,
          <strong>pets’ teeth need looking after</strong> too! The health of their teeth and gum's has a significant impact on their overall quality of life. Imagine how your mouth would feel, and smell, if you never brushed your teeth. Imagine having a really bad toothache and not being able to tell anyone about it!
        </p>
        <p
          class="text-justify"
        >Dental disease begins with a build up of bacteria in your pet’s mouth. Bacteria, combined with saliva and food debris, can cause plaque to accumulate on the tooth. As calcium salts are deposited, plaque turns to tartar (brown or yellow material starting near the gum line of the tooth). Without proper preventive or therapeutic care, plaque and tartar build-up leads to periodontal disease, which affects the tissues and structures supporting the teeth. Periodontal disease can cause oral pain, tooth loss and even heart or kidney problems.</p>
        <p class="text-justify">Common signs of dental disease, in order of severity, include:</p>
        <ul class="text-justify">
          <li>Yellow-brown tartar around the gumline</li>
          <li>Inflamed, red gums</li>
          <li>Bad breath</li>
          <li>Change in eating or chewing habits (especially in cats)</li>
          <li>Pawing at the face or mouth</li>
          <li>Excessive drooling</li>
          <li>Pain or bleeding when you touch the gums or mouth</li>
        </ul>
        <p class="text-justify">
          <strong>If your pet is showing any of these signs of dental disease please book an appointment to see one of our veterinarians. Early assessment and action can save your pet’s teeth!</strong>
        </p>

        <h3 class="text-justify">How can I prevent dental disease?</h3>
        <p
          class="text-justify"
        >Long-term control and prevention of dental disease requires regular home care. The best way to begin this is to accustom your pet from an early age. Dental home care may include:</p>
        <ul class="text-justify">
          <li>Brushing teeth daily – just like us! This is the best form of dental hygiene. Pet toothbrushes and toothpaste are now available. Please do not use human toothpaste formulas on your pet as they are not designed to be swallowed and may be toxic.</li>
          <li>Feed pets raw meaty bones or special dental diets. This can help reduce the accumulation of tartar.</li>
          <li>Use dental toys, enzymatic chews, or teeth cleaning biscuits, all of which may help keep the teeth clean.</li>
        </ul>
        <p
          class="text-justify"
        >Regular and frequent attention to your pet's teeth may avoid the need for a professional dental clean under anaesthetic, and will also improve your pet's overall health.</p>

        <h3 class="text-justify">What does a professional dental clean involve?</h3>
        <p
          class="text-justify"
        >It is the same as a scale and polish done by a dentist for us. However, unlike us, our pets won’t sit still or open their mouth to allow a comprehensive cleaning of their teeth. For this reason our pets need to have a general anaesthetic for a professional dental clean. Your pet will need to be assessed by one of our veterinarians. The degree of dental disease will be assessed to determine if extractions, antibiotics and anti-inflammatories will be required.</p>
        <p
          class="text-justify"
        >The assessment may also include a physical exam, blood tests and urine tests to ensure they are healthy prior to having an anaesthetic. Once anaesthetised, we can give the teeth a thorough cleaning using our specialised dental equipment. When your pet goes home we will also discuss methods of reducing dental disease in the future.</p>
        <p class="text-justify">
          <strong>If you have any questions about dental care or professional cleaning please do not hesitate to contact us.</strong>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'dentistry',
  components: {
    Breadcrumbs
  }
}
</script>