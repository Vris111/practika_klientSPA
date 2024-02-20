<script>
import store from "@/store";

export default {
  computed: {
    store() {
      return store
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
  <h2>Products in cart:</h2>
  <button class="create_new_order" @click="store.commit('createOrder')">Create order</button>
  <div class="cart">
    <div class="item" v-for="product in store.state.cart" :key="product.id">
      <p>Название: {{ product.name }}</p>
      <p>Описание: {{ product.description }}</p>
      <p>Цена: {{ product.price }}</p>
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

.create_new_order{
  width: 150px;
  height: 30px;
  margin-bottom: 10px;
  background-color: #42b983;
}
</style>