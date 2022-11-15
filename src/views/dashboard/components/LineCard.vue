<!--
 * @Description: 图表战术
 * @Author: Gavin
 * @Date: 2021-09-17 14:04:41
 * @LastEditTime: 2022-11-15 15:43:11
 * @LastEditors: Gavin 850680822@qq.com
-->
<template>
  <a-card title="Visits (Line Chart)">
    <Category
      :option="chartCategory"
      :chart-style="{ width: '90%', height: '300px' }"
    />
  </a-card>
</template>

<script lang="ts" setup>
  import type { ECOption } from '@/components/Echart'

  import Category from '@/components/Echart/Echart'

  const chartCategory: () => ECOption = () => {
    const option: ECOption = {
      title: {
        text: 'Visits',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['上周', '本周'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'last week',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'this',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    }
    return option
  }

  //expects props options
  /*const props = defineProps({
foo: String
})*/
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss"></style>
