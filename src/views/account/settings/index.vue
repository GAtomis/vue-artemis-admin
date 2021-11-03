<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-02 09:35:40
 * @LastEditTime: 2021-11-03 11:08:10
 * @LastEditors: Gavin
-->
<template>
  <div>
    <a-table :columns="columns" :data-source="data">
      <template #operation="{ record }">
        <a @click="openDialog">setting</a>
      </template>
    </a-table>

    <a-modal v-model:visible="visible" title="Basic" @ok="visible=false">
      <a-tree
        :show-line="showLine"
        :show-icon="showIcon"
        @select="onSelect"
        checkable
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:checkedKeys="checkedKeys"
      >
        <a-tree-node :key="menuItem?.meta.roles" v-for="menuItem in perMeuns">
          <template #icon>
            <node-index-outlined />
          </template>
          <template #title>
            <span style="color: #1890ff">{{ menuItem?.meta.title }}</span>
          </template>
          <a-tree-node
            :key="child?.meta.roles"
            :title="child?.meta.title"
            v-for=" child in menuItem.children"
          >
            <template #icon>
              <node-index-outlined />
            </template>
            <a-tree-node
              :key="nested?.meta.roles"
              :title="nested?.meta.title"
              v-for=" nested in child.children"
            >
              <template #icon>
                <node-index-outlined />
              </template>
            </a-tree-node>
          </a-tree-node>
        </a-tree-node>
      </a-tree>
    </a-modal>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed, watch } from 'vue'
import { useStore } from '@/store'
import { filterAsyncRoutes } from '@/hooks/router'
import { NodeIndexOutlined } from '@ant-design/icons-vue';
import { SelectEvent } from 'ant-design-vue/es/tree/Tree';
import { getPermissionList } from '@/api/account/index'
import useDialogTree from './hooks/useDialogTree'

import _ from 'lodash'
const $store = useStore()
interface DataItem {
  key: string | number;
  name: string;
  level: string;
}
//api来自antdv
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'level',
    dataIndex: 'level',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    slots: { customRender: 'operation' },
  },
];

const data = ref<DataItem[]>([

  {
    key: 0,
    name: $store.getters['userInfo'].name,
    level: $store.getters['userInfo'].level,

  }
])

const level = computed(() => {
  return $store.getters.userInfo.level
})


const visible = ref<boolean>(false)
const perMeuns = ref<any[]>([])
//tree hook
const { expandedKeys, selectedKeys, checkedKeys, showLine, showIcon, onSelect } = useDialogTree()
// const expandedKeys = ref<string[]>([]);
// const selectedKeys = ref<string[]>([]);
// const checkedKeys = ref<string[]>([]);
const openDialog = async () => {
  checkedKeys.value = _.cloneDeep($store.getters['userInfo'].roles)
  let per = await getPermissionList({
    level: $store.getters['userInfo'].level
  })
  per = filterAsyncRoutes(undefined, per)
  perMeuns.value = per
  visible.value = true
}

//加载菜单

// const showLine = ref<boolean>(true);
// const showIcon = ref<boolean>(false);

// const onSelect = (selectedKeys: string[], info: SelectEvent) => {
//   console.log('selected', selectedKeys, info);
// };

// watch(expandedKeys, () => {
//   console.log('expandedKeys', expandedKeys);
// });
// watch(selectedKeys, () => {
//   console.log('selectedKeys', selectedKeys);
// });
// watch(checkedKeys, () => {
//   console.log('checkedKeys', checkedKeys);
// })

</script>

<style scoped lang='scss'>
</style>