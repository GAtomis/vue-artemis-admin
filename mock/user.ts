/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-04 11:34:38
 * @LastEditTime: 2021-12-29 14:18:24
 * @LastEditors: Gavin
 */
import { MockMethod } from 'vite-plugin-mock'
import faker from "faker"
import User, { UserInfo } from './Dao/User'
faker.locale = "zh_CN";


interface Account {
    password: Number,
    token: String,
    getUserInfo(): UserInfo;
}
interface AccountList {
    admin: Account,
    user: Account,
    guest?: Account
}
export const userInfo: AccountList = {
    admin: {
        password: 123456,
        token: faker.datatype.uuid(),
        getUserInfo() {
            return new User({
                name: faker.name.lastName() + faker.name.firstName(),
                age: faker.random.number(),
                jobType: faker.name.jobType(),
                avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 30)}`,
                level: "admin",
                roles: ['admin'],
                catchPhrase: faker.company.catchPhrase()

            })

        }
    },
    user: {
        password: 123456,
        token: faker.datatype.uuid(),
        getUserInfo() {
            return new User({
                name: faker.name.lastName() + faker.name.firstName(),
                age: faker.random.number(),
                jobType: faker.name.jobType(),
                avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() *30)}`,
                level: "user",
                roles: ['user', "/account"
                    , "/account/center"
                    , "/account/settings"],
                catchPhrase: faker.company.catchPhrase()

            })

        }
    }
}
export default [

    {
        url: '/api/login',
        method: 'post',
        response: (res) => {

            const { username, password } = res.body
            // console.log(username);
            if (userInfo?.[username]?.['password'] == password) {

                return {
                    code: 0,
                    message: 'ok',
                    result: { token: userInfo?.[username]?.token ?? '木得token' }
                }

            }
            return {
                code: 405,
                message: '账户信息异常'
            }


        },

    },
    {


        url: '/api/getUserInfo',
        method: 'post',
        response: (res) => {
            // console.log(res);


            const { username, password } = res.body
            console.log('body>>>>>>>>')
            return {
                code: 0,
                message: 'ok',
                result: userInfo?.[username]?.getUserInfo()
            }
        }
    }
] as MockMethod[]
