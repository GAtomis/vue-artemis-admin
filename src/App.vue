<!--
 * @Description: 初始化
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2021-08-03 12:25:47
 * @LastEditors: Gavin
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.svg" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <lian-xi msg="Gavin-的练习"/> -->
  <!-- <lian-xi3 msg='Gavin-的联系'/> -->
  <!-- <computedComp/> -->
  <!-- <watchComp/> -->
  <!-- <provideComp :msg="`provide`"/> -->
  <!-- <demo msg="Gavin so TMD shuai"></demo> -->
  <transition name="slide-up">
    <router-view />
  </transition>
</template>

<script lang="ts" setup>

import { onMounted} from 'vue'
import { useMouse} from '@vueuse/core'
// import HelloWorld from '@/components/HelloWorld.vue'
// import lianXi from '@/components/lianxi2.vue'
// import lianXi3 from '@/components/lianxi3.vue'
// import computedComp from '@/components/computed.vue'
// import watchComp from '@/components/watch.vue'
// // import provideComp from '@/components/provide&inject.vue'
// import demo from '@/components/Demo.vue'



    onMounted(() => {

      console.log(import.meta.env.VITE_PORT);
    })
    // tracks mouse position
    const { x, y } = useMouse()





</script>

<style lang="scss">

@import 'styles/global.scss';
@import 'styles/common.scss';
@import 'styles/override.scss';

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.35s ease-in;
}

.slide-up-enter-form,
.slide-up-leave-to {
  transform: translateY(-100%);
}
</style>
