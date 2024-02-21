<template>
  <div>
    <p>blockId {{ blockId }}</p>
    <br />
    <p>questionId {{ questionId }}</p>
  </div>
</template>

<script>
export default {
  props: ["blockId", "questionId"],

  created() {
    if (!this.blockId) this.blockId = parseInt(this.$route.params.blockId);
    if (!this.questionId)
      this.questionId = parseInt(this.$route.params.questionId);
  },
};
</script>
