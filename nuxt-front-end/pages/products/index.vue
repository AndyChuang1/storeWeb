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
            <img class="card-img-top" :src="urlConvert(product.path)" alt>
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
      <div class="col-auto mb-5">
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
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "products",
  layout: "product-content",
  data() {
    return {
      page: 1,
      countOfPage: 8,
      pageTexts: {
        texts: {
          count: "",
          first: "First",
          last: "Last"
        }
      },
      listTest: ""
    };
  },
  components: {
    MainHeader
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
  mounted() {},
  async asyncData({ store }) {
    await store.dispatch("shop/initProduct", "all");
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

