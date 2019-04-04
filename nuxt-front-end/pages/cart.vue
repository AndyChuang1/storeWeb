<template>
  <div id="cart" class="col-12">
    <main-header title="您的購物車"></main-header>
    <div class="cart-block mb-3">
      <div class="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">名稱</th>
              <th scope="col">價錢</th>
              <th scope="col">數量</th>
              <th scope="col">取消</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart,index) in CartList" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{cart.title}}</td>
              <td>{{cart.price}}</td>
              <td>
                <select @change="QunChange($event,cart.title)">
                  <option v-for="(n,index) in 10" :key="index" :value="n">{{n}}</option>
                </select>
              </td>
              <td>
                <a id="cancle" @click="cancel">
                  <svg style="height: 25px; width: 25px;">
                    <image xlink:href="../assets/img/cancle.svg"></image>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row justify-content-end">
        <div class="col-4">
          <h2>總計：{{total}} 元</h2>
        </div>
      </div>
    </div>

    <div class="clintInfo">
      <main-header title="購買人資料"></main-header>
      <form class="needs-validation" novalidate>
        <div class="container pt-2">
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label for="validationTooltip01">姓名</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                placeholder="Name"
                value
                required
              >
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">身份證字號</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                placeholder="ID number"
                value
                required
              >
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">電話</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                placeholder="Phone"
                value
                required
              >
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">行動電話</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                placeholder="Mobile phone"
                value
                required
              >
              <div class="valid-tooltip">Looks good!</div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationTooltip03">送貨地址</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip03"
                placeholder="Address"
                required
              >
              <div class="invalid-tooltip">Please provide a valid city.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">郵遞區號</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip05"
                placeholder="Zip"
                required
              >
              <div class="invalid-tooltip">Please provide a valid zip.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">付款方式</label>
              <select class="custom-select">
                <option value="1">貨到付款</option>
                <option value="2">銀行匯款</option>
                <option value="3">ATM轉帳</option>
              </select>
            </div>
          </div>
          <div class="form-row justify-content-between">
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">收貨時間</label>
              <select class="custom-select">
                <option value="1">08:00~12:00</option>
                <option value="2">12:00~17:00</option>
                <option value="3">17:00~20:00</option>
              </select>
            </div>
            <button class="btn btn-primary col-md-1" type="submit">送出訂單</button>
          </div>
        </div>
        <!-- <main-header title="收件人資料"></main-header> -->
        <!-- <div class="container pt-2 mb-5">
          <div class="form-row">
            <div class="col-md-12 mb-3">
              <span>資料是否同上 :</span>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline1"
                  class="custom-control-input"
                >
                <label class="custom-control-label" for="customRadioInline1">是</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  class="custom-control-input"
                >
                <label class="custom-control-label" for="customRadioInline2">否</label>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label for="validationTooltip01">姓名</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                placeholder="Name"
                value
                required
              >
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">身份證字號</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                placeholder="ID number"
                value
                required
              >
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">電話</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                placeholder="Phone"
                value
                required
              >
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">行動電話</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                placeholder="Mobile phone"
                value
                required
              >
              <div class="valid-tooltip">Looks good!</div>
            </div>
          </div>
          <div class="form-row justify-content-center">
            <div class="col-md-6 mb-3">
              <label for="validationTooltip03">收貨地址</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip03"
                placeholder="Address"
                required
              >
              <div class="invalid-tooltip">Please provide a valid city.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">郵遞區號</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip05"
                placeholder="Zip"
                required
              >
              <div class="invalid-tooltip">Please provide a valid zip.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">收貨時間</label>
              <select class="custom-select">
                <option value="1">08:00~12:00</option>
                <option value="2">12:00~17:00</option>
                <option value="3">17:00~20:00</option>
              </select>
            </div>
             <button class="btn btn-primary" type="submit">送出訂單</button>
          </div>
        </div>-->
      </form>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "cart",
  layout: "main-content",
  data() {
    return {};
  },
  components: {
    MainHeader
  },
  computed: {
    ...mapGetters({
      CartList: "shop/getShoppingCart",
      total: "shop/getCartPriceTotal"
    })
  },
  methods: {
    ...mapActions({
      cancel: "shop/cancelCart",
      changeQun: "shop/addQun"
    }),
    QunChange(event, title) {
      const num = parseInt(event.target.value);
      const payload = {
        title: title,
        num: num
      };
      this.changeQun(payload);
    }
  }
};
</script>
<style lang="scss" scoped>
#cancle {
  cursor: pointer;
}
.cart-block {
  border-bottom: 1px solid gray;
}
</style>

