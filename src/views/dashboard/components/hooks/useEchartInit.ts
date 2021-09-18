/*
 * @Description: echarts初始化
 * @Author: Gavin
 * @Date: 2021-09-17 15:24:05
 * @LastEditTime: 2021-09-17 16:52:43
 * @LastEditors: Gavin
 */

import {Ref,onMounted} from 'vue'
import { echarts, ECOption } from '@/components/Echart'

export function useEchartInit(element:Ref<null|HTMLElement>,newOpt:() => ECOption):void{
  onMounted(()=>{
    // const optionsArray:echarts.ECharts[] = []
    let myChart = echarts.init(element.value as unknown as HTMLElement)
    myChart.setOption(newOpt())
    myChart.resize()
  })
  
  
}