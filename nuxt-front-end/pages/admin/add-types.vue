<template>
  <div id="product-mgt">
    <div class="mgt-title">
      <main-header class="mb-3" title="類別管理"></main-header>
    </div>
    <div style="display:inline-block">
      <vs-button color="primary" type="border" icon="add" @click="activePrompt = true">新增類別</vs-button>
      <vs-prompt
        @vs-cancel="types=''"
        @vs-accept="updateTypes"
        :vs-active.sync="activePrompt"
        vs-title="新增類別"
        vs-accept-text="新增"
        vs-cancel-text="取消"
      >
        <div class="con-exemple-prompt">輸入類別 :
          <vs-input placeholder="Types" v-model="types"/>
        </div>
      </vs-prompt>
    </div>

    <div class="mgt-content">
      <vs-table max-items="10" pagination :data="productTypes">
        <template slot="header">
          <h3>類別列表</h3>
        </template>
        <template slot="thead">
          <vs-th>#</vs-th>
          <vs-th>類別名稱</vs-th>
          <vs-th>功能</vs-th>
         
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].rowid">{{data[indextr].rowid}}</vs-td>

            <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>

            <vs-td :data="data[indextr].rowid">
              <vs-button type="gradient">編輯</vs-button>
              <vs-button color="danger" type="gradient">刪除</vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
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
      productTypes: [],
      activePrompt: false,
      types: ""
    };
  },
  components: {
    MainHeader
  },
  computed: {
    ...mapGetters({ getToken: "auth/getToken" })
  },
  methods: {
    initTypes() {
      var vm = this;
      this.$axios
        .get("/api/productTypes", {
          params: {
            types: "all"
          }
        })
        .then(function(response) {
          const data = response.data;
          vm.productTypes = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateTypes() {
      const token = this.getToken;
      this.$axios.post(
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
        }).then(()=>{
          this.types=null;
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
    }
  },
  created() {
    this.initTypes();
  }
};
</script>
<style lang="scss" scoped>
</style>

