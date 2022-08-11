<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-07 09:50:26
 * @LastEditTime: 2022-08-10 20:26:58
 * @LastEditors: Gavin
-->
<template>
  <div>
    <nav>
      <a-button type="primary" @click="handleEdit({ parentid: '0' })">
        <template #icon><plus-outlined /></template>
        Add
      </a-button>
    </nav>
    <a-table
      class="table"
      :scroll="{ x: 1500 }"
      :columns="columns"
      :data-source="tableList"
      :loading="loading"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a class="table-btn" @click="handleEdit({ parentid: record.url })">
            <!-- <template #icon><edit-outlined /></template> -->
            Add
          </a>
          <a class="table-btn" @click="handleEdit(record)">
            <!-- <template #icon><edit-outlined /></template> -->
            Edit
          </a>
          <a-popconfirm
            title="All subtasks of the selected task will be deleted"
            ok-text="Yes"
            cancel-text="No"
            @confirm="(e) => confirm(record, e)"
            @cancel="(e) => cancel(record, e)"
          >
            <a class="table-btn">
              <!-- <template #icon><edit-outlined /></template> -->
              Delete
            </a>
          </a-popconfirm>
        </template>

        <template v-if="column.key === 'type'">
          <a-tag :color="record[column.key] == 'menu' ? '#87d068' : '#55acee'">
            {{ record[column.key] }}
          </a-tag>
        </template>
        <template v-if="defaultFieldList.includes(column.dataIndex)">
          {{ getDateByUTC(record[column.dataIndex]) }}
        </template>
        <template v-if="column.key === 'available'">
          <unlock-filled v-if="+record[column.key]" />
          <lock-filled v-else />
        </template>
      </template>
    </a-table>
    <a-modal v-model:visible="visibleEdit" :title="editTitle" @ok="handleOk">
      <a-form
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        class="app-container bg-fff"
        @finish="onFinish"
      >
        <a-form-item
          label="name"
          name="name"
          :rules="[{ required: true, message: 'Please insert name!' }]"
        >
          <a-input v-model:value="form.name" placeholder="insert link" />
        </a-form-item>
        <a-form-item
          label="url"
          name="url"
          :rules="[{ required: true, message: 'Please insert url!' }]"
        >
          <a-input v-model:value="form.url" placeholder="insert url" />
        </a-form-item>
        <a-form-item
          label="parentid"
          name="parentid"
          :rules="[{ required: true, message: 'Please input name!' }]"
        >
          <a-input v-model:value="form.parentid" />
        </a-form-item>
        <a-form-item label="type" name="type">
          <a-radio-group v-model:value="form.type">
            <a-radio value="menu">menu</a-radio>
            <a-radio value="link">link</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item label="available" name="available">
          <a-switch v-model:checked="form.available" />
        </a-form-item>
        <a-divider />
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { getList, delItem } from '@/api/account/menu'
  import { LockFilled, UnlockFilled, PlusOutlined } from '@ant-design/icons-vue'
  import { recursiveFormatting } from './utils'
  import { useEditDialog } from './hooks/useEditDialog'
  import { getDateByUTC, defaultFieldList } from '@/utils'
  import { Permission } from '@/model/account'
  import { message } from 'ant-design-vue'
  const tableList = ref<Permission[]>([])
  //api来自antdv-table
  const columns = [
    {
      title: 'type',
      dataIndex: 'type',
      key: 'type',
      width: '12%',
      fixed: 'left',
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
      fixed: 'right',
      width: '16%',
    },
  ]
  const handleEdit = (target: any) => {
    console.log(target)

    handleOpen(target)
  }
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

    tableList.value = recursiveFormatting(item, '0') as Permission[]

    total.value = itemTotal
    loading.value = false
  }
  onMounted(() => {
    GetTableList()
  })
  //弹窗逻辑
  const ed = useEditDialog()

  const {
    //表单
    labelCol,
    wrapperCol,
    form,
    visibleEdit,
    editTitle,
  } = ed
  //可覆盖方法
  let { onFinish, handleOpen, handleOk } = ed
  //覆盖确认关闭弹窗的方法
  handleOk = async () => {
    await onFinish()
    visibleEdit.value = !true
    GetTableList()
  }

  const confirm = async (item: Permission, e?) => {
    if (item.children?.length) {
      item.children?.forEach((item) => {
        confirm(item)
      })
    }
    await delItem(item)
    message.success(`${item.name}已删除`)
    GetTableList()
  }
  const cancel = (item: Permission, e) => {
    console.log(e)
  }
  // const handleDelete = async (item: Permission) => {
  //   await delItem(item)

  //   GetTableList()
  // }

  //expects props options
  /*const props = defineProps({
foo: String
})*/
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss">
  nav {
    margin-bottom: 10px;
  }
  .table {
    &-btn {
      margin-right: 5px;
    }
  }
</style>
