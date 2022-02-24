<!--
 * @Description: 空区域
 * @Author: Gavin
 * @Date: 2021-12-02 16:03:05
 * @LastEditTime: 2022-02-24 11:22:36
 * @LastEditors: Gavin
-->

<template>
  <div class="empty-warp">
    <h1>{{ item.label }}</h1>
  </div>
</template>

<script lang="ts" setup>
  //expects props options
  import { Empty } from '@/views/constructor/type/type'
  defineProps<{
    item: Empty
  }>()
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss">
  .empty-warp {
    h1 {
      line-height: 200px;
      font-size: 25px;
      font-weight: 600;
      color: #b7bdc3;
    }
    border: 1px dashed #000;
    text-align: center;
  }
</style>
