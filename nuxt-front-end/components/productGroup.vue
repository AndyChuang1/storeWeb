<template>
  <div class="container mt-4 product-group">
    <ul class="list-group list-group-horizontal row">
      <div v-for="(product,index) in productList" :key="index" class="col-lg-3 col-12">
        <li class="list-group-item">{{product.name}}</li>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "product-group",
  data() {
    return {};
  },
  props: {
    productList: {
      type: Array,
      required: true
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.product-group{
    text-align: center;
    font-size: 1.25rem
}
</style>

