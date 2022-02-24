/*
 * @Description: echarts初始化
 * @Author: Gavin
 * @Date: 2021-09-17 15:24:05
 * @LastEditTime: 2022-02-21 12:57:25
 * @LastEditors: Gavin
 */

import { unref, onMounted } from 'vue'
import { echarts, ECOption } from '@/components/Echart'
import { MaybeRef } from '@vueuse/core'

// export function useEchartInit(element:Ref<null|HTMLElement>,newOpt:() => ECOption):void{
//   onMounted(()=>{
//     // const optionsArray:echarts.ECharts[] = []
//     console.error(element.value);

//     if(element.value ==null)  throw new Error("dom不存在");
//     let myChart = echarts.init(element.value as unknown as HTMLElement)
//     myChart.setOption(newOpt())
//     myChart.resize()
//   })

// }

export function useEchartInit(
  domId: MaybeRef<number | string>,
  newOpt: () => ECOption
): void {
  onMounted(() => {
    // const optionsArray:echarts.ECharts[] = []
    const charts2 = document.getElementById(unref(domId) as string)

    const myChart = echarts.init(charts2 as unknown as HTMLElement)
    myChart.setOption(newOpt())
    myChart.resize()
  })
}
