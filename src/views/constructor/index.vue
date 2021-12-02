<!--
 * @Description: 构造器
 * @Author: Gavin
 * @Date: 2021-11-30 18:30:19
 * @LastEditTime: 2021-12-02 19:21:31
 * @LastEditors: Gavin
-->
<template>
  <div>
    <a-row type="flex">
      <a-col :flex=".75">
        <div class="col-3">
          <h3>Draggable 1</h3>
          <draggable
            class="dragArea type-group"
            :list="typeList1"
            :group="{ name: 'people', pull: 'clone', put: false }"
            @change="log"
            :clone="onClone"
            item-key="formItemId"
          >
            <template #item="{ element }">
              <div class="type-group-item">
                <img :src="element.imgUrl" />
                <p>{{ element.style }}</p>
              </div>
            </template>
          </draggable>
        </div>
      </a-col>
      <a-col :flex="3.5">
        <div class="col-3">
          <h3>Draggable 2</h3>
          <draggable
            class="dragArea list-group"
            :list="contentList"
            group="people"
            @change="log"
            item-key="style"
          >
            <template #item="{ element }">
              <component :is="component[element.type]" :item="element"></component>
            </template>
          </draggable>
        </div>
      </a-col>
      <a-col :flex=".75"></a-col>
    </a-row>

    <!-- <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        @change="log"
        item-key="style"
      >
        <template #item="{ element }">
          <div class="list-group-item">{{ element.name }}</div>
        </template>
      </draggable>
    </div>-->
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, UnwrapNestedRefs } from 'vue'
import draggable from 'vuedraggable'
import { Radio, Empty } from './type/type'
import { RadioItem, EmptyItem } from './components'
import { TypeEnum } from './enmu/enum'
import radioIcon from '@/assets/img/radio-icon.png'
import { useCloneByJSON } from '@/hooks/global/common'

const component = {
  [TypeEnum.EMPTY]: EmptyItem,
  [TypeEnum.RADIO]: RadioItem,
}

type TypeList = Array<Radio | Empty>
const typeList1 = ref<TypeList>([new Radio("单选", undefined, radioIcon, "我的内容"), new Radio("单选二", undefined, radioIcon, "我的内容")])

const contentList = ref<TypeList>([new Empty()])
const log = evt => window.console.log(evt);
const onClone = (item: UnwrapNestedRefs<TypeList>) => {


  return useCloneByJSON(item,res => reactive<TypeList>(res), 
}

//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])


</script>

<style scoped lang='scss'>
.dragArea {
  width: 100%;
}
.type-group {
  &-item {
    // padding-top: 30%;
    // height: 60px;
    // border-radius: 10%;
    // background: orange;
    margin-bottom: 2%;
    margin-right: 2%;
    width: 30%;
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>