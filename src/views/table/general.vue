<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-05-13 11:14:04
 * @LastEditTime: 2022-05-18 14:53:49
 * @LastEditors: Gavin
-->
<template>
  <div>
    <a-card style="width: 100%">
      <general-form @search="handleSearch"></general-form>
    </a-card>

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
  import GeneralForm, { FormState } from './components/GeneralForm.vue'

  type Columns = {
    title: string
    dataIndex: string
    key?: string
  }
  const columns: Columns[] = [
    {
      title: 'avatar',
      dataIndex: 'avatar',
      key: 'avatar',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender',
    },

    {
      title: 'country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'jobType',
      dataIndex: 'jobType',
      key: 'jobType',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
  ]
  const dataSource = ref<Person[]>([])
  const pageSize = ref<number>(10)
  const current = ref<number>(1)
  const total = ref<number>(0)
  const loading = ref(false)
  const getList = (form: any = {}) => {
    loading.value = true
    const params = {
      ...form,
      ...{ current: current.value, pageSize: pageSize.value },
    }
    getPerson(params)
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
  const handleSearch = (form: FormState) => {
    getList(form)
  }

  getList()
</script>

<style scoped lang="scss"></style>
