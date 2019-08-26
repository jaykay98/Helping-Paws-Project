<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Cat Vaccination" />
        <b-img center src="@/assets/cat-vaccinated.jpg" fluid alt="A Cat being vaccinated with a needle"></b-img>
        <h1>Cat Vaccination</h1>
        <p class="text-justify">Vaccination has revolutionised control of infectious disease in our pets. It is essential that all pets are adequately vaccinated to help protect the pet population as a whole. Responsible pet care requires kittens to be given their initial course of vaccinations, but this cannot protect them for the rest of their lives. Adult cats require regular vaccination to maintain immunity against disease.</p>

        <h3 class="text-justify">Kitten Vaccination</h3>
        <p class="text-justify">Kittens are ‘temporarily’ protected against many diseases by antibodies received through their mother’s milk. These maternal antibodies decline in the first couple of months of their lives, however until they drop sufficiently they can also neutralise vaccines. This is why a series of vaccinations is necessary for a kitten.</p>

        <h3 class="text-justify">Adult Cat Vaccination</h3>
        <p class="text-justify">The immunity from kitten vaccination weakens over time and your pet can again become susceptible to disease. Annual health checks and booster vaccinations will provide the best protection for the life of your pet.</p>

        <h3 class="text-justify">A Guide to Cat Vaccination</h3>
        <p class="text-justify">Initial vaccination programs should provide at least two vaccinations 3-4 weeks apart against some or all of the following; feline panleucopenia, calicivirus, rhinotracheitis, Chlamydia and leukaemia virus at or after 8 weeks of age. Three vaccinations, 2-4 weeks apart, against feline immunodeficiency virus (FIV) are recommended at or after 8 weeks of age.</p>

        <h3 class="text-justify">After Vaccination Care</h3>
        <p class="text-justify">Following vaccination your cat may be off-colour for a day or two, or have some slight swelling or tenderness at the injection site. Access to food and water and a comfortable area to rest are usually all that is required for a quick recovery. However, if the response seems more severe, you should contact us for advice.</p>
        <p class="text-justify">Please give us a call to discuss a suitable vaccination regime for your pet kitten or cat.</p>

        <h2 class="text-justify">INFECTIOUS DISEASES OF CATS THAT WE VACCINATE AGAINST</h2>
        <h3 class="text-justify">Feline Enteritis (also known as Feline Panleucopenia)</h3>
        <p class="text-justify">It is very contagious and the death rate is high, especially under 12 months of age. Pregnant cats may lose their young or give birth to kittens with abnormalities, quite often with brain damage. Symptoms are depression, loss of appetite, uncontrollable vomiting and diarrhoea, often with blood and severe abdominal pain.</p>
        <p class="text-justify">The virus spreads so easily that heavily contaminated areas may need cleaning with a special disinfectant. Cats that do recover may continue to carry the virus for some time and infect other cats.</p>

        <h3 class="text-justify">Feline Respiratory Disease (Catflu)</h3>
        <p class="text-justify">It is caused in 90% of cases by feline herpesvirus (feline rhinotracheitis) and/or feline calicivirus.</p>
        <p class="text-justify">Feline respiratory disease affects cats of all ages, especially young kittens, Siamese and Burmese cats. It is highly contagious and causes sneezing, coughing, runny eyes, nasal discharge, loss of appetite and tongue ulcers.</p>
        <p class="text-justify">Fortunately, the death rate is low except in young kittens, but the disease is distressing and may persist for several weeks. Recovered cats can continue to carry and spread the infection for long periods, and can show signs of the disease again if they become stressed.</p>

        <h3 class="text-justify">Chlamydia (also known as Chlamydophila)</h3>
        <p class="text-justify">Feline Chlamydia causes a severe persistent conjunctivitis in up to 30% of cats.</p>
        <p class="text-justify">Kittens are more severely affected by Chlamydia when also infected with “Cat Flu”, and Chlamydia can be shed for many months. Vaccination against cat flu and Chlamydia helps protects against clinical disease.</p>

        <h3 class="text-justify">Feline Leukaemia (FeLV)</h3>
        <p class="text-justify">Feline Leukaemia is a serious disease of cats caused by feline leukaemia virus.</p>
        <p class="text-justify">The virus attacks the immune system and may be associated with lack of appetite, weight loss and apathy, pale or yellow mucous membranes, vomiting, diarrhoea, reproductive problems, increased susceptibility to other infections, leukaemia and tumours. Many cats may be infected and show no signs at all.</p>
        <p class="text-justify">About one third of infected cats remain chronically infected and may shed virus in their saliva, tears, nasal secretions and urine. The disease is then spread to uninfected cats by mutual grooming, fighting, sneezing or even flea bites.</p>

        <h3 class="text-justify">Feline Immunodeficiency Virus (FIV)</h3>
        <p class="text-justify">Feline AIDS is a disease caused by infection with feline immunodeficiency virus (FIV) and affects the cat’s immune system. Their natural defence against attack by other diseases may be seriously affected, much in the same way as human AIDS.</p>
        <p class="text-justify">This disease is not transmissible to humans.</p>
        <p class="text-justify">
          FIV is almost always transmitted by bites from infected cats. The virus that causes the disease is present in saliva.
          While some infected cats show no sign of disease, others may display initial symptoms such as fever, loss of appetite, diarrhoea, lethargy and swollen lymph nodes.
        </p>
        <p class="text-justify">As the disease progresses, symptoms may occur such as weight loss, sores in and around the mouth, eye lesions, poor coat and chronic infections.</p>
        <p class="text-justify">Eventually, the immune system becomes too weak to fight off other infections and diseases. As a result, the cat may die from one of these subsequent infections.</p>
        <p class="text-justify">Unfortunately in Australia, a lot of cats are infected with this virus.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'catvaccinations',
  components: {
    Breadcrumbs
  }
}
</script>