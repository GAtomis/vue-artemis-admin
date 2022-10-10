import { defineComponent, ref } from 'vue'

import { useEchartInit } from './hooks/useEchartInit'
// import {ECOption} from './index'
/*
 * @Description: 图表生成器,按需加载请在index中加载
 * @Author: Gavin
 * @Date: 2022-02-21 11:18:10
 * @LastEditTime: 2022-10-10 11:33:01
 * @LastEditors: Gavin
 */

export default defineComponent({
  props: ['option', 'id', 'chartStyle'],
  setup(props) {
    const domId = ref<string>(
      props.id || Math.ceil(Math.random() * 1000).toString()
    )
    const style = ref<any>(props.chartStyle || { height: '16rem' })
    const option: any = props.option
    useEchartInit(domId, option)
    return () => <div style={style.value} id={domId.value}></div>
  },
})
