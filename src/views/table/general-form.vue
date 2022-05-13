<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-05-13 11:14:04
 * @LastEditTime: 2022-05-13 23:46:09
 * @LastEditors: Gavin
-->
<template>
  <div>
    <a-table
      :data-source="dataSource"
      :columns="columns"
      :pagination="false"
      bordered
      :loading="loading"
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.key === 'avatar'">
          <a-avatar :size="64" :src="text"></a-avatar>
        </template>
      </template>
    </a-table>
    <a-pagination
      v-model:current="current"
      v-model:pageSize="pageSize"
      show-size-changer
      :total="total"
      :show-total="(total) => `共有${total}条`"
      :style="{ textAlign: 'center', margin: '10px 0' }"
      @change="handlePage"
    />
  </div>
</template>

<script lang="ts" setup>
  import { getPerson } from '@/api/table'
  import type { Person } from './type'
  import { ref } from 'vue'
  type Columns = {
    title: string
    dataIndex: string
    key?: string
  }
  const columns: Columns[] = [
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    },

    {
      title: '国家',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: '工作类型',
      dataIndex: 'jobType',
      key: 'jobType',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    },
  ]
  const dataSource = ref<Person[]>([])
  const pageSize = ref<number>(10)
  const current = ref<number>(1)
  const total = ref<number>(0)
  const loading = ref(false)

  const getList = () => {
    loading.value = true
    getPerson({ current: current.value, pageSize: pageSize.value })
      .then((res) => {
        dataSource.value = res.item
        total.value = res.total
      })
      .finally(() => {
        loading.value = false
      })
  }
  const handlePage = (page, pageSize) => {
    console.log(page, pageSize)
    getList()
  }
  console.log('setup time')

  getList()
</script>

<style scoped lang="scss"></style>
