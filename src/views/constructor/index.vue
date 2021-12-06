<!--
 * @Description: 构造器
 * @Author: Gavin
 * @Date: 2021-11-30 18:30:19
 * @LastEditTime: 2021-12-06 18:45:57
 * @LastEditors: Gavin
-->
<template>
  <div style="height:100%;">
    <a-row type="flex" justify="space-between" align="top" style="height:100%;">
      <a-col :span="5" class="warp bg-fff app-container">
        <h3>ControlArea</h3>
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
              <a-tooltip :title="element.style" color="cyan">
                <img :src="element.imgUrl" />
              </a-tooltip>
            </div>
          </template>
        </draggable>
      </a-col>
      <a-col
        :span="12"
        style=" overflow: hidden; overflow-y:auto;max-height:100%"
        class="warp bg-fff app-container "
      >
                  <h3>FormDisplay</h3>
          <draggable
            class="dragArea list-group"
            :list="contentList"
            group="people"
            @change="log"
            item-key="formItemId"
          >
            <template #item="{ element, index }">
              <component
                :is="contentComp[element.type]"
                :item="element"
                class="list-group-item"
                @click="selectContent(element)"
                :key="index"
              ></component>
            </template>
          </draggable>
 
  
      </a-col>
      <a-col :span="6" class="warp bg-fff app-container">
        <h3>PropertySelection</h3>
        <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          v-if="Object.keys(formState).length"
        >
          <a-form-item ref="name" label="name" name="name">
            <a-input v-model:value="formState.label" />
          </a-form-item>

          <component :is="expendComp[formState.type]" :item="formState"></component>
        </a-form>
      </a-col>
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
import { ref, reactive, watch } from 'vue'
import draggable from 'vuedraggable'
import { Radio, Empty } from './type/type'
import { RadioItem, EmptyItem, RadioBox, EmptyBox } from './components'
import { TypeEnum } from './enmu/enum'
import radioIcon from '@/assets/img/radio-icon.png'
import { useCloneByJSON } from '@/hooks/global/common'


//***************ControlArea****************
type Type = Radio | Empty
const typeList1 = ref<Type[]>([new Radio("Radio1", undefined, radioIcon, "我的内容"),
new Radio("Radio2", undefined, radioIcon, "我的内容")]),
  contentComp = {
    [TypeEnum.EMPTY]: EmptyBox,
    [TypeEnum.RADIO]: RadioBox,
  },
  contentList = ref<Type[]>([new Empty()]),
  onClone = (item: Type) => useCloneByJSON<Type>(item, res => reactive(res)),
  log = evt => window.console.log(evt);
//***************ControlArea****************
//***************FormDisplay****************
const labelCol = { span: 4 },
  wrapperCol = { span: 14 },
  rules = {},
  expendComp = {
    [TypeEnum.EMPTY]: EmptyItem,
    [TypeEnum.RADIO]: RadioItem,
  }
watch(() => contentList.value, (newVal) => {
  const isEmpty = !newVal.length
  const isIncludeEmpty = newVal.find(item => item.type == TypeEnum.EMPTY)
  if (isEmpty) {
    contentList.value.push(new Empty())
  } else if (isIncludeEmpty) {
    contentList.value = newVal.filter(item => item != isIncludeEmpty)
  }
}, { deep: true })
//***************FormDisplay****************

//***************PropertySelection****************
//ref=>dom
const formRef = ref(),
  formState = ref<any | Type>({}),
  selectContent = item => formState.value = item
//***************PropertySelection****************

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
    margin-bottom: 2%;
    margin-right: 2%;
    width: 30%;
    display: inline-block;
    img {
      width: 100%;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
.list-group {
  &-item {
    min-height: 200px;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    padding: 10px;
  }
}
.warp {
  h3 {
    text-align: center;
  }
}
</style>