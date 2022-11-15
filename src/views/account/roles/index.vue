<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-02 09:35:40
 * @LastEditTime: 2022-11-15 15:27:19
 * @LastEditors: Gavin 850680822@qq.com
-->
<template>
  <div class="app-container ">

    <nav>


      <a-button type="primary" @click="() => (dialogVisible = true)" >
        <template #icon>
          <plus-outlined />
        </template>
        Add
      </a-button>
    </nav>
    <a-table :columns="columns" :data-source="tableData" :loading="loading" bordered>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a type="text" class="operation-link" @click="handleEdit(record)">
            <!-- <template #icon><edit-outlined /></template> -->
            Edit
          </a>
        </template>
        <template v-if="defaultFieldList.includes(column.dataIndex)">
          {{ getDateByUTC(record[column.dataIndex]) }}
        </template>
      </template>
    </a-table>
    <a-pagination v-model:current="page" v-model:pageSize="pageSize" show-size-changer :total="total"
      :show-total="(total) => `共有${total}条`" :style="{ textAlign: 'center', margin: '10px 0' }" @change="handlePage" />
    <!-- drawer for Edit -->
    <a-drawer v-model:visible="visible" class="custom-class" size="large" title="Edit" placement="right"
      @after-visible-change="afterVisibleChange">
      <DrawerContainer></DrawerContainer>
    </a-drawer>

    <a-modal cancelText v-model:visible="dialogVisible" title="Add Role" @ok="handleOk">
      <AddRole ref="addRef" />
    </a-modal>

  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import { getList } from '@/api/account/role'
import { usePage } from './hooks/usePage'
import type { Role } from '@/model/account'
import { getDateByUTC, defaultFieldList } from '@/utils'
import DrawerContainer from './components/DrawerContainer.vue'
import AddRole from "./components/AddRole.vue"
import { PlusOutlined } from '@ant-design/icons-vue';

//choice item
const currentItem = ref<Role>()
provide(/* 注入名 */ 'currentItem', /* 值 */ currentItem)

//tabledata
const tableData = ref<Role[]>([]),
  //api form antdv
  columns = [
    {
      title: 'id',
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
      title: 'describe',
      dataIndex: 'describe',
    },

    {
      title: 'operation',
      key: 'operation',
    },
  ]

// tablle&Pagination Hooks
const { handlePage, page, pageSize, total, loading } = usePage(async () => {
  loading.value = true
  const params = {
    page: page.value,
    pageSize: pageSize.value,
  }
  const { item, total: itemTotal } = await getList(params)
  tableData.value = item
  total.value = itemTotal
  loading.value = false
})



handlePage()

const visible = ref<boolean>(false),
  afterVisibleChange = (bool: boolean) => {
    console.log('visible', bool);
  };
const handleEdit = (record: Role) => {
  currentItem.value = record
  visible.value = true
}


const addRef = ref(),
  dialogVisible = ref<boolean>(false),
  handleOk =async  () => {
       await addRef.value.onFinish()
       dialogVisible.value=!dialogVisible.value
  }

</script>

<style scoped lang="scss">
.operation-link {
  margin-right: 10px;
}
</style>
