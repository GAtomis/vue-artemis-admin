/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-31 17:59:05
 * @LastEditTime: 2022-08-01 11:28:19
 * @LastEditors: Gavin
 */

import { ref, Ref } from 'vue'
type UsePage = {
  handlePage: (page?: number, pageSize?: number) => void
  handleSearch: (form: any) => void
  page: Ref<number>
  pageSize: Ref<number>
  total: Ref<number>
  loading: Ref<boolean>
}

/**
 * @description: 方法说明....
 * @ax 后台请求方法
 * @dataSource 表格数据
 * @query 请求参数
 * @return {*}
 * @Date: 2022-07-31 23:50:37
 */
export function usePage(ax: () => void): UsePage {
  const pageSize = ref<number>(10)
  const page = ref<number>(1)
  const total = ref<number>(0)
  const loading = ref(false)

  const handlePage = () => {
    ax()
  }
  const handleSearch = () => {
    ax()
  }

  return {
    handlePage,
    handleSearch,
    page,
    pageSize,
    total,
    loading,
  }
}
