<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-08 16:50:22
 * @LastEditTime: 2021-10-26 15:49:10
 * @LastEditors: Gavin
-->


<template>
  <aside class="aside">
    <a-sub-menu
      v-if="menuItem?.children?.length && !menuItem?.meta?.only"
      :key="menuItem.name"
      v-bind="$attrs"
    >
      <template #icon>
        <icon-font :type="menuItem.meta.icon" />
      </template>
      <template #title>
        <span>{{ menuItem?.meta?.title }}</span>
      </template>
      <template v-for="item in menuItem.children" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <template #icon>
              <icon-font :type="item.meta.icon" />
            </template>

            <span>{{ item?.meta?.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <!-- {{item.name}} -->
          <menu-item :menu-item="item" :collapsed="collapsed" />
        </template>
      </template>
    </a-sub-menu>
    <!-- 默认读only第一个子集 -->
    <a-menu-item v-else :key="menuItem?.children?.[0].name">
      <template #icon>
        <icon-font :type="menuItem?.children?.[0]?.meta.icon" />
      </template>
      <span>{{ menuItem?.children?.[0]?.meta?.title }}</span>
    </a-menu-item>
  </aside>
</template>

<!-- <script lang="ts" setup>
import {computed } from 'vue'
const props=defineProps({
  menuItem: {
    type: Object,
    default: () => ({})
  },
  collapsed: Boolean
  

})
//变量css太香了呀
const fontSize = computed(()=>props.collapsed?'25px':'20px')
const fontWidth = computed(()=>props.collapsed?'38px':'0px')
const menuItem = {}

</script> -->

<script lang="ts">
import { defineComponent, computed, inject } from 'vue'
// import MenuItemChild from './MenuItem.vue'

export default defineComponent({
  name: 'MenuItem',
  components: {
    // MenuItemChild
  },
  props: {
    menuItem: {
      type: Object,
      default: () => ({})
    },
    collapsed: Boolean
  },

  setup(props) {

    //变量css太香了呀
    const fontSize = computed(() => props.collapsed ? '25px' : '20px')
    const fontWidth = computed(() => props.collapsed ? '38px' : '0px')


    return {
      fontSize,
      fontWidth,


    }

  }
})
</script>



<style lang="scss" scoped>
.aside {
  .ant-menu-item-icon {
    font-size: v-bind(fontSize);
    margin-right: v-bind(fontWidth);
    margin-left: 3px;
  }

  :deep(.ant-menu-item-selected) {
    background-color: #304156;
  }
}
</style>
<style  >
.ant-menu-item-selected {
  background-color: #304156 !important;
}
</style>
