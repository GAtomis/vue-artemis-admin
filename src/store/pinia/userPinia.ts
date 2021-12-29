/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-29 16:02:12
 * @LastEditTime: 2021-12-29 16:13:51
 * @LastEditors: Gavin
 */

import { defineStore } from 'pinia'

export default defineStore({
  id: "user",
  state() {
    return {
      name: "Info",
      count: 12
    }
  }

})