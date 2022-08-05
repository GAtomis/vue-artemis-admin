<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-26 09:31:56
 * @LastEditTime: 2022-08-05 11:35:09
 * @LastEditors: Gavin
-->
<template>
  <div>
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="8">
        <a-tree
          v-if="form?.sysPermissions"
          v-model:expandedKeys="expandedKeys"
          v-model:selectedKeys="selectedKeys"
          v-model:checkedKeys="checkedKeys"
          :show-line="showLine"
          :show-icon="showIcon"
          :field-names="fieldNames"
          :tree-data="meuns"
          check-strictly
          checkable
          @select="onSelect"
          @check="onCheck"
        >
          <template #icon="{ children }">
            <menu-outlined v-if="children" />
          </template>
        </a-tree>
      </a-col>
      <a-col class="gutter-row" :span="16">
        <a-form
          :model="form"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          class="app-container bg-fff"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label="name"
            name="name"
            :rules="[{ required: true, message: 'Please input your name!' }]"
          >
            <a-input v-model:value="form.name" />
          </a-form-item>

          <a-form-item label="available" name="available">
            <a-switch v-model:checked="form.available" />
          </a-form-item>
          <a-form-item label="menu" name="menu">
            <a-tag
              v-for="(item, index) of form.sysPermissions"
              :key="index"
              color="#f50"
            >
              {{ item.url }}
            </a-tag>
          </a-form-item>
          <a-divider />
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="submit">Save</a-button>
            <a-button style="margin-left: 10px">Cancel</a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { useMenuTree } from './hooks/hooks'
  import { MenuOutlined } from '@ant-design/icons-vue'
  import { useRoute } from 'vue-router'
  import { getItem, updateItem } from '@/api/account/role' //角色权限api
  import { getListByRoleId } from '@/api/account/menu'
  import { ref, onMounted } from 'vue'
  import type { TreeProps } from 'ant-design-vue'
  import type { Role } from '@/model/account'
  const {
    meuns,
    expandedKeys,
    selectedKeys,
    checkedKeys,
    showLine,
    showIcon,
    onSelect,
    createMenu,
    filterMenu,
    fieldNames,
  } = useMenuTree()

  const $route = useRoute()
  const form = ref<Role | any>({})

  const onCheck: TreeProps['onCheck'] = (check: any, info) => {
    const newItem = createMenu(info.node)
    form.value.sysPermissions = filterMenu(
      check?.checked ?? check,
      newItem,
      form.value.sysPermissions
    )
    console.log(form.value.sysPermissions)
  }
  const onFinish = () => {
    updateItem(form.value)
  }

  onMounted(async () => {
    const permission = await getListByRoleId()

    console.warn(permission)

    getItem({ id: $route?.query?.id }).then((res) => {
      form.value = res
      checkedKeys.value.checked =
        res.sysPermissions?.map((item) => item.url) ?? []
    })
  })

  //表单
  const labelCol = { span: 4 },
    wrapperCol = { span: 20 }

  //expects props options
  /*const props = defineProps({
foo: String
})*/
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss"></style>
