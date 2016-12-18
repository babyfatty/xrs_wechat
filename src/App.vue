<template>
  <div id="xsrMain">
      <h4>南京学而思考情查询系统</h4>
      <img src="./assets/logo.png">
    <login></login>
  </div>
</template>

<script>

import login from './components/login'

export default {
  name: 'app',
  components: {
    login
  },
  methods: {
  }

}
</script>

<style>

body{
  background: #f7fafc;
  margin: 0;
  padding: 0;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
