<template>
  <div class="container-fluid" id="main">
    <div class="row">
      <!-- <div class="col-1" style="overflow: auto;">
        <ul class="nav flex-sm-column" >
          <li class="nav-item">
            
              <router-link class="nav-link" :to="'/main/catalog/'+category.url" v-for="category in lists">{{category.product}}</router-link>

          </li>
        </ul>
      </div> -->
      <div id="Mainbackground" class="col-12">
        <keep-alive include="cart">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "ProductList",
  data() {
    return {
      result: "",
      lists: [
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
  methods: {
    slection() {
      alert("結果");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Mainbackground {
  background-color: #eaebeb;
}
.nav-link {
  margin-bottom: 19px;
}
.col-1 {
  padding: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000000;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
  background-color: #555;
  color: white;
}
.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}
</style>
