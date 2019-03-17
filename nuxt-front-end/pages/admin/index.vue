<template>
  <div id="product-mgt">
    <div class="mgt-title">
      <main-header class="mb-3" title="商品管理"></main-header>
    </div>
    <div style="display:inline-block">
      <vs-button color="primary" type="border" icon="add" to='admin/add-product' >新增產品</vs-button>
    </div>
     <div style="display:inline-block">
      <vs-button color="primary" type="border" icon="add" @click="activePrompt = true" >新增類別</vs-button>
       <vs-prompt
      @vs-cancel="types=''"
      @vs-accept="updateTypes"
      :vs-active.sync="activePrompt">
       <div class="con-exemple-prompt">
          Enter the security code
         <vs-input placeholder="Code" vs-placeholder="Code" v-model="types"/>
       </div>
     </vs-prompt>
    </div>

    <div class="mgt-content">
      <vs-table max-items="10" pagination :data="productList">
        <template slot="header">
          <h3>商品列表</h3>
        </template>
        <template slot="thead">
          <vs-th>#</vs-th>
          <vs-th>名稱</vs-th>
          <vs-th>價錢</vs-th>
          <vs-th>種類</vs-th>
          <vs-th>單位</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].rowid">{{data[indextr].rowid}}</vs-td>

            <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>

            <vs-td :data="data[indextr].rowid">{{data[indextr].price}}</vs-td>

            <vs-td :data="data[indextr].types">{{data[indextr].types}}</vs-td>
            <vs-td :data="data[indextr].rowid">{{data[indextr].unit}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
export default {
  name: "admin",
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {
      productList: [],
      activePrompt:false,
      types:'',

    };
  },
  components: {
    MainHeader
  },
  methods: {
    initProduct() {
      var vm = this;
      this.$axios
        .get("/api/productList", {
          params: {
            types: "all"
          }
        })
        .then(function(response) {
          const data = response.data;
          vm.productList = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateTypes(){
      console.log("updateTypes")
    }
  },
  created() {
    this.initProduct();
  }
};
</script>
<style lang="scss" scoped>
</style>

