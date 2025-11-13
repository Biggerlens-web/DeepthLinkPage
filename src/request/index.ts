import axios from 'axios'
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

import getIsEn from '@/ultils/languageJudge'
const isEN = getIsEn()

const service: AxiosInstance = axios.create({
    baseURL: isEN ? 'https://config.ios.en.biggerlens.com' : 'https://config.ios.biggerlens.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')

        if (token && config.headers) {
            config.headers['token'] = `${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    error => {
        const {response} = error
        return Promise.reject(error)
    }
)

export default service
