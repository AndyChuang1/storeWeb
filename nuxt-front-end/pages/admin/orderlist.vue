<template>
  <div>
    <div class="mgt-title">
      <main-header class="mb-3" title="訂單管理"></main-header>
    </div>
    <div class="tab">
      <vs-tabs>
        <vs-tab :vs-label="uncompletedMsg">
          <div class="uncompleted-content">
            <vs-table search :data="orderList">
              <template slot="thead">
                <vs-th>#</vs-th>
                <vs-th>客戶姓名</vs-th>
                <vs-th>客戶電話</vs-th>
                <vs-th>創建時間</vs-th>
                <vs-th>訂單狀態</vs-th>
                <vs-th>功能</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].rowid">{{data[indextr].rowid}}</vs-td>
                  <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>
                  <vs-td :data="data[indextr].phone">{{data[indextr].phone}}</vs-td>
                  <vs-td :data="data[indextr].phone">{{data[indextr].updateTime}}</vs-td>
                  <vs-td :data="data[indextr].phone">{{data[indextr].status}}</vs-td>
                  <vs-td :data="data[indextr].rowid">
                    <vs-button
                      type="gradient"
                      @click="editType(data[indextr].name,data[indextr].rowid)"
                    >查看</vs-button>
                    <vs-button
                      color="danger"
                      type="gradient"
                      @click="deleteConfirm(data[indextr].name,data[indextr].rowid)"
                    >刪除</vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vs-tab>
        <vs-tab :vs-label="completedMsg">
          <div class="completed-content">

          </div>
        </vs-tab>
      </vs-tabs>
    </div>
    <div></div>
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
        }
      ]
    };
  },
  components: {
    MainHeader
  },
  computed:{
    completedMsg(){
      let uncompletedOrder = this.orderList.filter(item=>item.status==='已完成');
      return `以完成訂單 (${uncompletedOrder.length})`
    },
    uncompletedMsg(){
      return `未完成訂單 (${this.orderList.length})`
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

