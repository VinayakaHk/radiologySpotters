<script setup>
import { useCart } from "/src/store/cart.js";
const cart = useCart();
</script>
<template><div>topnavbar</div></template>

<style scoped></style>

<script>
import { mapState } from "pinia";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(useCart, {
      count: "count",
    }),
  },

  methods: {},
};
</script>
