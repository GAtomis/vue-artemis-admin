/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-04 11:34:38
 * @LastEditTime: 2021-09-08 13:44:59
 * @LastEditors: Gavin
 */
import { MockMethod } from 'vite-plugin-mock'
import faker from "faker"
import User from './Dao/User'
faker.locale = "zh_CN";



const userInfo = {
    admin: {
        password:123456,
        token: faker.datatype.uuid(),
        getUserInfo() {
            return new User({
                name: faker.name.findName(),
                age: faker.random.number(),
                jobType: faker.name.jobType(),
                avatar: faker.image.avatar(),
                roles:['admin']
          
            })

        }
    },
    user: {
        password:123456,
        token: faker.datatype.uuid(),
        getUserInfo() {
            return new User({
                name: faker.name.findName(),
                age: faker.random.number(),
                jobType: faker.name.jobType(),
                avatar: faker.image.avatar(),
                roles:['user','/readme','/readme/read','/error','/nested',"/nested/menu1","/nested/menu1/menu1-1"]
               
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
            if (userInfo?.[username]?.['password']==password ) {

                return {
                    code: 0,
                    message: 'ok',
                    result: {token:userInfo?.[username]?.token??'木得token'}
                }

            }
            return {
                code:405,
                message:'账户信息异常'
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
