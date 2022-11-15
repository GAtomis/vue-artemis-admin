<!--
 * @Author: Gavin 850680822@qq.com
 * @Date: 2022-11-10 23:23:43
 * @LastEditors: Gavin 850680822@qq.com
 * @LastEditTime: 2022-11-15 17:58:28
 * @FilePath: \vue-artemis-admin\src\views\account\roles\components\UserInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="wrap">
        <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" class="app-container bg-fff"
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
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" html-type="submit">Save</a-button>
                <a-button style="margin-left: 10px">Cancel</a-button>
            </a-form-item>
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
import { ref, inject, Ref, onMounted, watch } from 'vue'
import type { Role } from '@/model/account'
import { message } from 'ant-design-vue' //'in ui'
import { getItem, updateItem, creatItem } from '@/api/account/role' //Role API
const currentItem = inject<Ref<Role>>('currentItem')

//form
const labelCol = { span: 4 },
    wrapperCol = { span: 20 },
    form = ref<Role>({
        id:'',
        name: '',
        available: false,
        sysPermissions: [],
        sysUsers: [],
        level: 0,
        describe: ""

    }),
    onFinish = async () => {
        //edit&new

        await updateItem(form.value)
        message.success('submit success ')
        getItem({ id: currentItem?.value.id }).then((res) => {
            form.value = res
        })
    },
    init = () => {
        Object.keys(form.value).forEach((item) => {
            form.value[item] = currentItem?.value[item]
        })

    }

watch(currentItem!, () => {

    init()

})


onMounted(() => {


    init()


})
//基于类型
//const emit = defineEmits<{   (e: 'change', id: number): void  (e: 'update', value: string): void }>()
</script>

<style scoped lang='scss'>
.wrap {
    width: 70%;
}
</style>