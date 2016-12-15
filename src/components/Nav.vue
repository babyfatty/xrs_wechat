<template>
	<div>
  	<span>Nav bar</span>

    <ul>
      <li><router-link :to="{ name: 'basic' }">basic</router-link></li>
      <li><router-link :to="{ name: 'knowledge' }">knowledge</router-link></li>
      <li><router-link :to="{ name: 'score' }">score</router-link></li>
      <li><router-link :to="{ name: 'overall' }">overall</router-link></li>
    </ul>
	</div>
</template>
<script>
import Router from 'vue-router'

export default {
  name: 'nav-bar',
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>