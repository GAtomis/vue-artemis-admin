<!--
 * @Description: 空区域
 * @Author: Gavin
 * @Date: 2021-12-02 16:03:05
 * @LastEditTime: 2021-12-02 17:12:23
 * @LastEditors: Gavin
-->

<template>
  <div class="empty-warp">
      <p>请拖入组件</p>
  </div>
</template>

<script lang='ts' setup>
//expects props options
import { Empty } from '@/views/constructor/type/type'
const props = defineProps({
  item:Empty
})
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.empty-warp{
  p{
      line-height: 200px;
  }
  text-align: center;
  width: 100%;
  height:200px;
  border: 1px dashed #000;
}
</style>
