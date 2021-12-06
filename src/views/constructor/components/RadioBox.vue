<!--
 * @Description: 单选
 * @Author: Gavin
 * @Date: 2021-12-02 16:03:05
 * @LastEditTime: 2021-12-06 11:28:54
 * @LastEditors: Gavin
-->

<template>
  <div class="radio-warp">
    <h1>{{item?.label}}</h1>
    <a-radio
      v-model:checked="option.content"
      :key="index"
      disabled
      v-for="option,index in item?.options"
    >{{ option.content}}</a-radio>
    <br />
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
