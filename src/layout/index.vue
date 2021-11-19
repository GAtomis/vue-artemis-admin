<!--
 * @Description: 主页框架布局
 * @Author: Gavin
 * @Date: 2021-07-31 17:06:32
 * @LastEditTime: 2021-11-19 18:34:13
 * @LastEditors: Gavin
-->
<template>
  <!-- 左区域 -->
  <a-layout class="layout">
    <!-- 侧边栏 -->
    <a-layout-sider
      v-model:collapsed="collapsed"
      :style="{ overflow: 'auto', height: '100vh' }"
      :trigger="null"
      collapsible
    >
      <!-- 侧边栏菜单 可以插槽-->
      <artms-sidebar :collapsed="collapsed" />
    </a-layout-sider>

    <!-- 右边区域  包括头部 内容显示区域 -->

    <a-layout :style="{ overflow: 'scroll', height: '100vh' }">
      <a-layout-header style="background: #fff; padding: 0; height: 50px">
        <artms-navbar>
          <template #collapsed>
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
            <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          </template>
        </artms-navbar>
      </a-layout-header>
      <nav v-if="$store.getters.isNavShow">
        <artms-tags-view />
      </nav>
      <a-layout-content>
        <section
          style="
            padding: 10px;
            background: #fff;
            position: relative;
            min-height: 100%;
            width: 100%;
          "
          class="appMain"
        >
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
              <keep-alive :key="$route.full">
                <component :is="Component" :key="$route.full" />
              </keep-alive>
            </transition>
          </router-view>
        </section>
      </a-layout-content>
      <!-- <a-layout-footer :style="{ textAlign: 'center' }">Vite Admin ©2021 Created by ^Gavin^</a-layout-footer> -->
    </a-layout>

    <!-- 右边拓展菜单 -->
    <artms-settings class="artms-settings fixed_settings_icon" />
  </a-layout>
</template>
<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import {
  ArtmsSidebar,
  ArtmsNavbar,
  ArtmsTagsView,
  ArtmsSettings,
} from '@/layout/components/index'
import { useRoute } from 'vue-router'
import { ref, computed, provide, watch } from 'vue'
import { useStore } from 'vuex'
//hook
import { getPointerLocationByElement } from '@/hooks/global/common/index'
import { useStorage } from '@vueuse/core'
const collapsed = ref<boolean>(false)
const $route = useRoute()
const $store = useStore()
const pointerLocation = getPointerLocationByElement()
const offsetWidth = document.body.offsetWidth

const op = computed(() => {
  return offsetWidth - pointerLocation.x > offsetWidth * 0.08 ? 0 : 1
})
const storage = useStorage<boolean>('storg', true, sessionStorage)
 
 

</script>
<style lang="scss" scope>
.layout {
  .fixed_settings_icon {
    font-size: 18px;
    opacity: v-bind(op);
    //兼容性c3兼容汗TAT
    -webkit-transition: font-size 0.3s ease, opacity 0.2s ease;
    -moz-transition: font-size 0.3s ease, opacity 0.2s ease;
    -o-transition: font-size 0.3s ease, opacity 0.2s ease;
    transition: font-size 0.3s ease, opacity 0.2s ease;
    &:hover {
      font-size: 30px;
      opacity: 1;
    }
  }

  .trigger {
    font-size: 18px;

    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  nav {
    line-height: 40px;
    background: #fff;
    .tag {
      padding: 3px 8px;
      margin-right: 5px !important;
    }
    .tag:nth-child(1) {
      margin-left: 10px;
    }
  }
  .trigger:hover {
    color: #1890ff;
  }

  // .logo {
  //   height: 32px;
  //   background: rgba(255, 255, 255, 0.3);
  //   margin: 16px;
  //   img {
  //     width: 32px;
  //     height: 32px;
  //   }
  // }

  .site-layout .site-layout-background {
    background: #fff;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .artms-settings {
    position: fixed;
    right: 20px;
    bottom: 50%;
  }
}
</style>


