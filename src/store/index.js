import Vuex from 'vuex';
import Vue from 'vue';
import search from './search';
import home from './home';
import detail from './detail';
import shopCart from './shopCart';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
    home,
    detail,
    shopCart
  }
})