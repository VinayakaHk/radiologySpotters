import { defineStore } from "pinia";
import axios from "axios";
export const useQuestionsStore = defineStore({
  id: "questions",
  state: () => ({
    showImageButtons: false,
    stepperValue: "Block 1",
    blockId: 0,
    questionId: 0,
    blocks: [],
  }),
  actions: {
    async fetchBlocks() {
      try {
        const response = await axios.get("/questions.json");
        const blocks = response.data.map((block) => {
          const questions = Object.values(block)[0];
          return {
            id: questions.id,
            name: questions.name,
            questions: Object.values(questions)
              .filter((item) => item.hasOwnProperty("id"))
              .map((question) => ({
                id: question.id,
                name: question.name,
                questionImage: question.questionImage,
                answer: question.answer,
                details: question.details,
              })),
          };
        });
        this.blocks = blocks;
        return blocks;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // rethrow the error to propagate it to the caller
      }
    },
    startGame(blockId) {
      this.showImageButtons = true;
      this.stepperValue = `Block ${blockId}`;
      this.blockId = blockId;
    },
    nextQuestion() {
      this.questionId++;
      // Check if reached the last question in the block, reset if needed
      if (this.questionId > 4) {
        this.questionId = 1;
        // Move to the next block
        const nextBlockIndex =
          this.blocks.findIndex((block) => block.id === this.blockId) + 1;
        if (nextBlockIndex < this.blocks.length) {
          this.blockId = this.blocks[nextBlockIndex].id;
          this.stepperValue = `Block ${this.blockId}`;
        } else {
          // Handle scenario when all blocks are completed
          // You can add logic here
        }
      }
    },
    resetGame() {
      this.showImageButtons = false;
      this.stepperValue = "Block 1";
      this.blockId = 1;
      this.questionId = 1;
    },
  },
});
