<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a href="/" class="navbar-brand" style="font-weight:  bolder;">
        <img src="@/assets/Storelogo.png" width="34" height="34" />永盛堂中藥行
      </a>
      <div id="shopping-cart">
        <router-link class="nav-link" to="/cart">
          <img src="@/assets/img/shopping_cart.png" width="20" height="20" />({{
            getShoppingCartTotal
          }})</router-link
        >
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li :class="[{ active: $route.path == '/' }, 'nav-item']">
            <!--<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li :class="[{ active: $route.path == '/news' }, 'nav-item']">
            <router-link class="nav-link" to="/news">最新消息</router-link>
          </li>
          <li :class="[{ active: $route.path == '/about' }, 'nav-item']">
            <router-link class="nav-link" to="/about">關於我們</router-link>
          </li>
          <li :class="[{ active: $route.path == '/guide' }, 'nav-item']">
            <router-link class="nav-link" to="/guide">購物指南</router-link>
          </li>
          <li
            :class="[
              { active: $route.path.split('/')[1] == 'products' },
              'nav-item'
            ]"
          >
            <router-link class="nav-link" to="/products">產品目錄</router-link>
          </li>

          <li :class="[{ active: $route.path == '/cart' }, 'nav-item']">
            <router-link class="nav-link" to="/cart"
              >購物車 ({{ getShoppingCartTotal }})
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ getShoppingCartTotal: "shop/getShoppingCartTotal" })
  },
  mounted() {
    // console.log(mapGetters)
    $(".nav-link").click(function() {
      $("#navbarCollapse").removeClass("show");
    });
  }
};
</script>

<style lang="scss">
@import "~assets/scss/RWD-variables.scss";

#shopping-cart a {
  color: white;
  display: none;
}

@media (max-width: 575.98px) {
  #shopping-cart a {
    display: initial;
  }
}
.navbar-brand {
  @include phoneSmall-width() {
    font-size: 1rem;
  }
}
</style>
