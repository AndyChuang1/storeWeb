<template>
  <div id="main-banner">
    <div id="banner" class="row">
      <div class="col-auto">
        <div class="bannerText">
          <h1 class="title">永盛堂中藥行</h1>
        </div>
      </div>
    </div>
    </div>

</template>
<!--<script type="text/javascript"  src="../assets/javascripts/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="../assets/javascripts/jquery.lettering.js"></script>
<script type="text/javascript" src="../assets/javascripts/jquery.textillate.js"></script>-->
<script>
  import "@/assets/css/carousel.css";
  import "@/assets/css/animate.css";

  import "@/assets/javascripts/jquery-3.2.1.min.js";
  import "@/assets/javascripts/jquery.lettering.js";
  import "@/assets/javascripts/jquery.textillate.js";
  
  export default {
    name: 'mainbanner',
    data() {
      return {
        msg: 'mainbanner'
      }
    },
    mounted: function () {
      $('.title').textillate(
        {
          in: { effect: 'fadeInLeftBig', delay: 200, delayScale: 2.5, },
          loop: false
        }
      );

    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner {
    overflow: hidden;
    background-image: url("../assets/bannerM.png");
    height: 180px
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
