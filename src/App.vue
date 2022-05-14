<!--
 * @Description: 初始化
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2022-05-14 12:26:08
 * @LastEditors: Gavin
-->
<template>
  <a-config-provider :locale="locale">
    <transition name="slide-up">
      <router-view />
    </transition>
  </a-config-provider>
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
