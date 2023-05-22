<template>
  <div>
    <input type="text" :value="$auth.user.name">
    <input type="password" :value="$auth.user.email">
    <button @click="testButton">Test</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "index",
  layout: 'MainLayout',
  data(){
    return{
      email: 'www@email.com',
      password: '11111111'
    }
  },
  methods: {
    ...mapActions('userSettings', ['testUrl']),
    testButton(){
      this.testUrl({
        data: {
          email: this.email,
          password: this.password
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
