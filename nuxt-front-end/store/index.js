
const storageToken = "token";
const cookieparser = process.server ? require('cookieparser') : undefined
// var SaveToken = process.browser ? localStorage.getItem(storageToken) : null


const state = () => ({
})

const actions = {
    nuxtServerInit({ commit }, { req }) {
        let auth = null
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                auth = parsed.auth
                commit('auth/LOG_IN', auth)

            } catch (err) {
                console.log(err)
                // No valid cookie found
            }
        }
    },

}

export default {
    state,
    actions,
}