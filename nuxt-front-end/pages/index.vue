<template>
  <div class="hello"
    style="font-family:'Microsoft JhengHei'">
    <div id="myCarousel"
      class="carousel slide"
      data-ride="carousel"
      data-interval="600000">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel"
          data-slide-to="0"
          class="active"></li>
        <li data-target="#myCarousel"
          data-slide-to="1"></li>
        <li data-target="#myCarousel"
          data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">

          <img class="first-slide"
            :src="require('@/assets/bannerH2.png')"
            alt="First slide">
          <div class="container">
            <div class="carousel-caption text-left"
              style="color:black">

              <h1>因為堅持，才有好品質</h1>
              <p>我們在於產品上的選擇相當謹慎，在於產品上的選材是否純正道地？是否有無添加硫磺？產品上炮製是否有無依照炮製。很多消費者可能不知道，品質、產地、炮製等，都會大大影響其效能。我們嚴選，給您最天然，最安心的品質，讓您買的放心，用的安心。
              </p>
              <p><a class="btn btn-lg btn-primary"
                  href="#"
                  role="button"
                  style="float:right">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="second-slide"
            :src="require('@/assets/bannerH2.png')"
            alt="Second slide">
          <div class="container">
            <div class="carousel-caption"
              style="color:black">
              <h1>開放式陳列、價格透明化</h1>
              <p>很多顧客走進店裡，眼前明亮的空間，開放式陳列，透明化的價格，包裝上明確標示，親切的服務態度‧‧這一切也對中藥行刻板印象大大從此改變。沒有錯，我們歷經多年的時間不段的改變，軟硬體設備和裝潢陳列更新等，將帶給您不一樣的體會。</p>
              <p><a class="btn btn-lg btn-primary"
                  href="#"
                  role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="third-slide"
            :src="require('@/assets/bannerH2.png')"
            alt="Third slide">
          <div class="container">
            <div class="carousel-caption text-left"
              style="color:black">
              <h1>優良商號及優良從業人員及台北市中藥商業公會理事</h1>
              <p>1. 中華民國101年被選拔為優良商號。</p>
              <p>2. 台北市商業會推行商業道德及商場禮貌選拔為優良從業人員。</p>
              <p><a class="btn btn-lg btn-primary"
                  href="#"
                  role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev">
        <span class="carousel-control-prev-icon"
          aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next">
        <span class="carousel-control-next-icon"
          aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container marketing">
      <div class="row">
        <heading Head="Facebook"
          Pcontents="想知道更多?我們也有Facebook粉絲團，不定期也會在上面公布最新活動與消息，近期期待!!也別忘了幫我們粉絲團按個讚，搶先知道最新消息唷!"
          :img="require('@/assets/fb.png')"
          link="https://www.facebook.com/%E6%B0%B8%E7%9B%9B%E5%A0%82%E4%B8%AD%E8%97%A5%E8%A1%8C-255181264557655/"></heading>
        <heading Head="保健小妙方"
          Pcontents="枸杞茶：枸杞十幾粒，加熱水沖泡，早餐與晚餐前各喝一杯，連續喝三個月。枸杞子，能滋腎、強壯筋骨，養肝、明目、潤肺生精，幫助記憶"
          :img="require('@/assets/me.jpg')"
          link="/#/main/recipe"></heading>
        <heading Head="Maps"
          Pcontents="想要親訪店裡來購買您所需的中藥材或保健食品嗎?請點擊詳細資訊，就可得知店裡所在位置哦!我們誠摯的歡迎你的光臨，不吝指教!也歡迎來電詢問~"
          :img="require('@/assets/maps.png')"
          link="/#/main/about"></heading>
      </div>
    </div><!-- /.row -->
    <!-- <footer class="container"
      id="footer">
      <p>&copy; 永盛堂中藥行版權所有 &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer> -->
    <!--<test head1="Title1" head2="Title2" head3="Title3" content1="YA" content2="YA2" content3="Ya3" ></test>-->
  </div>
</template>

<script>
import "@/assets/css/carousel.css";
import heading from "@/components/heading";

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App!!"
    };
  },
  components: {
    heading
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
