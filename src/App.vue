<!--
 * @Description: 初始化
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2022-05-13 22:22:09
 * @LastEditors: Gavin
-->
<template>
  <transition name="slide-up">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </transition>
</template>

<script lang="ts" setup>
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
  const locale = zhCN
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
