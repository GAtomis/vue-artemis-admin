/*
 * @Description: 封装icon
 * @Author: Gavin
 * @Date: 2021-08-09 13:52:34
 * @LastEditTime: 2021-11-30 18:39:26
 * @LastEditors: Gavin
 */

 
import {App} from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue';


export function registerIconComponents(app:App):void {
    console.log('registerIconComponents');
    
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2732043_zyf9iqfztko.js',
  });
  app.component('IconFont',IconFont);
}
