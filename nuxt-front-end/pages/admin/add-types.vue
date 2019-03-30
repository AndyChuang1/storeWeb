<template>
  <div id="product-mgt">
    <div class="mgt-title">
      <main-header class="mb-3" title="類別管理"></main-header>
    </div>
    <div style="display:inline-block">
      <vs-button color="primary" type="border" icon="add" @click="activePromptAdd = true">新增類別</vs-button>
      <vs-prompt
        @vs-cancel="types=''"
        @vs-accept="addTypes"
        :vs-active.sync="activePromptAdd"
        vs-title="新增類別"
        vs-accept-text="新增"
        vs-cancel-text="取消"
      >
        <div class="con-exemple-prompt">
          輸入類別 :
          <vs-input placeholder="Types" v-model="types"/>
        </div>
      </vs-prompt>
    </div>
    <div class="editType">
      <vs-prompt
        @vs-cancel="editTypes=''"
        @vs-accept="updateTypes"
        :vs-active.sync="activePromptEdit"
        vs-title="修改類別"
        vs-accept-text="修改"
        vs-cancel-text="取消"
      >
        <div class="con-exemple-prompt">
          輸入類別 :
          <vs-input placeholder="Types" v-model="editTypes.name"/>
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
              <vs-button type="gradient" @click="editType(data[indextr].name,data[indextr].rowid)">編輯</vs-button>
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
      activePromptAdd: false,
      activePromptEdit: false,
      types: "",
      editTypes: {
        name:null,
        rowid:null
      },
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
    editType(name,rowid) {
      console.log(name);
      this.editTypes.name = name;
      this.editTypes.rowid=rowid;
      this.activePromptEdit = true;
    },
    addTypes() {
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
          this.initTypes();
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
    updateTypes() {
      const token = this.getToken;
      const{name,rowid}=this.editTypes;
      this.$axios
        .put(`/apipost/types/${rowid}`, {
          name:name
        }, {
          headers: {
            "x-access-token": token
          },
        
        })
        .then(res => {
          console.log(res);
          this.$vs.notify({
            title: "更新成功",
            text: "類別已更新!!",
            color: "success"
          });
        })
        .then(() => {
          this.initTypes();
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
    deleteConfirm(name, rowid) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `確認`,
        text: `是否要刪除此區 : ${name}?`,
        accept: this.deleteType,
        cancel: this.cancelDel,
        acceptText: "確認",
        cancelText: "取消"
      });
      this.delData.name = name;
      this.delData.rowid = rowid;
    },
    deleteType() {
      const token = this.getToken;
      const name = this.delData.name;
      const rowid = this.delData.rowid ;
      this.$axios
        .delete(`/apipost/types/${rowid}`, {
          params: { name: name },
          headers: {
            "x-access-token": token
          }
        })
        .then(res => {
          console.log(res);
          this.$vs.notify({
            title: "刪除成功",
            text: "刪除已完成!",
            color: "success"
          });
        })
        .then(() => {
          this.initTypes();
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
    this.initTypes();
  }
};
</script>
<style lang="scss" scoped>
</style>

