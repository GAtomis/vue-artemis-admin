<!--
 * @Description: 标签层机翻勿6^Gavin^
 * @Author: Gavin
 * @Date: 2021-09-01 14:05:34
 * @LastEditTime: 2022-05-14 12:24:51
 * @LastEditors: Gavin
-->
<template>
  <a-dropdown
    v-for="tag in visitedViews"
    :key="tag.name"
    :trigger="['contextmenu']"
  >
    <a-tag
      class="tag"
      :color="$route.name === tag.name ? themeBackgroundColor : ''"
      :closable="!tag.meta.affix"
      @close="handleClose(tag)"
    >
      <template v-if="$route.name === tag.name" #icon>
        <FolderOpenFilled />
      </template>
      <template v-else #icon>
        <FolderFilled />
      </template>
      <router-link :to="{ name: tag.name }">
        {{ tag.meta.title }}
      </router-link>
    </a-tag>
    <template #overlay>
      <a-menu>
        <a-menu-item key="1" @click="closeAllLabels">
          closeAllLabels
        </a-menu-item>
        <a-menu-item key="2" @click="closeOtherLabels(tag)">
          closeOtherLabels
        </a-menu-item>
        <a-menu-item key="3">refresh</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts" setup>
  import { watch, watchEffect, onMounted, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import { filterChildren as filterAffixTags } from '@/hooks/router'
  import { useTagsView, usePermission, useTheme } from '@/store/pinia/index'

  import { FolderOpenFilled, FolderFilled } from '@ant-design/icons-vue'
  const $route = useRoute()

  const $router = useRouter()
  onMounted(() => {
    initTags()
  })
  /**
   * @description: Initialize tab bar
   * @param {*}
   * @return {*}
   * @Date: 2021-09-03 14:25:15
   */
  const initTags = () => {
    console.log('初始化')

    affixTags.forEach((tag) => {
      console.log(tag)
      tag?.name && useTagsView().addVisitedView(tag)
    })
  }
  const affixTags = filterAffixTags(usePermission().routes, [''], 'affix')

  const visitedViews = computed(() => {
    return useTagsView().visitedViews
  })
  const themeBackgroundColor = computed(() => {
    return useTheme().themeBackgroundColor
  })

  const closeAllLabels = () => {
    useTagsView().closeAllLabels()
  }
  const closeOtherLabels = (tag) => {
    useTagsView().closeOtherLabels(tag)
  }
  watch(
    () => visitedViews.value,
    () => {
      if (
        visitedViews.value.some((item) => {
          return item.name === $route.name
        })
      ) {
      } else {
        $router.replace({ name: visitedViews.value.pop()?.name ?? 'Dashboard' })
      }
    }
  )

  /**
   *
   * @description: addVisitedView
   * @param {*}
   * @return {*} Boolean
   * @Date: 2021-09-03 14:24:18
   */
  const addTags = () => {
    if ($route?.name) {
      useTagsView().addVisitedView($route)
    }
  }

  /**
   * @description: watch current route and cancel lazy loading
   * @param {*}
   * @return {*}
   * @Date: 2021-09-03 14:20:28
   */
  watch(
    $route,
    (newRoute, oldRoute) => {
      addTags()
    },
    {
      immediate: true,
      deep: true,
    }
  )

  /**
   * @description: delete VisitedView
   * @param {*} tag current route
   * @return {*}
   * @Date: 2021-09-03 14:23:33
   */
  const handleClose = (tag) => {
    useTagsView().deleteVisitedView(tag)
  }
</script>

<style scoped lang="scss"></style>
