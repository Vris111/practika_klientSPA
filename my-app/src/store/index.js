import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
  },
  mutations: {
    addToCart(state, product){
      state.cart.push(product);
      console.log(state.cart);
    },
    async getProducts(state){
      const {data} = await axios.get('https://jurapro.bhuser.ru/api-shop/products')
          .then(response => state.products = response.data)
          .catch(error =>{console.log(error)})
      state.products = data;
      console.log(state.products)
    },
  },
  actions: {
  },
  modules: {
  }
})
