import { ref, computed } from 'vue'
import { Permission } from '@/model/account'
import _ from 'lodash'
import { createItem, updateItem } from '@/api/account/menu'
import { message } from 'ant-design-vue'
/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-07 22:54:44
 * @LastEditTime: 2022-08-08 18:07:17
 * @LastEditors: Gavin
 */

function defaultForm(): Permission {
  return {
    id: 0,
    name: '',
    type: 'link',
    url: '',
    parentid: '0',
    available: true,
  }
}
export function useEditDialog() {
  const visibleEdit = ref(false),
    form = ref<Permission>(defaultForm()),
    handleOpen = (current: any) => {
      form.value = defaultForm()
      //避免内存地址引用
      const cloneCurrent = _.cloneDeep(current)
      if (cloneCurrent) {
        Object.keys(form.value).forEach((item) => {
          cloneCurrent?.[item] && (form.value[item] = cloneCurrent[item])
        })
      }
      visibleEdit.value = true
    }
  const editTitle = computed(() => (form.value.id ? 'Edit' : 'Add')),
    handleOk = async () => {
      await onFinish()
      visibleEdit.value = !true
    },
    onFinish = async () => {
      if (editTitle.value == 'Add') {
        delete form.value.id
        await createItem(form.value)
      } else {
        await updateItem(form.value)
      }
      message.success('操作成功')
      return '操作成功'
    }

  return {
    visibleEdit,
    handleOk,
    handleOpen,
    onFinish,
    editTitle,
    form,
    //表单
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  }
}
