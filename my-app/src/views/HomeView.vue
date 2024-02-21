<script>
import store from "@/store";
export default {
  computed: {
    store() {
      return store
    }
  },
  methods:{

  },
  mounted() {
    this.$store.commit('getProducts');
  }
}
</script>

<template>
  <div>
    <ul class="products_all">
      <p class="item" v-for="(product, index) in store.state.products" :key="product.id">
        {{product.name}}
        <p></p>
        {{product.description}}
        <p></p>
        {{product.price}}
        <button class="addItemInCart" v-if="store.state.user_token !== null"  @click="store.commit('addToCart', {product})">Buy</button>
      </p>
    </ul>
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

.products_all {
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px;
  gap: 90px;
}
</style>