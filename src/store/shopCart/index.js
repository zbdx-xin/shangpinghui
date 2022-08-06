import { reqCartList, reqDeleteCartById, reqCheckCart } from '@/api';
export default {
  namespaced: true,
  actions: {
    async getCartList({ commit }) {
      let result = await reqCartList();
      // console.log(result);
      if (result.code === 200) {
        commit('GETCARTLIST', result.data)
      }
    },
    async deleteCart({ commit }, skuId) {
      let result = await reqDeleteCartById(skuId)
      if (result.code = 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }
    },
    async checkCart({ commit }, { skuId, isChecked }) {
      let reslut = await reqCheckCart(skuId, isChecked);
      if (reslut.code == 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }
    },
    deleteAllChechedCart({ dispatch, getters }) {
      let PromiseAll = [];
      getters.cartList.cartInfoList.forEach((ele) => {
        if (ele.isChecked == 1) {
          PromiseAll.push(dispatch('deleteCart', ele.skuId))
        }
      })
      // console.log(PromiseAll);
      return Promise.all(PromiseAll)
    },
    allChecked({ dispatch, getters }, isChecked) {
      let promiseAll = []
      getters.cartList.cartInfoList.forEach((ele) => {
        promiseAll.push(dispatch('checkCart', { skuId: ele.skuId, isChecked }))
      })
      return Promise.all(promiseAll)
    }
  },
  mutations: {
    GETCARTLIST(state, value) {
      state.cartList = value
    }
  },
  state: {
    cartList: []
  },
  getters: {
    cartList(state) {
      return state.cartList[0] || {}
    }
  },
}