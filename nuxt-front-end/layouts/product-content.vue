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
                  <li class="nav-item">
                    <router-link
                      :class="[
                        { active: path == '/products' || path == '/products/' },
                        'nav-link'
                      ]"
                      :to="'/products/'"
                      >所有產品區</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :class="[
                        { active: path == '/products/特價商品區' },
                        'nav-link'
                      ]"
                      :to="'/products/特價商品區'"
                      >特價商品區</router-link
                    >
                  </li>
                  <li
                    class="nav-item"
                    v-for="(category, index) in catalogList"
                    :key="index"
                  >
                    <router-link
                      :class="[
                        { active: path == '/products/' + category.name },
                        'nav-link'
                      ]"
                      :to="'/products/' + category.name"
                      >{{ category.name }}</router-link
                    >
                  </li>
                </ul>
              </main-header>
              <nuxt />
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
        { name: "養生食材區", rowid: 2 },
        { name: "藥膳燉包區", rowid: 3 },
        { name: "養生飲品區", rowid: 4 },
        { name: "沖泡式五穀", rowid: 5 },
        { name: "生物科技類", rowid: 6 },
        { name: "GMP產品", rowid: 7 },
        { name: "坐月子藥膳", rowid: 8 },
        { name: "蜜餞食品區", rowid: 9 },
        { name: "南北什貨曲", rowid: 10 },
        { name: "香料滷包類", rowid: 11 },
        { name: "周邊商品區", rowid: 12 },
        { name: "外用商品區", rowid: 13 },
        { name: "代工服務區", rowid: 14 }
      ],
      path: null
    };
  },
  created() {
    this.path = this.$route.path;
    this.initTypes();
  },
  methods: {
    initTypes() {
      this.$axios
        .get("/api/productTypes", {
          params: {
            types: "all"
          }
        })
        .then(response => {
          const data = response.data;
          this.catalogList = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch: {
    $route(to, from) {
      this.path = this.$route.path;
      // console.log(this.path);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/RWD-variables.scss";

body {
  background-color: #eaebeb;
  position: relative;
  min-height: 100%;
  font-family: STKaiti, DFKai-sb;
  /* padding-bottom: 3rem; */
}
.content-statement {
  border: 2px solid #eac100;
  margin-bottom: 3rem;
}
.title-text {
  @include phone-width {
    .nav {
      justify-content: center;
    }
  }
}
</style>
