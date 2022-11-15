<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-09 17:25:28
 * @LastEditTime: 2021-12-06 16:02:53
 * @LastEditors: Gavin
-->
<template>
  <a-row :gutter="16" class="app-container ">
    <a-col :span="12">
      <a-statistic-countdown
        title="Countdown"
        :value="deadline"
        style="margin-right: 50px"
        @finish="onFinish"
      />
    </a-col>
    <a-col :span="12">
      <a-statistic-countdown
        title="Million Seconds"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      />
    </a-col>
    <a-col :span="24" style="margin-top: 32px">
      <a-statistic-countdown
        title="Day Level"
        :value="deadline"
        format="D 天 H 时 m 分 s 秒"
      />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
  import { onMounted, ref, onActivated } from 'vue'

  onMounted(() => {
    console.log('生命周期启用')
  })
  onActivated(() => {
    console.log('失活')
  })
  const onFinish = () => {
    console.log('finished!')
  }
  const deadline = ref(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30)
</script>

<style scoped lang="scss"></style>
