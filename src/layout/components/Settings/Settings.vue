<!--
 * @Description: 配置选项
 * @Author: Gavin
 * @Date: 2021-09-08 17:29:16
 * @LastEditTime: 2021-11-03 11:31:01
 * @LastEditors: Gavin
-->
<template>
  <div>
    <SettingFilled @click="showDrawer" />
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      v-model:visible="visible"
      :after-visible-change="afterVisibleChange"
    >
      <a-form
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="tabViews">
          <a-switch v-model:checked="formState.tabViews" />
        </a-form-item>
        <a-form-item label="colorSelect">
          <input
            type="color"
            name="color"
            id="color"
            v-model="formState.color"
         
          />
        </a-form-item>
        <a-form-item label="styleMode">
          <a-switch v-model:checked="formState.checked" @click="useStyle" />
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>

<script lang='ts' setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref, reactive, watch } from 'vue'
import type { UnwrapRef } from 'vue'
import type { FormProp } from '@/components/Form/interface'
import { useStore } from '@/store'
import { SettingFilled} from '@ant-design/icons-vue'

const visible = ref<boolean>(false)
const $store = useStore()
const afterVisibleChange = (bool: boolean) => {
  console.log('visible', bool)
}

const showDrawer = () => {
  visible.value = true
}
console.error($store.state.tagsView.isShow)
interface FormState {
  tabViews: boolean
  color: string
  checked: boolean
}
const formState: UnwrapRef<FormState> = reactive({
  tabViews: $store.state.tagsView.isShow,
  color: $store.state.theme.themeBackgroundColor,
  checked: $store.state.theme.themeStyle,
})

watch(
  () => formState,
  (nVal) => {
    $store.commit('tagsView/UPDATE_IS_SHOW', nVal.tabViews)
    $store.commit('theme/UPDATE_THEME_BG_COLOR', nVal.color)
  },
  { deep: true }
)
//我的Form属性
const { labelCol, wrapperCol }: FormProp = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
}
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
//主题设定
// const useStyle: (checked: boolean | string | number, event: Event) => void = (
//   checked,
//   event
// ) => {}

//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
</style>