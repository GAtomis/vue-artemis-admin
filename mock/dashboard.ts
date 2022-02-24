/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-04 11:34:38
 * @LastEditTime: 2021-10-26 14:16:35
 * @LastEditors: Gavin
 */
import { MockMethod } from 'vite-plugin-mock'
import faker from '@faker-js/faker'
import { userInfo } from './user'
import { UserInfo, CommentItem } from './Dao/User'
faker.locale = 'zh_CN'
const baseUrl = '/api'
const model = '/dashboard'

const commentsResult: UserInfo[] = [
  new CommentItem({
    name: faker.name.findName(),
    age: faker.random.number(),
    jobType: faker.name.jobType(),
    avatar: faker.image.avatar(),
    content: faker.company.catchPhraseNoun,
    like: 12,
    unlike: 5,
  }),
  new CommentItem({
    name: faker.name.findName(),
    age: faker.random.number(),
    jobType: faker.name.jobType(),
    avatar: faker.image.avatar(),
    content: faker.company.catchPhraseNoun,
    like: 12,
    unlike: 5,
  }),
]
export default [
  {
    url: baseUrl + model + '/getComments',
    method: 'post',
    response: (res) => {
      const { username } = res.body
      if (userInfo[username]) {
        return {
          code: 0,
          message: 'ok',
          result: commentsResult,
        }
      } else {
        return {
          code: 501,
          message: 'error,the user does not have permission',
          result: null,
        }
      }
    },
  },
] as MockMethod[]
