<template>
  <div>
    <product-group :productList="productList"></product-group>
  </div>
</template>
<script>
import productGroup from "@/components/productGroup";
const productSample = [
  {
    name: "坐月子藥膳燉包"
  }
];
export default {
  name: "pm",
  layout: "product-content",
  data() {
    return {
      productList: productSample
    };
  },
  components: {
    productGroup
  }
};
</script>
<style lang="scss" scoped>
</style>

