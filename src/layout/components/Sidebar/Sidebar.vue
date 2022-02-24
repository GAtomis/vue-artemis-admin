<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-09 12:26:22
 * @LastEditTime: 2022-01-10 11:29:06
 * @LastEditors: Gavin
-->

<template>
  <slot name="logo">
    <!-- 侧边栏标题 -->
    <div class="logo" :class="{ collapsed: collapsed }">
      <img :src="LOGO_IMAGE" />
      <span
        :class="{ anticon: collapsed }"
        style="
          color: #fff;
          font-size: 16px;
          transition: all 0.5s;
          white-space: nowrap;
        "
      >
        {{ HOME_TITLE }}
      </span>
    </div>
  </slot>
  <slot name="menu">
    <menu-list :collapsed="collapsed" />
  </slot>
</template>
<script lang="ts" setup>
  import MenuList from './components/MenuList.vue'
  import { inject } from 'vue'
  import { LOGO_IMAGE, HOME_TITLE } from '@/settings'
  defineProps({
    collapsed: Boolean,
  })
</script>

<style lang="scss" scope>
  .collapsed {
    padding: 0 10%;
    text-overflow: clip;
  }

  .logo {
    display: flex;
    height: 32px;
    overflow: hidden;
    font-size: 15px;
    color: #fff;
    white-space: nowrap;
    margin: 16px;
    transition: all 0.2s;
    align-items: center;

    .anticon {
      display: inline-block;
      max-width: 0;
      opacity: 0;
      transition: all 0.2s;
    }

    img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }
    span {
      padding-left: 10px;
    }
  }
</style>
