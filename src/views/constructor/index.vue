<!--
 * @Description: Constructor
 * @Author: Gavin
 * @Date: 2021-11-30 18:30:19
 * @LastEditTime: 2022-01-10 11:13:38
 * @LastEditors: Gavin
-->
<template>
  <div style="height: 100%">
    <a-row type="flex" justify="space-between" align="top" style="height: 100%">
      <a-col :span="5" class="warp bg-fff app-container">
        <h3>ControlArea</h3>
        <draggable
          class="dragArea type-group"
          :list="typeList1"
          :group="{ name: 'people', pull: 'clone', put: false }"
          :move="onMove"
          :clone="onClone"
          item-key="formItemId"
        >
          <template #item="{ element }">
            <div class="type-group-item">
              <a-tooltip :title="element.style" color="cyan">
                <a-image
                  :src="element.imgUrl"
                  :preview="false"
                  fallback="https://t9.baidu.com/it/u=471057450,3953446105&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=625579a68f9da51c0bb0cdac61f1655f"
                />
              </a-tooltip>
            </div>
          </template>
        </draggable>
      </a-col>
      <a-col
        :span="11"
        style="overflow: hidden; overflow-y: auto; max-height: 100%"
        class="warp bg-fff app-container"
      >
        <h3>FormDisplay</h3>
        <draggable
          class="dragArea list-group"
          :list="contentList"
          tag="transition-group"
          :component-data="{
            tag: 'div',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null,
          }"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          item-key="formItemId"
        >
          <template #item="{ element, index }">
            <component
              :is="contentComp[element.type]"
              :item="element"
              class="list-group-item"
              @click="selectContent(element, index)"
              :key="index"
            >
              <template #index>Q{{ index + 1 }}:</template>
            </component>
          </template>
        </draggable>
      </a-col>
      <a-col :span="7" class="warp bg-fff app-container">
        <h3>PropertySelection</h3>
        <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          v-if="Object.keys(formState).length"
        >
          <a-form-item ref="title" label="title" name="title">
            <a-input v-model:value="formState.label" />
          </a-form-item>
          <a-form-item ref="type" label="type" name="type">
            <a-select
              v-model:value="formState.style"
              placeholder="please select your type"
              @change="onChangeType"
              :disabled="formState.type == TypeEnum.EMPTY"
            >
              <a-select-option
                v-for="typeItem of typeList1"
                :key="typeItem.formItemId"
                :value="typeItem.style"
                >{{ typeItem.style }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <component
            :is="expendComp[formState.type]"
            :item="formState"
            :key="formState.formItemId"
          ></component>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, watch, computed } from 'vue'
import draggable from 'vuedraggable'
import { Radio, Empty, Option } from './type/type'
import { RadioItem, EmptyItem, RadioBox, EmptyBox } from './components'
import { TypeEnum } from './enmu/enum'
import radioIcon from '@/assets/img/radio-icon.png'
import { useCloneByJSON } from '@/hooks/global/common'
import faker from 'faker'
import { provide } from 'vue'

type Type = Radio | Empty
//***************ControlArea****************
const typeList1 = ref<Type[]>([
    new Radio('Radio1', undefined, radioIcon),
    new Radio(
      'DIY',
      [
        new Option('newday if 1', true),
        new Option('towday if 444', true),
        new Option('3234 if 2134', true),
        new Option('towday if 444', true),
      ],
      undefined,
      undefined,
      false
    ),
  ]),
  onClone = (item: any) =>
    useCloneByJSON<Type>(item, (res) => {
      res.formItemId = faker.datatype.number()
      reactive(res)
    }),
  onMove = (e) => {
    const targetId =
      (e.relatedContext.element && e.relatedContext.element.formItemId) || 0
    const newArr = typeList1.value
    const action = newArr
      .map((item) => {
        return item.formItemId
      })
      .includes(targetId)

    return !action
  }

//***************ControlArea****************
//***************FormDisplay****************
const rules = {},
  contentComp = {
    [TypeEnum.EMPTY]: EmptyBox,
    [TypeEnum.RADIO]: RadioBox,
  },
  contentList = ref<Type[]>([new Empty()]),
  dragOptions = computed(() => {
    return {
      animation: 200,
      group: 'people',
      disabled: false,
      ghostClass: 'ghost',
    }
  }),
  drag = ref(false)

watch(
  () => contentList.value,
  (newVal) => {
    const isEmpty = !newVal.length
    const isIncludeEmpty = newVal.find((item) => item.type == TypeEnum.EMPTY)
    if (isEmpty) {
      contentList.value.push(new Empty())
    } else if (isIncludeEmpty) {
      contentList.value = newVal.filter((item) => item != isIncludeEmpty)
    }
  },
  { deep: true }
)
//***************FormDisplay****************

//***************PropertySelection****************
//ref=>dom

const formRef = ref(),
  labelCol = { span: 5 },
  wrapperCol = { span: 14 },
  expendComp = {
    [TypeEnum.EMPTY]: EmptyItem,
    [TypeEnum.RADIO]: RadioItem,
  },
  currentIndex = ref(0),
  formState = ref<Type>(new Empty()),
  onChangeType = (value) => {
    typeList1.value.find((item) => item.style === value) &&
      selectContent(
        (contentList.value[currentIndex.value] = onClone(
          typeList1.value.find((item) => item.style === value)
        )),
        currentIndex.value
      )
  },
  selectContent = (item, index) => {
    formState.value = item
    currentIndex.value = index
  }
provide('labelCol', labelCol)
provide('wrapperCol', wrapperCol)
//***************PropertySelection****************
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
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>