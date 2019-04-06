<template>
  <div class="order-Table">
    <vs-table search :data="orderList">
      <template slot="thead">
        <vs-th>#</vs-th>
        <vs-th>客戶姓名</vs-th>
        <vs-th>客戶電話</vs-th>
        <vs-th>創建時間</vs-th>
        <vs-th>訂單狀態</vs-th>
        <vs-th>訂單編號</vs-th>
        <vs-th>總金額</vs-th>
        <vs-th>功能</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].rowid">{{indextr+1}}</vs-td>
          <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>
          <vs-td :data="data[indextr].Mphone">{{data[indextr].Mphone}}</vs-td>
          <vs-td :data="data[indextr].updateTime">{{data[indextr].updateTime}}</vs-td>
          <vs-td :data="data[indextr].status">{{data[indextr].status}}</vs-td>
          <vs-td :data="data[indextr].orderId">{{data[indextr].orderId}}</vs-td>
          <vs-td :data="data[indextr].total">{{data[indextr].total}}元</vs-td>
          <vs-td :data="data[indextr].rowid">
            <vs-button type="gradient" :to="'/admin/orderdetail/'+data[indextr].orderId">查看</vs-button>
            <vs-button
              color="danger"
              type="gradient"
              @click="deleteConfirm(data[indextr].name,data[indextr].orderId)"
            >刪除</vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>
<script>
export default {
  name: "orderTable",
  layout: "",
  data() {
    return {
      delData: {
        name: null,
        orderId: null
      }
    };
  },
  props: {
    orderList: Array
  },
  components: {},
  methods: {
    deleteConfirm(name, orderId) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `確認`,
        text: `是否要刪除本訂單 : 客戶 :${name} 訂單編號:${orderId}`,
        acceptText: "確認",
        cancelText: "取消",
        accept: this.deleteOrder,
        cancel: this.cancelDel
      });
      this.delData.name = name;
      this.delData.orderId = orderId;
    },
    deleteOrder() {
      const name = this.delData.name;
      const orderId = this.delData.orderId;
      const token = this.$store.state.auth.token;

      this.$axios
        .delete(`/apipost/order/${orderId}`, {
          headers: {
            "x-access-token": token
          }
        })
        .then(res => {
          this.$vs.notify({
            title: "刪除成功",
            text: "刪除已完成!",
            color: "success"
          });
        })
        .then(() => {
          console.log('emit')
          this.$emit('del_order');
         
        })
        .catch(err => {
          const { status } = err.response;
          if (status == 401) {
            this.$vs.notify({
              title: "新增失敗",
              text: "Token過期，請重新登入",
              color: "danger"
            });
          } else {
            this.$vs.notify({ title: "新增失敗", text: err, color: "danger" });
          }
        });
    },
    cancelDel() {
      this.delData.name = null;
      this.delData.rowid = null;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

