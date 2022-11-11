<!--
 * @Author: Gavin 850680822@qq.com
 * @Date: 2022-11-10 00:37:24
 * @LastEditors: Gavin 850680822@qq.com
 * @LastEditTime: 2022-11-11 13:20:27
 * @FilePath: \vue-artemis-admin\src\views\account\roles\components\DrawerContainer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="info" tab="role_info" force-render>
        <EditRole  @close=""/>
      </a-tab-pane>
      <a-tab-pane key="router" tab="router">
        <RouterTree @close="" />
      </a-tab-pane>

    </a-tabs>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import RouterTree from './RouterTree.vue';
import EditRole from './EditRole.vue'

//tabs active
const activeKey = ref('info')

</script>

<style scoped lang='scss'>

</style>