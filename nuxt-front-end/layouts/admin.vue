<template>
  <no-ssr>
    <div id="admin">
      <div class="container-fluid">
        <div class="row">
          <div class="admin-sidebar col-lg-2">
            <sidebar></sidebar>
          </div>
          <div class="admin-content col-lg-10 ">
            <div class="container">
              <nuxt></nuxt>
            </div>
          </div>
        </div>
        <mainfooter></mainfooter>
      </div>
    </div>
  </no-ssr>
</template>
<script>
import mainfooter from "~/components/footer.vue";
import sidebar from "~/components/sidebar.vue";

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
  font-family: "Times New Roman", KaiTi, STKaiti, DFKai-sb;
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
.col {
  width: 0%;
}
.admin-sidebar {
  height: 100vh;
}
</style>
