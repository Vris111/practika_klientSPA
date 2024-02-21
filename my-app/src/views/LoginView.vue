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
  <form action="" @click.prevent="default" class="reg">
    <label for="email">E-mail</label>
    <input type="text" id="email" v-model="store.state.email">
    <label for="password">Password</label>
    <input type="text" id="password" v-model="store.state.password">
    <button @click="store.commit('login')">Login</button>
  </form>
</template>

<style scoped>
.reg{
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  justify-content: center;
}
</style>