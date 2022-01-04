<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2022-01-04 13:16:21
 * @LastEditors: Gavin
-->



<p align="center">
  <a href="https://www.antdv.com/">
    <img width="400" src="https://corp-wecom-cdn.elcapp.cn/bb_test/material/image/20211214/20637098569990017.png">
  </a>
</p>
<h1 align="center">Welcome to Artemis Admin 👋</h1>
<p align="center">
    <img alt="vue-next" src="https://camo.githubusercontent.com/759be1e9170b0987efd0b0ce496bf67d132d8e549035ccddf3b6ee5194eb146c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652f6e6578742e737667"/>
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg"/>
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
</p>

> Artemis Admin英文不太好先写中文了。本项目基于vue3.2+ts+antd-vue+vite2+vueuse 实现的后台管理系统模板,项目意义重在与各位大佬交流学习。感谢两位大佬antFu和花裤衩大大给我了很大的启示（虽然没见过哈哈哈^^）,如果觉得 嘿！这个小伙儿挺可爱的！就给个小星星吧 ^ - ^0!拒绝下次一定哈哈哈！

## 模板基础功能(完善中)
- 重构:vuex=>:pineapple:pinia  :heavy_check_mark:
- 单点登录功能(jwt)  :heavy_check_mark:
- 动态路由加载   :heavy_check_mark:
- 主题色替换   :heavy_check_mark:
- 个人主页已经权限配置 :wrench:
- 表单构造器 :wrench:



## 疑难杂症日记
* 热更新白页内存移除=>store配置初始化
* 热更新还是无法使用内容白页=>keep-alive和router-view 需要加key保证他的唯一性
* 关于pineapple:pinia 
Vuex4对typescript的支持实际上并不合适。因此，重构了主要分支。Vuex配置文件仍保留在@/main.ts中

## 快速启动

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```
## 作者
[My blog](https://juejin.cn/post/6966454624819609631)  by Gavin

## 鸣谢
由衷感谢三位大佬的开源精神,虽然我们未曾交流过
[@PanJiaChen](https://github.com/PanJiaChen) 花裤衩
[@Anthony Fu](https://github.com/antfu) ant fu
[@coderwhy](https://github.com/coderwhy?tab=repositories) 王红元老师
