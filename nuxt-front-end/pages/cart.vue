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
                    <image xlink:href="../assets/img/cancle.svg" />
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
      <form class="needs-validation mb-4" @submit.prevent="checkForm" novalidate>
        <div class="container pt-2">
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label for="validationTooltip01">
                <span class="requireMark">*</span>姓名
              </label>
              <input
                type="text"
                :class="['form-control',{'is-invalid':errors.name.valid==false}]"
                id="validationTooltip01"
                placeholder="Name"
                required
                v-model="formData.name"
              />
              <div v-show="errors.name.valid==false" class="invaild-msg">{{errors.name.msg}}</div>
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
                v-model="formData.idCard"
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">室內電話</label>
              <input
                type="text"
                :class="['form-control']"
                id="validationTooltip02"
                placeholder="Phone"
                value
                required
                v-model="formData.phone"
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">
                <span class="requireMark">*</span>行動電話
              </label>
              <input
                type="text "
                :class="['form-control',{'is-invalid':errors.Mphone.valid==false}]"
                id="validationTooltip02"
                placeholder="Mobile phone"
                value
                required
                v-model="formData.Mphone"
              />
              <div v-show="errors.Mphone.valid==false" class="invaild-msg">{{errors.Mphone.msg}}</div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationTooltip03">
                <span class="requireMark">*</span>送貨地址
              </label>
              <input
                type="text"
                :class="['form-control',{'is-invalid':errors.address.valid==false}]"
                id="validationTooltip03"
                placeholder="Address"
                required
                v-model="formData.address"
              />
              <div v-show="errors.address.valid==false" class="invaild-msg">{{errors.address.msg}}</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">郵遞區號</label>
              <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required v-model="formData.zip" />
              <div class="invalid-tooltip">Please provide a valid zip.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">
                <span class="requireMark">*</span>付款方式
              </label>
              <select class="custom-select" v-model="formData.payment">
                <option>貨到付款</option>
                <option>銀行匯款</option>
                <option>ATM轉帳</option>
              </select>
            </div>
          </div>
          <div class="form-row justify-content-between">
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">
                <span class="requireMark">*</span>收貨時間
              </label>
              <select class="custom-select" v-model="formData.deliverTime">
                <option>08:00~12:00</option>
                <option>12:00~17:00</option>
                <option>17:00~20:00</option>
              </select>
            </div>
            <div class="col-md-auto d-flex align-items-center">
              <span class="requireMark">*</span>
              <div>為必填資料</div>
              <div class="pl-2 captcha">
                <span v-html="svgData"></span>
                <img src="@/assets/refresh-icon.svg" @click="getCaptcha()" />
                <input class="captcha-input" />
              </div>
              <div>
                <button class="btn btn-primary align-items-center" type="submit">送出訂單</button>
              </div>
            </div>
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
import MainHeader from '@/components/mainheader';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'cart',
  layout: 'main-content',
  data() {
    return {
      errors: {
        name: { valid: null, msg: '請輸入姓名' },
        Mphone: { valid: null, msg: null },
        address: { valid: null, msg: '請輸入地址' },
      },
      formData: {
        name: null,
        idCard: null,
        phone: null,
        Mphone: null,
        address: null,
        zip: null,
        deliverTime: '17:00~20:00',
        product: null,
        payment: '銀行匯款',
        status: '未確認',
        total: null,
      },
      svgData: '',
    };
  },
   asyncData({res}){
     console.log(res);
   },
  created() {
    this.getCaptcha();
  },
  components: {
    MainHeader,
  },
  computed: {
    ...mapGetters({
      CartList: 'shop/getShoppingCart',
      total: 'shop/getCartPriceTotal',
    }),
  },
  methods: {
    ...mapActions({
      cancel: 'shop/cancelCart',
      changeQun: 'shop/addQun',
    }),
    QunChange(event, title) {
      const num = parseInt(event.target.value);
      const payload = {
        title: title,
        num: num,
      };
      this.changeQun(payload);
    },
    checkForm() {
      this.formData['total'] = this.total;
      this.formData['product'] = JSON.stringify(this.CartList);

      //validate name
      if (!this.formData.name) {
        this.errors['name'].valid = false;
      } else {
        this.errors['name'].valid = true;
      }
      //validate Phone
      if (!this.formData.Mphone) {
        this.errors['Mphone'].valid = false;
        this.errors['Mphone'].msg = '請輸入行動電話';
      } else if (this.formData.Mphone.length < 10 || this.formData.Mphone.length > 10) {
        this.errors['Mphone'].valid = false;
        this.errors['Mphone'].msg = '行動號碼格式錯誤';
      } else {
        this.errors['Mphone'].valid = true;
      }
      //validate address
      if (!this.formData.address) {
        this.errors['address'].valid = false;
      } else {
        this.errors['address'].valid = true;
      }

      //vaild cart
      if (JSON.parse(this.formData.product).length <= 0) {
        this.$vs.dialog({
          color: 'danger',
          title: `訂單送出失敗!!`,
          text: '無商品在購物車內',
        });
        return false;
      }

      this.submit();
    },
    acceptAlert() {
      window.location.reload(true);
    },
    getCaptcha() {
      this.$axios
        .get('/api/getCaptcha')
        .then((result) => {
          this.svgData = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit() {
      const header = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      if (this.errors['name'].valid && this.errors['Mphone'].valid && this.errors['address'].valid) {
        this.$axios
          .post('/api/order', this.formData, {
            headers: header,
          })
          .then((res) => {
            const { data } = res;
            console.log(data);
            this.$vs.dialog({
              color: 'success',
              title: `訂單送出成功!!`,
              text: '請等待店員通知! 或者 請聯絡本店 : 02-2531-0309',
              accept: this.acceptAlert,
              close: this.acceptAlert,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  head() {
    return {
      title: '永盛堂中藥行-購物車',
    };
  },
};
</script>
<style lang="scss" scoped>
#cancle {
  cursor: pointer;
}
.cart-block {
  border-bottom: 1px solid gray;
}
.clintInfo {
  position: relative;
}
.requireMark {
  color: red;
}
.invaild-msg {
  color: #dc3545;
}
.captcha {
  margin: 0 1rem 0 1rem;
  .captcha-input {
    margin-top: 0.5rem;

    display: block;
    width: 120px;
  }
}
</style>

