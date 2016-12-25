<template>
<div>
    <div id="xsrMain">
      <h3>学而思 Test Report System</h3>
      <img class="img" src="./assets/logo.png">
    <login></login>
  </div>
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
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.img{
  max-width: 60%;
}
</style>
