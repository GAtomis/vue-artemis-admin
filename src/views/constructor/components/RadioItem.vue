<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-03 17:54:06
 * @LastEditTime: 2022-02-24 11:28:46
 * @LastEditors: Gavin
-->
<template>
  <a-form
    ref="expendRef"
    :model="expendForm"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item
      v-for="(option, index) in expendForm.options"
      :key="index"
      :label="`option${index + 1}`"
      name="option"
      :rules="{
        required: true,
        message: 'option can not be null',
        trigger: 'change',
      }"
    >
      <a-input
        v-model:value="option.content"
        :readonly="option.readonly"
        placeholder="please input option"
        style="width: 80%; margin-right: 8px"
      />
      <MinusCircleOutlined
        v-if="expendForm.options.length > 1"
        class="dynamic-delete-button"
        @click="removeOption(option)"
      />
    </a-form-item>

    <a-form-item v-if="item?.canAdd ?? true">
      <a-button type="dashed" style="width: 60%" @click="addOption">
        <PlusOutlined />
        Add field
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
  import { ref, watchEffect } from 'vue'
  import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
  import { inject } from 'vue'

  import { Radio, Option } from '@/views/constructor/type/type'
  const props = defineProps<{
    item: Radio
  }>()

  const expendRef = ref(null)
  let expendForm = ref<Radio>(props.item)
  const labelCol = inject('labelCol'),
    wrapperCol = inject('wrapperCol')

  watchEffect(() => {
    console.log('传参变化')

    expendForm.value = props.item
  })
  const addOption = () => {
    expendForm.value.options.push(new Option())
  }
  const removeOption = (item: Option) => {
    let index = expendForm.value.options.indexOf(item)
    if (index !== -1) {
      expendForm.value.options.splice(index, 1)
    }
  }
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  }

  //expects props options

  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss">
  .dynamic-delete-button {
    cursor: pointer;
    position: relative;
    top: 4px;
    font-size: 24px;
    color: #999;
    transition: all 0.3s;
  }
  .dynamic-delete-button:hover {
    color: #777;
  }
  .dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>
