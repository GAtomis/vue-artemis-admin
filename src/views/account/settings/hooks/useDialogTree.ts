/*
 * @Description: 使用dialog的hooks
 * @Author: Gavin
 * @Date: 2021-10-28 14:50:58
 * @LastEditTime: 2022-01-06 16:52:17
 * @LastEditors: Gavin
 */

import { ref, watch, Ref } from 'vue'
import type { TreeProps } from 'ant-design-vue';

interface UseDialogTree {
  expandedKeys: Ref<string[]>
  selectedKeys: Ref<string[]>
  checkedKeys: Ref<string[]>
  showLine: Ref<boolean>
  showIcon: Ref<boolean>
  onSelect:TreeProps['onSelect'] 
}


export default function (): UseDialogTree {
  const expandedKeys = ref<string[]>([]);
  const selectedKeys = ref<string[]>([]);
  const checkedKeys = ref<string[]>([]);
  const showLine = ref<boolean>(true);
  const showIcon = ref<boolean>(true);
  const onSelect:TreeProps['onSelect']   = (selectedKeys: string[], info) => {
    // console.log('selected', selectedKeys, info);
  };

  watch(expandedKeys, () => {
    console.log('expandedKeys', expandedKeys);
  });
  watch(selectedKeys, () => {
    console.log('selectedKeys', selectedKeys);
  });
  watch(checkedKeys, () => {
    console.log('checkedKeys', checkedKeys);
  })

  return {
    expandedKeys, selectedKeys, checkedKeys, showLine, showIcon,onSelect
  }
}