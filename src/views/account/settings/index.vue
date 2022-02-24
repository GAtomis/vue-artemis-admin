<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-02 09:35:40
 * @LastEditTime: 2022-02-24 11:20:21
 * @LastEditors: Gavin
-->
<template>
  <div class="app-container bg-fff">
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a @click="openDialog(record)">setting</a>
        </template>
      </template>
    </a-table>

    <a-modal v-model:visible="visible" title="Basic" @ok="visible = false">
      <a-tree
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:checkedKeys="checkedKeys"
        :show-line="showLine"
        :show-icon="showIcon"
        checkable
        @select="onSelect"
      >
        <a-tree-node v-for="menuItem in perMeuns" :key="menuItem?.meta.roles">
          <template #icon>
            <node-index-outlined />
          </template>
          <template #title>
            <span style="color: #1890ff">{{ menuItem?.meta.title }}</span>
          </template>
          <a-tree-node
            v-for="child in menuItem.children"
            :key="child?.meta.roles"
            :title="child?.meta.title"
          >
            <template #icon>
              <node-index-outlined />
            </template>
            <a-tree-node
              v-for="nested in child.children"
              :key="nested?.meta.roles"
              :title="nested?.meta.title"
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

<script lang="ts" setup>
  import { ref, computed } from 'vue'

  import { filterAsyncRoutes } from '@/hooks/router'
  import { getPermissionList } from '@/api/account/index'
  import useDialogTree from './hooks/useDialogTree'
  import _ from 'lodash'
  import { useUser } from '@/store/pinia/index'

  interface DataItem {
    key: string | number
    des: string
    level: string
  }
  //api来自antdv
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
    },
    {
      title: 'level',
      dataIndex: 'level',
    },
    {
      title: 'des',
      dataIndex: 'des',
    },
    {
      title: 'operation',
      key: 'operation',
    },
  ]

  const data = ref<DataItem[]>([
    {
      key: 0,
      des: '用户权限',
      level: 'user',
    },
    {
      key: 1,
      des: '管理员',
      level: 'admin',
    },
  ])

  // const level = computed(() => {
  //   return useUser().level
  // })

  const visible = ref<boolean>(false)
  const perMeuns = ref<any[]>([])
  const {
    expandedKeys,
    selectedKeys,
    checkedKeys,
    showLine,
    showIcon,
    onSelect,
  } = useDialogTree()

  const openDialog = async (raw) => {
    checkedKeys.value = _.cloneDeep(useUser().roles)
    let per = await getPermissionList({
      level: raw.level,
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

<style scoped lang="scss"></style>
