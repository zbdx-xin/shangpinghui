import { reqSearchInfo } from '@/api';
//search 的仓库
export default {
  namespaced: true,
  actions: {
    //默认传参
    async getSearchList({ commit }, params = {}) {
      let res = await reqSearchInfo(params);
      if (res.code === 200) {
        commit('GETSEARCHLIST', res.data)
      }
    },
  },
  mutations: {
    GETSEARCHLIST(state, val) {
      state.searchList = val
    },
  },
  state: {
    searchList: {},
  },
  //简化数据
  getters: {
    //state 当前仓库的state
    goodsList(state) {
      //至少 []
      return state.searchList.goodsList || []
    },
    attrsList(state) {
      return state.searchList.attrsList || []
    },
    trademarkList(state) {
      return state.searchList.trademarkList || []
    },
  },

}