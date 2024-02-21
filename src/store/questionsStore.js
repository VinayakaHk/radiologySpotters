import { defineStore } from "pinia";

export const useQuestionsStore = defineStore({
  id: "questions",
  state: () => ({
    showImageButtons: false,
    stepperValue: "Block 1",
    blockId: 1,
    questionId: 1,
    blocks: [
      {
        id: 1,
        name: "Block 1",
        questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      },
      {
        id: 2,
        name: "Block 2",
        questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      },
      {
        id: 3,
        name: "Block 3",
        questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      },
      {
        id: 4,
        name: "Block 4",
        questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      },
    ],
  }),
  actions: {
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
