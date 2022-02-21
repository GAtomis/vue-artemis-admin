import { defineComponent, ref } from "vue";
import faker from '@faker-js/faker'

import { useEchartInit } from './hooks/useEchartInit'
import {ECOption} from './index'
/*
 * @Description: 图表生成器,按需加载请在index中加载
 * @Author: Gavin
 * @Date: 2022-02-21 11:18:10
 * @LastEditTime: 2022-02-21 16:40:32
 * @LastEditors: Gavin
 */

export default defineComponent({
  props: ['option','id','style'],
  setup(props) {
    const domId = ref<string>(props.id||faker.random.number().toString())
    const style= ref<any>(props.style||{ height: '16rem' })
    const option =props.option 
    useEchartInit(domId, option )
    return () => <div style={style.value} id={domId.value}></div>
  }
})


















