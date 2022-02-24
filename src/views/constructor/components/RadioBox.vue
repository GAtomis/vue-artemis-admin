<!--
 * @Description: 单选
 * @Author: Gavin
 * @Date: 2021-12-02 16:03:05
 * @LastEditTime: 2022-02-24 11:26:29
 * @LastEditors: Gavin
-->

<template>
  <div class="radio-warp">
    <h1>
      <slot name="index" />
      {{ item?.label }}
    </h1>
    <div v-for="(option, index) in item?.options" :key="index">
      <a-radio v-model:checked="option.content" disabled>
        {{ option.content }}
      </a-radio>
    </div>
  </div>
</template>

<script lang="ts" setup>
  //expects props options
  import { Radio } from '@/views/constructor/type/type'
  defineProps<{
    item: Radio
  }>()
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss"></style>
