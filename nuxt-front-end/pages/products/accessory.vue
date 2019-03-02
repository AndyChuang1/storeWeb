<template>
  <div>
    <product-group :productList="productList"></product-group>
  </div>
</template>
<script>
import productGroup from "@/components/productGroup";
const productSample = [
  {
    name: "艾條棒(10-盒)"
  },
  {
    name: "塑膠罐(1-10尺寸)"
  },
  {
    name: "自動煎煮藥機器"
  },
  {
    name: "過瀘布袋系列"
  },
  {
    name: "茶包袋過瀘袋(要封口機封口)"
  }
];
export default {
  name: "accessory",
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

