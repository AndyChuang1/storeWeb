<template>
  <div class="order-Table">
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
          <vs-td :data="data[indextr].rowid">{{indextr+1}}</vs-td>
          <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>
          <vs-td :data="data[indextr].phone">{{data[indextr].Mphone}}</vs-td>
          <vs-td :data="data[indextr].phone">{{data[indextr].updateTime}}</vs-td>
          <vs-td :data="data[indextr].phone">{{data[indextr].status}}</vs-td>
          <vs-td :data="data[indextr].rowid">
            <vs-button type="gradient" :to="'/admin/orderdetail/'+data[indextr].orderId">查看</vs-button>
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
</template>
<script>
export default {
  name: "orderTable",
  layout: "",
  data() {
    return {};
  },
  props:{
      orderList:Array
  },
  components: {}
};
</script>
<style lang="scss" scoped>
</style>

