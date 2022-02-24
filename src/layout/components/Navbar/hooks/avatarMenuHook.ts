/*
 * @Description: 头像hook
 * @Author: Gavin
 * @Date: 2021-08-26 11:46:16
 * @LastEditTime: 2021-12-29 14:28:45
 * @LastEditors: Gavin
 */

/**
 * @description: 拿到个人信息的hook
 * @param {*}
 * @return {*}
 * @Date: 2021-08-26 11:47:13
 */

import { UserOutlined, LogoutOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
export interface MenuList {
  icon: any
  title: string
  handleEvent: () => void
}
export function getMenuList(): Array<MenuList> {
  const $router = useRouter()
  return [
    {
      icon: UserOutlined,
      title: 'Settings',
      handleEvent() {
        $router.push({ path: '/account/center', query: { from: 'navbar' } })
      },
    },
    {
      icon: LogoutOutlined,
      title: 'Sign out',
      handleEvent() {
        $router.push({ path: '/Login' })
      },
    },
  ]
}
