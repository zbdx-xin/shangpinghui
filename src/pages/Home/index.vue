<template>
  <div>
    <!-- 三级联动 -->
    <TypeNav />
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(item) in floorList" :key="item.id" :floorList="item" />
    <Brand/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
/* 引入组件 */
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
export default {
  name: "Home",
  components: { ListContainer, Recommend ,Rank,Like,Floor,Brand},
  mounted() {
    //action 
    this.$store.dispatch('home/floorList');
  },
  computed:{
    ...mapState('home',['floorList'])
  }
};
</script>

<style>
</style>