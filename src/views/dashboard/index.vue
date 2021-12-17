<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-31 17:05:12
 * @LastEditTime: 2021-12-17 18:40:39
 * @LastEditors: Gavin
-->
<template>
  <div class="dashboard">
    <a-card title="Dashboard">
      <a-row a-row type="flex" justify="space-around">
        <a-col :span="1" class="avatar">
          <a-avatar :size="64" :src="userInfo.avatar">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </a-col>
        <a-col :span="5" class="userInfo">
          <ul>
            <li>
              <span>Name</span>
              : {{ userInfo.name }}
            </li>
            <li>
              <span>Position</span>
              :{{ userInfo.jobType }}
            </li>
            <li>
              <span>Authority</span>
              :{{ userInfo.username }}
            </li>
          </ul>
        </a-col>
        <a-col :span="13" class="greeting">
          <h1>{{ `Hello, ${userInfo.name}. This is your ${userInfo.age} days working here. Wish you a good mood every day!` }}</h1>
        </a-col>
        <a-col :span="4" class="data"></a-col>
      </a-row>
    </a-card>

    <a-row type="flex" justify="start" >
      <a-col :span="17">
        <component :is="DataPane" />
      </a-col>
      <a-col :span="7">
        <component :is="MessageBoard"    />
      </a-col>
    </a-row>

    <!-- <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="图表页">
        <component :is="DataPane" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="留言板">
        <component :is="MessageBoard" />
      </a-tab-pane>
    </a-tabs>-->
    <ToolRank />
  </div>
</template>
<script  lang='ts' setup >
import DataPane from './components/DataPane.vue'
import MessageBoard from './components/MessageBoard.vue'
import ToolRank from './components/ToolRank.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import {
  UserOutlined
} from '@ant-design/icons-vue';

import { ref } from 'vue';

const $store = useStore()
const userInfo = computed(() => {
  return $store.getters.userInfo
})
const activeKey = ref('1')

</script>

<style lang="scss" scoped>
.userInfo {
  li {
    list-style: none;
    span {
      color: #aab7aa;
    }
  }
}

.greeting {
  // line-height: 64px;
  font-size: 18px;
}
.dashboard {
  & > * {
    margin-bottom: 10px;
  }
}
</style>