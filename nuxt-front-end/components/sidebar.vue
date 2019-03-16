<template>
  <div class="sidebar">
    <div id="parentx">
      <vs-sidebar
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
        hidden-background
      >
        <div class="header-sidebar" slot="header">
          <vs-avatar size="70px" color="#FFFFFF" :src="favicon" />

          <h4>Hello
          </h4>
        </div>

        <vs-sidebar-item index="1" icon="question_answer" to="/admin">商品新增修改</vs-sidebar-item>

        <vs-sidebar-item index="2" icon="gavel" to="/admin/orderlist">訂單查詢</vs-sidebar-item>

        <vs-divider icon="person" position="left">User</vs-divider>

        <vs-sidebar-item index="3" icon="verified_user">Configurations</vs-sidebar-item>
        <vs-sidebar-item index="4" icon="account_box">Profile</vs-sidebar-item>

        <div class="footer-sidebar" slot="footer">
          <vs-button icon="reply" color="danger" type="flat" @click="logout" href='/login'>log out</vs-button>
        </div>
      </vs-sidebar>
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      active: true,
      favicon:require('../assets/favicon.png')
    };
  },
  methods:{
    logout(){
      this.$store.dispatch('auth/logout');
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
#parentx {
  overflow: hidden;
  height: 500px;
  position: relative;
}
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    > button {
      margin-left: 10px;
    }
  }
}
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
.vs-sidebar--background {
  position: relative !important;
}
</style>

