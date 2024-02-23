<script>
import store from "@/store";

export default {
  computed: {
    store() {
      return store
    }
  },
  mounted() {
    this.$store.commit('getOrders');
  }
}

</script>

<template>
  <div class="orders_view">
    <h2>Your orders:</h2>
    <div class="cart">
      <div class="order" v-for="order in store.state.orders" :key="order.id">
        <p>Order number:{{order.id}}</p>
        <p>Products:{{order.products}}</p>
        <p>Price:{{order.order_price}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item{
  border: 1px solid black;
  padding: 5px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 300px;
}

.order{
  display: flex;
  gap: 60px;
  border: 1px solid black;
  padding: 10px;
  box-shadow: 2px 2px 1px 2px;
}

.cart {
  display: flex;
  flex-direction: column;
  gap: 90px;
}

.orders_view{
  background-color: #eff5dc;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding-top: 20px;
}
</style>