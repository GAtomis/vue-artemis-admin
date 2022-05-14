/*
 * @Description: 封装icon
 * @Author: Gavin
 * @Date: 2021-08-09 13:52:34
 * @LastEditTime: 2022-05-14 11:38:15
 * @LastEditors: Gavin
 */

import { App } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'

export function registerIconComponents(app: App): void {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2732043_9vyrkwrodqw.js',
  })
  app.component('IconFont', IconFont)
}
