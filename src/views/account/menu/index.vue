<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-26 09:31:56
 * @LastEditTime: 2022-07-31 17:55:18
 * @LastEditors: Gavin
-->
<template>
  <div>
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="8">
        <a-tree
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
        >
          <template #icon="{ children }">
            <menu-outlined v-if="children" />
          </template>
        </a-tree>
      </a-col>
      <a-col class="gutter-row" :span="16"></a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { useMenuTree } from './hooks/hooks'
  import { MenuOutlined } from '@ant-design/icons-vue'
  const {
    meuns,
    expandedKeys,
    selectedKeys,
    checkedKeys,
    showLine,
    showIcon,
    onSelect,
    fieldNames,
  } = useMenuTree()

  //expects props options
  /*const props = defineProps({
foo: String
})*/
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss"></style>
