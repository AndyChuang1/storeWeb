<template>
  <div>
    <h1>Admin page</h1>
    <vs-alert active="true">Order</vs-alert>
    <div>
      <vs-table search :data="users">
        <template slot="header">
          <h3>Users</h3>
        </template>
        <template slot="thead">
          <vs-th sort-key="username">Name</vs-th>
          <vs-th sort-key="id">Nro</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>

            <vs-td :data="data[indextr].rowid">{{data[indextr].rowid}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "admin",
  layout: "admin",
  middleware: "authenticated",
  data() {
    return {
      users: [
        {
          rowid: 1,
          name: "敏瑞靈-益生菌",
          types: "生物科技類",
          price: 1200,
          unit: "50包",
          detail: "幫助維持消化道機能，改變細菌叢生態。",
          path: "/product/2019-3-3益生菌.jpg",
          sales: 0
        },
        {
          rowid: 2,
          name: "兒童專用維他命咀嚼錠",
          types: "生物科技類",
          price: 400,
          unit: "60粒",
          detail: "專為成長中的兒童所調配的綜合維他命營養補充品。",
          path: "/product/2019-3-3兒童專用維他命咀嚼錠.jpg",
          sales: 0
        },
        {
          rowid: 3,
          name: "金盞精明(LUTEIN)\n",
          types: "生物科技類",
          price: 600,
          unit: "30顆",
          detail:
            "有助於維持在暗處的視覺。.減少不飽和脂肪酸的氧化。有助於減少自由基的產生。",
          path: "/product/2019-3-3金盞精明(LUTEIN).jpg",
          sales: 0
        },
        {
          rowid: 4,
          name: "高單位葉黃素(LUTEIN 30mg)",
          types: "生物科技類",
          price: 900,
          unit: "30顆",
          detail: "促進新陳代謝，具抗氧化作用，維持皮膚及血球細胞健康",
          path: "/product/2019-3-3高單位葉黃素(LUTEIN 30mg).jpg",
          sales: 0
        },
        {
          rowid: 5,
          name: "葡萄糖氨鈣",
          types: "生物科技類",
          price: 600,
          unit: "60顆",
          detail: "營養補給，健康維持。",
          path: "/product/2019-3-3葡萄糖氨鈣.jpg",
          sales: 0
        },
        {
          rowid: 6,
          name: "強化鈣",
          types: "生物科技類",
          price: 500,
          unit: "50粒",
          detail: "有助於維持骨骼與牙齒的正常發育及健康。",
          path: "/product/2019-3-9強化鈣(全素可食).jpg",
          sales: 0
        },
        {
          rowid: 7,
          name: "大豆荷美錠",
          types: "生物科技類",
          price: 600,
          unit: "30顆",
          detail: "有助於維持骨骼與牙齒的正常發育及健康。",
          path: "/product/2019-3-3大豆荷美錠.jpg",
          sales: 0
        },
        {
          rowid: 8,
          name: "Q10膠原蛋白",
          types: "生物科技類",
          price: 1500,
          unit: "50包",
          detail: "有助於維持骨骼與牙齒的正常發育及健康。",
          path: "/product/2019-3-3Q10膠原蛋白.jpg",
          sales: 0
        },
        {
          rowid: 9,
          name: "葡萄子複方膜衣錠(全素可食)",
          types: "生物科技類",
          price: 600,
          unit: "30顆",
          detail: "有助於維持骨骼與牙齒的正常發育及健康。",
          path: "/product/2019-3-3葡萄子複方膜衣錠(全素可食).jpg",
          sales: 0
        },
        {
          rowid: 10,
          name: "清血魚油膠囊(EPA+DHA)",
          types: "生物科技類",
          price: 500,
          unit: "30顆",
          detail: "有助於維持骨骼與牙齒的正常發育及健康。",
          path: "/product/2019-3-3清血魚油膠囊(EPA+DHA).jpg",
          sales: 0
        },
        {
          rowid: 11,
          name: "六鵬草本潤喉錠 【全素可食】",
          types: "生物科技類",
          price: 100,
          unit: "40錠",
          detail: "有助於維持骨骼與牙齒的正常發育及健康。",
          path: "/product/2019-3-3六鵬草本潤喉錠 【全素可食】.jpg",
          sales: 0
        },
        {
          rowid: 12,
          name: "蘿立清 透明膠囊",
          types: "生物科技類",
          price: 1680,
          unit: "60粒",
          detail:
            "可減少不飽和脂肪酸的氧化，有助於維持細胞\n膜的完整性。具抗氧化作用、增進皮膚與血球的健康",
          path: "/product/2019-3-3蘿立清 透明膠囊.jpg",
          sales: 0
        },
        {
          rowid: 13,
          name: "紅麴複方膠囊",
          types: "生物科技類",
          price: 1680,
          unit: "90粒",
          detail: "從源頭協同照護代謝，幫助調節生理機能、 清暢無阻好健康。",
          path: "/product/2019-3-17紅麴 複方膠囊.jpg",
          sales: 0
        },
        {
          rowid: 14,
          name: "黑糖桂圓曖薑茶",
          types: "養生飲品區",
          price: 120,
          unit: "6入",
          detail: "道地傳統風味 ，去寒助消化",
          path: "/product/2019-3-23黑糖桂圓曖薑茶-6入裝.jpg",
          sales: 1
        }
      ]
    };
  },
  components: {},
  methods: {
    initProduct() {
      var vm = this;
      this.$axios
        .get("/api/productList", {
          params: {
            types: "all"
          }
        })
        .then(function(response) {
          const data = response.data;
          vm.users = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    // this.initProduct();
  }
};
</script>
<style lang="scss" scoped>
</style>

