/*
 * @Author: Gavin 850680822@qq.com
 * @Date: 2022-11-14 14:09:53
 * @LastEditors: Gavin 850680822@qq.com
 * @LastEditTime: 2022-11-14 21:04:31
 * @FilePath: \vue-artemis-admin\src\api\upload\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  { uploadApi, uploadToken } from '@/utils/axios'
import Axios from 'axios'
/**
 * @description: 获取用户信息
 */
export function uploadAvatar<T = FormData>(formData: T) {
    return Axios(
        {
            baseURL:'upload',
            url:uploadApi  ,
            method: 'POST',
            transformRequest: () => formData,
            headers: { "Content-Type": "multipart/form-data", "Authorization": uploadToken }
        },
        
    )
}
