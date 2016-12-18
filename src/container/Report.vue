<template>
	<div id="appReport" ref="report">
  <s-header></s-header>
  <div class="reportContainer">
    <basic/>
    <overall/> 
    <score/> 
    <knowledge/> 
    <!-- <nav-bar></nav-bar> -->
    <!-- <router-view></router-view>  -->
  </div>
	</div>
</template>

<script>
import Navbar from '../components/nav'
import header from '../components/header'
import basic from '../components/basic'
import knowledge from '../components/knowledge'
import score from '../components/score'
import overall from '../components/overall'
export default {
  name: 'Report',
  components: {
  	'nav-bar':Navbar,
    's-header':header,
    basic,
    score,
    knowledge,
    overall
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
}
.reportContainer{
      margin: 10px 10px 0;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 1px 0 #f2f4f5;
    background: #fff;
}
</style>