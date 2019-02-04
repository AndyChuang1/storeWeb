<template>
  <div id="receipe">
    <main-banner></main-banner>
    <div class="row">
      <div class="col">
        <main-header title="產品目錄"></main-header>
      </div>
      </div>
    <div class="row justify-content-center">
      <div class="card col-4 mt-3 ml-3" style="width: 18rem;" v-for="(recipt,index) in receiptlist " :key='index'>
        <img class="card-img-top" :src="recipt.Imag" alt="Card image cap" width="100" height="400">
        <div class="card-body">
          <h5 class="card-title">{{recipt.Title}}</h5>
          <p class="card-text">{{recipt.Content}}</p>
          </div>
      </div>
      </div>
   
   </div>
</template>
<script>
  import "@/assets/css/carousel.css";
  import MainBanner from '@/components/MainBanner.vue'
  import MainHeader from '@/components/mainheader'
  export default {
    name: 'Recipe',
    data() {
      return {
        receiptlist: [
          {
          Title: "枸杞茶",
          Content: "枸杞十幾粒，加熱水沖泡，早餐與晚餐前各喝一杯，連續喝三個月。枸杞子，能滋腎、強壯筋骨，養肝、明目、潤肺生精，幫助記憶。",
          Imag: require('../assets/img/receipt1.jpg')
        }, {
            Title: "生脈飲",
            Content: "人參3錢、麥門冬2錢、五味子5分，以300cc熱水煮沸，或將滾水倒入保溫杯後加蓋悶10至20分鐘即可。",
          Imag: require('../assets/img/receipt2.jpg')
          }, {
            Title: "人參黃耆飲",
            Content: "人參3錢、黃耆3錢、甘草5分，以300cc熱水沖泡後飲用。",
            Imag: require('../assets/img/receipt3.jpg')
        }, {
            Title: "當歸補血湯",
            Content: "當歸1錢、黃耆5錢、枸杞3錢、紅棗3顆，以500cc清水燉煮約10至20分鐘即可。",
          Imag: require('../assets/img/receipt4.jpg')
        }
        ]
      }
    },
    components: {
      MainBanner,MainHeader
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
