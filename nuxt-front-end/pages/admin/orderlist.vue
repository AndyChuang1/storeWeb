<template>
  <div>
    <h1>Admin page</h1>
    <vs-alert
      active="true"
    >Order</vs-alert>
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

