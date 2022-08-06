import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store';
//全局三级联动组件
import TypeNav from '@/components/TypeNav';
import Swiper from '@/components/Swiper';
import Page from '@/components/Page';
//引入mock
import '@/mock/index';
//swiper 样式
import 'swiper/css/swiper.css'


Vue.component(TypeNav.name, TypeNav)
Vue.component(Swiper.name, Swiper)
Vue.component(Page.name, Page)
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
