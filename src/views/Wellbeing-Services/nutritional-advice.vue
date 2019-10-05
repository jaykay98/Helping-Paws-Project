<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Wellbeing Services" page="Nutritional Advice" />
        <b-img center src="@/assets/banner-cats.jpg" fluid alt="Cat Banner"></b-img>
        <h1>Nutritional Advice</h1>
        <p
          class="text-justify"
        >Along with regular exercise and veterinary care, careful nutrition is the best way you can contribute to your pet's prolonged good health.</p>
        <p class="text-justify">These are the basic nutrients every pet needs:</p>
        <ul class="text-justify">
          <li>Water is the most essential nutrient in any diet. Your pet's body is made up of approximately 70% water and will quickly perish without it. Ensure your pet can access fresh, clean water at all times.</li>
          <li>Carbohydrates supply energy and come from sugars, starch, and fibre from plant sources. Carbohydrates help energize the brain and muscles, making your pet bright and active.</li>
          <li>Fats also supply energy and in the right amounts help build strong cells and promote nutrient absorption. Too much fat however, can lead to such obesity-related health problems such as diabetes, heart disease and osteoarthritis.</li>
          <li>Proteins are required for a healthy coat, skin, and nails. Your pet's body uses the amino acids in proteins to make enzymes and hormones in the blood stream and to maintain a healthy immune system. Proteins can come from plant and meat sources, but cats and dogs need a high-quality animal protein.</li>
          <li>Vitamins and minerals help regulate many body systems. For example, your pet needs the minerals calcium and phosphorous for strong bones. Antioxidant vitamins like vitamin E and C help boost your pet's immune system during times of stress.</li>
        </ul>

        <h3 class="text-justify">How do you make sure your pet's diet is healthy?</h3>
        <p class="text-justify">We strongly recommend that you:</p>
        <ul class="text-justify">
          <li>Feed premium pet foods. Premium foods offer high-quality ingredients, are made by companies specialising in nutritional research, and show a solid track record of quality and palatability. Feeding generic pet foods may lead to obesity, irregular bowel movements, or excess intestinal gas.</li>
          <li>Make sure the food is fresh. When you purchase pet food, check for freshness and purchase only the amount necessary for your pet. Store pet food in a cool, dry place and keep it tightly closed. Discard uneaten food and always place fresh food in a clean bowl. In general, hard food (or "kibble") is preferred for maintaining dental health and minimizing tartar build-up. Soft, canned food tends to be more palatable and can be stored for longer.</li>
          <li>Feed the right amount. Ask us or check the label for how much to feed according to your pet's ideal weight (not necessarily the same as their current weight). Avoid feeding pets as much as they want or feeding a large amount at one time. Doing so can lead to obesity, gastrointestinal upset, or even bloat, a life threatening condition.</li>
          <li>Maintain a daily routine. A regular schedule will help your pet keep normal bowel movements and avoid indoor accidents. Younger pets need to be fed more frequently, as they are usually more energetic and burn more calories.</li>
          <li>Avoid "people" food. Your pet's digestive system is simpler than yours and can be easily upset by changes. Feeding table scraps will result in an unbalanced diet, can cause stomach upsets or even life-threatening inflammation of the pancreas.</li>
        </ul>

        <h3 class="text-justify">Life Cycle Feeding</h3>
        <p
          class="text-justify"
        >Your pet's nutritional requirements will change as they age. Puppies need puppy food because it is higher in energy, calcium and protein, but feeding it to an adult dog can lead to obesity. Likewise, older pets need diets restricted in fat and supplemented with fibre for their optimum health. Many premium senior diets also contain additives to assist in the management of arthritis and can make your pet more comfortable.</p>
        <p
          class="text-justify"
        >Please give us a call to discuss your pet’s nutritional needs. We will tailor a diet specifically for your pet that will give them the optimum quality and length of life.</p>
        <p class="text-justify">
          <strong>Remember, you are what you eat, and so is your pet!</strong>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'nutritionaladvice',
  components: {
    Breadcrumbs
  }
}
</script>
