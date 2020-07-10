/**
 * 用户模块下的所有请求
 */
import $axios from '@/api'

// 登录请求: http://127.0.0.1:8888/api/private/v1/login
export const login = (url, data) => {
    return $axios.post(url, data)
}

// 获取用户信息请求


// 获取用户列表请求
export const users = (url, data) => {
    return $axios.get(url, data)
}