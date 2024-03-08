<template>
  <div class="bg-dark text-white">
    <q-layout view="lHr LpR fFf">
      <Header></Header>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import { ref } from "vue";
import StartPage from "../start/StartPage.vue";
export default {
  components: { StartPage, Header },
  // setup() {
  //   const leftDrawerOpen = ref(false);

  //   return {
  //     leftDrawerOpen,
  //     toggleLeftDrawer() {
  //       leftDrawerOpen.value = !leftDrawerOpen.value;
  //     },
  //   };
  // },
};
</script>
