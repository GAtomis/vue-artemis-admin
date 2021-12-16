/*
 * @Description: 使用dialog的hooks
 * @Author: Gavin
 * @Date: 2021-10-28 14:50:58
 * @LastEditTime: 2021-11-18 16:05:45
 * @LastEditors: Gavin
 */

import { ref, computed, watch, Ref } from 'vue'
import { useStore } from 'vuex'
import { SelectEvent } from 'ant-design-vue/es/tree/Tree';
interface UseDialogTree {
  expandedKeys: Ref<string[]>
  selectedKeys: Ref<string[]>
  checkedKeys: Ref<string[]>
  showLine: Ref<boolean>
  showIcon: Ref<boolean>
  onSelect:(selectedKeys: string[], info: SelectEvent) =>void
}


export default function (): UseDialogTree {
  const expandedKeys = ref<string[]>([]);
  const selectedKeys = ref<string[]>([]);
  const checkedKeys = ref<string[]>([]);
  const showLine = ref<boolean>(true);
  const showIcon = ref<boolean>(true);
  const onSelect = (selectedKeys: string[], info: SelectEvent) => {
    console.log('selected', selectedKeys, info);
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