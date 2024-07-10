<template >
  <the-navbar />
  <the-sidebar />
  <div class="container with-nav">
    <app-message />
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessage from "../components/ui/AppMessage.vue";
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
export default {
  components: {AppMessage,TheNavbar, TheSidebar}
}
</script>

<style >
</style>