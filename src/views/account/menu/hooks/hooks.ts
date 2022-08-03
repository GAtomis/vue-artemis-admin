/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-28 18:42:43
 * @LastEditTime: 2022-07-28 19:34:31
 * @LastEditors: Gavin
 */
import { deepRouteMap, filterAsyncRoutes as filterMenus } from '@/hooks/router'
import type { ExpandRouteRecordRaw } from '@/model/router'
import { privateRouteTable as asyncRoutes } from '@/router/index'

import { ref, watch } from 'vue'
import type { TreeProps } from 'ant-design-vue'

export function useMenuTree() {
  const meuns = ref<ExpandRouteRecordRaw[]>()
  meuns.value = filterMenus(
    deepRouteMap(asyncRoutes, (route) => {
      if (route?.meta?.roles) {
        route.value = route?.meta?.roles as string
      }
    }),
    [],
    'hidden'
  )
  const expandedKeys = ref<string[]>([])
  const selectedKeys = ref<string[]>([])
  const checkedKeys = ref<string[]>([])
  const showLine = ref<boolean>(true)
  const showIcon = ref<boolean>(true)
  const fieldNames = { children: 'children', title: 'name', key: 'value' }
  const onSelect: TreeProps['onSelect'] = (selectedKeys: string[], info) => {
    console.log('selected', selectedKeys, info)
  }

  watch(expandedKeys, () => {
    console.log('expandedKeys', expandedKeys)
  })
  watch(selectedKeys, () => {
    console.log('selectedKeys', selectedKeys)
  })
  watch(checkedKeys, () => {
    console.log('checkedKeys', checkedKeys)
  })
  return {
    meuns,
    expandedKeys,
    selectedKeys,
    checkedKeys,
    showLine,
    showIcon,
    fieldNames,
    onSelect,
  }
}
