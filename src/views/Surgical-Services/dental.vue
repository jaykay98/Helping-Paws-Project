<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Surgical Services" page="Dental" />
        <b-img center src="@/assets/banner-cats.jpg" fluid alt="Cat Banner"></b-img>
        <h1>Dental</h1>
        <p class="text-justify">Just like humans, our pets are vulnerable to gum disease and problems with their teeth. Alarmingly, 80% of dogs and 70% of cats suffer from some form of dental disease by the age of three.</p>
        <p class="text-justify">When there is a build up of bacteria, food particles and saliva on the teeth plaque is formed. Plaque sticks to the tooth surface above and below the gum line and if not removed will calcify into tartar (also known as calculus). This appears as a yellow-brown material on the teeth. Over time the bacterial infection in tartar causes irreversible changes to occur.</p>
        <p class="text-justify">These include the destruction of supportive tissues and bone, resulting in red gums, bad breath and loosening of teeth. This same bacterial infection is also a source of infection for the rest of the body (such as the kidney, liver and heart) and can make your pet seriously ill. Ultimately, dental disease results in many pets unnecessarily suffering tooth loss, gum infection and pain. It also has the potential to shorten your pet’s lifespan.</p>

        <h3 class="text-justify">What if my pet has dental disease?</h3>
        <p class="text-justify">Firstly, you should have your pet's teeth examined by one of our veterinarians on a regular basis and if necessary, follow up with a professional dental clean. Your pet needs to be anaesthetised to carry out a thorough dental examination, and to clean all teeth without distressing them. Once anaesthetised, a complete dental examination is carried out. This process involves charting all present teeth and evaluating their condition, including the degree of tartar, gingivitis (gum inflammation) and any pockets in the gums around the teeth.</p>
        <p class="text-justify">Our veterinarians will then remove the tartar above the gumline using a special ultrasonic scaler, just like a dentist uses for our teeth. The teeth are then polished using a dental polisher and specialised fine-grade paste. If the dental disease is not severe, the procedure will end here. However, if certain teeth are so severely affected they cannot be saved, extractions will be necessary. In some cases, gum surgery is required to close the holes left behind when a tooth is extracted, and dissolvable stitches are used for this procedure.</p>
        <p class="text-justify">Once all dental work is completed, your pet may be given an antibiotic and an anti-inflammatory injection, the anaesthetic gas is turned off, and your pet is allowed to wake up. Pets are generally able to go home on the same day.</p>
        <p class="text-justify">Following a professional dental clean, a plan needs to be implemented to minimise build up of tartar again, and will depend on the severity of your pet’s dental disease.  This may involve regular tooth brushing, feeding raw meaty bones and/or a special diet. It is recommended that all pets be examined 6 months after dental cleaning to determine the effectiveness of your dental care routine.</p>

        <h3 class="text-justify">How can I minimise ongoing dental disease?</h3>
        <p class="text-justify">Long-term control and prevention of dental disease requires regular home care. The best way to begin this is to acclimatise your pet from a young age. Dental home care may include:</p>
        <ul class="text-justify">
          <li><strong>Brushing teeth daily</strong> – just like us! This is the best form of dental hygiene.  Pet toothbrushes and toothpaste are now available. Please do not use human toothpaste formulas as they are not designed to be swallowed and may be toxic to your pet.</li>
          <li><strong>Feed pets raw meaty bones or special dental diets.</strong> This can help reduce the accumulation of tartar.</li>
          <li><strong>Use dental toys, enzymatic chews, or teeth cleaning biscuits, </strong>all of which may help keep the teeth clean.</li>
        </ul>
        <p class="text-justify">Regular and frequent attention to your pet's teeth may avoid the need for a professional dental clean under anaesthetic, and will also improve your pet's overall health.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'dental',
  components: {
    Breadcrumbs
  }
}
</script>