import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
export default [
  {
    path: '/home',
    component: () => import('@/pages/Home'),
    meta: { hidden: false }
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    meta: { hidden: true }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register'),
    meta: { hidden: true }
  },
  {
    path: '/search/:keyword?',
    name: "search",
    component: Search,
    meta: { hidden: false },
    //布尔值 params---props
    // props:true
    //对象写法 额外的给路由传参
    //函数式 query params --props
    // props: ($route) => {
    //   return {
    //     keyword: $route.params.keyword,
    //     categoryName: $route.query.categoryName,
    //     category1id: $route.query.category1id || '',
    //     category2id: $route.query.category2id || '',
    //     category3id: $route.query.category3id || ''
    //   }
    // }
  },
  {
    path: '/detail/:skuId?',
    component: Detail,
    meta: { hidden: false }
  },
  {
    path: "/addCartSuccess",
    name:"addCartSuccess",
    component: AddCartSuccess,
    meta: { hidden: false }
  },
  {
    path: "/shopCart",
    name: "shopCart",
    component:ShopCart,
    meta: { hidden: false }
  },
  { //重定向
    path: '/',
    redirect: '/home',
  },
]