<template>
  <div class="hello">
    <div
      id="myCarousel"
      class="carousel slide"
      data-ride="carousel"
      data-interval="600000"
    >
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="first-slide full"
            :src="require('@/assets/bannerH2.jpg')"
            alt="First slide"
          />
          <img
            class="first-slide mobile"
            :src="require('@/assets/bannerMobile.jpg')"
            alt="First slide"
          />
          <div class="container">
            <div class="carousel-caption text-left" style="color:black">
              <h1>因為堅持，才有好品質</h1>
              <p>
                我們在於產品上的選擇相當謹慎，在於產品上的選材是否純正道地？是否有無添加硫磺？產品上炮製是否有無依照炮製。很多消費者可能不知道，品質、產地、炮製等，都會大大影響其效能。我們嚴選，給您最天然，最安心的品質，讓您買的放心，用的安心。
              </p>
              <!-- <p><a class="btn btn-lg btn-primary"
                  href="#"
                  role="button"
              >Sign up today</a></p>-->
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="second-slide"
            :src="require('@/assets/bannerH2.jpg')"
            alt="Second slide"
          />
          <img
            class="second-slide mobile"
            :src="require('@/assets/bannerMobile.jpg')"
            alt="Second slide"
          />

          <div class="container">
            <div class="carousel-caption text-left" style="color:black">
              <h1>開放式陳列、價格透明</h1>
              <p>
                很多顧客走進店裡，眼前明亮的空間，開放式陳列，透明化的價格，包裝上明確標示，親切的服務態度‧‧這一切也對中藥行刻板印象大大從此改變。沒有錯，我們歷經多年的時間不段的改變，軟硬體設備和裝潢陳列更新等，將帶給您不一樣的體會。
              </p>
              <!-- <p><a class="btn btn-lg btn-primary"
                  href="#"
              role="button">Learn more</a></p>-->
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="third-slide"
            :src="require('@/assets/bannerH2.jpg')"
            alt="Third slide"
          />
          <img
            class="third-slide mobile"
            :src="require('@/assets/bannerMobile.jpg')"
            alt="Third slide"
          />
          <div class="container">
            <div class="carousel-caption text-left" style="color:black">
              <h1>優良商號及優良從業人員及台北市中藥商業公會理事</h1>
              <p>1. 中華民國101年被選拔為優良商號。</p>
              <p>2. 台北市商業會推行商業道德及商場禮貌選拔為優良從業人員。</p>
              <!-- <p><a class="btn btn-lg btn-primary"
                  href="#"
              role="button">Browse gallery</a></p>-->
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container marketing">
      <div class="row">
        <heading
          Head="Facebook"
          Pcontents="想知道更多?我們也有Facebook粉絲團，不定期也會在上面公布最新活動與消息，近期期待!!也別忘了幫我們粉絲團按個讚，搶先知道最新消息唷!"
          :img="require('@/assets/fb.png')"
          link="https://www.facebook.com/%E6%B0%B8%E7%9B%9B%E5%A0%82%E4%B8%AD%E8%97%A5%E8%A1%8C-255181264557655/"
          size="140"
        ></heading>
        <heading
          Head="Line"
          Pcontents="LINE@永盛堂中藥行，歡迎立即加入。立即詢問產品與服務，價格與配送方式。提供您本行最迅速與最有品質的服務~期待您的加入!"
          :img="require('@/assets/line.png')"
          link="https://line.me/ti/p/eQrN7r7D3I"
          btnContent="加入好友"
          size="175"
        ></heading>
        <heading
          Head="Maps"
          Pcontents="想要親訪店裡來購買您所需的中藥材或保健食品嗎?請點擊詳細資訊，就可得知店裡所在位置哦!我們誠摯的歡迎你的光臨，不吝指教!也歡迎來電詢問~"
          :img="require('@/assets/maps.png')"
          link="/about"
          size="140"
        ></heading>
      </div>
    </div>
    <!-- /.row -->
    <!-- <footer class="container"
      id="footer">
      <p>&copy; 永盛堂中藥行版權所有 &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>-->
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
<style lang="scss" scoped>
@import "~assets/scss/RWD-variables.scss";

.carousel-caption {
  font-family: "Times New Roman", KaiTi, STKaiti, DFKai-sb;
  padding-left: 3rem;
  @include phone-width {
    top: 35%;
    padding-left: 0rem;
  }
  h1 {
    font-weight: 700;
    @include phone-width {
      font-size: 1.5rem;
    }
    @include phoneSmall-width {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  p {
    @include phone-width {
      display: none;
    }
  }
}
.carousel-item {
  .full {
    display: block;
  }
  .mobile {
    display: none;
  }
  @include phone-width {
    .full {
      display: none;
    }
    .mobile {
      display: block;
    }
    height: 13rem;
  }
}
.marketing {
  font-family: "Times New Roman", KaiTi, STKaiti, DFKai-sb;
  font-size: 1.25rem;
}
</style>
