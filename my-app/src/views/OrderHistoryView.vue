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
        <h3 class="order_number">Order № : {{order.id}}</h3>
        <h3 class="order_price">Price: {{order.order_price}}$</h3>
        <p class="item_split" v-for="item in order.products">
          <p class="item">Product -{{item}}-</p>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>


.order_price{
  color: black;
  min-width: 140px;
  margin-left: 30px;
  margin-right: 30px;
}

.order_number{
  color: black;
  min-width: 200px;
}

.order{
  display: grid;
  border: 1px solid black;
  padding: 10px;
  box-shadow: 2px 2px 1px 2px;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  grid-template-columns: 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px;

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