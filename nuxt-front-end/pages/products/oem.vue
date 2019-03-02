<template>
  <div>
    <product-group :productList="productList"></product-group>
  </div>
</template>
<script>
import productGroup from "@/components/productGroup";
const productSample = [
  {
    name: "代客煎藥"
  },
  {
    name: "代客煎藥代客送藥(限中山區免費)"
  },
  {
    name: "代客送藥(酌收快遞費)"
  },
  {
    name: "代客切西洋蔘"
  },
  {
    name: "代客切東洋蔘"
  },
  {
    name: "代工切高麗蔘"
  }
];
export default {
  name: "oem",
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

