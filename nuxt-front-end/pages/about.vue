<template>
  <div class="col-12">
    <div class="maintop">
      <main-header title="關於我們"></main-header>
    </div>
    <div class="content-main">
      <div class="content">
        <p style="margin-top:15px">店鋪地址：(104)台北市中山區吉林路191號</p>
        <p>
          連絡電話：<a><a href="tel:+886-2-25310309">(02)-2531-0309</a></a>
        </p>
        <p>傳真號碼：(02)-2531-0278</p>
        <p>營業時間：週一至週日 早上10:00~晚上23:00</p>
      </div>
      <!-- <div id="map" style="height:55vh"></div> -->
      <leaflet-map></leaflet-map>
      <div class="contentPart2">
        <p class="P_header">【交通工具】:</p>
        <p>
          ＊捷
          運:【行天宮站4號出口】松江路與錦州街口西北隅，右轉經錦卅街到吉林路口左轉步行約5分鐘，【
          85度Ｃ】隔壁即可到達。
        </p>
        <p>
          ＊捷運：【行天宮1號出口】右轉民生東路行走至吉林路再右轉約5分鐘即可到達。
        </p>
        <p>
          ＊公
          車:【518】、【638】、【226】、【290】、【46】坐到【中山老人住宅站】下車由民生東路左轉至吉林路步行約3分鐘即可到達。
        </p>
        <p>＊公 車:【665】到【民生東路口】下車步行吉林路約2分鐘即可到達。</p>
        <p>＊市民小巴:【9】到【民生東路口】下車步行吉林路約2分鐘即可到達。</p>
      </div>
      <div class="aboutcontent">
        <h1>永盛堂中藥行</h1>
        <p>
          ＊位於【台北市中山區吉林路191號】，源於＊【永和市竹林路－【宏安堂蔘藥行】，傳承中醫藥世家藥業技術，【民國75年－西元1987年】至今開業已逾數十寒載。本店鋪開業迄今一直秉持著【用心服務】、【專業為先】、【品質第一】為念，並以符合
          消費者需求的中心思想來經營企業，並為持續為【追求創新】與【優良產品】品質努力。以傳承中醫藥世家
          的用藥專業【人才】、【安全】、【品質】至上的理念，讓消費者得以安心使用本店鋪產品，多年來已獲得廣大消費者信賴與支持！
        </p>
        <p>【營業項目】：</p>
        <p>
          一、韓國正官庄高麗參，開城高麗人蔘，新義州北人蔘，韓太極人蔘，順天堂，萬國，三才堂，勸奉堂，生春堂，科達，勝昌，港香蘭，漢田生技，良一生技，中天生技，長庚生技，立園生技，立康生技，東宇生技，葛蘭蒂生技，萬國生技，六鵬生技，瑞康生技，順天堂生技，勸奉堂生技，新化農會。
        </p>
        <p>二、代客煎藥、代客切蔘、代客送藥、代客研磨藥粉、代客茶包分裝。</p>
        <p>三、龜鹿二仙膠、做月子藥膳調理、長大人藥膳、藥膳補品。</p>
        <p>四、中藥材料、南北貨專區、年節商品、週邊商品、煎煮藥機器。</p>
        <p>
          五、花草茶系列、生物科技保健食品、香料滷包、沖泡五穀、養生飲品、養生藥膳燉包。
        </p>
        <p>
          六、野泡粉光蔘、高級燕窩專賣，冬蟲夏草，西洋蔘，東洋蔘，鹿茸、安南官桂、各種高級養生食材。
        </p>
        <p>【營業時間】：</p>
        <p>週一~週日 上午10：00~晚上11：00</p>
        <p>
          ＊~【為配合政府法令，本網站僅提供保健食品或一般食品銷售，不可提供中藥材線上銷售，如有需要
          (請電話聯絡本店客服人員詢問)及親洽本店選購】~
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
import LeafletMap from "@/components/leafletMap";
export default {
  name: "about",
  layout: "main-content",
  components: {
    MainHeader,
    LeafletMap
  },
  data() {
    return {
      msg: "About us"
    };
  },
  mounted() {
    // this.mapinit();
  },
  methods: {
    mapinit() {
      var contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">永盛堂中藥行</h1>' +
        '<div id="bodyContent">' +
        "<p>位於【台北市中山區吉林路191號】，源於【永和市竹林路－【宏安堂蔘藥行】，傳承中醫藥世家藥業技術" +
        "，【民國75年－西元1987年】至今開業已逾數十寒載。本店鋪開業迄今一直秉持著【用心服務】、【專業為先】、【品質第一】為念，並以符合 消費者需求的中心思想來經營企業，" +
        "並為持續為【追求創新】與【優良產品】品質努力。 " +
        "以傳承中醫藥世家的用藥專業【人才】、【安全】、【品質】至上的理念，讓消費者得以安心使用本店鋪產品，多年來已獲得廣大消費者信賴與支持！" +
        "</p>" +
        "</div>" +
        "</div>";
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var uluru = { lat: 25.059768, lng: 121.530394 };
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "永盛堂中藥行"
      });
      marker.addListener("click", function() {
        infowindow.open(map, marker);
      });
    }
  },
  head() {
    return {
      title: "永盛堂中藥行-關於我們",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `店鋪地址：(104)台北市中山區吉林路191號|連絡電話：(02)-2531~0309|營業時間：週一至週日 早上10:00~晚上23:00 |
        【營業項目】：一、韓國正官庄高麗參，開城高麗人蔘，新義州北人蔘，韓太極人蔘，順天堂，萬國，三才堂，勸奉堂，生春堂，科達，勝昌，港香蘭，漢田生技，良一生技，中天生技，長庚生技，立園生技，立康生技，東宇生技，葛蘭蒂生技，萬國生技，六鵬生技，瑞康生技，順天堂生技，勸奉堂生技，新化農會。

二、代客煎藥、代客切蔘、代客送藥、代客研磨藥粉、代客茶包分裝。

三、龜鹿二仙膠、做月子藥膳調理、長大人藥膳、藥膳補品。

四、中藥材料、南北貨專區、年節商品、週邊商品、煎煮藥機器。

五、花草茶系列、生物科技保健食品、香料滷包、沖泡五穀、養生飲品、養生藥膳燉包。

六、野泡粉光蔘、高級燕窩專賣，冬蟲夏草，西洋蔘，東洋蔘，鹿茸、安南官桂、各種高級養生食材。`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#banner {
  overflow: hidden;
  background-image: url("../assets/bannerM.png");
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

.content {
  margin-bottom: 25px;
}
#map {
  width: 100%;
  height: 600px;
  background-color: grey;
}
.contentPart2 {
  text-align: left;
  border-bottom: 3px solid #808080;
}
.contentPart2 .P_header {
  margin-top: 15px;
}

.aboutcontent {
  text-align: left;
  padding-bottom: 4rem;
  h1 {
    margin-top: 15px;
  }
}
.content-main {
  font-family: "cwTeXKai", serif;
  font-size: 1.25rem;
}
</style>
