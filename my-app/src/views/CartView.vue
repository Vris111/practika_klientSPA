<script>
import store from "@/store";

export default {
  computed: {
    store() {
      return store
    },
    totalPrice() {
      if (!Array.isArray(this.store.state.cart)) {
        return 0;
      }
      return this.store.state.cart.reduce((total, product) => {
        return total + product.price;
      }, 0);
    }
  },
  mounted() {
    this.$store.commit('getProductsFromCart');
  }
}

</script>

<template>
  <div class="cart_view">
    <h2>Products in cart:</h2>
    <div class="cart_top">
      <h3 class="price_for_order">Price:{{totalPrice}}</h3>
      <button v-if="totalPrice !== 0" class="create_new_order" @click="store.commit('createOrder')">Create order</button>
    </div>
    <div class="cart">
      <div class="item" v-for="product in store.state.cart" :key="product.id">
        <p>{{ product.name }}</p>
        <p>{{ product.description }}</p>
        {{ product.price }}
        <button class="delete_card_from_cart" @click="store.commit('delCardFromCart', product)">Delete from cart</button>
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
  background-color: #f7f8f7;
  box-shadow: 2px 5px 4px 2px;
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
  background-color: #858685;
}

.delete_card_from_cart{
  background-color: #9d4747;
  font-size: 14px;
  border-color: black;
}

.cart_top{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
}

.cart_view{
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding-top: 50px;
  min-height: 50vw;
}
</style>