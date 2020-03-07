<template>
  <div>
    <navbar></navbar>
    <nuxt />
    <mainfooter></mainfooter>
  </div>
</template>
<script>
import navbar from "~/components/navbar.vue";
import mainfooter from "~/components/footer.vue";

export default {
  components: {
    navbar,
    mainfooter
  }
};
</script>
<style>
html {
  font-family: STKaiti, DFKai-sb;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #eaebeb;
}
body {
  background-color: #eaebeb;
}
</style>
