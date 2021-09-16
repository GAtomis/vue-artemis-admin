<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-08 16:50:22
 * @LastEditTime: 2021-09-08 14:16:59
 * @LastEditors: Gavin
-->
<template>
  <aside class="aside">
    <a-sub-menu v-if="menuList?.children?.length" :key="menuList.name" v-bind="$attrs">
      <template #icon>
        <icon-font :type="menuList.meta.icon" />
      </template>
      <template #title  >
        <span >{{ menuList.meta.title }}</span>
      </template>
      <template v-for="item in menuList.children" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">

            <template #icon>

              <icon-font :type="item.meta.icon" />
              </template>
          
      
              <span >{{ item.meta.title }}</span>
      
          </a-menu-item>
        </template>
        <template v-else>  
          <!-- {{item.name}} -->
          <menu-item-child :menu-list="item" :collapsed="collapsed" />
        </template>
      </template>
    </a-sub-menu>
    <a-menu-item v-else :key="menuList.name">
      <template #icon>
        <icon-font :type="menuList?.meta.icon??menuList?.meta?.icon" />
      </template>
      <span >{{ menuList?.meta.title??menuList?.meta?.title }}</span>
    </a-menu-item>
  </aside>
</template>

<script lang="ts" setup>
import  MenuItemChild from './MenuItem.vue'

import {computed } from 'vue'
const props=defineProps({
  menuList: {
    type: Object,
    default: () => ({})
  },
  collapsed: Boolean
  

})
//变量css太香了呀
const fontSize = computed(()=>props.collapsed?'25px':'20px')
const fontWidth = computed(()=>props.collapsed?'38px':'0px')


</script>

<style lang="scss" scoped>
.aside {
  .ant-menu-item-icon {

    font-size: v-bind(fontSize);
    margin-right:v-bind(fontWidth);
    margin-left:3px;

    
    }

  :deep(.ant-menu-item-selected ){
    background-color: #304156 
  }


}
</style>
<style  >
.ant-menu-item-selected{
   background-color: #304156 !important;
}

</style>
