<template>
  <div>
    <product-group :productList="productList"></product-group>
  </div>
</template>
<script>
import productGroup from "@/components/productGroup";
const productSample = [
  {
    name: "白背黑本耳"
  },
  {
    name: "松子仁"
  },
  {
    name: "核桃仁"
  },
  {
    name: "生腰果"
  },
  {
    name: "龍眼肉"
  },
  {
    name: "糯蕙仁"
  },
  {
    name: "紅蕙仁"
  },
  {
    name: "紅棗"
  },
  {
    name: "無子紅棗"
  },
  {
    name: "和田玉棗"
  },
  {
    name: "黑棗"
  },
  {
    name: "廣東蜜棗"
  }
];
export default {
  name: "goods",
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

