<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-06 11:40:21
 * @LastEditTime: 2021-09-06 11:42:34
 * @LastEditors: Gavin
-->
<script lang="tsx">
  import { defineComponent, onBeforeMount } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { Empty } from 'ant-design-vue'

  export default defineComponent({
    name: 'Redirect',
    setup(props) {
      const $route = useRoute()
      const $router = useRouter()
      onBeforeMount(() => {
        const { params, query } = $route
        const { path } = params
        $router.replace({
          path: '/' + (Array.isArray(path) ? path.join('/') : path),
          query,
        })
      })
      return () => <Empty />
    },
  })
</script>
