<!--
 * @Description: Global Select  
 * @Author: Gavin
 * @Date: 2021-09-08 17:29:16
 * @LastEditTime: 2021-12-31 16:37:12
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
        <a-form-item :wrapperCol="{ span: 24 }">
          <a-radio-group v-model:value="formState.sideModel" name="radioGroup">
            <a-radio value="inline">
              <a-image
                :width="90"
                src="https://corp-wecom-cdn.elcapp.cn/bb_test/material/image/20211216/20809349060934031.png"
            /></a-radio>
            <a-radio value="horizontal">
              <a-image
                :width="90"
                src="https://corp-wecom-cdn.elcapp.cn/bb_test/material/image/20211216/20809386032210468.png"
            /></a-radio>
          </a-radio-group>
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
import { ref, reactive, watch } from 'vue'
import type { UnwrapRef } from 'vue'
import type { FormProp } from '@/components/Form/interface'
// import { useStore } from 'vuex'
import {useTheme,useTagsView} from '@/store/pinia/index'
import { SettingFilled } from '@ant-design/icons-vue'

const visible = ref<boolean>(false)
// const $store = useStore()
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
  sideModel: string
  checked: boolean
}

const defaultForm = (): FormState => {
  return {
    tabViews: useTagsView().isShow,
    color: useTheme().themeBackgroundColor,
    checked: useTheme().themeStyle,
    themeMenu: useTheme().themeMenu,
    sideModel:useTheme().sideModel
  }
}
const formState: UnwrapRef<FormState> = reactive<FormState>(defaultForm())

watch(
  () => formState,
  (nVal) => {
    useTagsView().updatIsShow(nVal.tabViews)
    useTheme().updateThemeBackgroundColor(nVal.color)
    useTheme().updateThemeMenu(nVal.themeMenu)
    useTheme().updateSideModel(nVal.sideModel)
    // $store.commit('tagsView/UPDATE_IS_SHOW', nVal.tabViews)
    // $store.commit('theme/UPDATE_THEME_BG_COLOR', nVal.color)
    // $store.commit('theme/UPDATE_THEME_BG_MENU', nVal.themeMenu)
    // $store.commit('theme/UPDATE_THEME_SIDE_MODEL', nVal.sideModel)
  },
  { deep: true }
)
let mergForm = {}

const onReset = () => {
  Object.assign(formState, mergForm)
}
const onDefault = () => {
  useTheme().resetTheme()
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