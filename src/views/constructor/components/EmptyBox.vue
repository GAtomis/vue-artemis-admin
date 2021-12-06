<!--
 * @Description: 空区域
 * @Author: Gavin
 * @Date: 2021-12-02 16:03:05
 * @LastEditTime: 2021-12-06 11:26:57
 * @LastEditors: Gavin
-->

<template>
  <div class="empty-warp">
      <h1>请拖入组件</h1>
  </div>
</template>

<script lang='ts' setup>
//expects props options
import { Empty } from '@/views/constructor/type/type'
const props = defineProps<{
  item:Empty
}>()
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.empty-warp{
  h1{
      line-height: 200px;   
      font-size: 25px;
      font-weight: 600;
      color:#B7BDC3
      
  }
  border: 1px dashed #000;
  text-align: center;

}
</style>
