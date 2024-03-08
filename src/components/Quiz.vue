<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      animated
      class="bg-dark stepper-wrapper"
    >
      <q-step
        v-for="question in questions"
        :key="question.id"
        :name="question.id"
        :title="question.name"
        :done="step > question.id"
      >
        <div class="question-image-container">
          <img
            :src="question.questionImage"
            alt="Question Image"
            class="question-image"
          />
        </div>
        <div class="question-image-container mt-4">
          <p v-if="showDetails[question.id]">{{ question.details }}</p>
        </div>
        <div class="question-actions">
          <q-icon
            v-if="!showDetails[question.id]"
            class="cursor-pointer"
            size="2rem"
            name="check"
            @click="toggleDetails(question.id)"
          />
          <q-icon
            v-if="!showDetails[question.id]"
            class="cursor-pointer"
            size="2rem"
            name="close"
            @click="toggleDetails(question.id)"
          />
        </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            v-if="step > 0"
            flat
            @click="$refs.stepper.previous()"
            :label="''"
            icon="arrow_back"
            class="q-ml-sm"
          />
          <q-btn
            @click="$refs.stepper.next()"
            :label="step === questions.length ? '' : ''"
            icon="arrow_forward"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["questions"],
  setup() {
    const step = ref(0);
    const showDetails = ref({});

    const toggleDetails = (id) => {
      showDetails.value[id] = !showDetails.value[id];
    };

    return {
      step,
      showDetails,
      toggleDetails,
    };
  },
};
</script>

<style scoped>
.stepper-wrapper {
  max-width: 800px; /* Adjust the maximum width of the stepper as needed */
  margin: 0 auto; /* Center the stepper */
}

.step-item {
  width: 100%; /* Ensure each step takes full width */
}

.question-actions {
  display: flex;
  justify-content: space-around;
}

.question-image-container {
  display: flex; /* Use flexbox for center alignment */
  justify-content: center; /* Center align the content horizontally */
}

.question-image {
  max-width: 100%; /* Set the maximum width of the image */
  height: auto; /* Ensure the image maintains aspect ratio */
}

@media screen and (min-width: 600px) {
  /* Adjust image size for larger screens */
  .question-image {
    max-width: 50%; /* Set the maximum width to 50% of the screen */
  }
}
</style>
