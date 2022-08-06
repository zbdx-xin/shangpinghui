import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api';
//游客身份
import {getUUID} from '@/utils/uuid_token';
export default {
  namespaced: true,
  actions: {
    async getGoodsList({ commit }, value) {
      let result = await reqGoodsInfo(value);
      if (result.code === 200) {
        commit('GETGOODSLIST', result.data)
      }
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
      let result = await reqAddOrUpdateShopCart(skuId, skuNum);
      if (result.code === 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('失败'))
      }
    },
  },
  mutations: {
    GETGOODSLIST(state, value) {
      state.goodsList = value
    },
  },
  state: {
    goodsList: {},
    uuid_token:getUUID()
  },
  getters: {
    categoryView(state) {
      return state.goodsList.categoryView || {}
    },
    skuInfo(state) {
      return state.goodsList.skuInfo || {}
    },
    spuSaleAttrList(state) {
      return state.goodsList.spuSaleAttrList || []
    }
  }
}

