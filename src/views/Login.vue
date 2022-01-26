<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-21 15:09:55
 * @LastEditTime: 2022-01-26 18:37:25
 * @LastEditors: Gavin
-->





<template>
  <div id="login-warp">


    <section class="login-bg" >
      <div class="login-logo">
        <!--      <svg-icon name="logo" />-->
        <img :src="LOGO_IMAGE" />
        <h1>{{ HOME_TITLE }}</h1>
      </div>
      <a-form
        layout="horizontal"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFailed"
        :rules="rules"
      >
        <a-form-item name="username">
          <a-input v-model:value="formState.username" size="large" placeholder="admin">
            <template #prefix>
              <user-outlined type="user" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input
            v-model:value="formState.password"
            size="large"
            type="password"
            placeholder="123456"
            autocomplete="new-password"
          >
            <template #prefix>
              <lock-outlined type="user" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" size="large" :loading="loading" block>登录</a-button>
        </a-form-item>
      </a-form>
    </section>

  </div>
</template>
<script lang="ts" setup>

import { reactive, ref, onMounted } from 'vue';
import type { UnwrapRef } from 'vue'
import { message } from 'ant-design-vue';
import type { LoginFrom } from '@/components/Form/base'//深坑一定要用type导出接口 vite专属bug
import type { RuleObject, ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { useUser } from '@/store/pinia/index'
import { LOGO_IMAGE, HOME_TITLE } from '@/settings'
// import creat3DText from '@/hooks/global/three-js/geometry-text'
// //three login-stage2-dev


// onMounted(() => {
//   const dom = document.getElementById('login-warp')
//   creat3DText(dom as HTMLElement, "there")
// })

interface FormState extends LoginFrom {
  name?: string
}


//表单验证
const formState: UnwrapRef<FormState> = reactive({
  username: '',
  password: ''
})
// 自定义验证规则
let validatePass = async (rule: RuleObject, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password');
  } else {
    return Promise.resolve();
  }
};

//验证规则
const rules = {
  username: [{ required: true, message: 'Please input Activity name', trigger: 'blur' },],
  password: [{ required: true, validator: validatePass, trigger: 'change' }],
}




const loading = ref<boolean>(false)
/**
 * @description: 提交回调
 * @param {*}
 * @return {*}
 * @Date: 2021-08-01 01:32:51
 */
const router = useRouter()

const handleSubmit = async ({ username, password }: FormState) => {
  console.log('onSubmit');
  loading.value = true;

  await useUser().login({ username, password }).finally(() => {
    loading.value = false
  })
  router.push({ path: '/Dashboard', query: { name: username } })

}
/**
 * @description: 表单验证成功
 * @param {*}
 * @return {*}
 * @Date: 2021-08-01 01:32:35
 */
const handleFinish = (values: FormState) => {
  console.log(values, formState);
  handleSubmit(values)


}

/**
 * @description: 表单验证失败
 * @param {*}
 * @return {*}
 * @Date: 2021-08-01 01:32:11
 */
const handleFailed = (error: ValidateErrorEntity) => {

  message.error("Login verification failed, please check the form verification");
  console.log(error);

}


</script>

<style lang="scss" scoped>
#login-warp{
  width: 100vw;
  height:100vh;
}

.login-bg {
  display: flex;
  // width: 100vw;
  height: 100vh;
  padding-top: 240px;

  background-size: 100%;
  flex-direction: column;
  align-items: center;
  .login-logo {
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    img {
      height: 40px;
      width: 40px;
    }

    h1 {
      margin-bottom: 0;
      margin-left: 10px;
    }
  }
  ::v-deep(.ant-form) {
    width: 400px;

    .ant-col {
      width: 100%;
    }

    .ant-form-item-label {
      padding-right: 6px;
    }
  }
}
</style>


