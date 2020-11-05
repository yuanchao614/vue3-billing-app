.<template>
  <div class="app-content">
    <div>
      <Main />
    </div>
    <div class="footer">
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Main from "./Main.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
    Main
  }
};
</script>

<style>
.app-content {
  display: flex;
  flex-direction: column;
}
.footer {
    position: fixed;
    bottom: 0;
}
</style>