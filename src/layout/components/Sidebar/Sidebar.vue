<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-09 12:26:22
 * @LastEditTime: 2021-12-16 17:23:46
 * @LastEditors: Gavin
-->

<template>
  <slot name="logo">
      <!-- 侧边栏标题 -->
    <div class="logo" :class="{ collapsed: collapsed }">
      <img src="~@/assets/typescript-logo.jpg" />
      <span
        :class="{ anticon: collapsed }"
        style="color: #fff; font-size: 16px; white-space: nowrap"
        >Artemis Admin</span
      >
    </div>
  </slot>
  <slot name="menu">
    <menu-list :collapsed="collapsed" />
  </slot>


</template>
<script lang='ts' setup>
import MenuList from './components/MenuList.vue'
import { inject } from 'vue'
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
  height: 32px;
  margin: 16px 5px;
  overflow: hidden;
  font-size: 15px;
  color: #fff;
  white-space: nowrap;
  margin: 16px ;
  transition: all 0.2s;
  .anticon {
    display: inline-block;
    max-width: 0;
    opacity: 0;
    transition: all 0.2s;
  }

  img {
    width: 32px;
    height: 32px;
  }
  span {
    padding-left: 20px;
  }
}
</style>