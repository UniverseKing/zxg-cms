/**
 * 应用主模块: 用于存储整个应用都需要用到的公共数据
 */

const state = {
    opened: true
}

const getters = {
    opened(state) {
        return state.opened
    }
}

const mutations = {
    SET_OPENED(state,payload){
        state.opened = payload
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