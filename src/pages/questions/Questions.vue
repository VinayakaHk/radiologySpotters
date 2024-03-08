<template>
  <q-page-container class="center-div">
    <q-stepper
      class="bg-dark"
      horizontal
      value="dsdsf"
      no-default-navigation
      modelValue="Block 1"
    >
      <q-step
        v-for="block in blocks"
        :key="block.name"
        :title="block.name"
        :name="block.name"
      >
        <div class="instructions-section" v-if="!showImageButtons">
          <p>
            You will be shown pictures of radiology spotters. You have to guess
            the answer and press the
            <span class="material-symbols-outlined"> check_circle </span> button
            if you've guessed it correctly, and the
            <span class="material-symbols-outlined"> cancel </span> button if
            you've guessed it incorrectly.
          </p>
          <p>Each block has 4 images.</p>

          <q-btn class="start-button" label="Start!" @click="startGame" />
        </div>
        <div id="image-buttons" v-if="showImageButtons">
          <Quiz
            :questions="block.questions"
            :blockId="blockId"
            :questionId="questionId"
          ></Quiz>
        </div>
      </q-step>
    </q-stepper>
  </q-page-container>
</template>

<script>
import { useQuestionsStore } from "../../store";
import Quiz from "../../components/Quiz.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    const question = useQuestionsStore();

    question
      .fetchBlocks()
      .then((blocks) => {
        useQuestionsStore().blocks = blocks;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    useQuestionsStore().blockId = parseInt(this.$route.params.blockId)
      ? parseInt(this.$route.params.blockId)
      : 0;
    console.log("this.blockId", this.blockId);

    if (parseInt(this.$route.params.questionId)) {
      useQuestionsStore().showImageButtons = true;
    }

    useQuestionsStore().questionId = parseInt(this.$route.params.questionId)
      ? parseInt(this.$route.params.questionId)
      : 0;
    console.log("this.questionId", this.questionId);
  },
  computed: {
    showImageButtons: {
      get() {
        return useQuestionsStore().showImageButtons;
      },
      set(value) {
        useQuestionsStore().showImageButtons = value;
      },
    },
    stepperValue() {
      return useQuestionsStore().stepperValue;
    },
    blocks() {
      return useQuestionsStore().blocks;
    },

    blockId() {
      return useQuestionsStore().blockId;
    },
    questionId() {
      return useQuestionsStore().questionId;
    },
  },
  methods: {
    startGame(blockId) {
      useQuestionsStore().startGame(blockId);
    },
    nextQuestion() {
      useQuestionsStore().nextQuestion();
    },
  },
  components: {
    Quiz,
  },
};
</script>
<style scoped>
.center-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 93vh;
}

.instructions-section {
  margin-top: 30px; /* Adjust spacing as needed */
  text-align: center;
  justify-content: center;
}

.start-button {
  background-color: rgb(225, 27, 225);
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

/* Add styles for the image and button section based on your design */
</style>
