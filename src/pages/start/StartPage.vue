<template>
  <q-page-container class="ma-o pa-0 center-div">
    <div class="stacked-elements">
      <q-img src="/images/RadiologyMain.png" height="300px" width="400px">
      </q-img>
      <q-btn class="start-button" @click="startButton()">
        <q-icon class="material-symbols-outlined" name="play_arrow"> </q-icon>
      </q-btn>
    </div>
  </q-page-container>
</template>
<script>
import anime from "animejs/lib/anime.es.js";

export default {
  mounted() {
    anime.timeline().add({
      targets: ".stacked-elements",
      translateY: ["-10%", 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeInOutCubic",
      delay: 100,
    });
  },

  methods: {
    startButton() {
      const startButton = document.querySelector(".start-button");
      const animation = anime({
        targets: startButton,
        duration: 500,
        easing: "easeInBounce",
        scale: 1.5,
        complete: () => {
          // Remove event listener to prevent duplicate prevention
          startButton.removeEventListener("click", (event) =>
            event.preventDefault()
          );
          this.$router.push({ name: "questionsNoParams" });
        },
      });
    },
  },
};
</script>
<style scoped>
.center-div {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
}
.stacked-elements {
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
}

.start-button {
  background-color: rgb(225, 27, 225);
  color: white;
  font-size: 36px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
}
</style>
