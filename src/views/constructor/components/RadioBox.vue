<!--
 * @Description: 单选
 * @Author: Gavin
 * @Date: 2021-12-02 16:03:05
 * @LastEditTime: 2021-12-07 17:21:39
 * @LastEditors: Gavin
-->

<template>
  <div class="radio-warp">

    
    <h1><slot name="index"></slot>{{ item?.label }}</h1>
    <div v-for="option,index in item?.options" :key="index">
      <a-radio v-model:checked="option.content" disabled>{{ option.content }}</a-radio>
    </div>
  </div>
</template>

<script lang='ts' setup>
//expects props options
import { Radio } from '@/views/constructor/type/type'
const props = defineProps<{
  item: Radio
}>()
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
</style>
