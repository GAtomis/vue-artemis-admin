<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-06 12:43:12
 * @LastEditTime: 2021-12-30 18:33:30
 * @LastEditors: Gavin
-->
<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition name="zoom-fade" mode="out-in" appear>
        <keep-alive >
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
// import { useStore } from 'vuex'

export default defineComponent({
  name: 'RouterTransition',
  props: {
    notNeedKey: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    // const store = useStore()
    // 需要缓存的路由组件
    // const keepAliveComponents = computed(() => store.state.asyncRoute.keepAliveComponents)

    return {
      // keepAliveComponents
    }
  }
})
</script>
