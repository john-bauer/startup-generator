<template>
  <GithubCorner />
  <div class="min-h-screen bg-white flex flex-col justify-between">
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import GithubCorner from "@/components/GithubCorner.vue";
import Footer from "@/components/Footer.vue";
// import firebase from "@/services/firebase.js";
import { signInAnonymously } from "@/services/authService.js";

export default {
  name: "App",
  components: {
    GithubCorner,
    Footer,
  },
  // mounted() {
    
  // },
  beforeMount() {
    signInAnonymously();
  },
};
</script>

<style lang="scss">
</style>
