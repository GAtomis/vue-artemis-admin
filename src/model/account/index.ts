/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-27 18:48:38
 * @LastEditTime: 2022-07-27 22:42:08
 * @LastEditors: Gavin
 */

//坑早知道用interface了, type的继承真的丑
export type UserInfo = {
  id?: number
  name: string
  company: string
  catchPhrase: string
  jobType: string
  avatar: string
}
