<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-31 17:05:12
 * @LastEditTime: 2021-09-18 14:11:43
 * @LastEditors: Gavin
-->
<template>
 <a-button type="primary" @click="handleRoute">Primary Button</a-button>

  <!-- <a-card title="Dashboard" class="header-warp">

    <a-row a-row type="flex" justify="start">
      <a-col :span="2" class="avatar">
        <a-avatar :size="64" :src="userInfo.avatar">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-col>
      <a-col :span="2" class="userInfo"><h1>Position:{{userInfo.jobType}}</h1></a-col>
      <a-col :span="14" class="greeting"><h1>{{`Hello, ${userInfo.name}. This is your ${userInfo.age} days working here. I wish you a good mood every day`}}</h1></a-col>
      <a-col :span="6" class="data">col-12</a-col>
    </a-row>
  </a-card>-->

  <!-- <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="图表页">
      <component :is="DataPane" />

    </a-tab-pane>

  </a-tabs>-->
</template>
<script  lang='ts' >

// import DataPane from './components/DataPane.vue'
// import {useStore} from '@/store'
// import {computed} from 'vue'
// import {
// UserOutlined
// } from '@ant-design/icons-vue';

// import { ref} from 'vue';

// const $store=useStore()
// const userInfo=computed(()=>{
//   return $store.getters.userInfo
// })
// const activeKey = ref('1')


import {defineComponent} from 'vue'
export default defineComponent({
  name:'Monitoring'
})

</script>

<style lang="scss" scoped>
.header-warp {
  // .greeting{
  //   line-height: 30px;
  // }
}
</style>