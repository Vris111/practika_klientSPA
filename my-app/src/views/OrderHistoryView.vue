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
        <p class="order_number">Order number:{{order.id}}</p>
        <p class="">Products:{{order.products}}</p>
<!--        <div class="lock" v-for="item in order.products">-->
<!--            {{item}}-->
<!--        </div>-->
        <p class="order_price">Price: {{order.order_price}} $</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lock{
  max-width: 1vw;
}

.order_price{
  color: black;
  min-width: 120px;
}

.order_number{
  color: black;
  min-width: 200px;
}

.order{
  display: flex;
  gap: 60px;
  border: 1px solid black;
  padding: 10px;
  box-shadow: 2px 2px 1px 2px;
  justify-content: space-between;
  align-items: center;
}

.cart {
  display: flex;
  flex-direction: column;
  gap: 90px;
}

.orders_view{
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding-top: 20px;
}
</style>