.<template>
  <div class="home">
<van-cell center title="单元格" value="内容" label="描述信息"  v-for="item in listData" :key="item._id"/>
<van-pagination
  v-model="currentPage"
  :total-items="125"
  :show-page-size="3"
  force-ellipses
/>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getBillList } from '../../api/billService'
export default {
  name: "Home",
  setup() {
    const listData = ref([]);
    const activeNames = ref([]);

    const payMethods = ref('支付宝');
    function getListData() {
      console.log("get data:::::::::");
      const param = {
        pageIndex: 0,
        pageSize: 10,
        payMethods: payMethods.value,
      }
      getBillList(param).then(res => {
          console.log(res);
          listData.value = res.body;
          console.log(listData.value);
      },
      error => {
          console.log(error);
      }
      )
    }

    onMounted(() => {
      getListData();
    });

    return {
      listData,
      activeNames,
      payMethods,
      getListData
    };
  }
};
</script>

<style scoped>

.home {
    height: 100%;
    background: darkcyan；
}
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
</style>