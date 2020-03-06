<template>
  <div id="deliver-edit">
    <div class="mgt-title">
      <main-header class="mb-3" title="郵資修改"></main-header>
      <div class="deliveryTable">
        <table
          class="table table-bordered"
          style="text-align:center;background-color:white"
        >
          <thead>
            <tr>
              <td rowspan="2" class="slash">
                <span style="text-align:right;display:block;font-weight:bold"
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
              <td><input width="40" v-model="fee.nomal60.main" /></td>
              <td><input width="40" v-model="fee.nomal90.main" /></td>
              <td><input width="40" v-model="fee.nomal120.main" /></td>
              <td><input width="40" v-model="fee.nomal150.main" /></td>
              <td><input width="40" v-model="fee.low60.main" /></td>
              <td><input width="40" v-model="fee.low90.main" /></td>
              <td><input width="40" v-model="fee.low120.main" /></td>
            </tr>
            <tr>
              <th scope="row">離島</th>
              <td><input width="40" v-model="fee.nomal60.offshore" /></td>
              <td><input width="40" v-model="fee.nomal90.offshore" /></td>
              <td><input width="40" v-model="fee.nomal120.offshore" /></td>
              <td><input width="40" v-model="fee.nomal150.offshore" /></td>
              <td><input width="40" v-model="fee.low60.offshore" /></td>
              <td><input width="40" v-model="fee.low90.offshore" /></td>
              <td><input width="40" v-model="fee.low120.offshore" /></td>
            </tr>
            <tr>
              <th scope="row">當日配達加價</th>
              <td>+<input width="40" v-model="fee.nomal60.extra" /></td>
              <td>+<input width="40" v-model="fee.nomal90.extra" /></td>
              <td>+<input width="40" v-model="fee.nomal120.extra" /></td>
              <td>+<input width="40" v-model="fee.nomal150.extra" /></td>
              <td>+<input width="40" v-model="fee.low60.extra" /></td>
              <td>+<input width="40" v-model="fee.low90.extra" /></td>
              <td>+<input width="40" v-model="fee.low120.extra" /></td>
            </tr>
          </tbody>
        </table>
        <div class="update" style="float:right">
          <vs-button
            @click="openConfirm()"
            accept-text="test"
            color="success"
            type="gradient"
            >更新</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/mainheader";
import { mapGetters } from "vuex";

export default {
  name: "deliverfee",
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {
      fee: {
        nomal60: {
          main: 130,
          offshore: 220,
          extra: 10
        },
        nomal90: {
          main: 170,
          offshore: 280,
          extra: 20
        },
        nomal120: {
          main: 210,
          offshore: 320,
          extra: 30
        },
        nomal150: {
          main: 250,
          offshore: 360,
          extra: 30
        },
        low60: {
          main: 160,
          offshore: 260,
          extra: 10
        },
        low90: {
          main: 225,
          offshore: 340,
          extra: 20
        },
        low120: {
          main: 290,
          offshore: 400,
          extra: 30
        }
      }
    };
  },
  methods: {
    openConfirm() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `確認`,
        text: "確定修改郵資嗎 ？ ",
        accept: this.accepUpdate
      });
    },
    accepUpdate() {
      this.$axios
        .put("/apipost/deliver", JSON.stringify(this.fee), {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": this.getToken
          },
          transformRequest: [
            function(data) {
              return data;
            }
          ]
        })
        .then(result => {
          this.$vs.notify({
            title: "修改成功",
            text: "郵資已更新。",
            color: "success"
          });
        })
        .catch(err => {
          console.log(err);
          this.$vs.notify({ title: "修改失敗", text: err, color: "danger" });
        });
    }
  },
  computed: {
    ...mapGetters({ getToken: "auth/getToken" })
  },
  components: {
    MainHeader
  }
};
</script>
<style lang="scss" scoped>
.deliveryTable {
  input {
    width: 50px;
  }
}
</style>
