<template>
  <div class="warp">

    <a-spin :spinning="spinning">

      <main>
        <a-tree v-model:expandedKeys="expandedKeys" v-model:selectedKeys="selectedKeys"
          v-model:checkedKeys="checkedKeys" :show-line="showLine" :show-icon="showIcon" :field-names="fieldNames"
          :tree-data="meuns" check-strictly checkable @select="onSelect" @check="onCheck" :treeDefaultExpandAll="true">
          <!-- <template #icon="{ children }">
            <a-tag v-if="children" color="#108ee9">menu</a-tag>
            <a-tag v-else color="#87d068">link</a-tag>
          </template> -->
          <template #title="{ name, children }">
            <a-tag v-if="children" color="#55acee">
              <template #icon>
                <menu-outlined />
              </template>
              {{ name }}
            </a-tag>
            <a-tag v-else color="#87d068">
              <template #icon>
                <link-outlined />
              </template>
              {{ name }}
            </a-tag>
          </template>
        </a-tree>
      </main>


      <footer>
        <a-button @click="onSubmit" type="primary">save</a-button>
        <a-button @click="onCancel">cancel</a-button>
      </footer>
    </a-spin>

  </div>
</template>

<script lang='ts' setup>
// hooks menuTree
import { useMenuTree } from '../hooks/useMenuTree'
import { filterAsyncRoutesByMeun } from '@/hooks/router'
import { inject, onMounted, ref, Ref, watch, computed } from 'vue';
import { getItem, updateRoleOfPermission } from '@/api/account/role' //Role API
import { getListByRoleId } from '@/api/account/menu'
import { message } from 'ant-design-vue' //'Atdv '
import type { TreeProps } from 'ant-design-vue'
import type { Permission } from '@/model/account'
import type { Role } from '@/model/account' // 'Role type'

const currentItem = inject<Ref<Role>>('currentItem')

const spinning = ref(false)
const {
  meuns,
  expandedKeys,
  selectedKeys,
  checkedKeys,
  showLine,
  showIcon,
  onSelect,
  createMenu,
  filterMenu,
  fieldNames,
} = useMenuTree()

const sysPermissions = ref<Permission[]>([])
const onCheck: TreeProps['onCheck'] = (check: any, info) => {
  const newItem = createMenu(info.node)
  sysPermissions.value = filterMenu(
    check?.checked ?? check,
    newItem,
    sysPermissions.value || []
  )
  console.log(sysPermissions)
}

/**
 * @description: Tree update submit
 * @return {*}
 */
const onSubmit = async () => {
  /**
   * @description: 
   * @return {*}
   */
  const getParams = () => {
    let param:{id:any,sysPermissions:any} = {
        id:currentItem?.value.id,
        sysPermissions:[]
    }
    param && (param.sysPermissions = checkedKeys.value?.checked.map(  id=>{
      return {id}
    }))

    return param
  }

  const id = await updateRoleOfPermission(getParams())


  message.success('提交成功')
  getItem({ id }).then((res) => {
    checkedKeys!.value!.checked =
      res.sysPermissions?.map((item) => item.id) ?? []
  })
},
  onCancel = () => {
    emit('close', 1)
  }
const init = async () => {
  spinning.value = true
  const permissionList = await getListByRoleId()
  meuns.value = filterAsyncRoutesByMeun<Permission[]>(
    undefined,
    permissionList,
    (pl, r) => {
      const _p = pl.find((item) => {
        return item.url == r.meta.roles
      })

      if (_p) {
        r.id = _p?.id
        r.value = _p.url
      }

      return !!_p
    }
  )

  spinning.value = !spinning.value
},
  updateChecked = () => {
    checkedKeys.value.checked = currentItem?.value?.sysPermissions?.map((item) => item.id) ?? []
  }

watch(currentItem!, () => {
  updateChecked()

})

onMounted(() => {
  init()
  updateChecked() 
})
//expects props options
// const props = defineProps<{
//   id:string
// }>()
/*
const props = withDefaults(defineProps<Props>(), {
  labels: () => ['one', 'two']
  msg: 'hello',
})
*/
//基于类型
const emit = defineEmits<{
  (e: 'close', isRefresh: number): void,
}>()
</script>

<style scoped lang='scss'>
.warp {
  main {
    margin: 10px 0;
  }
}
</style>