<template>
	<div>
	<span>Report Root</span>
	<nav-bar></nav-bar>
	<router-view></router-view>	

	</div>
</template>

<script>
import Navbar from '../components/Nav'

export default {
  name: 'Report',
  components: {
  	'nav-bar':Navbar
  },
  
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