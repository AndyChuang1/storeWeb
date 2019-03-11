<template>
  <div>
    <h1>Admin page</h1>
    <vs-alert
      active="true"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</vs-alert>
  </div>
</template>
<script>
export default {
  name: "admin",
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="scss" scoped>
</style>

