<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-02 09:35:40
 * @LastEditTime: 2022-08-03 11:14:05
 * @LastEditors: Gavin
-->
<template>
  <a-form
    :model="form"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    class="app-container bg-fff"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-row :gutter="16" class="card">
      <a-col :span="12" class="card-info">
        <a-card title="个人资料" style="width: 100%">
          <a-form-item
            label="name"
            name="name"
            :rules="[{ required: true, message: 'Please input your name!' }]"
          >
            <a-input v-model:value="form.name" />
          </a-form-item>
          <a-divider />
          <a-form-item label="job" name="jobType">
            <a-input v-model:value="form.jobType" />
          </a-form-item>
          <a-divider />
          <a-form-item label="company" name="company">
            <a-input v-model:value="form.company" />
          </a-form-item>
          <a-divider />
          <a-form-item label="catchPhrase" name="catchPhrase">
            <a-textarea
              v-model:value="form.catchPhrase"
              show-count
              :maxlength="100"
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="submit">Save</a-button>
            <a-button style="margin-left: 10px">Cancel</a-button>
          </a-form-item>
        </a-card>
      </a-col>
      <a-col :span="5" class="card-avatar">
        <section class="avatar-uploader">
          <a-upload
            v-model:file-list="fileList"
            name="avatar"
            list-type="picture-card"
            :show-upload-list="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :before-upload="beforeUpload"
            @change="handleChange"
          >
            <a-image
              v-if="form.avatar"
              :src="form.avatar"
              alt="avatar"
              fallback="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-6b648675305dc2c9130d6db9bfe61f24_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642141184&t=cbfe704354ff1b878abb93968e581e2c"
            />

            <div v-else>
              <loading-outlined v-if="loading" />
              <plus-outlined v-else />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </section>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
  import { toRaw, reactive } from 'vue'
  import useUpLoadByAvatar from './Hooks/useUpLoadByAvatar'
  import { useUser } from '@/store/pinia'
  import { updateItem } from '@/api/account'
  import { UserInfo } from '@/model/account'
  import { message } from 'ant-design-vue'
  const form = reactive<UserInfo>({
    id: useUser().id,
    name: useUser().name,
    company: useUser().company,
    catchPhrase: useUser().catchPhrase,
    jobType: useUser().jobType,
    avatar: useUser().avatar,
  })
  const labelCol = { span: 4 },
    wrapperCol = { span: 20 },
    onFinish = async (values: UserInfo) => {
      await updateItem<UserInfo, string>(form)
      message.success('表单已提交')
    },
    onFinishFailed = (errorInfo: UserInfo) => {
      console.log('Failed:', errorInfo)
    }
  const { fileList, loading, imageUrl, handleChange, beforeUpload } =
    useUpLoadByAvatar()

  //
</script>

<style scoped lang="scss">
  .card {
    .card-info {
    }
    .card-avatar {
      position: relative;

      .avatar-uploader {
        width: auto;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
