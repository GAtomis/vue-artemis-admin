/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-08 15:28:03
 * @LastEditTime: 2021-12-02 16:21:39
 * @LastEditors: Gavin
 */

/**
 * @description:枚举题型
 * @type {INPUT,TEXTAREA,RADIO,UPLOAD}
 * @Date: 2021-10-08 16:48:32
 */
export const FORM_TYPE = {
  INPUT: {
    value: 'INPUT',
    des: '单行文本 ',
  },
  TEXTAREA: {
    value: 'TEXTAREA',
    des: '多文本 ',
  },
  RADIO: {
    value: 'RADIO',
    des: '单选框 ',
  },
  UPLOAD: {
    value: 'UPLOAD',
    des: '文件上传',
  },
  EMPTY: {
    value: 'EMPTY',
    des: '拖动区域',
  },
  NUMBER_INPUT: {
    value: 'NUMBER_INPUT',
    des: '数字输入',
  },
}
export enum TypeEnum {
  INPUT = 'INPUT',
  TEXTAREA = 'TEXTAREA',
  RADIO = 'RADIO',
  UPLOAD = 'UPLOAD',
  EMPTY = 'EMPTY',
  NUMBER_INPUT = 'NUMBER_INPUT',
}

export const TYPE_PROXY = new Proxy(FORM_TYPE, {
  get(trapTarget, property, receiver) {
    // return (trapTarget[property]&&trapTarget[property].value)
    return (
      (trapTarget[property] && Reflect.get(trapTarget[property], 'value')) ||
      Reflect.get(trapTarget, property)
    )
  },
})
