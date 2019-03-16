<template>
  <div id="product-add">
    <div class="mgt-title">
      <main-header class="mb-3" title="商品新增"></main-header>
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
            :value="item.types"
            :text="item.types"
            v-for="(item,index) in options"
          />
        </vs-select>
      </div>
      <div class="col-12">
        商品說明 :
        <vs-textarea style="background:white" v-model="detail" />
      </div>
      <div class="col-12 d-flex justify-content-end">
        <vs-button color="primary" type="filled">新增</vs-button>
      </div>
    </div>
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
      colorx:"#103767",
      url: null,
      image: null,
      name: null,
      unit: null,
      price: null,
      detail: null,
      types: null,
      sales: null,
      options:[{types:'生物科技類'},{types:'養生食材區'}]
    };
  },
  components: {
    MainHeader
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
      this.url = URL.createObjectURL(file);
    }
  }
};
</script>
<style lang="scss" scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 200px;
  }
}
</style>

