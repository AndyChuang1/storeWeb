<template>
  <div>
    <product-group :productList="productList"></product-group>
  </div>
</template>
<script>
import productGroup from "@/components/productGroup";
const productSample = [
  {
    name: "羅漢果茶飲"
  },
  {
    name: "酸梅汁茶飲"
  },
  {
    name: "烏梅汁茶飲"
  },
  {
    name: "苦茶汁茶飲"
  },
  {
    name: "人蔘麥冬茶飲"
  },
  {
    name: "花旗蔘養生茶飲"
  },
  {
    name: "七葉膽荣飲"
  },
  {
    name: "一條根養生茶飲"
  },
  {
    name: "麥冬生津茶欴"
  }
];
export default {
  name: "drink",
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

