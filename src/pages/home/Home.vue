<template>
  <div class="bg-dark text-white">
    <q-layout view="lHr LpR fFf">
      <q-header reveal class="bg-dark text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title v-if="$route.path !== '/'">
            Radiology Spotters
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        show-if-above
        v-model="leftDrawerOpen"
        side="left"
        bordered
        class="bg-dark text-white"
      >
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 150px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <router-link to="/" style="text-decoration: none">
              <q-item :active="true" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="home" />
                </q-item-section>

                <q-item-section> Home </q-item-section>
              </q-item>
            </router-link>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="school" />
              </q-item-section>

              <q-item-section> Education </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section> About Us </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="contact_page" />
              </q-item-section>

              <q-item-section> Contact Us </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <q-icon name="person" />
            </q-avatar>
            <div class="text-weight-bold">Guest</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container class="right-margin">
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import StartPage from "../start/StartPage.vue";
export default {
  components: { StartPage },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style scoped>
.right-margin {
  @media (min-width: 1024px) {
    margin-right: 25vw; /* Adjust the margin-left as needed */
  }
}
</style>
