<template>
  <no-ssr>
    <div id="admin">
      <div class="container-fluid">
        <div class="row">
          <div class="admin-sidebar">
            <sidebar :sidebarActive="active"></sidebar>
          </div>
          <div class="admin-content col-12 col-lg-12">
            <div class="row justify-content-end">
              <vs-button
                color="dark"
                type="line"
                icon="menu"
                @click="sideBarToggle"
                >菜單</vs-button
              >
            </div>
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
  watch: {
    $route(to) {
      this.active = false;
    }
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    sideBarToggle() {
      this.active = !this.active;
    }
  },
  head() {
    return {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]
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
