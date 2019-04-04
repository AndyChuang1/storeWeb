<template>
  <div>
    <div class="mgt-title">
      <main-header class="mb-3" title="訂單管理"></main-header>
    </div>
    <div class="tab">
      <vs-tabs>
        <vs-tab :vs-label="uncompletedMsg">
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
     
      orderList: [
        {
          rowid: 1,
          name: "王大雞",
          phone: "0915445588",
          updateTime: "2018-07-05 11:26:34",
          status: "未確認",
          detail: "幫助維持消化道機能，改變細菌叢生態。",
          path: "/product/2019-3-3益生菌.jpg",
          sales: 0
        },
        {
          rowid: 2,
          name: "肚小美",
          phone: "0915445588",
          updateTime: "2018-07-05 11:26:34",
          status: "未確認",
          detail: "專為成長中的兒童所調配的綜合維他命營養補充品。",
          path: "/product/2019-3-3兒童專用維他命咀嚼錠.jpg",
          sales: 0
        },
        {
          rowid: 3,
          name: "陳漢",
          phone: "0915445588",
          updateTime: "2018-07-05 11:26:34",
          status: "未確認",
          detail:
            "有助於維持在暗處的視覺。.減少不飽和脂肪酸的氧化。有助於減少自由基的產生。",
          path: "/product/2019-3-3金盞精明(LUTEIN).jpg",
          sales: 0
        },
        {
          rowid: 4,
          name: "吳玉炸",
          phone: "09d5445588",
          updateTime: "2018-07-05 11:26:34",
          status: "已完成",
          detail:
            "有助於維持在暗處的視覺。.減少不飽和脂肪酸的氧化。有助於減少自由基的產生。",
          path: "/product/2019-3-3金盞精明(LUTEIN).jpg",
          sales: 0
        },
        {
          rowid: 5,
          name: "金正恩",
          phone: "0954455884",
          updateTime: "2018-07-05 11:26:34",
          status: "已確認",
          detail:
            "有助於維持在暗處的視覺。.減少不飽和脂肪酸的氧化。有助於減少自由基的產生。",
          path: "/product/2019-3-3金盞精明(LUTEIN).jpg",
          sales: 0
        }
        
      ]
    };
  },
  components: {
    MainHeader,
    orderTable
  },
  computed:{
    completedMsg(){
      let completedOrder = this.orderList.filter(item=>item.status==='已完成');
      return `以完成訂單 (${completedOrder.length})`
    },
    uncompletedMsg(){
      let uncompletedOrder = this.orderList.filter(item=>item.status==='未確認');
      return `未完成訂單 (${uncompletedOrder.length})`
    },
    confirmMsg(){
      let confirmOrder = this.orderList.filter(item=>item.status==='已確認');
      return `已確認訂單 (${confirmOrder.length})`
    }
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
          vm.users = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    // this.initProduct();
  }
};
</script>
<style lang="scss" scoped>
</style>

