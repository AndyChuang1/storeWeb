<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="main-background col-12">
          <mainbanner></mainbanner>
          <div class="row">
            <div class="products col-12">
              <main-header title="產品目錄">
                <ul class="nav nav-pills">
                  <li class="nav-item" v-for="(category,index) in catalogList" :key="index">
                    <router-link
                      :class="[{active:path=='/products/'+category.url},'nav-link']"
                      :to="'/products/'+category.url"
                    >{{category.product}}</router-link>
                  </li>
                </ul>
              </main-header>
              <nuxt/>
              <div
                v-if="path!=='/products/'"
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
          </div>
        </div>
      </div>
      <mainfooter></mainfooter>
    </div>
  </div>
</template>
<script>
import navbar from "~/components/navbar.vue";
import mainfooter from "~/components/footer.vue";
import mainbanner from "~/components/mainBanner.vue";
import MainHeader from "@/components/mainheader";

export default {
  components: {
    navbar,
    mainfooter,
    mainbanner,
    MainHeader
  },
  data() {
    return {
      catalogList: [
        { product: "所有產品", url: "" },
        { product: "特價商品", url: "sales" },
        { product: "養生食材區", url: "health" },
        { product: "藥膳燉包區", url: "package" },
        { product: "養生飲品區", url: "drink" },
        { product: "沖泡式五穀", url: "grain" },
        { product: "生物科技類", url: "bio" },
        { product: "GMP產品", url: "gmp" },
        { product: "坐月子藥膳", url: "pm" },
        { product: "蜜餞食品區", url: "succade" },
        { product: "南北什貨曲", url: "goods" },
        { product: "香料滷包類", url: "pouch" },
        { product: "周邊商品區", url: "accessory" },
        { product: "外用商品區", url: "external" },
        { product: "代工服務區", url: "oem" }
      ],
      path: ""
    };
  },
  mounted() {
    this.path = this.$route.path;
  },
  watch: {
    $route(to, from) {
      this.path = this.$route.path;
      console.log(this.path);
    }
  },
  methods: {}
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #eaebeb;
  height: 100%;
}
body {
  background-color: #eaebeb;
  position: relative;
  min-height: 100%;
  /* padding-bottom: 3rem; */
}
.content-statement{
  border: 2px solid #eac100;
    margin-bottom: 3rem;

}
</style>
