import { reqCategoryList, reqGetBanner, reqFloorList } from '@/api';
export default {
  namespaced: true,
  actions: {
    async categoryList({ commit }) {
      //
      let result = await reqCategoryList()
      // console.log(result);
      if (result.code === 200) {
        commit('CATEGORYLIST', result.data)
      }
    },
    async getBannerList({ commit }) {
      let res = await reqGetBanner()
      if (res.code === 200) {
        commit('REQGETBANNER', res.data)
      }
    },
    async floorList({ commit }) {
      let result = await reqFloorList();
      if (result.code === 200) {
        commit('FLOORLIST', result.data)
      }
    }
  },
  mutations: {
    CATEGORYLIST(state, value) {
      state.categoryList = value
    },
    REQGETBANNER(state, value) {
      state.bannerList = value

    },
    FLOORLIST(state, value) {
      state.floorList = value
    } 
  },
  state: {
    //默认初始值 类型相同
    categoryList: [],
    bannerList: [],
    floorList: []
  },
  getters: {}
}