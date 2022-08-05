<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-02 09:35:40
 * @LastEditTime: 2022-08-03 15:54:43
 * @LastEditors: Gavin
-->
<template>
  <div class="app-container bg-fff">
    <a-table :columns="columns" :data-source="data" :loading="loading">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a @click="handleSetting(record)">setting</a>
        </template>
      </template>
    </a-table>
    <a-pagination
      v-model:current="page"
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
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getList } from '@/api/account/role'
  import _ from 'lodash'
  import { usePage } from './hooks/usePage'
  import type { Role } from '@/model/account'

  //api来自antdv
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'createTime',
      dataIndex: 'createdAt',
    },
    {
      title: 'updateTime',
      dataIndex: 'updatedAt',
    },

    {
      title: 'operation',
      key: 'operation',
    },
  ]

  const data = ref<Role[]>([])

  const { handlePage, page, pageSize, total, loading } = usePage(async () => {
    loading.value = true
    const params = {
      page: page.value,
      pageSize: pageSize.value,
    }
    const { item, total: itemTotal } = await getList(params)
    data.value = item
    total.value = itemTotal
    loading.value = false
  })
  handlePage()

  const $router = useRouter()
  const handleSetting = (record: Role) => {
    console.log(record)

    $router.push({
      path: '/account/menu',
      query: { id: record.id },
    })
  }

  // const level = computed(() => {
  //   return useUser().level
  // })

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
