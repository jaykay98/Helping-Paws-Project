<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Radiography" />
        <b-img center src="@/assets/banner-dogs.jpg" fluid alt="Dog Banner"></b-img>
        <h1>Radiography</h1>
        <p class="text-justify">Our hospital is fully equipped to take radiographs (often called X-rays) of your pet.  Our veterinarians will discuss your pet’s case and conduct a thorough physical examination to determine if your pet requires radiographs. Radiographs are a very important tool to help us diagnose diseases in animals, particularly for conditions involving bones, the chest or abdomen.</p>

        <h3 class="text-justify">What happens to my pet when it is booked in for radiographs?</h3>
        <p class="text-justify">Most of our patients are admitted into hospital for the day to have radiographs taken, unless it is an emergency and we’ll take them immediately. We ask that you bring your pet in unfed on the morning of admission, as they will most likely be sedated or anaesthetised to allow us to take the best quality radiographs possible.</p>
        <p class="text-justify">Once the radiographs have been taken we will give you a call or book an appointment for our veterinarians to show you the images and to discuss the diagnosis and treatment plan for your pet.</p>

        <h3 class="text-justify">Why do pets need to be sedated or anaesthetised to have radiographs taken?</h3>
        <p class="text-justify">When we have radiographs (X-rays) taken the radiographer asks us to keep perfectly still, often in unnatural positions.  Most pets would never lie still enough, in the correct position, for us to take good quality radiographs required to diagnose their condition. Sedation and anaesthesia allow us to get the most useful radiographs possible.</p>

        <h3 class="text-justify">How are radiographs made?</h3>
        <p class="text-justify">Taking a radiograph is very similar to taking a photo, except we use X-rays instead of light rays. The usefulness of radiography as a diagnostic tool is based upon the ability of X-rays to penetrate matter. Different tissues in the body absorb X-rays to differing degrees. Of all the tissues in the body, bone absorbs the most X-rays. This is the reason that bone appears white on a radiograph. Soft tissues, such as lungs or organs, absorb some but not all of the X-rays, so soft tissues appear on a radiograph in different shades of grey.  We will demonstrate and explain the radiographs when your pet goes home.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'radiography',
  components: {
    Breadcrumbs
  }
}
</script>