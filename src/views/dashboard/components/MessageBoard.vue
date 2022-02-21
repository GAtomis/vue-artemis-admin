<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-19 10:55:00
 * @LastEditTime: 2022-02-21 14:43:13
 * @LastEditors: Gavin
-->
<template>
  <a-card title="chart" class="chart"  hoverable
>
    <a-comment v-for="(item, index) in comments" :key="index">
      <template #actions>
        <span key="comment-basic-like">
          <a-tooltip title="Like">
            <template v-if="item.action">
              <LikeFilled @click="like(item, - 1)" />
            </template>
            <template v-else>
              <LikeOutlined @click="like(item, 1)" />
            </template>
          </a-tooltip>
          <span style="padding-left: 8px; cursor: auto">{{ item.like }}</span>
        </span>
        <span key="comment-basic-dislike">
          <a-tooltip title="Dislike">
            <template v-if="item.action1">
              <DislikeFilled @click="dislike(item, - 1)" />
            </template>
            <template v-else>
              <DislikeOutlined @click="dislike(item, 1)" />
            </template>
          </a-tooltip>
          <span style="padding-left: 8px; cursor: auto">{{ item.unlike }}</span>
        </span>
        <span key="comment-basic-reply-to">Reply to</span>
      </template>
      <template #author>
        <a>{{ item.name }}</a>
      </template>
      <template #avatar>
        <a-avatar :src="item.avatar" :alt="item.name" />
      </template>
      <template #content>
        <p>{{ `Hellow! I'm ${item.name},${item.content}. I'm looking forward to seeing you next time` }}</p>
      </template>
      <template #datetime>
        <a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
          <span>{{ dayjs().fromNow() }}</span>
        </a-tooltip>
      </template>
    </a-comment>
  </a-card>
</template>

<script lang='ts' setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import { ref, onMounted, reactive } from 'vue';
import { getComments } from "@/api/dashboard/index"

import type { UserInfo } from '@/utils/interface/index'
import {useUser} from '@/store/pinia/index'

//dayjs plugin
dayjs.extend(relativeTime)
let comments = ref<Array<UserInfo>>([])

//结果集可以应用后台api类型这里就不做演示了,引用了接口就不会提示属性不存在了

const getList = async () => {
  const res = await getComments({ username: useUser().username as string})
  comments.value = res
}
onMounted(() => {
  getList()
})

const like = (item, index) => {

  item.like = item.like + index
  item.action = !item.action
};

const dislike = (item, index) => {

  item.unlike = item.unlike + index
  item.action1 = !item.action1
};


</script>

<style scoped lang='scss'>
.chart {
  height: 100%;
}
</style>