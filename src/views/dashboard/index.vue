<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-31 17:05:12
 * @LastEditTime: 2022-11-15 15:41:53
 * @LastEditors: Gavin 850680822@qq.com
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
          <h1>
            {{
              `Hello, ${userInfo.name}. This is your ${userInfo.age} days working here. Wish you a good mood every day!`
            }}
          </h1>
        </a-col>
        <a-col :span="4" class="data" />
      </a-row>
    </a-card>
    <main>
      <component :is="LineCard" />
    </main>
    <footer>
      <a-row type="flex" :gutter="16"  align="top">
        <a-col :span="11">
          <RadarCard />
        </a-col>
        <a-col :span="12">
          <MessageBoard />
        </a-col>
      </a-row>
    </footer>
  </div>
</template>
<script lang="ts" setup>
  import LineCard from './components/LineCard.vue'
  import MessageBoard from './components/MessageBoard.vue'
  import ToolRank from './components/ToolRank.vue'

  import { useUser } from '@/store/pinia/index'

  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  import RadarCard from './components/RadarCard.vue'
  import { UserOutlined } from '@ant-design/icons-vue'
  // throw new Error('页面异常')

  const userInfo = computed(() => {
    return useUser().getInfo
  })
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
  main {
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
