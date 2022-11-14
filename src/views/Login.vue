<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-21 15:09:55
 * @LastEditTime: 2022-11-14 20:16:36
 * @LastEditors: Gavin 850680822@qq.com
-->

<template>
  <div id="login-warp">

    <main>

      <section class="login-bg">
        <div class="login-logo">
          <!--      <svg-icon name="logo" />-->
          <img :src="LOGO_IMAGE" />
          <h1>{{ HOME_TITLE }}</h1>
        </div>
        <a-form layout="horizontal" :model="formState" :rules="rules" @finish="handleFinish"
          @finish-failed="handleFailed">
          <a-form-item name="username">
            <a-input v-model:value="formState.username" size="large" placeholder="user">
              <template #prefix>
                <user-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="password">
            <a-input v-model:value="formState.password" size="large" type="password" placeholder="user"
              autocomplete="new-password">
              <template #prefix>
                <lock-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="code">
            <a-input v-model:value="formState.code" size="large" placeholder="4422">
              <template #prefix>
                <question-circle-outlined />
              </template>

              <template #addonAfter>
                <img :src="captchaUrl" class="captcha" @click="
                  (e) => {
                    captchaUrl = `${codeApi}?v=${Math.random()}`
                  }
                " />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-button type="primary" html-type="submit" size="large" :loading="loading" block>
              <template #icon>
                <login-outlined />
              </template>
              CONTINUE
            </a-button>
          </a-form-item>
        </a-form>
      </section>
    </main>

  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { UnwrapRef } from 'vue'
import { message } from 'ant-design-vue'
import type { LoginFrom } from '@/model/login/login-form' //深坑一定要用type导出接口 vite专属bug
import type {
  RuleObject,
  ValidateErrorEntity,
} from 'ant-design-vue/es/form/interface'
import {
  UserOutlined,
  LockOutlined,
  LoginOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { useUser } from '@/store/pinia/index'
import { LOGO_IMAGE, HOME_TITLE } from '@/settings'
import { codeUrl } from '@/utils'

//验证码地址
const captchaUrl = ref<string>(codeUrl)
const codeApi = codeUrl


//表单验证
const formState: UnwrapRef<LoginFrom> = reactive({
  username: '',
  password: '',
  code: '',
})
// 自定义验证规则
let validatePass = async (rule: RuleObject, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password')
  } else {
    return Promise.resolve()
  }
}

//验证规则合集
const rules = {
  username: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur',
    },
  ],
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

const handleSubmit = async ({ username, password, code }: any) => {
  console.log('onSubmit')
  loading.value = true

  await useUser()
    .login({ username, password, code })
    .finally(() => {
      loading.value = false
      captchaUrl.value = `${codeApi}?v=${Math.random()}`
    })
  router.push({ path: '/Dashboard', query: { name: username } })
}
/**
 * @description: 表单验证成功
 * @param {*}
 * @return {*}
 * @Date: 2021-08-01 01:32:35
 */
const handleFinish = (values: any) => {
  handleSubmit(values)
}

/**
 * @description: 表单验证失败
 * @param {*}
 * @return {*}
 * @Date: 2021-08-01 01:32:11
 */
const handleFailed = (error: ValidateErrorEntity) => {
  message.error(
    'Login verification failed, please check the form verification'
  )
  console.log(error)
}


</script>

<style lang="scss" scoped>
#login-warp {
  width: 100vw;
  height: 100vh;
  background: url('https://s2.loli.net/2022/11/14/oJh3ntQUj4Xi5Z7.webp') left top no-repeat;

  .captcha {
    &:hover {
      cursor: pointer;
    }
  }

  display: flex;

  align-items: center;
  justify-content: center;
  // background-size: cover;
}

main {

  // width: 100vw;
  height: 420px;
  width: 500px;
  background-color: rgb(26 25 27 / 80%);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-bg {

    .login-logo {

      display: flex;
      margin-bottom: 30px;
      align-items: center;
      justify-content: center;
 

      img {
        height: 40px;
        width: 40px;
      }

      h1 {
        margin-bottom: 0;
        margin-left: 10px;
        color: #fff;
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


}
</style>
