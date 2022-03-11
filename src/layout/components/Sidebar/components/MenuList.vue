<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-08 22:07:59
 * @LastEditTime: 2022-03-11 18:31:24
 * @LastEditors: Gavin
-->

<template>
  <a-menu
    id="menu-warp"
    v-model:open-keys="state.openKeys"
    v-model:selected-keys="state.selectedKeys"
    :mode="sideModel"
    theme="dark"
    @click="clickMenuItem"
  >
    <template v-for="item in menus" :key="item.name">
      <menu-item :menu-item="item" :collapsed="collapsed" />
    </template>
  </a-menu>
</template>

<script lang="ts" setup>
  import { reactive, computed, watch, onMounted } from 'vue'
  import { usePermission, useTheme } from '@/store/pinia/index'

  import { useRouter, useRoute } from 'vue-router'
  import { filterAsyncRoutes as isHidden } from '@/hooks/router'
  import MenuItem from '../components/MenuItem.vue'

  const props = defineProps({
    collapsed: Boolean,
  })
  //salute Vue2 ^-^
  const $route = useRoute()
  const $router = useRouter()

  const sideModel = computed(() => {
    return useTheme().sideModel
  })
  //加载菜单
  const menus = computed(
    () => isHidden(usePermission().routes, [], 'hidden') || []
  )
  console.error(menus)

  // 获取当前打开的子菜单
  const getOpenKeys = () => {
    const parentsName = $route.matched.map((item) => {
      return item.name
    })
    //弹出最后一栈
    parentsName.length > 1 && parentsName.pop()

    return parentsName
  }
  const state = reactive({
    openKeys: getOpenKeys(),
    selectedKeys: [$route.name],
  })
  // const {openKeys,selectedKeys}=toRefs(state)

  // 监听菜单收缩状态
  watch(
    () => props.collapsed,
    (newVal) => {
      state.openKeys = newVal ? [] : getOpenKeys()
      state.selectedKeys = [$route.name]
    }
  )

  // 跟随页面路由变化，切换菜单选中状态
  watch(
    () => $route.fullPath,
    () => {
      if ($route.name == 'Login' || props.collapsed) return
      // console.error("OpenKey", getOpenKeys(), $route);
      state.openKeys = getOpenKeys()
      state.selectedKeys = [$route.name]
    }
  )

  // 点击菜单
  const clickMenuItem = ({ item, key, keyPath }) => {
    console.log(item, key, keyPath)

    if (/http(s)?:/.test(key)) {
      window.open(key)
    } else {
      $router.push({ name: key })
    }
  }

  // expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss">
  .ant-menu-dark
    .ant-menu-dark:not(.ant-menu-horizontal)
    :deep(.ant-menu-item-selected) {
    background-color: #304156 !important;
  }
</style>
