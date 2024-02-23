<script>

import store from "@/store";

export default {
  computed: {
    store() {
      return store
    }
  }
}

</script>

<template>
  <div class="login_view">
    <form action="" @click.prevent="default" class="reg">
      <label for="email">E-mail</label>
      <input type="text" id="email" v-model="store.state.email">
      <label for="password">Password</label>
      <input type="text" id="password" v-model="store.state.password">
      <button class="login" @click="store.commit('login')">Login</button>
    </form>
  </div>
</template>

<style scoped>
.reg{
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 43%;
}
.login_view{
  background-color: #e5e5e5;
  width: 100%;
  height: 42vw;
  margin-top: 10px;
  padding-top: 50px;
}

#password{
  margin-bottom: 5px;
}

.login{
  width: 100px;
  color: black;
  background-color: #999b99;
  border-color: black;
}
</style>