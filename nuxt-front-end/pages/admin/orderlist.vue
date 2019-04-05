<template>
  <div>
    <div class="mgt-title">
      <main-header class="mb-3" title="訂單管理"></main-header>
    </div>
    <div class="tab">
      <vs-tabs>
        <vs-tab :vs-label='uncompletedMsg'>
          <div class="uncompleted-content">
            <order-Table :orderList="orderList.filter(item=>item.status==='未確認')"></order-Table>
            
          </div>
        </vs-tab>
        <vs-tab :vs-label="confirmMsg">
          <div class="confirm-content">
            <order-Table :orderList="orderList.filter(item=>item.status==='已確認')"></order-Table>
          </div>
        </vs-tab>
        <vs-tab :vs-label="completedMsg">
          <div class="completed-content">
            <order-Table :orderList="orderList.filter(item=>item.status==='已完成')"></order-Table>
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
    <div></div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
import orderTable from "@/components/orderTable"
export default {
  name: "admin",
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {
      orderList: [],
    
    };
  },
  components: {
    MainHeader,
    orderTable
  },
  computed:{
    completedMsg(){
      let completedOrder = this.orderList.filter(item=>item.status==='已完成');
      
      return `已完成訂單 (${completedOrder.length})`
    },
    uncompletedMsg(){
      let uncompletedOrder = this.orderList.filter(item=>item.status==='未確認');
      console.log(uncompletedOrder)
      return `未完成訂單 (${uncompletedOrder.length})`
    },
    confirmMsg(){
      let confirmOrder = this.orderList.filter(item=>item.status==='已確認');
      return `已確認訂單 (${confirmOrder.length})`
    }
  },
  methods: {
    initOrderList() {
      var vm = this;
      const token= this.$store.state.auth.token;
      this.$axios
        .get("/apipost/order", {
          headers: {
            "x-access-token": token
          },
        })
        .then(function(response) {
          const data = response.data;
          vm.orderList = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    // this.initOrderList();
  },
  asyncData({store,app}){
    const token= store.state.auth.token;
    return app.$axios.get("/apipost/order", {
          headers: {
            "x-access-token": token
          },
        })
        .then(function(response) {
          const data = response.data;
          return {orderList:data}
         
        })
        .catch(function(error) {
          console.log(error);
        });

  }
};
</script>
<style lang="scss" scoped>
</style>

