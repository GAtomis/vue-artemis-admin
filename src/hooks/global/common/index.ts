/*
 * @Description: 公用全局函数
 * @Author: Gavin
 * @Date: 2021-09-10 10:27:47
 * @LastEditTime: 2022-02-24 15:40:38
 * @LastEditors: Gavin
 */

import { useEventListener, MaybeRef } from '@vueuse/core'
import { reactive, UnwrapRef, unref, toRaw } from 'vue'

interface PointerLocation {
  x: number
  y: number
}
/**
 * @description: 获得当前鼠标指针位置
 * @param {MaybeRef} element
 * @return {*}
 * @Date: 2022-01-25 10:51:16
 */
export function getPointerLocationByElement(
  element: MaybeRef<HTMLElement | HTMLDivElement | Document> = document
): UnwrapRef<PointerLocation> {
  const pointerLocation: UnwrapRef<PointerLocation> = reactive({
    x: 1,
    y: 2,
  })

  useEventListener(unref(element), 'mousemove', (e: MouseEvent) => {
    // console.log(e.clientX,e.clientY);
    pointerLocation.x = e.clientX
    pointerLocation.y = e.clientY
  })
  return pointerLocation
}

/**
 * @description: 通过使用JSON进行克隆
 * @param {*} target 克隆目标
 * @param {function} call 函数式自定义
 * @return {*}
 * @Date: 2021-12-02 19:00:10
 */
export function useCloneByJSON<T>(target: MaybeRef<T>, call?: (x: T) => any) {
  const cloned = JSON.parse(JSON.stringify(unref(toRaw(target)))) as T
  return call?.(cloned) ?? cloned
}

/**
 * @description: 使用冒泡排序
 * @generic {T} item类型
 * @param {T} arr 需要排序的数组
 * @param {function} fn1 进行比较的回调 arr为排序数组 J当前轮  i 从第几个下标开始
 * @return {*}
 * @Date: 2022-01-25 10:44:41
 */
export function useBubblingSort<T>(
  arr: T[],
  fn1: (i: T[], j: number) => void
): T[] {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      // 相邻元素两两s对比，元素交换，大的元素交换到后面
      fn1(arr, j)
    }
  }
  return arr
}
