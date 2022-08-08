<!--
 * @Description: Form content
 * @Author: Gavin
 * @Date: 2022-05-15 12:59:09
 * @LastEditTime: 2022-08-09 00:11:13
 * @LastEditors: Gavin
-->
<template>
  <a-form
    v-if="0"
    :model="formState"
    name="horizontal_login"
    layout="inline"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item label="name" name="name">
      <a-input v-model:value="formState.name"></a-input>
    </a-form-item>
    <a-form-item label="gender" name="gender">
      <a-select
        ref="select"
        v-model:value="formState.gender"
        style="width: 120px"
        placeholder="Please select gender"
      >
        <a-select-option value="Female">Female</a-select-option>
        <a-select-option value="Male">Male</a-select-option>
        <a-select-option value="">any</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">
        <template #icon>
          <SearchOutlined />
        </template>
        Search
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { SearchOutlined } from '@ant-design/icons-vue'

  //expects props options
  // const props = defineProps({
  //   foo: String,
  // })
  export interface FormState {
    name: string
    gender: string
  }
  const formState = reactive<FormState>({
    name: '',
    gender: '',
  })
  const onFinish = (values: FormState) => {
    console.log('Success:', values)
    emit('search', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  //expects emits options
  //const emit = defineEmits(['update', 'delete'])

  // 基于类型
  const emit = defineEmits<{
    (e: 'search', form: FormState): void
  }>()
</script>

<style scoped lang="scss"></style>
