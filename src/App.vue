<template>
  <div id="app">
    <Header />
    <!-- 路由出口 -->
    <router-view></router-view>
    <!-- 在login和register是隐藏的 -->
    <Footer v-show="!this.$route.meta.hidden" />
  </div>
</template> 

<script>
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    //通知vuex发请求,存储于仓库中 -------优化性能
    this.$store.dispatch("home/categoryList");
  },
};
</script>

<style>
</style>
