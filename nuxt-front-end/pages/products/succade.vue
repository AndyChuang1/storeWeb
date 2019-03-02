<template>
  <div>
    <product-group :productList="productList"></product-group>
  </div>
</template>
<script>
import productGroup from "@/components/productGroup";
const productSample = [
  {
    name: "甘甜梅"
  },
  {
    name: "油切果"
  },
  {
    name: "無子化核梅"
  },
  {
    name: "橄欖絲"
  },
  {
    name: "黑金棗乾"
  },
  {
    name: "甘草金桔"
  },
  {
    name: "檸檬金桔"
  },
  {
    name: "台灣愛文芒果乾"
  },
  {
    name: "台灣芭藥乾"
  },
  {
    name: "無子中藥橄欖"
  },
  {
    name: "無子鹹味橄欖"
  },
  {
    name: "陳皮"
  },
  {
    name: "水蜜桃乾"
  },
  {
    name: "鹹味黄草橄欖"
  },
  {
    name: "龜苓膏口味軟糖"
  },
  {
    name: "金桔軟糖"
  },
  {
    name: "人蔘糖"
  },
  {
    name: "苦茶糖"
  },
  {
    name: "羅漢果枇杷糖"
  },
  {
    name: "黑糖薑母茶糖"
  },
  {
    name: "草本喉糖"
  },
  {
    name: "冰梅"
  },
  {
    name: "五香蒟弱片"
  },
  {
    name: "麻辣蒟蒻片"
  },
  {
    name: "加州葡萄乾"
  },
  {
    name: "小丸子仙楂果"
  },
  {
    name: "仙楂餅"
  },
  {
    name: "無花果絲"
  },
  {
    name: "楊桃糖"
  },
  {
    name: "天然水果軟糖"
  },
  {
    name: "黑糖夏威夷豆軟糖"
  },
  {
    name: "黑糖薑母茶糖"
  },
  {
    name: "老陳八仙果"
  },
  {
    name: "特調梅粉"
  },
  {
    name: "原味麥芽膏"
  },
  {
    name: "鹹味麥芽膏"
  },
  {
    name: "川貝麥芽膏"
  },
  {
    name: "丁香橄欖"
  },
  {
    name: "台灣鳳梨乾"
  },
  {
    name: "甘甜檸檬片"
  },
  {
    name: "八仙果"
  }
];
export default {
  name: "succade",
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

