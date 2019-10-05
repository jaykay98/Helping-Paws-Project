<template>
  <b-container>
    <b-row>
      <b-col>
        <Breadcrumbs service="Healthcare Services" page="Ultrasonography" />
        <b-img center src="@/assets/banner-cats.jpg" fluid alt="Cat Banner"></b-img>
        <h1>Ultrasonography</h1>
        <p
          class="text-justify"
        >Our hospital is fully equipped with an ultrasound scanner to assist evaluation of your pet’s condition if required. Our veterinarians will discuss your pet’s case and conduct a thorough physical examination to determine if your pet requires an ultrasound examination. An ultrasound scan is a very important tool to help us diagnose diseases in animals, particularly for conditions involving soft tissues, such as those found in the abdomen, or the heart.</p>

        <h3 class="text-justify">What is an ultrasound scan?</h3>
        <p
          class="text-justify"
        >Ultrasound scanning is a painless procedure that uses high frequency sound waves (inaudible to humans) to produce images of structures within the body. When sound waves are directed into the body, some are absorbed by body tissues and others bounce back. The sound waves that bounce back are measured by the ultrasound machine and are transformed into an image on a screen. The images can be printed or recorded. Extensive training is required in order to correctly use this equipment and interpret these images.</p>
        <p
          class="text-justify"
        >Ultrasound scans are most useful for looking at soft or fluid-filled organs; like the liver, kidney, bladder and heart. It is less effective for examining bones or air-filled organs, like the lungs.</p>

        <h3 class="text-justify">What happens to my pet when it is booked in for an ultrasound scan?</h3>
        <p
          class="text-justify"
        >Most of our patients are admitted into hospital for the day to have an ultrasound scan done, unless it is an emergency and we’ll do it immediately. We ask that you bring your pet in unfed on the morning of admission, as they may need to be sedated to allow us to do the best scan possible.</p>
        <p
          class="text-justify"
        >The area to be scanned will be shaved, so your pet may look different when they come home. No pain is felt during an ultrasound exam, however, discomfort from pressure may be experienced. Sedatives may be necessary for those animals that won’t stay still or are uncomfortable. During the scan a water-soluble gel is applied over the clipped area to be examined and a transducer (probe) is placed on the skin.</p>
        <p
          class="text-justify"
        >Once the scan has been done we will give you a call or book an appointment for our veterinarians to show you the images and to discuss the diagnosis and treatment plan for your pet.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'ultrasonography',
  components: {
    Breadcrumbs
  }
}
</script>