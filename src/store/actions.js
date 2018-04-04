/*

*/

import {reqAddress, reqFoodList,reqShopList} from '../api/index'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-types'

export default {
  // 异步获取address
  async getAddress({commit, state}) {
    // 得到经纬度值
    const {latitude, longitude} = state
    // 异步请求获取address
    const result = await reqAddress(latitude + ',' + longitude)
    if (result.code === 0) {
      const address = result.data
      // 提交commutation
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  async getCategorys({commit}){
    const result = await reqFoodList()
    if (result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  async getShops({commit, state}){
    const {latitude, longitude} = state
    const result = await reqShopList(latitude + ',' + longitude)
    if (result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}

