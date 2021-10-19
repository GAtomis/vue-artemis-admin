import { Interface } from "readline"

/*
 * @Description: User Tao声明
 * @Author: Gavin
 * @Date: 2021-08-04 16:55:59
 * @LastEditTime: 2021-10-19 16:27:22
 * @LastEditors: Gavin
 */
export interface UserInfo {
  name?: string
  age: number | string
  jobType?: string
  tags?: Array<string>
  avatar?: string
  gender?: string
  token?: string,
  roles?: Array<string>,
  content?: string,
  unlike?: number | string,
  like?: number | string,
  action?:number,
  action1?:number,
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
  content
  setName(name: string | number) {
    this.name = name
  }
  constructor({ age, jobType, avatar, name, token, roles, content }: UserInfo) {
    this.age = age
    this.jobType = jobType
    // this.tags = tags,
    this.avatar = avatar
    this.setName(name)
    this.roles = roles
    this.content = content
  }
}
export default User



export class CommentItem extends User {
  like
  unlike
  content
  action
  action1
  constructor(obj: UserInfo) {
    super(obj)
    this.unlike = obj.like
    this.like = obj.unlike
    this.content=obj.content
    this.action=0
    this.action1=0
  }
}