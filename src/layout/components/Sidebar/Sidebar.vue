<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-09 12:26:22
 * @LastEditTime: 2021-09-01 18:11:40
 * @LastEditors: Gavin
-->
<template>
  <slot name="logo">
    <div class="logo" >
      <img src="~@/assets/typescript-logo.jpg" />
      <span :class="{anticon:collapsed}" style="color: #fff; font-size: 16px; white-space: nowrap;" >Artemis Admin</span>
    </div>
  </slot>
  <slot name="menu">
    <menu-list  :collapsed="collapsed"/>
  </slot>

  <!-- 侧边栏标题 -->
</template>
<script lang='ts' setup>
import MenuList from './components/MenuList.vue'
defineProps({
  collapsed:Boolean
})



</script>

<style lang="scss" scope>
.logo {
  display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    margin: 16px 5px;
    overflow: hidden;
    font-size: 15px;
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
  .anticon{
    display: inline-block;
    max-width: 0;
    opacity: 0;
    transition: all .2s;
 
  }
  img {
    width: 32px;
    height: 32px;
  }
  span{
    padding-left: 20px;
  }
}
</style>