<script>
import store from "@/store";

export default {
  computed: {
    store() {
      return store
    },
    totalPrice() {
      return this.store.state.cart.reduce((acc, product) => {
        return acc + product.price;
      }, 0);
    }
  },
  data(){
    return{
      countItemId: 0,
    }
  },
}

</script>

<template>
  <div class="cart_view">
    <h2>Products in cart:</h2>
    <div class="cart_top">
      <h3 class="price_for_order">Price:{{totalPrice}}</h3>
      <button class="create_new_order" @click="store.commit('createOrder')">Create order</button>
    </div>
    <div class="cart">
      <div class="item" v-for="product in store.state.cart" :key="product.id">
        <p>{{ product.name }}</p>
        <p>{{ product.description }}</p>
        <p class="item_bot">{{ product.price }}<button class="delete_card_from_cart" @click="store.commit('delCardFromCart', product)">×</button></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item{
  border: 1px solid black;
  padding: 5px;
  width: 220px;
  height: 400px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  background-color: #89ea92;
}

.cart {
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px;
  gap: 90px;
  justify-content: center;
  position: relative;
}

.create_new_order{
  width: 150px;
  height: 30px;
  margin-bottom: 10px;
  background-color: #42b983;
}

.delete_card_from_cart{
  width: 30px;
  background-color: #f30000;
  color: white;
}

.cart_top{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
}

.item_bot{
  display: flex;
  gap: 20px;
  justify-content: center;
}

.cart_view{
  background-color: #eff5dc;
  width: 100%;
  height: 42vw;
  margin-top: 10px;
  padding-top: 50px;
}
</style>