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
    item_for_push_in_cart: null,
    item_id_for_push_in_cart: null,

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
    async getProductsFromCart(state){
      const {data} = await axios.get('https://jurapro.bhuser.ru/api-shop/cart')
          .then(response => state.cart = response.data)
          .catch(error =>{console.log(error)})
      state.cart = data;
      console.log(state.cart)
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
      console.log(state.user_token)
      window.location.href = "/";
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
      window.location.href = "/";
    },
    async addToCart(state, {product}) {
      try {
        const response = await axios.post(`https://jurapro.bhuser.ru/api-shop/cart/${product.id}`,
            {product}, {headers:{Authorization: `Bearer ${state.user_token}`}});
        state.item_for_push_in_cart = {...state.products.find(product => product.id === response.data.data.product_id), product_cart_id: response.data.data.product_cart_id}
        state.cart.push(state.item_for_push_in_cart);
        state.item_for_push_in_cart = null
        console.log('Product add to cart', state.cart)
        console.log('Server coll',response.data)
        console.log('Cart',state.cart)

      } catch (error) {
        console.error('Error adding product to cart:', error);
      }
    },
    async delCardFromCart(state, product){
      try {
        console.log(product)
        let id = product.product_cart_id
        const response = await axios.delete(`https://jurapro.bhuser.ru/api-shop/cart/${id}`,
            {headers:{Authorization: `Bearer ${state.user_token}`}});
        state.cart = state.cart.filter(product => product.product_cart_id !== id)
        console.log('Server coll',response.data)
        console.log('Cart',state.cart)
      } catch (error) {
        console.error('Error', error);
      }
    },
    createOrder(state){
      let newOrders = state.cart.map(item => ({...item}))
      state.orders.push(newOrders)
      state.cart.splice(0, state.cart.length)
      console.log(state.orders)
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