//api 统一管理
import requests from './request';

//三级联动  http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: "get", })

import mockRequst from '@/api/mock';

//banner数据
export const reqGetBanner = () => mockRequst({ url: '/banner', method: 'get' });

//floor数据
export const reqFloorList = () => mockRequst.get('/floor')

//搜索模块数据 post 参数  至少是个{}
export const reqSearchInfo = (params) => requests({
  url: '/list',
  method: 'post',
  data: params
})
//详细产品信息
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })
//购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" })
export const reqCartList = () => requests({ method: 'get', url: '/cart/cartList' })
//删除
export const reqDeleteCartById = (skuId) => requests({ method: "delete", url: `/cart/deleteCart/${skuId}` })

//勾选
export const reqCheckCart = (skuId, isChecked) => requests({ method: 'get', url: `/cart/checkCart/${skuId}/${isChecked}` })