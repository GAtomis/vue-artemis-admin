import { defineComponent, ref } from "vue";
import faker from '@faker-js/faker'

import { useEchartInit } from './hooks/useEchartInit'
import {ECOption} from './index'
/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-02-21 11:18:10
 * @LastEditTime: 2022-02-21 13:43:43
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


















