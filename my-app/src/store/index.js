import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: [],
    orders: [],
    user_token: null,
    user_is_auth: false,
    email: null,
    password: null,
    fio: null,

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

    async login(state){
      //валидация
      let userData={
        email: state.email,
        password: state.password
      }

      const data = await axios.post('https://jurapro.bhuser.ru/api-shop/login',userData)
          .then(function (response) {
            console.log(response);
            state.user_token = response.data.data.user_token;
            localStorage.token = state.user_token;
          })
          .catch(error =>{console.log(error)})
      console.log(data)
    },

    async registration(state){
      //валидация
      let userData = {
        fio: state.fio,
        email: state.email,
        password: state.password
      }
      const data = await axios.post('https://jurapro.bhuser.ru/api-shop/signup', userData)
          .then(function (response) {
            console.log(response);
            state.user_token = response.data.data.user_token;
            localStorage.token = state.user_token;
          })
          .catch(error =>{console.log(error)})
      console.log(data)
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
    logout(state){
      state.user_token = null
      localStorage.clear()
      window.location.href = "/";
    }

  },
  actions: {
  },
  modules: {
  },
})
