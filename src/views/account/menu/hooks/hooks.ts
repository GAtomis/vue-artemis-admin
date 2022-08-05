/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-28 18:42:43
 * @LastEditTime: 2022-08-05 00:30:05
 * @LastEditors: Gavin
 */
import { deepRouteMap, filterAsyncRoutes as filterMenus } from '@/hooks/router'
import type { ExpandRouteRecordRaw } from '@/model/router'
import { privateRouteTable as asyncRoutes } from '@/router/index'
import type { Permission } from '@/model/account'

import { ref, watch } from 'vue'
import type { TreeProps } from 'ant-design-vue'
import type { EventDataNode } from 'ant-design-vue/lib/vc-tree/interface'

export type CheckedKeys = {
  checked: Array<any>
  halfChecked: Array<any>
}

export function useMenuTree() {
  const meuns = ref<ExpandRouteRecordRaw[]>(
    filterMenus(
      deepRouteMap(asyncRoutes, (route) => {
        if (route?.meta?.roles) {
          route.value = route?.meta?.roles as string
        }
      }),
      [],
      'hidden'
    )
  )

  const expandedKeys = ref<string[]>([])
  const selectedKeys = ref<string[]>([])
  const checkedKeys = ref<any>({})
  const showLine = ref<boolean>(true)
  const showIcon = ref<boolean>(true)

  const fieldNames = { children: 'children', title: 'name', key: 'value' }
  const onSelect: TreeProps['onSelect'] = (selectedKeys: string[], info) => {
    console.log(info)
  }

  watch(expandedKeys, () => {
    // console.log('expandedKeys', expandedKeys)
  })
  watch(selectedKeys, () => {
    // console.log('selectedKeys', selectedKeys)
  })
  watch(checkedKeys, () => {
    // console.log('checkedKeys', checkedKeys)
  })
  return {
    meuns,
    expandedKeys,
    selectedKeys,
    checkedKeys,
    showLine,
    showIcon,
    fieldNames,
    createMenu,
    filterMenu,
    onSelect, //点击树
  }
}

/**
 * @description: 创建菜单对象
 * @param {EventDataNode} node
 * @return {*}
 * @Date: 2022-08-03 16:44:51
 */
function createMenu(node: EventDataNode): Permission {
  const type = node?.children?.length ? 'menu' : 'link'
  const url = node.value
  const parentid = node?.parent?.node?.value ?? '0'
  const name = node?.name

  return { type, url, parentid, name }
}

/**
 * @description: 多选菜单过滤
 * @param {any} checked 实际选中条目
 * @param {Permission} newItem 新点击条目
 * @param {Permission[]} trees 加入的条目
 * @return {*}
 * @Date: 2022-08-03 16:46:14
 */
function filterMenu(
  checked: any[],
  newItem: Permission,
  trees: Array<Permission>
) {
  console.warn(checked, newItem, trees)

  if (checked.includes(newItem.url)) {
    trees.push(newItem)
    return trees
  }
  const res = trees.filter((item) => {
    return item.url != newItem.url
  })
  console.log(res)

  return res
}
