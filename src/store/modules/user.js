/**
 * 用户相关数据
 */
/**
 * 应用主模块: 用于存储整个应用都需要用到的公共数据
 */

const state = {
    token: localStorage.getItem('zxg-cms-token'),
    userinfo:JSON.parse(localStorage.getItem('zxg-cms-userinfo'))
}

const getters = {
    token(state) {
        return state.token
    },
    userinfo(state){
        return state.userinfo
    }
}

const mutations = {
    SET_TOKEN(state, payload) {
        state.token = payload
        localStorage.setItem('zxg-cms-token', payload)
    },
    DEL_TOKEN(state) {
        state.token = null
        localStorage.removeItem('zxg-cms-token')
    },
    SET_USERINFO(state,payload){
        state.userinfo = payload
        localStorage.setItem('zxg-cms-userinfo',JSON.stringify(payload))
    },
    DEL_USERINFO(state){
        state.userinfo = null
        localStorage.removeItem('zxg-cms-userinfo')
    }
}

const actions = {

}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}