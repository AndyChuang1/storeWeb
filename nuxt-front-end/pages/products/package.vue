<template>
  <div>
    <product-group :productList=productList></product-group>
  </div>
</template>
<script>
const productSample = [
  {
    name: "十全藥膳燉包"
  },
  {
    name: "四物湯藥膳燉包"
  },
  {
    name: "八湯藥膳燉包"
  },
  {
    name: "四神湯藥膳燉包"
  },
  {
    name: "燒酒雞藥膳燉包"
  },
  {
    name: "薑母鴨藥膳燉包"
  },
  {
    name: "羊肉爐藥膳燉包"
  },
  {
    name: "燒酒蝦藥燉包"
  },
  {
    name: "長大人藥膳燉包"
  },
  {
    name: "通恤路樂膳燉包"
  },
  {
    name: "保肝養生藥膳燉包"
  },
  {
    name: "加味四物藥膳燉包"
  },
  {
    name: "人蔘准山藥膳燉包"
  },
  {
    name: "天麻益智湯藥膳燉包"
  },
  {
    name: "玉竹元氣湯藥膳燉包"
  },
  {
    name: "百合蓮子湯藥膳燉甸"
  },
  {
    name: "蔘耆養生湯藥膳燉包"
  },
  {
    name: "歡樂雪蛤湯藥膳燉包"
  },
  {
    name: "麻辣鍋藥膳燉包"
  },
  {
    name: "四君子湯藥膳燉包"
  }
];
import productGroup from "@/components/productGroup";
export default {
  name: "package",
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

