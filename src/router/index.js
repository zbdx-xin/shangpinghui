import VueRouter from 'vue-router'
import Vue from 'vue';
import routes from './routes';
Vue.use(VueRouter)

//保存一份 VueRouter.prototype.push
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push 与replace方法
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, ...arguments)
  } else {
    originPush.call(this, location, () => { }, () => { })

  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, ...arguments)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

export default new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { y: 0 }
  }
})
