<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Health Checks" />
        <b-img center src="@/assets/dog-banner-3.jpg" fluid alt="Dog being diagnosed with a Stethoscope"></b-img>
        <h1>Health Checks</h1>
        <p class="text-justify">
          Pets, on average, age five to eight times faster than humans. By age two,
          most pets have already reached adulthood. At age four,
          many are entering middle age. By age seven, many dogs, particularly
          larger breeds, are entering their senior years.
        </p>
        <p class="text-justify">Because pets age so rapidly, major health changes can occur in a short amount of time. The risk of cancer, diabetes, obesity,arthritis, heart disease and other serious conditions all increase with age.</p>
        <p class="text-justify">
          Today’s pets are living longer than ever, chances are that many may experience a potentially serious illness during their lifetime. Annual health checks can help your veterinarian diagnose, treat or even prevent problems before they become life-threatening.
          They’re also a great opportunity to ask us about nutrition, behaviour or any other issues.
        </p>
        <p class="text-justify">Call us today to book a health check for your pet with one of our vets.</p>

        <h3 class="text-justify">HEALTH CHECK LIST</h3>
        <p class="text-justify">The most important annual health screenings for dogs and cats:</p>
        <ul class="text-justify">
          <li>Vaccinations</li>
          <li>Parasite check</li>
          <li>Heart check</li>
          <li>Dental health</li>
          <li>Blood test</li>
          <li>Chemistry panel</li>
          <li>Urinalysis</li>
        </ul>

        <h3 class="text-justify">Additional exams for senior dogs (7+ years)</h3>
        <ul class="text-justify">
          <li>Osteoarthritis check</li>
          <li>Chest radiograph</li>
          <li>Thyroid check</li>
        </ul>

        <h3 class="text-justify">Additional exams for senior cats (7+ years)</h3>
        <ul class="text-justify">
          <li>Osteoarthritis check</li>
          <li>Renal disease screen</li>
          <li>Thyroid check</li>
          <li>Blood pressure check</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'healthchecks',
  components: {
    Breadcrumbs
  }
}
</script>