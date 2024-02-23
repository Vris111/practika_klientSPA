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
  <div class="home_view">
    <ul class="products_all">
      <p class="item" v-for="(product, index) in store.state.products" :key="product.id">
        <p class="item_name">{{product.name}}</p>
        <p></p>
        {{product.description}}
        <p></p>
        <p class="item_price">{{product.price}} $</p>
        <button class="addItemInCart" v-if="store.state.user_token !== null"  @click="store.commit('addToCart', {product})">Add to cart</button>
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
  background-color: #f7f8f7;
  box-shadow: 2px 5px 4px 2px;
}

.products_all {
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px;
  gap: 90px;
  justify-content: center;
  position: relative;
  right: 50px;
}

.addItemInCart{
  background-color: #999b99;
  font-size: 14px;
  border-color: black;
}

.home_view{
  background-color: #e5e5e5;
}

.item_price{
  font-size: 18px;
  color: black;
}

.item_name{
  color: black;
}
</style>