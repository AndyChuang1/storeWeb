<template>
  <div id="catalog" class="">
    <main-banner></main-banner>
    <router-view></router-view>
    <main-header title="產品目錄">
      <ul class="nav">
        <li class="nav-item" v-for="(category,index) in catalogList" :key="index">
          <router-link class="nav-link" :to="'/main/catalog/'+category.url">{{category.product}}</router-link>
        </li>
      </ul>
    </main-header>
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4 mt-2" v-for="(product,index) in productList.slice(pageStart,pageStart+countOfPage)" :key='index'>
        <div class="card h-100">
          <div class="hover">
            <img class="card-img-top" :src="product.imag" alt="">
            <div class="overlay">
              <button type="button" class="btn btn-primary" @click="addCart(product.name)">加到購物車</button>
            </div>

          </div>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">{{product.name}}</a>
            </h4>
            <h5>NT{{product.price}}元</h5>
            <p class="card-text">{{product.content}}</p>
          </div>

        </div>
      </div>

    </div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <pagination :records="productList.length" :per-page="8" @paginate="setPage">
        </pagination>

      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
// const product = [
//   {
//     name: "敏瑞靈 益生菌",
//     price: 150,
//     filter: "health",
//     imag: require("../assets/img/Product/getThumb.jpg"),
//     content: "含有10種對人體具有特定功能的益生菌。"
//   },
//   {
//     name: "敏瑞靈 益生菌",
//     price: 150,
//     filter: "health",
//     imag: require("../assets/img/Product/getThumb.jpg"),
//     content: "含有10種對人體具有特定功能的益生菌。"
//   },
//   {
//     name: "敏瑞靈 益生菌",
//     price: 150,
//     filter: "health",
//     imag: require("../assets/img/Product/getThumb.jpg"),
//     content: "含有10種對人體具有特定功能的益生菌。"
//   },
//   {
//     name: "敏瑞靈 益生菌",
//     price: 150,
//     filter: "health",
//     imag: require("../assets/img/Product/getThumb.jpg"),
//     content: "含有10種對人體具有特定功能的益生菌。"
//   },
//   {
//     name: "敏瑞靈 益生菌",
//     price: 150,
//     filter: "health",
//     imag: require("../assets/img/Product/getThumb.jpg"),
//     content: "含有10種對人體具有特定功能的益生菌。"
//   },
//   {
//     name: "敏瑞靈 益生菌",
//     price: 150,
//     filter: "health",
//     imag: require("../assets/img/Product/getThumb.jpg"),
//     content: "含有10種對人體具有特定功能的益生菌。"
//   },
//   {
//     name: "敏瑞靈 益生菌",
//     price: 150,
//     filter: "health",
//     imag: require("../assets/img/Product/getThumb.jpg"),
//     content: "含有10種對人體具有特定功能的益生菌。"
//   },
//   {
//     name: "敏瑞靈 益生菌",
//     price: 150,
//     filter: "health",
//     imag: require("../assets/img/Product/getThumb.jpg"),
//     content: "含有10種對人體具有特定功能的益生菌。"
//   },
//   {
//     name: "敏瑞靈 益生菌",
//     price: 150,
//     filter: "health",
//     imag: require("../assets/img/Product/getThumb.jpg"),
//     content: "含有10種對人體具有特定功能的益生菌。"
//   }
// ];

import MainBanner from "@/components/MainBanner.vue";
import Footer from "@/components/footer.vue";
import MainHeader from "@/components/mainheader";
import { Pagination } from "vue-pagination-2";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "catalog",
  data() {
    return {
      msg: "Catalog",
      //  productList: product,
      page: 1,
      countOfPage: 8,
      catalogList: [
        { product: "所有產品", url: "all" },
        { product: "特價商品", url: "sales" },
        { product: "養生食材區", url: "all" },
        { product: "藥膳燉包區", url: "all" },
        { product: "養生飲品區", url: "all" },
        { product: "沖泡式五穀", url: "all" },
        { product: "生物科技類", url: "all" },
        { product: "GMP產品", url: "all" },
        { product: "坐月子藥膳", url: "all" },
        { product: "蜜餞食品區", url: "all" },
        { product: "南北什貨曲", url: "all" },
        { product: "香料滷包類", url: "all" },
        { product: "周邊商品區", url: "all" },
        { product: "外用商品區", url: "all" },
        { product: "代工服務區", url: "all" }
      ]
    };
  },
  components: {
    MainBanner,
    Footer,
    MainHeader,
    Pagination
  },
  methods: {
    setPage: function(page) {
      this.page = page;
    },
    ...mapActions(['addCart'])
  },
  computed: {
    pageStart() {
      return (this.page - 1) * this.countOfPage;
    },
    ...mapGetters({
      productList: "getProducts"
    })
  },

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hover {
  position: relative;
  
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color:rgba(197, 197, 209, 0.76);;
  overflow: hidden;
  width: 100%;
  height: 0%;
  transition: .5s ease;
}
.btn {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  opacity:1;
  
}
.hover:hover .overlay  {
  height: 100%;
}
</style>
