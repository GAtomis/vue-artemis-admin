/*
 * @Description: 公用全局函数
 * @Author: Gavin
 * @Date: 2021-09-10 10:27:47
 * @LastEditTime: 2021-12-15 11:32:22
 * @LastEditors: Gavin
 */

import { useEventListener, MaybeRef, useMediaQuery } from '@vueuse/core'
import { reactive, UnwrapRef, unref, toRaw } from 'vue'

interface PointerLocation {
  x: number,
  y: number
}
export function getPointerLocationByElement(element: MaybeRef<HTMLElement | HTMLDivElement | Document> = document): UnwrapRef<PointerLocation> {

  const pointerLocation: UnwrapRef<PointerLocation> = reactive({
    x: 1,
    y: 2
  })
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
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
export function useCloneByJSON<T>(target:any, call?: (x: T) => any) {
  const cloned = JSON.parse(JSON.stringify(unref(toRaw(target))))
  return call?.(cloned) ?? cloned
}

