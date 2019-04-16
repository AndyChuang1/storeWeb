<template>
  <div class="col-12">
    <main-header title="最新消息"></main-header>
    <div class="content">
      <div class="news">
        <div class="row">
          <div class="col-auto">
            <h2>永盛堂中藥行官方網站全面更新</h2>
          </div>
          <div class="col-md align-self-end">
            <h6>2018.12.30</h6>
          </div>
        </div>
        <ul>
          <li>
            【永盛堂中藥行官方網站開幕】
            <img :src="require('@/assets/news.gif')" height="42" width="60">
          </li>
          <li>~ 我們提供給您最專業諮詢服務與品質~</li>
          <li>【店鋪地址】：(104)台北市中山區吉林路191號</li>
          <li>【連絡電話】：(02)-2531-0309</li>
          <li>【傳真號碼】：(02)-2531-0278</li>
          <li>【營業時間】：週一至週日 早上10:00~晚上23:00</li>
          <li>【為配合政府法令，本網站僅提供保健食品或一般食品銷售，不可提供中藥材線上銷售，如有需要(請電話聯絡本店客服人員詢問)及親洽本店選購】</li>
        </ul>
      </div>
      <div class="news">
        <div class="row">
          <div class="col-md-auto">
            <h2>優良商號及優良從業人員及台北市中藥商業公會理事</h2>
          </div>
          <div class="col-md align-self-end">
            <h6>2013.04.03</h6>
          </div>
        </div>
        <ol>
          <li>中華民國101年被選拔為優良商號。</li>
          <li>台北市商業會推行商業道德及商場禮貌選拔為優良從業人員。</li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
export default {
  name: "news",
  layout: "main-content",
  data() {
    return {
      newsList: []
    };
  },
  components: {
    MainHeader
  }
};
</script>

<style lang="scss" scoped>

.content {
  text-align: left;
  font-family: "cwTeXKai", serif;
  font-size: 1.25rem
}
.content li {
  margin-bottom: 15px;
}
.news {
  margin-top: 15px;
  border-bottom: 1px solid #bbb;
}
.content {
  ul {
    padding-left: 40px !important;
  }
  ol {
    padding-left: 40px !important;
  }
}
</style>
