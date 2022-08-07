<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-07 09:50:26
 * @LastEditTime: 2022-08-07 22:50:53
 * @LastEditors: Gavin
-->
<template>
  <div>
    <a-table :columns="columns" :data-source="tableList" :loading="loading">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a type="text" @click="handleEdit(record)">
            <!-- <template #icon><edit-outlined /></template> -->
            Edit
          </a>
        </template>

        <template v-if="column.key === 'type'">
          <a-tag :color="record[column.key] == 'menu' ? '#87d068' : '#55acee'">
            {{ record[column.key] }}
          </a-tag>
        </template>
        <template v-if="column.key === 'available'">
          <unlock-filled v-if="+record[column.key]" />
          <lock-filled v-else />
        </template>
      </template>
    </a-table>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'

  import { getList } from '@/api/account/menu'
  import { LockFilled, UnlockFilled } from '@ant-design/icons-vue'
  import { recursiveFormatting, PermissionItem } from './utils'
  const tableList = ref<PermissionItem[]>([])
  //api来自antdv
  const columns = [
    {
      title: 'type',
      dataIndex: 'type',
      key: 'type',
      width: '12%',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'url',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: 'parentid',
      dataIndex: 'parentid',
      key: 'parentid',
    },
    {
      title: 'available',
      dataIndex: 'available',
      key: 'available',
    },
    {
      title: 'createTime',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'updateTime',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },

    {
      title: 'operation',
      key: 'operation',
    },
  ]

  const handleEdit = (item: PermissionItem) => {}
  const loading = ref(false)
  const total = ref(0)
  const GetTableList = async () => {
    loading.value = true
    const params = {
      page: 1,
      pageSize: 9999,
    }
    const { item, total: itemTotal } = await getList(params)
    console.log(recursiveFormatting(item, '0'))

    tableList.value = recursiveFormatting(item, '0')

    total.value = itemTotal
    loading.value = false
  }
  onMounted(() => {
    GetTableList()
  })

  //expects props options
  /*const props = defineProps({
foo: String
})*/
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss"></style>
