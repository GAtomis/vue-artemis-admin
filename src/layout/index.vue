<!--
 * @Description: 主页框架布局
 * @Author: Gavin
 * @Date: 2021-07-31 17:06:32
 * @LastEditTime: 2022-11-15 15:27:31
 * @LastEditors: Gavin 850680822@qq.com
-->
<template>
  <!-- 左区域 -->
  <a-layout class="layout">
    <!-- 侧边栏 -->
    <a-layout-sider
      v-if="sideModel == 'inline'"
      v-model:collapsed="collapsed"
      :style="{ overflow: 'auto', height: '100vh' }"
      :trigger="null"
      collapsible
    >
      <!-- 侧边栏菜单 可以插槽-->
      <artms-sidebar :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout-header
      v-if="sideModel == 'horizontal'"
      :style="{ overflow: 'auto' }"
      style="display: flex"
    >
      <artms-sidebar :collapsed="collapsed">
        <template #logo>
          <div>
            <img :src="LOGO_IMAGE" width="32" height="32" />
            <span
              :class="{ anticon: collapsed }"
              style="
                color: #fff;
                font-size: 16px;
                white-space: nowrap;
                margin-left: 10px;
              "
            >
              {{ HOME_TITLE }}
            </span>
          </div>
        </template>
      </artms-sidebar>
    </a-layout-header>
    <!-- 右边区域  包括头部 内容显示区域 -->

    <a-layout :style="{ overflow: 'auto', height: '100vh' }">
      <a-layout-header style="padding: 0; height: 50px" class="bg-fff">
        <artms-navbar>
          <template v-if="sideModel == 'inline'" #collapsed>
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
          </template>
        </artms-navbar>
      </a-layout-header>
      <nav v-if="isNavShow" class="bg-fff">
        <artms-tags-view />
      </nav>
      <a-layout-content>
        <section class="appMain scroll themes-bg">
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
              <!-- <keep-alive> -->
              <component :is="Component" :key="route.path" />
              <!-- </keep-alive> -->
              <!-- <component :is="Component" v-else :key="route.path" /> -->
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

  import { useTagsView, useTheme } from '@/store/pinia/index'
  //hook
  import { getPointerLocationByElement } from '@/hooks/global/common/index'
  import { useStorage } from '@vueuse/core'
  import { LOGO_IMAGE, HOME_TITLE } from '@/settings'
  const collapsed = ref<boolean>(false)
  const $route = useRoute()

  const pointerLocation = getPointerLocationByElement()
  const offsetWidth = document.body.offsetWidth

  const op = computed(() => {
    return offsetWidth - pointerLocation.x > offsetWidth * 0.08 ? 0 : 1
  })

  const sideModel = computed(() => {
    return useTheme().sideModel
  })
  const isNavShow = computed(() => {
    return useTagsView().isShow
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

      // background: #fff;
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

    .appMain {
      position: relative;
      padding: 24px;
      box-sizing: border-box;
      height: 100%;
    }

    .scroll {
      overflow: hidden;
      overflow-y: auto;
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
      // background: #fff;
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
