<template>
  <q-header class="bg-dark text-white header">
    <div class="flex justify-content-evenly">
      <router-link to="/" style="text-decoration: none">
        <div class="row">
          <div class="col-3"><q-icon name="home" /></div>
          <div class="col-9"><div>Home</div></div>
        </div>
      </router-link>

      <div class="row">
        <div class="col-3"><q-icon name="school" /></div>
        <div class="col-9">
          <div>Education</div>
        </div>
      </div>

      <div class="row">
        <div class="col-3"><q-icon name="info" /></div>
        <div class="col-9">
          <div>About Us</div>
        </div>
      </div>

      <div class="row">
        <div class="col-3"><q-icon name="contact_page" /></div>

        <div class="col-9">
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  </q-header>
</template>

<style scoped>
.header {
  margin: 12px;
}
</style>
