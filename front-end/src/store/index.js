import Vuex from 'vuex';
import * as getters from './getters'
import shop from './modules/shop'
import Vue from 'vue';


Vue.use(Vuex);

export default new Vuex.Store({
    // ...root,

    getters,
    modules: {
        shop
    },
    strict: true


})