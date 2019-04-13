<template>
  <div>
    <div class="row">
      <div
        class="col-lg-3 col-md-6 mb-4 mt-2"
        v-for="(product,index) in productList.slice(pageStart,pageStart+countOfPage)"
        :key="index"
      >
        <div class="card h-100">
          <div class="hover">
            <img class="card-img-top" :src="urlConvert(product.path)" height="400" alt>
            <div class="overlay">
              <button type="button" class="btn btn-primary" @click="addCart(product.name)">加到購物車</button>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title d-flex justify-content-between">
              <span>{{product.name}}</span>
              <span>{{product.unit}}</span>
            </h4>
            <h5>NT{{product.price}}元</h5>
            <p class="card-text">{{product.detail}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <no-ssr>
          <pagination
            :records="productList.length"
            :per-page="8"
            :page="page"
            @paginate="setPage"
            :options="pageTexts"
          ></pagination>
        </no-ssr>
      </div>
    </div>
    <product-group v-if="$route.params.types=='生物科技類'" :productList="staticData.BioData"></product-group>
    <product-group v-if="$route.params.types=='藥膳燉包區'" :productList="staticData.packageData"></product-group>
    <product-group v-if="$route.params.types=='養生飲品區'" :productList="staticData.DrinkData"></product-group>
    <product-group v-if="$route.params.types=='GMP產品'" :productList="staticData.GMPData"></product-group>
    <product-group v-if="$route.params.types=='坐月子藥膳'" :productList="staticData.PMData"></product-group>
    <product-group v-if="$route.params.types=='蜜餞食品區'" :productList="staticData.SuccadeData"></product-group>
    <product-group v-if="$route.params.types=='南北什貨區'" :productList="staticData.GoodsData"></product-group>
    <product-group v-if="$route.params.types=='香料滷包類'" :productList="staticData.PouchData"></product-group>
    <product-group v-if="$route.params.types=='周邊產品區'" :productList="staticData.AccessoryData"></product-group>
    <product-group v-if="$route.params.types=='代工服務區'" :productList="staticData.OEMData"></product-group>
    <div
      v-if="productList.length==0"
      class="container content-statement d-flex justify-content-center mt-3"
    >
      <div class="col-auto mt-3">
        <h2>請來電洽詢或至現場購買</h2>
        <h3>永盛堂中藥行</h3>
        <p>公司地址：(104) 台北市中山區吉林路191號</p>
        <p>連絡電話：02-2531-0309</p>
        <p>傳真號碼：02-2531-0278</p>
        <p>營業時間：週一至週日 早上10:00-晚上23:00</p>
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
import productGroup from "@/components/productGroup";
import staticData from "@/assets/js/static.js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "types",
  layout: "",
  data() {
    return {
      path: null,
      page: 1,
      countOfPage: 8,
      pageTexts: {
        texts: {
          count: "",
          first: "First",
          last: "Last"
        }
      },
      listTest: "",
      staticData:{
        packageData: staticData.getPackeage(),
        BioData:staticData.getBio(),
        DrinkData:staticData.getDrinks(),
        GMPData:staticData.getGMP(),
        PMData:staticData.getPM(),
        SuccadeData:staticData.getSuccade(),
        GoodsData:staticData.getGoods(),
        PouchData:staticData.getPouch(),
        AccessoryData:staticData.getAccessory(),
        OEMData:staticData.getOEM(),
      }
      
    };
  },
  components: {
    MainHeader,
    productGroup
  },
  methods: {
    setPage: function(page) {
      this.page = page;
    },
    ...mapActions({
      addCart: "shop/addCart",
      iniProduct: "shop/initProduct"
    }),
    urlConvert(path) {
      var url =
        process.env.NODE_ENV == "development"
          ? process.env.devUrl
          : process.env.prodUrl;
      return url + path;
    }
  },
  computed: {
    pageStart() {
      return (this.page - 1) * this.countOfPage;
    },
    ...mapGetters({
      productList: "shop/getProducts"
    })
  },
  mounted() {
    this.path = this.$route.path;
  },
  async asyncData({ store, params }) {
    await store.dispatch("shop/initProduct", params.types);
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/RWD-variables.scss";
.hover {
  position: relative;
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(197, 197, 209, 0.76);
  overflow: hidden;
  width: 100%;
  height: 0%;
  transition: 0.5s ease;
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
  opacity: 1;
}
.hover:hover .overlay {
  height: 100%;
}
.card {
  img {
    height: 20vmax;
    @include phone-width {
      height: 40vh;
    }
  }
}
</style>

