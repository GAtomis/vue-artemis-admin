<!--
 * @Description: 图表战术
 * @Author: Gavin
 * @Date: 2021-09-17 14:04:41
 * @LastEditTime: 2021-12-17 18:51:05
 * @LastEditors: Gavin
-->
<template>
  <a-card title="雷达图" style="width: 33%;float:left;">
    <div ref="charts1" :style="{ height: '16rem', width: '100%' }"></div>
  </a-card>
  <a-card title="饼图" style="width: 33%;float:left;">
    <div ref="charts2" :style="{ height: '16rem', width: '100%' }"></div>
  </a-card>
    <a-card title="折线图" style="width: 33%;float:left;">
    <div ref="charts3" :style="{ height: '16rem', width: '100%' }"></div>
  </a-card>
</template>

<script lang='ts' setup>
import { echarts } from '@/components/Echart'
import type {ECOption} from '@/components/Echart'
import { onMounted, ref } from 'vue'
import { useEchartInit } from './hooks/useEchartInit'


// 雷达图
const chartRadar: () => ECOption = () => {
  const option: ECOption = {
    title: {
      text: '基础雷达图'
    },
    tooltip: {},
    legend: {
      data: ['预算分配', '实际开销']
    },
    radar: {
      // shape: 'circle',
      axisName: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: '销售', max: 6500 },
        { name: '管理', max: 16000 },
        { name: '信息技术', max: 30000 },
        { name: '客服', max: 38000 },
        { name: '研发', max: 52000 },
        { name: '市场', max: 25000 }
      ]
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: '预算分配'
        },
        {
          value: [5000, 14000, 28000, 31000, 42000, 21000],
          name: '实际开销'
        }
      ]
    }]
  }
  return option
}

// 圆饼图
const chartPie: () => ECOption = () => {
  const option: ECOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ]
      }
    ]
  }
  return option
}
const chartCategory: () => ECOption = () => {
  return {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }]
  }
}
const charts1 = ref(null)
useEchartInit(charts1, chartRadar)
const charts2 = ref(null)
useEchartInit(charts2, chartPie)
const charts3 = ref(null)
useEchartInit(charts3, chartCategory)





//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])

</script>

<style scoped lang='scss'>
</style>