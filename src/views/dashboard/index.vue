<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-31 17:05:12
 * @LastEditTime: 2021-09-07 16:31:02
 * @LastEditors: Gavin
-->
<template>
  <a-calendar v-model:value="value" @panelChange="onPanelChange"></a-calendar>
</template>
<script lang="ts" setup>

import { ref } from 'vue';
import type { Moment } from 'moment';
const value = ref<Moment>();
const onPanelChange = (value: Moment, mode: string) => {
  console.log(value, mode);
};

</script>