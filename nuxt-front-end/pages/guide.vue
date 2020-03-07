<template>
  <div id="guide">
    <div class="col-sm">
      <main-header title="購物指南"></main-header>
      <div class="notification" style="color:red">
        <h1>
          為配合政府法令，本網站僅提供保健食品或一般食品銷售，不可提供中藥材線上銷售，如有需要「請電話聯絡本店客服人員詢問」及親洽本店選購
        </h1>
      </div>
      <div class="content">
        <div class="part1">
          <h1>訂購 / 付款 / 配送 流程</h1>
          <ol>
            <li>
              挑選商品： <br />選定了你想購買的商品，請按下該商品旁的
              [加入購物車]鍵。
            </li>
            <li>
              填寫訂購資料：
              <br />請您仔細核對購買清單的品名、金額、數量是否正確無誤，然後再詳細填寫聯絡資料欄位，為了確保交易成功，以及讓商品迅速無誤地寄到您手中，請您務必正確填妥訂購聯絡資料，尤其是收件人中文姓名、電話和寄送地址。本店客服人員將於您訂購後儘速電話與您聯繫確認；另email資料亦務必填寫常用信箱，我們將不定期的通知您好康的購物折扣訊息並可參加本店優惠活動
            </li>
            <li>
              訂購確認：
              <br />在您完成訂購程序後，若於一個工作天內本店客服人員仍未與您聯繫，可能是您的聯絡電話無法撥通。您可逕撥本店聯絡電話確認02-2531-0309，本店客服人員將儘速為您做訂單確認。
            </li>
            <li>
              商品配送 \ 付款方式：
              <br />為保障顧客權益，本店採貨到現金付款方式。於本店電話確認您的訂購後，將於三個工作天內寄送宅急便不含假日天數，並於您收迄訂購貨物後，由宅急便寄送人員向您收取現金貨款。
            </li>
          </ol>
        </div>
        <div class="part2">
          <h1>運費說明</h1>
          <ul>
            <li>
              單筆
              <font color="red">消費滿NT.1000元以上</font
              >可享免運費(限配送同一地點)。
            </li>
            <li>
              單筆消費
              <font color="red">金額滿600元-999元，均酌收60元的運費</font
              >(限配送同一地點)。並由宅急便寄送人員向 您收取現金郵資費用。
            </li>
            <li>
              單筆消費
              <font color="red">金額未達600元，均酌收80元</font
              >的運費(限配送同一地點)。並由宅急便寄送人員向您 收取現金郵資費用。
            </li>
            <li>
              國外地區配送請參考
              <font color="red">中華郵政全球資訊網-國際快捷</font>
              <a
                target="_blank"
                href="https://www.post.gov.tw/post/internet/Postal/index.jsp?ID=2010201"
                >［連結］</a
              >
            </li>
            <li>
              運費報價 :<a
                target="_blank"
                href="https://www.t-cat.com.tw/inquire/timesheet3.aspx"
                >［黑貓］</a
              >
              <br />單位：新台幣(含稅金額)
            </li>
          </ul>
          <div class="deliveryTable">
            <table
              class="table table-bordered"
              style="text-align:center;background-color:white"
            >
              <thead>
                <tr>
                  <td rowspan="2" class="slash">
                    <span
                      style="text-align:right;display:block;font-weight:bold"
                      >規格</span
                    >
                    <span style="text-align:left;display:block;font-weight:bold"
                      >距離</span
                    >
                  </td>
                  <th scope="col" colspan="4">常溫</th>
                  <th scope="col" colspan="3">低溫</th>
                </tr>
                <tr>
                  <td>60cm</td>
                  <td>90cm</td>
                  <td>120cm</td>
                  <td>150cm</td>
                  <td>60cm</td>
                  <td>90cm</td>
                  <td>120cm</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">本島</th>
                  <td>{{ fee.nomal60.main }}</td>
                  <td>{{ fee.nomal90.main }}</td>
                  <td>{{ fee.nomal120.main }}</td>
                  <td>{{ fee.nomal150.main }}</td>
                  <td>{{ fee.low60.main }}</td>
                  <td>{{ fee.low90.main }}</td>
                  <td>{{ fee.low120.main }}</td>
                </tr>
                <tr>
                  <th scope="row">離島</th>
                  <td>{{ fee.nomal60.offshore }}</td>
                  <td>{{ fee.nomal90.offshore }}</td>
                  <td>{{ fee.nomal120.offshore }}</td>
                  <td>{{ fee.nomal150.offshore }}</td>
                  <td>{{ fee.low60.offshore }}</td>
                  <td>{{ fee.low90.offshore }}</td>
                  <td>{{ fee.low120.offshore }}</td>
                </tr>
                <tr>
                  <th scope="row">當日配達加價</th>
                  <td>+{{ fee.nomal60.extra }}</td>
                  <td>+{{ fee.nomal90.extra }}</td>
                  <td>+{{ fee.nomal120.extra }}</td>
                  <td>+{{ fee.nomal150.extra }}</td>
                  <td>+{{ fee.low60.extra }}</td>
                  <td>+{{ fee.low90.extra }}</td>
                  <td>+{{ fee.low120.extra }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="deliveryTable-mobile">
            <table
              class="table table-bordered"
              style="text-align:center;background-color:white"
            >
              <thead>
                <tr>
                  <th colspan="5">常溫</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">規格</th>
                  <td width="20%">60cm</td>
                  <td width="20%">90cm</td>
                  <td width="20%">120cm</td>
                  <td width="20%">150cm</td>
                </tr>
                <th scope="row">本島</th>
                <td>{{ fee.nomal60.offshore }}</td>
                <td>{{ fee.nomal90.offshore }}</td>
                <td>{{ fee.nomal120.offshore }}</td>
                <td>{{ fee.nomal150.offshore }}</td>
                <tr>
                  <th scope="row">離島</th>
                  <td>{{ fee.nomal60.offshore }}</td>
                  <td>{{ fee.nomal90.offshore }}</td>
                  <td>{{ fee.nomal120.offshore }}</td>
                  <td>{{ fee.nomal150.offshore }}</td>
                </tr>
              </tbody>
            </table>
            <table
              class="table table-bordered"
              style="text-align:center;background-color:white"
            >
              <thead>
                <tr>
                  <th colspan="5">低溫</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">規格</th>
                  <td width="20%">60cm</td>
                  <td width="20%">90cm</td>
                  <td width="20%">120cm</td>
                </tr>
                <th scope="row">本島</th>
                <td>{{ fee.low60.main }}</td>
                <td>{{ fee.low90.main }}</td>
                <td>{{ fee.low120.main }}</td>
                <tr>
                  <th scope="row">離島</th>
                  <td>{{ fee.low60.offshore }}</td>
                  <td>{{ fee.low90.offshore }}</td>
                  <td>{{ fee.low120.offshore }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>說明:</p>
          <ol>
            <li>
              離島：係指台灣本島與外島間的配送，目前離島現指澎湖、金門、馬祖、綠(可配送範圍依官網公告為主)，雙方同意日後服務範圍如有擴大時，應另行通知。
            </li>
            <li>
              本明細之SIZE區分係以單件包裹之長度、寬度及高度總和計算之，且各規格之單件重量限制以20kg為上限。
            </li>
            <li>低溫冷藏需預冷6小時以上、冷凍需預冷12小時以上方可交寄。</li>
          </ol>
        </div>
        <div class="part3">
          <h1>商品退換貨辦理</h1>
          <ul>
            <li style="margin-bottom:25px">
              退貨之商品
              <font color="red"
                >必須於取貨一週內退回，且商品必須包裝完整，已拆封之商品則恕不接受退貨或客製化商品不接受退換</font
              >﹝瑕疵商品除外﹞。
            </li>
            <li>
              如有【
              <font color="red">需換貨之郵資</font>】由黑貓宅急便向你取貨,【
              <font color="red">請包裝完整</font>】,【
              <font color="red">只接受退換貨一次辦理(限同一筆訂單)</font
              >】,可接受者請再下單。
            </li>
          </ul>
        </div>
        <div class="part4">
          <h1>其他注意事項</h1>
          <ul>
            <li>
              宅配到府一般為【
              <font color="red">1-3天內(不含假曰天數)</font
              >】送貨到您指定的地點。除特殊原因外，一般商品於【
              <font color="red">確認訂單後6個工作天內可收到商品</font>】;
              訂製品、離島及偏遠地區除外。
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
export default {
  name: "guide",
  layout: "main-content",
  data() {
    return {};
  },
  components: {
    MainHeader
  },
  asyncData({ store, app, params }) {
    return app.$axios
      .get("/api/deliver")
      .then(result => {
        let fee = {};
        const data = result.data;
        data.forEach(deliverItem => {
          const type = deliverItem.type;
          const main = deliverItem.main;
          const offshore = deliverItem.offshore;
          const extra = deliverItem.extra;
          fee[type] = {};
          // console.log(type, main, offshore, extra);
          Object.assign(fee[type], { main, offshore, extra });
        });
        return { fee };
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  head() {
    return {
      title: "永盛堂中藥行-購物指南",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `永盛堂中藥行，提供中藥材，順天本草、勝昌食品、蜜餞、保健食品等等周邊商品。【電話】2531-0309 【地址】中山區吉林路191號."訂購/付款/配送流程 | 運費說明| 商品退換貨辦理|`
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/RWD-variables.scss";

#guide {
  font-family: "cwTeXKai", serif;
  font-size: 1.25rem;
}
.deliveryTable-mobile {
  @media screen and (min-width: $phone-media) {
    display: none;
  }
}
.deliveryTable {
  th {
    font-size: 1rem;
  }
  @media screen and (max-width: $phone-media) {
    display: none;
  }
}
.notification {
  border-bottom: 3px solid #808080;
  h1 {
    margin-top: 25px;
    margin-bottom: 25px;
    @include phone-width {
      font-size: 1.5rem;
    }
  }
}

.content {
  text-align: left;
  h1 {
    margin-top: 25px;
    margin-bottom: 25px;
    @include phone-width {
      font-size: 2rem;
    }
  }
}

.part1 {
  border-bottom: 3px solid #808080;
  li {
    margin-bottom: 25px;
  }
}

.part2 {
  border-bottom: 3px solid #808080;
  li {
    margin-bottom: 25px;
  }
}

table {
  td.slash {
    border: 1px solid silver;
    position: relative;
    background-image: linear-gradient(
      to bottom left,
      transparent calc(50% - 1px),
      gray,
      transparent calc(50% + 1px)
    );
    //  background-image: -ms-linear-gradient(
    //   bottom left,
    //   transparent calc(50% - 1px),
    //   gray,
    //   transparent calc(50% + 1px)
    // );
  }
}

.part3 {
  border-bottom: 3px solid #808080;
}
.part4 {
  padding-bottom: 4rem;
}
ul {
  padding-left: 40px !important;
}
ol {
  padding-left: 40px !important;
}
</style>
