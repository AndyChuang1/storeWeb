<template>
  <div id="product-add">
    <div class="mgt-title">
      <main-header class="mb-3" title="商品修改"></main-header>
    </div>
    <div id="preview">
      <img v-if="url" :src="url">
    </div>
    <div class="con-upload">
      <div class="con-input-upload">
        <input type="file" @change="onFileChange">
        <span class="text-input">選擇圖片</span>
        <span class="input-progress" style="width: 0%;"></span>
      </div>
    </div>
    <div class="product-form row mt-3">
      <div class="col-3">
        <p>商品名稱 :</p>
        <vs-input icon="search" placeholder="商品名稱" v-model="name"/>
      </div>
      <div class="col-3">
        <p>價錢 :</p>
        <vs-input icon="search" placeholder="價錢" v-model="price"/>
      </div>
      <div class="col-3">
        <p>商品單位 :</p>
        <vs-input icon="search" placeholder="商品單位" v-model="unit"/>
      </div>
      <div class="col-3">
        <p>商品分類 :</p>
        <vs-select :color="colorx" class="selectExample" v-model="types">
          <vs-select-item
            :key="index"
            :value="item.name"
            :text="item.name"
            v-for="(item,index) in options"
          />
        </vs-select>
      </div>
      <div class="col-3 d-flex align-items-center">
        <span class="mr-3">特價 :</span>
        <span class="mt-3 mb-3">
          <vs-radio v-model="sales" vs-value="1">是</vs-radio>
          <vs-radio v-model="sales" vs-value="0">否</vs-radio>
        </span>
      </div>
      <div class="col-12">商品說明 :
        <vs-textarea style="background:white" v-model="detail"/>
      </div>
      <div class="col-12 d-flex justify-content-end">
        <vs-button class="mr-1" color="primary" type="filled" to="/admin">取消</vs-button>
        <vs-button color="primary" type="filled" @click="submit">修改</vs-button>
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
import { mapGetters } from "vuex";
export default {
  name: "edit",
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {
      colorx: "#103767",
      url: null,
      image: null,
      name: null,
      unit: null,
      price: null,
      detail: null,
      types: null,
      sales: 0,
      options: [{ name: "生物科技類" }, { name: "養生食材區" }]
    };
  },
  components: {
    MainHeader
  },
  created() {
    this.iniTypes();
    
  },
  computed: {
    ...mapGetters({ getToken: "auth/getToken" })
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
      this.url = URL.createObjectURL(file);
    },
    iniTypes() {
      this.$axios
        .get("/api/productTypes")
        .then(response => {
          const data = response.data;
          this.options = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    submit() {
      let formData = new FormData();
      const token = this.getToken;
      // console.log(this.image)
      // formData.append("productImage", this.image);
      formData.append("productImage", this.image);

      formData.append("name", this.name);
      formData.append("unit", this.unit);
      formData.append("price", this.price);
      formData.append("detail", this.detail);
      formData.append("types", this.types);
      formData.append("sales", this.sales);
      this.$axios
        .post("/apipost/product", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": token
          },
          transformRequest: [
            function(data) {
              return data;
            }
          ]
        })
        .then(res => {
          console.log(res);
          this.$vs.notify({
            title: "新增成功",
            text: "產品已更新，重新整理即可看到產品",
            color: "success"
          });
        })
        .then(() => {
          this.name = null;
          this.unit = null;
          this.price = null;
          this.detail = "";
          this.types = null;
          this.url = null;
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
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

