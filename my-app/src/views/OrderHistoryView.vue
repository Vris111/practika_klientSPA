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
  <h2>Products in order:</h2>
  <div class="cart">
    <div class="item" v-for="product in store.state.orders" :key="product.id">
      <p>{{ product.name }}</p>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
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
}

.cart {
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px;
  gap: 90px;
}
</style>