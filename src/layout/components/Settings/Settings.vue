<!--
 * @Description: Global Select  
 * @Author: Gavin
 * @Date: 2021-09-08 17:29:16
 * @LastEditTime: 2021-12-16 15:56:55
 * @LastEditors: Gavin
-->
<template>
  <div>
    <SettingFilled @click="showDrawer" />
    <a-drawer
      title="Global Select"
      placement="right"
      :closable="false"
      v-model:visible="visible"
      @afterVisibleChange="afterVisibleChange"
    >
      <a-form
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="tabViews">
          <a-switch v-model:checked="formState.tabViews" />
        </a-form-item>
        <a-form-item label="themeMenu">
          <input
            type="color"
            name="color"
            id="color"
            v-model="formState.themeMenu"
          />
        </a-form-item>
        <a-form-item label="themeTabview">
          <input
            type="color"
            name="color"
            id="color"
            v-model="formState.color"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onReset" style="margin-right: 10px"
            >RESET</a-button
          >
          <a-button @click="onDefault">DEFAULT</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>

<script lang='ts' setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref, reactive, watch, onMounted } from 'vue'
import type { UnwrapRef } from 'vue'
import type { FormProp } from '@/components/Form/interface'
import { useStore } from 'vuex'
import { SettingFilled } from '@ant-design/icons-vue'

const visible = ref<boolean>(false)
const $store = useStore()
const afterVisibleChange = (bool: boolean) => {
  bool && (mergForm = defaultForm())
  console.log(mergForm)
}

const showDrawer = () => {
  visible.value = true
}
// console.error($store.state.tagsView.isShow)
interface FormState {
  tabViews: boolean
  color: string
  themeMenu: string
  checked: boolean
}

const defaultForm = (): FormState => {
  return {
    tabViews: $store.state.tagsView.isShow,
    color: $store.state.theme.themeBackgroundColor,
    checked: $store.state.theme.themeStyle,
    themeMenu: $store.state.theme.themeMenu,
  }
}
const formState: UnwrapRef<FormState> = reactive<FormState>(defaultForm())

watch(
  () => formState,
  (nVal) => {
    $store.commit('tagsView/UPDATE_IS_SHOW', nVal.tabViews)
    $store.commit('theme/UPDATE_THEME_BG_COLOR', nVal.color)
    $store.commit('theme/UPDATE_THEME_BG_MENU', nVal.themeMenu)
  },
  { deep: true }
)
let mergForm = {}

const onReset = () => {
  Object.assign(formState, mergForm)
}
const onDefault = () => {
  $store.dispatch('theme/resetTheme')
  afterVisibleChange(true)
  onReset()
}
//我的Form属性
const { labelCol, wrapperCol }: FormProp = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
}
const isDark = useDark()
const toggleDark = useToggle(isDark)
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