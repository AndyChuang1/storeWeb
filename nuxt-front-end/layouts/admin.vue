<template>
  <div id="admin">
    <div class="container-fluid">
      <div class="row">
        <div class="admin-sidebar col-3">
          <sidebar></sidebar>
        </div>
        <div class="admin-content col-9">
          <nuxt></nuxt>
        </div>
      </div>
      <mainfooter></mainfooter>
    </div>
  </div>
</template>
<script>
import mainfooter from "~/components/footer.vue";
import sidebar from "~/components/sidebar.vue"

export default {
  components: {
    mainfooter,
    sidebar
  },
  data() {
    return {
      active: true
    };
  }
};
</script>
<style lang="scss">
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
}
body {
  background-color: #eaebeb;
}

</style>
