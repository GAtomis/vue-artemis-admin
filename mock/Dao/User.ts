/*
 * @Description: User Tao声明
 * @Author: Gavin
 * @Date: 2021-08-04 16:55:59
 * @LastEditTime: 2021-08-06 16:36:09
 * @LastEditors: Gavin
 */
interface UserInfo {
  name?: string
  age: number | string
  jobType?: string
  tags?: Array<string>
  avatar?: string
  gender?: string
  token?:string,
  roles:Array<string>,
  setName?(name: string | number)
}
// const userData:userInfo={

//   name:faker.name.findName(),


// }
class User implements UserInfo {
  name
  age
  jobType
  tags
  avatar
  token
  roles
  setName(name: string | number) {
    this.name = name
  }
  constructor({ age, jobType, avatar, name,token,roles=[] }: UserInfo) {
    this.age = age
    this.jobType = jobType
    // this.tags = tags,
    this.avatar = avatar
    this.setName(name)
    this.roles=roles
  }
}
export default User