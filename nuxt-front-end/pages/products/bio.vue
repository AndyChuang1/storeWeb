<template>
     <div>
    <product-group :productList=productList></product-group>
  </div>
</template>
<script>
import productGroup from "@/components/productGroup";
const productSample = [
  {
    name: "六鵬生技"
  },
  {
    name: "合康生技"
  },
  {
    name: "立園生技"
  },
  {
    name: "葛蘭蒂生技"
  },
  {
    name: "勸奉堂生技"
  },
  {
    name: "信宏生技"
  },
  {
    name: "東宇生技"
  },
  {
    name: "新化農會"
  },
  {
    name: "順天本草"
  },
  {
    name: "漢田生技"
  },
  {
    name: "立康生技"
  }
  
];
export default {
    name:'bio',
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

