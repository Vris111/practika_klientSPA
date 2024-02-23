<script>
import store from "@/store";

export default {
  computed: {
    store() {
      return store
    }
  },
}

</script>

<template>
  <div class="orders_view">
    <h2>Your orders:</h2>
    <div class="cart">
      <div class="order" v-for="product in store.state.orders" :key="product.id">
        <div class="item" v-for="item in product" :key="item.id">
          <p>{{ item.name }}</p>
          <p>{{ item.description }}</p>
          <p>{{ item.price }}</p>
        </div>
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

}

.cart {
  display: flex;
  flex-direction: column;
  gap: 90px;
}

.orders_view{
  background-color: #eff5dc;
  width: 100%;
  height: 42vw;
  margin-top: 10px;
  padding-top: 20px;
}
</style>