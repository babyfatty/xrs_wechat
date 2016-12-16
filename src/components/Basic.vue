<template>
	 <div>
	 	<basic-info/>
		<div>{{examName}}</div>
		<div>{{examTime}}</div>
		<div>{{examsocre}}</div>
		<div>{{examRank}}/{{totalNum}}</div>
	 </div>
</template>

<script>
import basicInfo from './basicInfo'

export default {
  data(){
  	return{
  		examName : "exam1",
  		examsocre :"120",
  		examTime : "2016/12/12",
  		examRank : "1",
  		totalNum : "200"
  	}
  },
  name: 'Basic',
  components: {
  	basicInfo
  }
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