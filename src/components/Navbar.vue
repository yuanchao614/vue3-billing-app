.<template>
  <div style="nav-bar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="swipperPage(0, '/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="search" @click="swipperPage(1, '/home')">搜索</van-tabbar-item>
      <!-- <van-tabbar-item icon="friends-o">我的</van-tabbar-item> -->
      <van-tabbar-item icon="setting-o" @click="swipperPage(2, '/home')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Navbar",
  setup() {
    const active = ref(0);

    function swipperPage(index, path) {
      active.value = index;
      console.log(path);
    }
    return {
      active,
      swipperPage
    };
  }
};
</script>

<style>

.nav-bar {
    height: 15%;
}
</style>