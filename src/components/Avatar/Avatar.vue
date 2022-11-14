<template>
    <div>
        <a-upload v-model:file-list="fileList" :customRequest="customRequest" name="avatar" list-type="picture-card"
            class="avatar-uploader" :show-upload-list="false" :before-upload="beforeUpload" >
            <img class="avatar-img" v-if="url&&!loading" :src="url" alt="avatar" />
            <div v-else>
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
                <div class="ant-upload-text">Upload</div>
            </div>
        </a-upload>
    </div>
</template>

<script lang='ts' setup>

import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { ref } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import { uploadAvatar } from "@/api/upload"
defineProps<{
        url:string
}>()

const emit=defineEmits(['update:url'])


const fileList = ref([]);
const loading = ref<boolean>(false);
const customRequest = (item: any) => {
    const formData = new FormData();
    formData.append("smfile", item.file as File);
    // console.log(item);
    loading.value = true
    uploadAvatar(formData).then(resp => {

        const res=resp.data
        let img=''
        if (res.success) {
            img = res.data?.url
        } else {
            img = res?.images
        }
        emit('update:url',img)
    

    }).catch(err => {

    }).finally(() => {
        loading.value = false
    })



}

const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';


    if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

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
//基于类型
//const emit = defineEmits<{   (e: 'change', id: number): void , (e: 'update', value: string): void }>()
</script>

<style scoped lang='scss'>

</style>
<style>
.avatar-uploader>.ant-upload ,.avatar-img {
    width: 128px;
    height: 128px;
}

.ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
}
</style>