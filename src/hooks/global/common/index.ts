/*
 * @Description: 公用全局函数
 * @Author: Gavin
 * @Date: 2021-09-10 10:27:47
 * @LastEditTime: 2021-09-10 13:46:55
 * @LastEditors: Gavin
 */

import { useEventListener, MaybeRef,useMediaQuery } from '@vueuse/core'
import { reactive, UnwrapRef,unref } from 'vue'

interface PointerLocation {
  x: number,
  y: number
}
export function getPointerLocationByElement(element: MaybeRef<HTMLElement|HTMLDivElement|Document>=document): UnwrapRef<PointerLocation>{

    const pointerLocation:UnwrapRef<PointerLocation>=reactive({
      x:1,
      y:2
    })  
    const isLargeScreen = useMediaQuery('(min-width: 1024px)')
    useEventListener(unref(element),'mousemove',(e:MouseEvent)=>{
        // console.log(e.clientX,e.clientY);
        pointerLocation.x=e.clientX
        pointerLocation.y=e.clientY  
    })
   
    return pointerLocation

}

