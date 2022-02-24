<!--
 * @Description: 初始化
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2022-02-24 15:45:40
 * @LastEditors: Gavin
-->
<template>
  <transition name="slide-up">
    <router-view />
  </transition>
</template>

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
