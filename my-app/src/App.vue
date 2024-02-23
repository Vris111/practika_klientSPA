<template>
  <nav>
    <router-link class="back" v-if="$route.path !== '/'" to="/">Back</router-link>
    <div class="nav_split_top">
      <router-link class="t_n" to="/">Home</router-link>
      <router-link class="t_n" v-if="store.state.user_token !== null" to="/cart">Cart</router-link>
      <router-link class="t_n" v-if="store.state.user_token !== null" to="/order">MyOrders</router-link>
    </div>
    <div class="nav_split">
      <router-link class="t_n" v-if="store.state.user_token === null" to="/login">Login</router-link>
      <router-link class="t_n" v-if="store.state.user_token === null" to="/registration">Registration</router-link>
      <router-link class="t_n" v-else to="/logout" @click="store.commit('logout')">Logout</router-link>
    </div>
  </nav>
  <router-view/>

</template>

<style>
.nav_split_top{
  display: flex;
  gap: 20px;
}

router-link{
  text-decoration: none;
}

.t_n{
  text-decoration: none;
}

router-link{
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  background-color: #9db3bd;
  box-shadow: 0 2px 3px 2px;
}

.nav_split{
  display: flex;
  gap: 15px;
  position: relative;
  left: 40%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #000002;
}

.back{
  position: relative;
  right: 40%;
  text-decoration: none;
}
</style>
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
    }
  },
  mounted() {
    if (localStorage.token !== undefined && localStorage.token !== null) {
      store.state.user_token = localStorage.token;
    }
  }
}
</script>