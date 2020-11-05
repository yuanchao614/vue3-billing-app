.<template>
  <div class="main">
    <router-view :key="state.key" />
  </div>
</template>

<script>
import { reactive, onMounted, computed, getCurrentInstance  } from 'vue'
// import { useRoute } from "vue-router";
export default {
    name: 'Main',
    setup() {
        const { ctx } = getCurrentInstance();
        const state = reactive({
            count: 0,
            key: computed(() => { return ctx.$root.$route.path})
        })

         onMounted(() => {
         console.log('mounted!')
            // console.log(this.$router);
        })

        function getRouter() {
            console.log(ctx.$root.$route)   //获取路由对象信息
        }
        return {
            state,
            getRouter
        }
    },

}
</script>

<style>
.main {
    height: 85%;
}

</style>