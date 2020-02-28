<template>
  <div id="map-wrap" style="height: 55vh">
    <no-ssr>
      <l-map :zoom="16" :center="[25.059768, 121.530394]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker name="test" :lat-lng="[25.059822, 121.530391]">
          <l-popup
            ><h2 class="title">永盛中藥行</h2>
            <div class="content">
              <img
                :src="require('@/assets/store.jpg')"
                alt="Store"
                width="250px"
              />
              <p style="margin-top:15px">
                店鋪地址：(104)台北市中山區吉林路191號
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/%E6%B0%B8%E7%9B%9B%E5%A0%82%E4%B8%AD%E8%97%A5%E8%A1%8C/@25.059759,121.530395,15z/data=!4m5!3m4!1s0x0:0x546a1886519225ea!8m2!3d25.059759!4d121.530395"
                  >導航</a
                >
              </p>
              <p>
                連絡電話：<a
                  ><a href="tel:+886-2-25310309">(02)-2531-0309</a></a
                >
              </p>
              <p>傳真號碼：(02)-2531-0278</p>
              <p>營業時間：週一至週日 早上10:00~晚上22:00</p>
            </div></l-popup
          >
        </l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>
<script>
export default {
  name: "leafletMap",
  data() {
    return {
      msg: "© Copyright 2017, Geker Corporation"
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
