<!--
 * @Author: Gavin 850680822@qq.com
 * @Date: 2022-11-11 13:20:04
 * @LastEditors: Gavin 850680822@qq.com
 * @LastEditTime: 2022-11-11 16:37:15
 * @FilePath: \vue-artemis-admin\src\views\account\roles\components\AddRole.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <a-form ref="formRef" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" class="app-container bg-fff"
            @finish="onFinish">
            <a-form-item label="name" name="name" :rules="[{ required: true, message: 'Please input your name!' }]">
                <a-input v-model:value="form.name" />
            </a-form-item>
            <a-form-item label="level" name="level">

                <a-radio-group v-model:value="form.level" button-style="solid">
                    <a-radio-button :value="1">user_admin</a-radio-button>
                    <a-radio-button :value="99">guest</a-radio-button>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="available" name="available">
                <a-switch v-model:checked="form.available" />
            </a-form-item>
            <a-form-item label="describe" name="describe">
                <a-textarea v-model:value="form.describe" show-count :maxlength="100" />
            </a-form-item>
            <a-divider />

        </a-form>
    </div>
</template>

<script lang='ts' setup>
//expects props options
/*const props = defineProps<{
foo: string
bar?: number
}>()*/
/*


const props = withDefaults(defineProps<Props>(), {
  labels: () => ['one', 'two']
  msg: 'hello',
})
*/

import { ref } from 'vue'
import type { Role } from '@/model/account'
import { message } from 'ant-design-vue' //'in ui'
import { creatItem } from '@/api/account/role'
import type { FormInstance } from 'ant-design-vue';
//form
const labelCol = { span: 4 },
    wrapperCol = { span: 20 },
    form = ref<Role>({
        name: '',
        available: !false,
        sysPermissions: [],
        sysUsers: [],
        level: 99,
        describe: ""
    }),
    formRef = ref<FormInstance>(),
    onFinish = async () => {
        try {
            await formRef.value?.validateFields()
            const id = await creatItem(form.value)
            message.success('submit success')
            emit('close', id)
            return id

        } catch (error) {
            return error

        }

    }

defineExpose({
    onFinish
})
//基于类型
const emit = defineEmits<{ (e: 'close', id: string): void }>()
</script>

<style scoped lang='scss'>

</style>