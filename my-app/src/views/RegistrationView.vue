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
  <div class="reg_view">
    <form action="" @click.prevent="default" class="reg">
      <label for="fio">FIO: {{ store.state.fio }}</label>
      <input type="text" id="fio" v-model="store.state.fio">
      <label for="email">E-mail</label>
      <input type="text" id="email" v-model="store.state.email">
      <label for="password">Password</label>
      <input type="text" id="password" v-model="store.state.password">
      <button class="registration" @click="store.commit('registration')">Registration</button>
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

.reg_view{
  background-color: #eff5dc;
  width: 100%;
  height: 42vw;
  margin-top: 10px;
  padding-top: 50px;
}

.registration{
  width: 120px;
  color: black;
  background-color: #42b983;
  border-color: black;
}

#password{
  margin-bottom: 5px;
}
</style>