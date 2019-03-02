<template>
   <div>
    <product-group :productList="productList"></product-group>
  </div> 
</template>
<script>
import productGroup from "@/components/productGroup";
const productSample = [
  {
    name: "特製滷包"
  },
  {
    name: "餐飲料理藥膳滷包"
  },
  {
    name: "特調專業麻辣鍋滷包"
  },
  {
    name: "祖傳羊肉燻滷包"
  },
  {
    name: "燒酒雞藥膳燉包"
  },
  {
    name: "燒酒蝦滷包"
  },
  {
    name: "特調鱸鰻滷包"
  },
];
export default {
    name:'pouch',
    layout:'product-content',
    data(){
        return{
            productList: productSample      
        }
    },
    components:{
        productGroup
    },
}
</script>
<style lang="scss" scoped>

</style>

