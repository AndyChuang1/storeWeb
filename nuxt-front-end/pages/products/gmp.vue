<template>
  <div>
    <product-group :productList="productList"></product-group>
  </div>
</template>
<script>
import productGroup from "@/components/productGroup";
const productSample = [
  {
    name: "三才堂"
  },
  {
    name: "萬國"
  },
  {
    name: "順天堂"
  },
  {
    name: "科達"
  },
  {
    name: "生春"
  },
  {
    name: "勸奉堂"
  },
  {
    name: "勝昌"
  }
];
export default {
  name: "gmp",
  layout: "product-content",
  data() {
    return {
         productList: productSample
    };
  },
  components: {productGroup}
};
</script>
<style lang="scss" scoped>
</style>

