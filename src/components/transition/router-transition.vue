<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-06 12:43:12
 * @LastEditTime: 2022-02-24 10:49:04
 * @LastEditors: Gavin
-->
<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="zoom-fade" mode="out-in" appear>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'RouterTransition',
    props: {
      notNeedKey: {
        type: Boolean,
        default: false,
      },
      animate: {
        type: Boolean,
        default: true,
      },
    },
    setup() {
      // 需要缓存的路由组件

      return {}
    },
  })
</script>
