import { Interface } from 'readline'

/*
 * @Description: User Tao声明
 * @Author: Gavin
 * @Date: 2021-08-04 16:55:59
 * @LastEditTime: 2021-11-19 15:27:08
 * @LastEditors: Gavin
 */
export interface UserInfo {
  name?: string
  age: number | string
  jobType?: string
  tags?: Array<string>
  level?: string
  avatar?: string
  gender?: string
  token?: string
  catchPhrase?: string
  roles?: Array<string>
  // content?: string,
  // unlike?: number | string,
  // like?: number | string,
  // action?:number,
  // action1?:number,
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
  level
  catchPhrase
  setName(name: string | number) {
    this.name = name
  }
  constructor({
    age,
    jobType,
    avatar,
    name,
    token,
    roles,
    content,
    level,
    catchPhrase,
  }: UserInfo) {
    this.age = age
    this.jobType = jobType
    this.level = level
    // this.tags = tags,
    this.avatar = avatar
    this.setName(name)
    this.roles = roles
    this.content = content
    this.catchPhrase = catchPhrase
  }
}
export default User

interface Comment extends UserInfo {
  content?: string
  unlike?: number | string
  like?: number | string
  action?: number
  action1?: number
}

export class CommentItem extends User implements Comment {
  like
  unlike
  content
  action
  action1
  constructor({ like, unlike, content, ...obj }: Comment) {
    super(obj)
    this.unlike = like
    this.like = unlike
    this.content = content
    this.action = 0
    this.action1 = 0
  }
}
