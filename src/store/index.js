import {createStore} from 'vuex'

export default createStore({
    state: {
        products: [],
        total: 0,
        totalItems: 0,
        shoppingCart: []
    },
    mutations: {
        setProducts(state, payload) {
            state.products = payload
        },

        addToShoppingCart(state, payload) {
            payload.amount = 1
            state.shoppingCart.push(payload)
        },

        addTototal(state, price) {
            state.total += price
        },

        remomveTotal(state, price) {
            state.total -= price
        },

        addTotalItems(state, payload) {
            state.totalItems = payload
        },

        deleteOneProduct(state) {
            state.shoppingCart = state.shoppingCart.filter(element => {
                return element.amount > 0
            })
        },
    },
    actions: {
        async fetchData({commit}) {
            try {
                const res = await fetch("./api/products.json")
                const data = await res.json()
                commit("setProducts", data)
            } catch (error) {
                console.log(error)
            }
        },

        addProduct({commit, state}, product) {
            let findProduct = false
            let id = 0
            state.shoppingCart.find((element, index) => {
                if (element.id === product.id) {
                    findProduct = true
                    id = index
                }
            })

            if (findProduct) {
                state.shoppingCart[id].amount++
            } else {
                commit("addToShoppingCart", product)
            }
        },

        sumTotal({commit}, product) {
            commit("addTototal", product.price)
        },

        sumTotalItems({commit, state}) {
            let totalItems = 0
            state.shoppingCart.forEach(product => {
                totalItems += product.amount
            })
            commit("addTotalItems", totalItems)
        },

        deleteOneProduct({commit}, product) {
            if (product.amount === 1) {
                product.amount--
                commit("deleteOneProduct")
                commit("remomveTotal", product.price)
            } else {
                product.amount--
                commit("remomveTotal", product.price)
            }
        }
    },
    modules: {}
})
