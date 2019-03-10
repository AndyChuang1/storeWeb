const types ={
    LOG_IN:"LOG_ING",
    LOG_OUT:"LOG_OUT"
}
const storageToken = "token"

const state = ()=>({
    token:null
})
const getters ={
    getToken:state=> state.token
}

const actions ={
    login({commit},token){
        localStorage.setItem(storageToken, token);
        commit(types.LOG_IN,token);
    },
    logout({commit}){
        localStorage.removeItem(storageToken);
        commit(types.LOG_OUT);
    }
}

const mutations={
    [types.LOG_IN](state,token){
        state.token=token
    },
    [types.LOG_OUT](state){
        state.token=''
        console.log('Log out')
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}