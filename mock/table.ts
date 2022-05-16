/*
 * @Description: table
 * @Author: Gavin
 * @Date: 2022-05-13 12:59:59
 * @LastEditTime: 2022-05-15 12:05:40
 * @LastEditors: Gavin
 */
import { MockMethod } from 'vite-plugin-mock'
import faker from '@faker-js/faker'

faker.locale = 'zh_CN'
interface Pagination {
  current: number | string
  pageSize: number | string
  total?: number | string
}
interface Body extends Pagination {
  gender: number | string
}
interface Item {
  country: string
  name: string
  createdTime: Date | number | string
  phone: string
  gender: string
  jobType: string
  avatar: string
  id: number | string
}
function useQueryPage<T>(
  current: number | string,
  pageSize: number | string,
  list: T[]
): {
  total: number
  item: T[]
  current: number | string
  pageSize: number | string
} {
  const startIndex: number = (+current - 1) * 10
  const number: number = +pageSize + startIndex

  const item = list.slice(startIndex, number)
  // console.log(startIndex, number, item)
  return {
    total: list.length,
    item,
    current,
    pageSize,
  }
}

const result: Array<Item> = Array.from({ length: 100 }, (_, index): Item => {
  return {
    country: faker.address.country(),
    name: faker.name.lastName() + faker.name.firstName(),
    createdTime: faker.date.recent(10, '2020-01-01'),
    phone: faker.phone.phoneNumber('1##-####-####'),
    gender: faker.name.gender(true),
    jobType: faker.name.jobType(),
    avatar: faker.image.people(null, null, true),
    id: faker.datatype.number() + index,
  }
})
export default [
  {
    url: '/api/person/getPerson',
    method: 'post',
    response: ({ body }: { body: Body }) => {
      if (body) {
        const { current = 1, pageSize = 10 } = body
        const res = useQueryPage<Item>(current, pageSize, result)
        return {
          code: 0,
          message: 'ok',
          result: {
            ...res,
          },
        }
      }
      return {
        code: 405,
        message: '账户信息异常',
      }
    },
  },
] as MockMethod[]
