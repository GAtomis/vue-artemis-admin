<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-02 09:35:40
 * @LastEditTime: 2021-11-19 17:20:57
 * @LastEditors: Gavin
-->
<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" class="app-container bg-fff">
    <a-row :gutter="16" class="card">
      <a-col :span="12" class="card-info">
        <a-card title="个人资料" style="width:100%">
          <a-form-item label="用户名">
            <a-input v-model:value="form.name" />
          </a-form-item>
          <a-divider />
          <a-form-item label="职位">
            <a-input v-model:value="form.jobType" />
          </a-form-item>
          <a-divider />
          <a-form-item label="公司">
            <a-input v-model:value="form.companyName" />
          </a-form-item>
          <a-divider />
          <a-form-item label="个人简介">
            <a-textarea v-model:value="form.catchPhrase" show-count :maxlength="100" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">Save</a-button>
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
            <img v-if="form.avatar" :src="form.avatar" alt="avatar" />
            <div v-else>
              <loading-outlined v-if="loading"></loading-outlined>
              <plus-outlined v-else></plus-outlined>
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </section>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import { onMounted, computed, toRaw, reactive } from 'vue'
import useUpLoadByAvatar from './Hooks/useUpLoadByAvatar'

import type { IUserState } from '@/store/modules/user/state'
const $store = useStore()

//坑早知道用interface了, type的继承真的丑
type UserInfo = IUserState & {
  companyName: string

}
const form = reactive<UserInfo>({ companyName: "Arvato", ...toRaw($store.getters.userInfo) })
const labelCol = { span: 4 },
  wrapperCol = { span: 20 },
  onSubmit = (): void => {
    console.log("芯片短缺");

  }
const { fileList, loading, imageUrl, handleChange, beforeUpload } = useUpLoadByAvatar()

//
</script>

<style scoped lang='scss'>
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