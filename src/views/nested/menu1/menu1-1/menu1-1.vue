<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 11:47:32
 * @LastEditTime: 2022-11-15 15:21:55
 * @LastEditors: Gavin 850680822@qq.com
-->
<template>
  <div class="app-container ">
    三级导航
    <div ref="el" style="position: fixed" :style="style">
      三级导航 Drag me! I am at {{ x }}, {{ y }}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useDraggable } from '@vueuse/core'

  export default defineComponent({
    name: 'Menu11',
    setup() {
      const el = ref<HTMLElement | null>(null)

      // `style` will be a helper computed for `left: ?px; top: ?px;`
      const { x, y, style } = useDraggable(el, {
        initialValue: { x: 494, y: 137 },
      })
      return { x, y, style, el }
    },
  })
</script>
