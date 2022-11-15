<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-02 09:35:40
 * @LastEditTime: 2022-11-15 15:33:48
 * @LastEditors: Gavin 850680822@qq.com
-->
<template>
  <a-form
    :model="form"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    class="app-container"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    layout="vertical"
  >
    <a-row :gutter="16" class="card ">
      <a-col :span="10" class="card-info ">
        <a-card title="Public profile" style="width: 100%">
          
          <a-form-item
            label="Name"
            name="name"
            :rules="[{ required: true, message: 'Please input your name!' }]"
          >
            <a-input v-model:value="form.name" />
          </a-form-item>
      
          <a-form-item label="Job" name="jobType">
            <a-input v-model:value="form.jobType" />
          </a-form-item>
    
          <a-form-item label="Company" name="company">
            <a-input v-model:value="form.company" />
          </a-form-item>

          <a-form-item label="CatchPhrase" name="catchPhrase">
            <a-textarea
              v-model:value="form.catchPhrase"
              show-count
              :maxlength="100"
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="submit">update</a-button>
            <a-button style="margin-left: 10px">Cancel</a-button>
          </a-form-item>
        </a-card>
      </a-col>
      <a-col :span="5" class="card-avatar ">
        <section class="avatar-uploader">
          <Avatar  v-model:url="form.avatar" ></Avatar>
        </section>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, toRaw, watch } from 'vue'
  import Avatar from '@/components/Avatar/Avatar.vue'
  import { useUser } from '@/store/pinia'
  import { updateItem } from '@/api/account'
  import { UserInfo } from '@/model/account'
  import { message } from 'ant-design-vue'
  import {getUserInfo} from '@/api/login'

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
    onFinish = async () => {
      await updateItem<UserInfo, string>(form)
      message.success('submit success')
      useUser().getUserInfo('1')
    },
    onFinishFailed = (errorInfo: UserInfo) => {
      console.log('Failed:', errorInfo)
    }



  //
</script>

<style scoped lang="scss">



  .ant-form label {
    font-size: 600 !important
}
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


