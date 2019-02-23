<template>
  <div id="main-banner">
    <div id="banner"
      class="row">
      <div class="col-12">
        <div class="bannerText">
          <h1 class="title">永盛堂中藥行</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/carousel.css";
import "@/assets/css/animate.css";

// import "@/assets/javascripts/jquery.lettering.js";
// import textillate from "@/plugins/libs/jquery.textillate.js";

export default {
  name: "mainbanner",
  mounted: function() {
    $(".title").textillate({
      in: { effect: "fadeInLeftBig", delay: 200, delayScale: 2.5 },
      loop: false
    });
  }
};
</script>

<style scoped>
#main-banner{
  margin-top: 3rem
}
#banner {
  overflow: hidden;
  background-image: url("~assets/bannerM.png");
  height: 180px;
}
.bannerText {
  font-family: "DFKai-sb";
  font-weight: bolder;
}
.title {
  padding-left: 250px;
  padding-top: 13px;
  font-size: 55px;
}
</style>
