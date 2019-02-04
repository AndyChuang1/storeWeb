import axios from 'axios'
const types = {
    ADD_CART: "ADD_CART",
    CANCEL: "CANCEL",
    ADD_QUN: "ADD_QUN",
    INIT_PRODUCT: "INIT_PRODUCT"
}

const state = {
    products: [
        {
            name: "敏瑞靈 益生菌",
            price: 150,
            filter: "health",
            imag: require("../../assets/img/Product/getThumb.jpg"),
            content: "含有10種對人體具有特定功能的益生菌。"
        },
        {
            name: "敏瑞靈 益生",
            price: 150,
            filter: "health",
            imag: require("../../assets/img/Product/getThumb.jpg"),
            content: "含有10種對人體具有特定功能的益生菌。"
        },
        {
            name: "敏瑞靈 益",
            price: 150,
            filter: "health",
            imag: require("../../assets/img/Product/getThumb.jpg"),
            content: "含有10種對人體具有特定功能的益生菌。"
        },
        {
            name: "敏瑞靈",
            price: 150,
            filter: "health",
            imag: require("../../assets/img/Product/getThumb.jpg"),
            content: "含有10種對人體具有特定功能的益生菌。"
        },
        {
            name: "敏瑞",
            price: 150,
            filter: "health",
            imag: require("../../assets/img/Product/getThumb.jpg"),
            content: "含有10種對人體具有特定功能的益生菌。"
        },
        {
            name: "敏",
            price: 150,
            filter: "health",
            imag: require("../../assets/img/Product/getThumb.jpg"),
            content: "含有10種對人體具有特定功能的益生菌。"
        },
        {
            name: "敏瑞靈 益生菌1",
            price: 150,
            filter: "health",
            imag: require("../../assets/img/Product/getThumb.jpg"),
            content: "含有10種對人體具有特定功能的益生菌。"
        },
        {
            name: "敏瑞靈 益生菌2",
            price: 150,
            filter: "health",
            imag: require("../../assets/img/Product/getThumb.jpg"),
            content: "含有10種對人體具有特定功能的益生菌。"
        },
        {
            name: "敏瑞靈 益生菌3",
            price: 150,
            filter: "health",
            imag: require("../../assets/img/Product/getThumb.jpg"),
            content: "含有10種對人體具有特定功能的益生菌。"
        }
    ],
    shoppingCart: []
}

const getters = {
    getProducts: state => state.products,
    getShoppingCartTotal: state => state.shoppingCart.length,
    getShoppingCart: state => state.shoppingCart,
    getCartPriceTotal: state => state.shoppingCart.reduce((a, b) => a + b.price * b.quantity, 0),
}

const actions = {
    addCart({ commit }, id) {
        commit(types.ADD_CART, id)
        console.log(id)
    },
    cancelCart({ commit }, id) {
        commit(types.CANCEL, id)
    },
    addQun({ commit }, payload) {
        //payload = {title:XXX,num:XXX}
        commit(types.ADD_QUN, payload)

    },
    initProduct({ commit }) {
        axios
            .get('http://opendata.khcc.gov.tw/public/OD_ksml_news.ashx')
            .then(function (response) {
                const data = response.data;
                commit(types.INIT_PRODUCT, data);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const mutations = {
    [types.ADD_CART](state, id) {
        const product = state.products.find(item => item.name === id)
        const productFilter = state.shoppingCart.filter(item => item.title == id)
        if (productFilter.length == 0) {
            state.shoppingCart.push({
                title: product.name,
                price: product.price,
                quantity: 1

            })
        }

    },
    [types.CANCEL](state, title) {
        const cartIndex = state.shoppingCart.findIndex(item => item.name === title);
        state.shoppingCart.splice(cartIndex, 1);

    },
    [types.ADD_QUN](state, { title, num }) {
        //使用destruction 解構傳進來的payload
        const cartIndex = state.shoppingCart.findIndex(item => item.title == title);
        console.log(cartIndex, title)
        state.shoppingCart[cartIndex].quantity = num;
    },
    [types.INIT_PRODUCT](state, data) {
        state.products = data
    }


}

export default {
    state,
    getters,
    actions,
    mutations
}