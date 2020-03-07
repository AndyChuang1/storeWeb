<template>
  <div id="main-banner">
    <div id="banner" class="row">
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

<style lang="scss" scoped>
@import "~assets/scss/RWD-variables.scss";
#main-banner {
  margin-top: 3rem;
  font-family: STKaiti, DFKai-sb, Arial;
  font-weight: 600;
}
#banner {
  overflow: hidden;
  background-image: url("~assets/bannerM.png");
  height: 180px;
}
.bannerText {
  font-weight: bolder;
}
.title {
  padding-left: 250px;
  padding-top: 13px;
  font-size: 55px;
  @include phone-width {
    display: none;
  }
}
</style>
