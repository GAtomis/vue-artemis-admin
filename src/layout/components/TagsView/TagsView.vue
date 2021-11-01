<!--
 * @Description: 标签层机翻勿6^Gavin^
 * @Author: Gavin
 * @Date: 2021-09-01 14:05:34
 * @LastEditTime: 2021-10-22 15:32:41
 * @LastEditors: Gavin
-->
<template>
  <a-dropdown :trigger="['contextmenu']" v-for="tag in visitedViews" :key="tag.name">
    <a-tag
      class="tag"
      :color="$route.name === tag.name && themeBackgroundColor"
      @close="handleClose(tag)"
      :closable="!tag.meta.affix"
    >
      <template #icon>
        <router-link :to="{ name: tag.name }" style="margin-right: 5px;">
          <FolderOpenFilled v-if="$route.name === tag.name" />
          <FolderFilled v-else />
          {{ tag.meta.title }}
        </router-link>
      </template>

      <!-- <router-link :to="{ name: tag.name }">{{ tag.meta.title }}</router-link> -->
    </a-tag>
    <template #overlay>
      <a-menu>
        <a-menu-item key="1" @click="closeAllLabels">closeAllLabels</a-menu-item>
        <a-menu-item key="2" @click="closeOtherLabels(tag)">closeOtherLabels</a-menu-item>
        <a-menu-item key="3" :disabled="tag.name !== $route.name" @click="refresh">refresh</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang='ts' setup>

import { watch, watchEffect, onMounted, computed, unref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import { filterChildren as filterAffixTags, filterAsyncRoutes as filterHidden } from "@/hooks/router"

import {
  FolderOpenFilled,
  FolderFilled
} from '@ant-design/icons-vue';
const $route = useRoute()
const $store = useStore()
const $router = useRouter()
onMounted(() => {
  initTags()
  addTags()

})


/**
 * @description: Initialize tab bar
 * @param {*}
 * @return {*}
 * @Date: 2021-09-03 14:25:15
 */
const initTags = () => {
  // Initialization rule
  affixTags.forEach(tag => {
    console.log(tag);

    tag?.name && $store.dispatch('tagsView/addVisitedView', tag)

  });
}
const affixTags = filterAffixTags($store.getters['permission/routes'], [''], "affix")


const visitedViews = computed(() => {
  return $store.getters.visitedViews
})
const themeBackgroundColor = computed(() => {
  return $store.getters.themeBackgroundColor
})

const closeAllLabels = () => {
  $store.dispatch('tagsView/closeAllLabels')


}
const closeOtherLabels = (tag) => {
  $store.dispatch('tagsView/closeOtherLabels', tag)


}
watch(() => visitedViews.value, () => {
  console.error(visitedViews.value, "watchEffect");

  if (visitedViews.value.some(item => {
    return item.name === $route.name
  })) {

  } else {
    $router.replace({ name: visitedViews.value.pop()?.name ?? "Dashboard" })
  }
})

/**
 * 
 * @description: addVisitedView 
 * @param {*} 
 * @return {*} Boolean
 * @Date: 2021-09-03 14:24:18
 */
const addTags = () => {
  //Routes with hidden tags will not be loaded into the tab list
  if ($route?.name && !$route?.meta?.hidden) {
    $store.dispatch('tagsView/addVisitedView', unref($route))
  }
  return false
}

/**
 * @description: watch current route and cancel lazy loading   
 * @param {*}
 * @return {*}
 * @Date: 2021-09-03 14:20:28
 */
watch($route, (newRoute, oldRoute) => {
  addTags()
}, {
  immediate: false,
  deep: true
})


const refresh = () => {
  // delKeepAliveCompName()
  $router.push({
    path: '/redirect' + unref($route).fullPath
  })
}


/**
 * @description: delete VisitedView
 * @param {*} tag current route
 * @return {*}
 * @Date: 2021-09-03 14:23:33
 */
const handleClose = (tag) => {
  $store.dispatch('tagsView/deleteVisitedView', tag)
}






</script>

<style scoped lang='scss'>
</style>