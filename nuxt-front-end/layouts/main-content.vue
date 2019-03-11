<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="main-background col-12">
          <mainbanner></mainbanner>
          <div class="row">
            <nuxt/>
          </div>
        </div>
      </div>
      <mainfooter></mainfooter>
    </div>
  </div>
</template>
<script>
import navbar from "~/components/navbar.vue";
import mainfooter from "~/components/footer.vue";
import mainbanner from "~/components/mainBanner.vue";

export default {
  components: {
    navbar,
    mainfooter,
    mainbanner
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #eaebeb;
  height: 100%;
}
body {
  background-color: #eaebeb;
  position: relative;
  min-height: 100%;
  /* padding-bottom: 3rem; */
}
</style>
