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
  <button @click="store.commit('login')">Login</button>
  <button @click="store.commit('registration')">Registration</button>
</template>

<style scoped>

</style>