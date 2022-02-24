<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-26 17:13:05
 * @LastEditTime: 2022-01-26 18:08:57
 * @LastEditors: Gavin
-->
<template>
  <div class="text">
    <section id="text-warp" @click="ten" />
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, nextTick } from 'vue'
  import creat3DText from '@/hooks/global/three-js/geometry-text'
  import { log } from 'console'

  onMounted(() => {
    nextTick(() => {
      const dom = document.getElementById('text-warp')

      console.log(dom?.clientWidth, dom?.clientHeight)
      creat3DText(dom as HTMLElement)
    })
  })
  function ten(e) {
    console.log(e)
  }
  //expects props options
  /*const props = defineProps({
foo: String
})*/
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss">
  .text {
    width: 100%;
    height: 100%;
  }
  #text-warp {
    width: 100%;
    height: 100%;
  }
  // canvas {
  //   width: 100%;
  //   height: 100%;
  // }
</style>
