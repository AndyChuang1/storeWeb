<template>
  <div class="products col-12">
    <main-header title="產品目錄">
      <ul class="nav">
        <li class="nav-item" v-for="(category,index) in catalogList" :key="index">
          <router-link class="nav-link" :to="'/main/catalog/'+category.url">{{category.product}}</router-link>
        </li>
      </ul>
    </main-header>
    <div class="row">
      <div
        class="col-lg-3 col-md-6 mb-4 mt-2"
        v-for="(product,index) in productList.slice(pageStart,pageStart+countOfPage)"
        :key="index"
      >
        <div class="card h-100">
          <div class="hover">
            <img class="card-img-top" :src="product.imag" alt>
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
        <no-ssr>
           <pagination :records="productList.length" :per-page="8" :page=page @paginate="setPage"></pagination>
        </no-ssr>
       
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
import {Pagination} from "vue-pagination-2";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "products",
  layout: "main-content",
  data() {
    return {
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
    MainHeader,
    // Pagination
  },
  methods:{
      setPage: function(page) {
      this.page = page;
    },
    ...mapActions({
      addCart:'shop/addCart'
    })
  },
  computed:{
      pageStart() {
      return (this.page - 1) * this.countOfPage;
    },
    ...mapGetters({
      productList: "shop/getProducts"
    })
  },

};
</script>
<style lang="scss" scoped>
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

