<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-05-13 11:14:04
 * @LastEditTime: 2022-05-13 16:25:34
 * @LastEditors: Gavin
-->
<template>
  <div><a-table :data-source="dataSource" :columns="columns" /></div>
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
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    },
  ]
  const dataSource = ref<Person[]>([])
  getPerson({ current: 1, pageSize: 10 }).then((res) => {
    dataSource.value = res.item
  })
  //expects props options
  /*const props = defineProps({
foo: String
})*/
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss"></style>
