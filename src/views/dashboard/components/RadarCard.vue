<!--
 * @Description: 雷达图
 * @Author: Gavin
 * @Date: 2022-02-21 14:27:39
 * @LastEditTime: 2022-11-15 15:44:35
 * @LastEditors: Gavin 850680822@qq.com
-->
<template>
  <a-card hoverable title="Usage">
    <Radar
      :option="chartRadar"
      :chart-style="{ width: '100%', height: '350px' }"
    />
  </a-card>
</template>

<script lang="ts" setup>
  import type { ECOption } from '@/components/Echart'

  import Radar from '@/components/Echart/Echart'
  // 雷达图
  const chartRadar: () => ECOption = () => {
    const option: ECOption = {
      tooltip: {},
      legend: {
        data: ['React', 'VueJs'],
      },
      radar: {
        // shape: 'circle',
        axisName: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5],
          },
        },
        indicator: [
          { name: '人气', max: 6500 },
          { name: '兼容性', max: 16000 },
          { name: '文档', max: 30000 },
          { name: '国际化', max: 38000 },
          { name: '生态', max: 52000 },
          { name: '下载量', max: 25000 },
        ],
      },
      series: [
        {
          name: '预算 vs 开销',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [6000, 10000, 20000, 35000, 50000, 24000],
              name: 'React',
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: 'VueJs',
            },
          ],
        },
      ],
    }
    return option
  }
</script>
