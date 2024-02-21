import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: [],
    orders: [],
  },
  getters: {
  },
  mutations: {
    async getProducts(state){
      const {data} = await axios.get('https://jurapro.bhuser.ru/api-shop/products')
          .then(response => state.products = response.data)
          .catch(error =>{console.log(error)})
      state.products = data;
    },
    addToCart(state, product){
      state.cart.push(product);
    },
    createOrder(state){
      let newOrders = state.cart.map(item => ({...item}))
      state.orders.push(newOrders)
      state.cart.splice(0, state.cart.length)
      console.log(state.orders)
    },
    delCardFromCart(state, product){
      const productIndex = state.cart.indexOf(product)
      if(productIndex > -1){
        state.cart.splice(productIndex,1)
      }
    },

  },
  actions: {
  },
  modules: {
  }
})
