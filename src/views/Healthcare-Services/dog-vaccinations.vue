<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Dog Vaccination" />
        <b-img center src="@/assets/banner-dogs.jpg" fluid alt="Dog Banner"></b-img>
        <h1>Dog Vaccination</h1>
        <p class="text-justify">Vaccination has revolutionised control of infectious disease in our pets. It is essential that all pets are adequately vaccinated to help protect the pet population as a whole. Responsible pet care requires puppies to be given their initial course of vaccinations, but this cannot protect them for the rest of their lives. Adult dogs require regular vaccination to maintain immunity against disease.</p>

        <h3 class="text-justify">Puppy Vaccination</h3>
        <p class="text-justify">Puppies are ‘temporarily’ protected against many diseases by antibodies received through their mother’s milk. These maternal antibodies decline in the first few months of their lives, however until they drop sufficiently they can also neutralise vaccines. This is why a series of vaccinations is necessary in a puppy.</p>

        <h3 class="text-justify">Adult Dog Vaccination</h3>
        <p class="text-justify">The immunity from puppy vaccination weakens over time and your pet can again become susceptible to disease. Annual health checks and booster vaccinations, as required, will provide the best protection for the life of your pet.</p>

        <h3 class="text-justify">After Vaccination Care</h3>
        <p class="text-justify">Following vaccination your dog may be off-colour for a day or two, or have some slight swelling or tenderness at the injection site. Access to food and water and a comfortable area to rest are usually all that is required for a quick recovery. However, if the response seems more severe, you should contact us for advice.</p>
        <p class="text-justify">Please give us a call to discuss a suitable vaccination regime for your pet puppy or dog.</p>

        <h2 class="text-justify">INFECTIOUS DISEASES OF DOGS THAT WE VACCINATE AGAINST</h2>
        <h3 class="text-justify">Canine Parvovirus</h3>
        <p class="text-justify">Canine parvovirus is a disease that affects dogs of all ages but is most serious in young pups and older dogs. The virus attacks the intestines causing bloodstained diarrhoea, uncontrollable vomiting and severe abdominal pain. Dogs often die from severe dehydration despite intensive veterinary care.</p>
        <p class="text-justify">It is not necessary to have direct contact with other dogs for the disease to be spread. The virus is so persistent that the infected dog’s environment needs to be cleaned with a potent disinfectant to prevent spread to other dogs. Outbreaks occur regularly throughout Australia, especially in summer.</p>

        <h3 class="text-justify">Canine Distemper</h3>
        <p class="text-justify">Canine distemper is a highly contagious viral disease that can affect dogs of any age with young puppies being at highest risk.</p>
        <p class="text-justify">Symptoms vary but can include fever, coughing, sneezing, nasal discharge, vomiting, diarrhoea, loss of appetite and depression. Muscle tremors, fits and paralysis usually occur later in the disease. Treatment is usually ineffective and the recovery rate very low. Dogs that do recover may have permanent brain damage.</p>

        <h3 class="text-justify">Canine Hepatitis</h3>
        <p class="text-justify">Canine hepatitis is a viral disease which, like distemper is extremely contagious and often fatal. Dogs of any age can become infected, however severe cases are rare in dogs over two years of age.</p>
        <p class="text-justify">Symptoms include high fever, depression, loss of appetite, vomiting, diarrhoea and acute abdominal pain. In severe cases death can occur within 24 to 36 hours. Dogs that recover may develop long term liver and kidney problems and can act as carriers spreading the disease to other dogs for many months.</p>

        <h3 class="text-justify">Canine Cough</h3>
        <p class="text-justify">Canine cough is a condition produced by several highly infectious diseases, which can be easily spread wherever dogs congregate, such as parks, shows, obedience schools and boarding kennels. Among the infectious agents associated with canine cough is the bacterium known as Bordetella bronchiseptica and the canine viruses parainfluenza, adenovirus type 2 and distemper.</p>
        <p class="text-justify">Affected dogs have a dry hacking cough which can persist for several weeks. It is distressing for pet dogs and their owners. It is a major problem for working and sporting dogs. Pneumonia can also be a consequence of infection.</p>

        <h3 class="text-justify">Canine Coronavirus</h3>
        <p class="text-justify">Canine coronavirus is another contagious virus and causes depression, loss of appetite, vomiting and diarrhoea especially in young dogs. Diarrhoea may last for several days in some cases. Although most dogs will recover with treatment, coronavirus has the potential to be fatal, especially if other infectious agents such as parvovirus are present.</p>

        <h3 class="text-justify">Canine Leptospirosis</h3>
        <p class="text-justify">Canine leptospirosis is a serious disease risk in some areas and can cause high death rates. It is spread by the urine of rats and is usually transmitted to dogs by contaminated food and water, or by rat bites.</p>
        <p class="text-justify">There’s an increased risk where high rat populations exist such as rubbish dumps or green sugar cane cutting areas. Incidence can also increase after long periods of wet weather, when rat populations are forced to move or concentrate. Leptospirosis is an animal disease that can be passed to humans who may then suffer a persisting “flu like” illness.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'dogvaccination',
  components: {
    Breadcrumbs
  }
}
</script>