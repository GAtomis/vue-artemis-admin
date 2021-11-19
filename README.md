<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2021-11-19 18:46:28
 * @LastEditors: Gavin
-->


# Vue 3 + Typescript + Vite2 Artemis Admin


<p align="center">
  <a href="https://www.antdv.com/">
    <img width="400" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.sjsheji.com%2Fwp-content%2Fuploads%2F2020%2F02%2F9440fe15c28581982cf140688ad10913.jpg&refer=http%3A%2F%2Fwww.sjsheji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639808529&t=f5924e866daf5a51fe298b32a7aed15e">
  </a>
</p>


## 简介
Artemis Admin英文不太好先写中文了。本项目基于vue3.2+ts+antd-vue+vite2+vueuse 实现的后台管理系统模板,项目意义重在与各位大佬交流学习。感谢两位大佬antFu和花裤衩大大给我了很大的启示（虽然没见过哈哈哈^^）,如果觉得 嘿！这个小伙儿挺可爱的！就给个小星星吧 ^ - ^0!拒绝下次一定哈哈哈！

## 模板基础功能(完善中)
- 单点登录功能
- 动态路由加载
- 主题色替换
- 个人主页已经权限配置



## 疑难杂症日记
* 热更新白页内存移除=>store配置初始化
* 热更新还是无法使用内容白页=>keep-alive和router-view 需要加key保证他的唯一性

## Project setup

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