<template>
  <div class="orderDetail">
    <main-header title="訂單內容"></main-header>
    <div class="detail-content">
      <vs-table max-items="10" :data="order">
        <template slot="header">
          <h3>商品內容 (訂單編號 : {{this.$route.params.id}})</h3>
        </template>
        <template slot="thead">
          <vs-th>#</vs-th>
          <vs-th>商品名稱</vs-th>
          <vs-th>數量</vs-th>
          <vs-th>單品價錢</vs-th>
          <vs-th>總和</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="indextr">{{indextr+1}}</vs-td>

            <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>

            <vs-td :data="data[indextr].qun">{{data[indextr].qun}}</vs-td>

            <vs-td :data="data[indextr].price">{{data[indextr].price}}</vs-td>
            <vs-td :data="data[indextr].price">{{data[indextr].total}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <h2 class="total">總金額: {{customer[0].total}}元</h2>
    </div>
    <main-header title="顧客資料"></main-header>
    <div class="customer-content">
      <vs-table :data="customer">
        <template slot="thead">
          <vs-th>顧客名稱</vs-th>
          <vs-th>身分證字號</vs-th>
          <vs-th>電話</vs-th>
          <vs-th>行動電話</vs-th>
          <vs-th>郵遞區號</vs-th>
          <vs-th>地址</vs-th>
          <vs-th>付款方式</vs-th>
          <vs-th>送貨時間</vs-th>
          <vs-th>狀態</vs-th>
          <vs-th>建立時間</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>

            <vs-td :data="data[indextr].idCard">{{data[indextr].idCard}}</vs-td>

            <vs-td :data="data[indextr].phone">{{data[indextr].phone}}</vs-td>
            <vs-td :data="data[indextr].Mphone">{{data[indextr].Mphone}}</vs-td>
            <vs-td :data="data[indextr].zip">{{data[indextr].zip}}</vs-td>
            <vs-td :data="data[indextr].address">{{data[indextr].address}}</vs-td>
            <vs-td :data="data[indextr].payment">{{data[indextr].payment}}</vs-td>
            <vs-td :data="data[indextr].deliverTime">{{data[indextr].deliverTime}}</vs-td>
            <vs-td :data="data[indextr].status">
              <vs-select
                width="70px"
                color="#103767"
                class="selectExample"
                v-model="customer[0].status"
              >
                <vs-select-item
                  :key="index"
                  :value="item.name"
                  :text="item.name"
                  v-for="(item,index) in options"
                />
              </vs-select>
            </vs-td>
            <vs-td :data="data[indextr].updateTime">{{data[indextr].updateTime}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
    <div class="col-12 d-flex justify-content-end mt-4">
      <vs-button class="mr-1" color="primary" type="filled" to="/admin/orderlist">取消</vs-button>
      <vs-button color="primary" type="filled" @click="submit">修改</vs-button>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
export default {
  name: "orderDetail",
  layout: "admin",
  data() {
    return {
      order: [
        { name: "兒童專用維他命咀嚼錠", qun: 4, price: 400, total: 1600 },
        { name: "紅麴複方膠囊", qun: 4, price: 1680, total: 6720 },
        { name: "蘿立清 透明膠囊", qun: 5, price: 400, total: 2000 },
        { name: "高單位葉黃素", qun: 4, price: 900, total: 3600 },
        { name: "高單位葉黃素", qun: 4, price: 900, total: 3600 },
        { name: "高單位葉黃素", qun: 4, price: 900, total: 3600 }
      ],
      customer: [
        {
          orderId: 1,
          name: "吳彥祖",
          idCard: "Q1244556677",
          phone: "02-25636654",
          Mphone: "0915663326",
          address: "台南市王公路2號六樓dfgdfgdfgdfgdfgfdg",
          zip: 123,
          payment: "ATM轉帳",
          deliverTime: "17:00~21:00",
          status: "未確認",
          updateTime: "2019-04-04 21:27:33",
          total: 4455
        }
      ],
      options: [{ name: "未確認" }, { name: "已確認" }, { name: "已完成" }]
    };
  },
  components: {
    MainHeader
  },
  methods: {
    submit() {
    const token = this.$store.state.auth.token;
    const orderId = this.$route.params.id;
     this.$axios
        .put(`/apipost/order/${orderId}`, {
          status:this.customer[0].status
        }, {
          headers: {
            "x-access-token": token
          },
        
        })
        .then(res => {
          this.$vs.notify({
            title: "更新成功",
            text: "狀態已更新!!",
            color: "success"
          });
        })
        .then(() => {
          this.$router.push('/admin/orderlist')
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
    getDetail() {
      const token = this.$store.state.auth.token;
      this.$axios
        .all([this.$axios.get("/apipost/order", {
          params: { orderId: this.$route.params.id },
          headers: {
            "x-access-token": token
          }
        }), this.$axios.get("/apipost/orderdetail", {
          params: { orderId: this.$route.params.id },
          headers: {
            "x-access-token": token
          }
        })])
        .then(this.$axios.spread((res,res2)=> {
            this.customer=res.data
            this.order=res2.data
        }) )
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created(){
      this.getDetail();
  }
};
</script>
<style lang="scss" scoped>
.orderDetail /deep/ ul {
  margin-bottom: 0;
}
.total {
  text-align: right;
}
</style>

