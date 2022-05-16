/*
 * @Description: 封装icon
 * @Author: Gavin
 * @Date: 2021-08-09 13:52:34
 * @LastEditTime: 2022-05-15 12:54:41
 * @LastEditors: Gavin
 */

import { App } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'

export function registerIconComponents(app: App): void {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2732043_vc8l93wj14d.js',
  })
  app.component('IconFont', IconFont)
}
