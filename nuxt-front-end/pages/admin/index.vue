<template>
  <no-ssr>
    <div id="product-mgt">
      <div class="mgt-title">
        <main-header class="mb-3" title="商品管理"></main-header>
      </div>
      <div style="display:inline-block">
        <vs-button
          color="primary"
          type="border"
          icon="add"
          :to="{ name: 'admin-add-product' }"
          >新增產品</vs-button
        >
      </div>
      <div style="display:inline-block">
        <vs-button
          color="primary"
          type="border"
          icon="add"
          @click="activePrompt = true"
          >新增類別</vs-button
        >
        <vs-prompt
          @cancel="types = ''"
          @accept="updateTypes"
          :active.sync="activePrompt"
          title="新增類別"
          accept-text="新增"
          cancel-text="取消"
        >
          <div class="con-exemple-prompt">
            輸入類別 :
            <vs-input placeholder="Types" v-model="types" />
          </div>
        </vs-prompt>
      </div>

      <div class="mgt-content">
        <vs-table search max-items="10" pagination :data="productList">
          <template slot="header">
            <h3>商品列表</h3>
          </template>
          <template slot="thead">
            <vs-th>#</vs-th>
            <vs-th>名稱</vs-th>
            <vs-th>價錢</vs-th>
            <vs-th>種類</vs-th>
            <vs-th>單位</vs-th>
            <vs-th>功能</vs-th>
          </template>

          <template slot-scope="{ data }">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].rowid">{{ indextr + 1 }}</vs-td>

              <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

              <vs-td :data="data[indextr].rowid">{{
                data[indextr].price
              }}</vs-td>

              <vs-td :data="data[indextr].types">{{
                data[indextr].types
              }}</vs-td>
              <vs-td :data="data[indextr].rowid">{{
                data[indextr].unit
              }}</vs-td>
              <vs-td :data="data[indextr].rowid">
                <vs-button
                  type="gradient"
                  :to="'admin/edit/' + data[indextr].name"
                  >編輯</vs-button
                >
                <vs-button
                  color="danger"
                  type="gradient"
                  @click="
                    deleteConfirm(data[indextr].name, data[indextr].rowid)
                  "
                  >刪除</vs-button
                >
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </div>
  </no-ssr>
</template>
<script>
import MainHeader from "@/components/mainheader";
import { mapGetters } from "vuex";
export default {
  name: "admin",
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {
      productList: [],
      activePrompt: false,
      types: "",
      delData: {
        name: null,
        rowid: null
      }
    };
  },
  components: {
    MainHeader
  },
  computed: {
    ...mapGetters({ getToken: "auth/getToken" })
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
    updateTypes() {
      const token = this.getToken;
      this.$axios
        .post(
          "/apipost/types",
          {
            name: this.types
          },
          {
            headers: {
              "x-access-token": token
            }
          }
        )
        .then(res => {
          this.$vs.notify({
            title: "新增成功",
            text: "類別以更新",
            color: "success"
          });
        })
        .then(() => {
          this.types = null;
        })
        .catch(err => {
          const { status } = err.response;
          if (status == 400) {
            this.$vs.notify({
              title: "新增失敗",
              text: "此類別已存在!",
              color: "danger"
            });
          }
        });
    },
    deleteConfirm(name, rowid) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `確認`,
        text: `是否要刪除本產品 : ${name}?`,
        accept: this.deleteProduct,
        cancel: this.cancelDel,
        acceptText: "確認",
        cancelText: "取消"
      });
      this.delData.name = name;
      this.delData.rowid = rowid;
    },
    deleteProduct() {
      const name = this.delData.name;
      const rowid = this.delData.rowid;

      const token = this.getToken;
      this.$axios
        .delete(`/apipost/product/${rowid}`, {
          params: { name: name },
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
          this.initProduct();
          console.log(`Delete ${name}`);
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
  },
  created() {
    this.initProduct();
  }
};
</script>
<style lang="scss" scoped>
.mgt-content /deep/ ul {
  margin-bottom: 0;
}
</style>
