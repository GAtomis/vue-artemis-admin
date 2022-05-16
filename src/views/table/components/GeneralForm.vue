<!--
 * @Description: Form content
 * @Author: Gavin
 * @Date: 2022-05-15 12:59:09
 * @LastEditTime: 2022-05-16 10:19:32
 * @LastEditors: Gavin
-->
<template>
  <a-form
    :model="formState"
    name="horizontal_login"
    layout="inline"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="name"
      name="name"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.name"></a-input>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit">
        <template #icon><SearchOutlined /></template>
        Search
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
  import { reactive, computed } from 'vue'
  import { SearchOutlined } from '@ant-design/icons-vue'
  //expects props options
  // const props = defineProps({
  //   foo: String,
  // })
  interface FormState {
    name: string
    gender: string
  }
  const formState = reactive<FormState>({
    name: '',
    gender: '',
  })
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const disabled = computed(() => {
    return !(formState.username && formState.password)
  })
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss"></style>
